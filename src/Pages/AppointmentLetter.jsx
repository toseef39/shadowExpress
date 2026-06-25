import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function fmt(iso) {
  if (!iso) return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const JOB_ROWS = (occupation) => [
  ["Job Profile",      occupation?.toUpperCase() ?? "—"],
  ["Salary",           "3500 GBP"],
  ["Food Provided",    "(Duty Meals)"],
  ["Accommodation",    "(Quad Sharing Rooms) – Two (2)"],
  ["Contract Period",  "Two Years"],
  ["Probation Period", "60 Days"],
  ["Working Hours",    "48 Hours in a week, 6 days in a week."],
];

function Section({ title, children }) {
  return (
    <div>
      <h3 style={{ fontWeight: "700", textTransform: "uppercase", marginBottom: "6px", fontSize: "17px" }}>{title}</h3>
      <p style={{ color: "#374151", lineHeight: "1.8", fontSize: "16px" }}>{children}</p>
    </div>
  );
}

export default function AppointmentLetter() {
  const { passportNumber } = useParams();
  const navigate = useNavigate();
  const letterRef = useRef(null);

  const [state,         setState]         = useState("loading");
  const [result,        setResult]        = useState(null);
  const [imgBroken,     setImgBroken]     = useState(false);
  const [downloading,   setDownloading]   = useState(false);
  const [downloadError, setDownloadError] = useState("");

  useEffect(() => {
    fetch(`/api/applications/status/${encodeURIComponent(passportNumber)}`)
      .then(r => r.json())
      .then(data => {
        if (data.status === "Approved") { setResult(data); setState("ready"); }
        else setState("not-approved");
      })
      .catch(() => setState("error"));
  }, [passportNumber]);

  const handleDownload = async () => {
    if (!letterRef.current || downloading) return;
    setDownloading(true);
    setDownloadError("");
    try {
      const canvas = await html2canvas(letterRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        imageTimeout: 10000,
        onclone: (clonedDoc) => {
          // Strip all stylesheets so html2canvas never encounters oklch() colors
          clonedDoc.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
        },
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const ratio = canvas.width / canvas.height;
      const imgH  = pageW / ratio;
      let heightLeft = imgH;
      let pos = 0;

      pdf.addImage(imgData, "JPEG", 0, pos, pageW, imgH);
      heightLeft -= pageH;

      while (heightLeft > 0) {
        pos -= pageH;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, pos, pageW, imgH);
        heightLeft -= pageH;
      }

      pdf.save(`Appointment_Letter_${result.passportNumber}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      setDownloadError("Could not generate PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  if (state === "loading") return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (state === "error" || state === "not-approved") return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px" }}>
      <p style={{ color: "#6b7280" }}>
        {state === "not-approved" ? "Appointment letter is only available for approved applications." : "Could not load the letter."}
      </p>
      <button onClick={() => navigate(-1)} style={{ color: "#dc2626", fontWeight: "600" }}>← Go Back</button>
    </div>
  );

  const photoSrc = result.photoUrl ?? null;
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ── Action Bar ── */}
      {downloadError && (
        <div className="no-print fixed top-0 left-0 right-0 z-[60] bg-red-600 text-white text-sm font-semibold text-center py-2 px-4">
          {downloadError}
          <button onClick={() => setDownloadError("")} className="ml-3 underline">Dismiss</button>
        </div>
      )}
      <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3 gap-3" style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#111827", color: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
      }}>
        <button onClick={() => navigate(-1)} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#d1d5db", fontSize: "14px", background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <span className="hidden sm:block truncate" style={{ fontSize: "14px", fontWeight: "600", color: "#e5e7eb", fontFamily: "sans-serif" }}>
          Appointment Letter — {result.fullName}
        </span>

        <button
          onClick={handleDownload}
          disabled={downloading}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "8px 16px", background: downloading ? "#9ca3af" : "#dc2626",
            color: "#fff", fontWeight: "700", borderRadius: "8px",
            border: "none", cursor: downloading ? "not-allowed" : "pointer",
            fontSize: "13px", fontFamily: "sans-serif", letterSpacing: "0.05em",
            textTransform: "uppercase", transition: "background 0.2s", flexShrink: 0
          }}
        >
          {downloading ? (
            <>
              <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
              Generating…
            </>
          ) : (
            <>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download PDF
            </>
          )}
        </button>
      </div>

      {/* ── Letter Content (full width) ── */}
      <div ref={letterRef} style={{ backgroundColor: "#ffffff", width: "100%", padding: "48px 64px", boxSizing: "border-box" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", borderBottom: "2px solid #1f2937", paddingBottom: "24px", marginBottom: "24px" }}>
          <div>
            <p style={{ fontSize: "14px", marginBottom: "6px" }}>
              Status: <span style={{ color: "#16a34a", fontWeight: "700" }}>Published</span>
            </p>
            <h1 style={{ fontSize: "28px", fontWeight: "700", margin: "0 0 10px" }}>Shadow Express Company</h1>
            <p style={{ fontSize: "17px", color: "#374151", lineHeight: "1.8", margin: 0 }}>
              511 Rankin Avenue Windsor,<br />
              Ontario Canada<br />
              +1 (647) 800 8569
            </p>
          </div>
          <div>
            {photoSrc && !imgBroken ? (
              <img
                src={photoSrc}
                alt={result.fullName}
                crossOrigin="anonymous"
                onError={() => setImgBroken(true)}
                style={{ width: "110px", height: "130px", objectFit: "cover", objectPosition: "top", border: "1px solid #9ca3af" }}
              />
            ) : (
              <div style={{ width: "110px", height: "130px", background: "#f3f4f6", border: "1px solid #9ca3af", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "36px", fontWeight: "900", color: "#9ca3af" }}>{result.fullName?.[0]?.toUpperCase()}</span>
              </div>
            )}
          </div>
        </div>

        {/* Applicant info */}
        <div style={{ marginBottom: "24px", lineHeight: "2", fontSize: "17px" }}>
          <p style={{ margin: 0 }}><strong>Name:</strong> {result.fullName?.toUpperCase()}</p>
          <p style={{ margin: 0 }}><strong>Passport No:</strong> {result.passportNumber?.toUpperCase()}</p>
          <p style={{ margin: 0 }}><strong>Date:</strong> {fmt(result.updatedAt)}</p>
        </div>

        <p style={{ fontWeight: "700", fontSize: "17px", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #d1d5db", paddingBottom: "10px", marginBottom: "24px" }}>
          SUBJECT: Letter of Agreement
        </p>

        {/* Body */}
        <div style={{ fontSize: "16px", lineHeight: "1.9", color: "#1f2937" }}>
          <p style={{ marginBottom: "12px" }}>
            <strong>Name: {result.fullName?.toUpperCase()}</strong>
          </p>
          <p style={{ marginBottom: "16px" }}>
            We are pleased to inform you that we have selected you for the profile of{" "}
            <strong>{result.occupation?.toUpperCase()}</strong> for regular full time post with our company
            Shadow Express LTD in 511 Rankin Avenue Windsor Ontario Canada.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Canada is effect from.. The details of our offer, including terms terms and conditions are men
            owned in this offer of appointment
          </p>

          {/* Job Table */}
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px", fontSize: "16px" }}>
            <tbody>
              {JOB_ROWS(result.occupation).map(([label, value]) => (
                <tr key={label}>
                  <td style={{ border: "1px solid #9ca3af", padding: "12px 16px", fontWeight: "600", background: "#f9fafb", width: "220px", color: "#374151" }}>{label}</td>
                  <td style={{ border: "1px solid #9ca3af", padding: "12px 16px", color: "#1f2937" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul style={{ paddingLeft: "24px", marginBottom: "24px", lineHeight: "1.9", fontSize: "16px" }}>
            <li style={{ marginBottom: "8px" }}>Hospitalization, Life Insurance and Accident Coverage as per applicable Company Policies.</li>
            <li>
              All allowances will be paid in the form of account credit on the weekly basis. All benefits will be provided such as Air fares
              (Both Sides), Transportation, Leaves as per Provincial Labor Laws. Following the initial probationary period, a progression and
              performance review will be conducted on a quarterly basis to assess performance to date, and to clarify or modify this
              arrangement, as the need may arise. This arrangement may be terminated by either party upon notice in writing to either party
              with notice that complies with Employment Standards (or Labor Standards). We look forward to the opportunity t to work with you
              in an atmosphere that is successful and mutually challenging and rewarding. TO THE CONSULATE OF CANADA Subject: Hiring of
              Foreign National Worker (overseas) LMIA approval Reference No.:MB51KL5420 This Employment Agreement (the "Agreement") is made
              and effective this AND. Shadow Express, organized and existing under the laws of the Quebec Province of Canada, with its head
              office located at 511 Rankin Avenue Windsor Ontario Canada.
            </li>
          </ul>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
            <Section title="RECITALS">
              In consideration on of the covenants and agreements herein contained and the moneys to be paid hereunder the Corporation
              hereby employs the Employee and the Employee hereby agrees to perform services as an employee of the Corporation, on an "at
              will" basis, upon the following terms and condition:
            </Section>
            <Section title="APPOINTMENT">
              The Employee is hereby employed by the Corporation to render such services and to perform such tasks as may be assigned by the
              Corporation. The corporation may, in its sole discretion, increase or reduce the duties or modify the job description, of the
              Employee from me to me, and any such increase, reduce on or modification shall not be deemed a termination of this Agreement.
            </Section>
            <Section title="ACCEPTANCE OF EMPLOYMENT">
              A copy of employment letter was sent to the Employee and Employee accepts employment with the Corporation upon the terms set
              forth in that and agrees to devote all Employee's time, energy and ability to the interests of the Corporation, and to perform
              Employee's duties in an efficient, trustworthy and business-like manner.
            </Section>
            <Section title="DEVOTION OF TIME TO EMPLOYMENT">
              The Employee shall devote the Employee's best efforts and substantially all of the Employee's working time to performing the
              duties on behalf of the Corporation. The Employee shall provide services during the hours that are scheduled by the Corporation
              management. The Employee shall be prompt in reporting to work at the assigned time.
            </Section>
            <Section title="NO CONFLICT OF INTEREST">
              Employee shall not engage in any other business while employed by the Corporation. Employee shall not engage in any activity
              that conflicts with the Employees duties to the Corporation. Employee shall not provide any service or lend any aid or
              assistance to any party that competes with the services offered by the Corporation. Employee shall not provide any services to
              clients or prospective clients of the Corporation outside of the provision of services for the Corporation, whether such
              services are provided with or without compensation or remuneration.
            </Section>
            <Section title="CORPORATION PROPERTY">
              Employee acknowledges and agrees that while employed by the Corporation the Employee may be provided with use of computer
              equipment and other property of the Corporation. The use and possession of such items shall be subject to any policies,
              requirements or restrictions established by the Corporation. Such items may only be used in performance of the Employee's
              duties for the Corporation. On request of the Corporation, the Employee shall immediately deliver any such items to the
              Corporation. Upon termination of employment, Employee shall have the affirmative duty to return any such item to the
              Corporation whether a request is made or not.
            </Section>
            <Section title="COMPENSATION">
              The Corporation shall pay the Employee such Monthly compensation as determined by the Corporation in the previous employment
              letter. Payment shall be at the same time as the Corporations usual payroll to other employees.
            </Section>
            <Section title="BONUS & BENEFITS">
              Payment of any bonuses shall be at the complete discretion of the Corporation. No guarantee or representation that any bonuses
              will be paid has been made to the Employee Standard benefits that are provided to other non-management employees shall be
              offered to the Employee, Subject to the Corporation's policies and the terms and conditions of such benefits.
            </Section>
            <Section title="WITHHOLDING">
              All sums payable to Employee under this Agreement will be reduced by all federal, state, local and other withholdings and
              similar taxes and payments required by applicable Law.
            </Section>
            <Section title="QUALIFICATIONS OF EMPLOYEE">
              The employee shall satisfy all of the qualifications that are established by the Corporation.
            </Section>
            <Section title="TERM OF AGREEMENT">
              There shall be 2(TWO) Years term of employment. Employer acknowledges and agrees that Employee shall be an "At Will" Employee
              and that Employee's employment may be terminated at any time by the Corporation, with or without cause.
            </Section>
            <Section title="FEES FROM EMPLOYEE'S WORK">
              The Corporation shall have exclusive authority to determine the fees, or a procedure for establishing the fees, to be charged
              to clients by the Corporation for services that are provided by the Employee. All sums paid to the Employee or the Corporation
              in the way of fees, in cash or in kind, or otherwise for services of the Employee, shall, except as otherwise specifically
              agreed by the Corporation, be and remain the property of the Corporation.
            </Section>
            <Section title="CLIENTS AND CLIENT RECORDS">
              The Corporation shall have the authority to determine who will be accepted as clients of the Corporation and the Employee
              recognizes that such clients accepted are clients of the Corporation and not the Employee. All client records and files of any
              type concerning clients of the the affirmative duty to return any such item to the Corporation whether a request is made or not.
              Employee hereby expressly waives any and all right to a trial by jury.
            </Section>
            <Section title="MODIFICATION">
              No change or modification of this Agreement shall be valid unless the same be in writing and signed by the parties.
            </Section>
            <Section title="APPLICABLE LAW AND BINDING EFFECT; NOWAIVER">
              This Agreement shall be construed and regulated under and by the laws of the State of [STATE/PROVINCE] and shall insure to the
              benefit of and be binding upon the parties here to and their respective heirs, personal representatives, successors and
              assigns; but may not be assigned except as otherwise provided elsewhere here in.
            </Section>
            <Section title="ENTIRE AGREEMENT">
              This Agreement contains the entire agreement and supersedes all prior agreements and understandings, oral or written, with
              respect to the subject matter here of. This Agreement may be changed only by an agreement in writing signed by the party
              against whom any waiver, change, amendment, modification, or discharge is sought. IN WITNESS HEREOF, each party has to sign
              this "Agreement" to accept the terms and conditions under the state Labor Law of British Columbia, Canada.
            </Section>
          </div>

          {/* Copy To */}
          <div style={{ marginBottom: "36px" }}>
            <p style={{ fontWeight: "700", textTransform: "uppercase", marginBottom: "10px", fontSize: "17px" }}>COPY TO:</p>
            <ul style={{ paddingLeft: "24px", lineHeight: "2.2", textTransform: "uppercase", fontSize: "15px", letterSpacing: "0.03em" }}>
              {["Managing Director","Chief Executive Officer","Finance Manager","Administrator","G. Manager","Ministery of Interior","Ministory of Foreign Affair"].map(r => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Biometric Invoice */}
          <div style={{ border: "1px solid #9ca3af" }}>
            <div style={{ background: "#1f2937", color: "#fff", textAlign: "center", padding: "14px", letterSpacing: "0.1em", fontWeight: "700", fontSize: "16px", textTransform: "uppercase" }}>
              Biometric Instruction Bill Tax Invoice
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 32px", padding: "20px", borderBottom: "1px solid #d1d5db", fontSize: "16px" }}>
              <p style={{ margin: 0 }}><strong>Invoice No:</strong> GH664510</p>
              <p style={{ margin: 0 }}><strong>Full Name:</strong> {result.fullName?.toUpperCase()}</p>
              <p style={{ margin: 0 }}><strong>Passport No:</strong> {result.passportNumber?.toUpperCase()}</p>
              <p style={{ margin: 0 }}><strong>Country:</strong> {result.country}</p>
              <p style={{ margin: 0 }}><strong>Due:</strong> 2 Days</p>
              <p style={{ margin: 0 }}><strong>Email Address:</strong> info@shadowxpress.com</p>
            </div>

            <div style={{ padding: "16px 20px" }}>
              <p style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Payment Voucher:</p>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
                <thead>
                  <tr style={{ background: "#f9fafb" }}>
                    {["Fee","Price","Quantity","Grand Total"].map(h => (
                      <th key={h} style={{ border: "1px solid #d1d5db", padding: "10px 14px", textAlign: "left", fontWeight: "600", color: "#6b7280" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid #d1d5db", padding: "10px 14px" }}>
                      {result.paymentAmount && result.feeName
                        ? `${result.paymentAmount} ${result.feeName}`
                        : result.paymentAmount || "—"}
                    </td>
                    <td style={{ border: "1px solid #d1d5db", padding: "10px 14px" }}>{result.paymentAmount || "—"}</td>
                    <td style={{ border: "1px solid #d1d5db", padding: "10px 14px" }}>1</td>
                    <td style={{ border: "1px solid #d1d5db", padding: "10px 14px" }}>{result.paymentAmount || "—"}</td>
                  </tr>
                  <tr style={{ background: "#f9fafb" }}>
                    <td colSpan={3} style={{ border: "1px solid #d1d5db", padding: "10px 14px", textAlign: "right", fontWeight: "600" }}>Sub Total</td>
                    <td style={{ border: "1px solid #d1d5db", padding: "10px 14px" }}>{result.paymentAmount || "—"}</td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ border: "1px solid #d1d5db", padding: "10px 14px", textAlign: "right", fontWeight: "600" }}>Tax Total %1X</td>
                    <td style={{ border: "1px solid #d1d5db", padding: "10px 14px" }}>$0.00</td>
                  </tr>
                  <tr style={{ background: "#f9fafb" }}>
                    <td colSpan={3} style={{ border: "1px solid #d1d5db", padding: "10px 14px", textAlign: "right", fontWeight: "700" }}>Grand Total</td>
                    <td style={{ border: "1px solid #d1d5db", padding: "10px 14px", fontWeight: "700" }}>{result.paymentAmount || "—"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ padding: "4px 20px 14px", fontSize: "15px", lineHeight: "2.1" }}>
              <p style={{ margin: 0 }}><strong>Payment Status:</strong> {result.paymentStatus ?? "Unpaid"}</p>
              <p style={{ margin: 0 }}><strong>Payment Mode:</strong> CLIENT</p>
            </div>

            <div style={{ margin: "0 20px 20px", padding: "14px 16px", background: "#fefce8", border: "1px solid #fde047", fontSize: "15px", lineHeight: "1.8" }}>
              <p style={{ fontWeight: "700", margin: "0 0 4px" }}>NOTE!!</p>
              <p style={{ margin: 0 }}>We request you to complete the biometric requirements for your Canada visa process as soon as possible.</p>
              <p style={{ margin: "4px 0 0" }}>If you have any complaints please Reach our Shadow Express Company. +1 (343) 353-2232</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom download button */}
      <div className="no-print flex justify-center px-4 py-10">
        <button
          onClick={handleDownload}
          disabled={downloading}
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "14px 40px",
            background: downloading ? "#9ca3af" : "#dc2626",
            color: "#fff", fontWeight: "700", borderRadius: "10px",
            border: "none", cursor: downloading ? "not-allowed" : "pointer",
            fontSize: "14px", fontFamily: "sans-serif",
            letterSpacing: "0.08em", textTransform: "uppercase",
            boxShadow: "0 4px 14px rgba(220,38,38,0.4)"
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          <span className="hidden sm:inline">{downloading ? "Generating PDF…" : "Download Appointment Letter PDF"}</span>
          <span className="sm:hidden">{downloading ? "Generating…" : "Download PDF"}</span>
        </button>
      </div>
    </div>
  );
}
