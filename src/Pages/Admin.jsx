import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ── helpers ─────────────────────────────────────────────────────
const TOKEN_KEY = "sx_admin_token";
const getToken  = () => localStorage.getItem(TOKEN_KEY);
const setToken  = (t) => localStorage.setItem(TOKEN_KEY, t);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);

function authHeader() {
  return { Authorization: `Bearer ${getToken()}`, "Content-Type": "application/json" };
}

async function apiFetch(url, opts = {}) {
  const res  = await fetch(url, { ...opts, headers: { ...authHeader(), ...opts.headers } });
  const json = await res.json();
  if (!res.ok) throw Object.assign(new Error(json.error ?? "Request failed"), { status: res.status });
  return json;
}

function fmt(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

const STATUS_PILL = {
  Pending:  "bg-yellow-100 text-yellow-700 border border-yellow-300",
  Approved: "bg-green-100  text-green-700  border border-green-300",
  Rejected: "bg-red-100    text-red-700    border border-red-300",
};

const PAYMENT_PILL = {
  Paid:   "bg-green-100 text-green-700 border border-green-300",
  Unpaid: "bg-red-100   text-red-700   border border-red-300",
};

// ── Login screen ─────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [creds, setCreds]   = useState({ username: "", password: "" });
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setToken(json.token);
      onLogin(json.username);
    } catch (err) {
      setError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-black text-lg tracking-widest uppercase leading-none">Shadow<span className="text-red-500">X</span>press</p>
              <p className="text-gray-400 text-xs tracking-widest uppercase">Admin Panel</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
          <h2 className="text-white font-bold text-xl mb-6 text-center">Sign In</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-300 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1.5">Username</label>
              <input type="text" required value={creds.username}
                onChange={e => setCreds(c => ({ ...c, username: e.target.value }))}
                placeholder="admin"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1.5">Password</label>
              <input type="password" required value={creds.password}
                onChange={e => setCreds(c => ({ ...c, password: e.target.value }))}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 text-sm uppercase tracking-widest">
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center mt-5">
            Default credentials: <span className="text-gray-400">admin / shadow2025</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Status update modal ──────────────────────────────────────────
function StatusModal({ app, onClose, onSaved }) {
  const [status,        setStatus]        = useState(app.status);
  const [note,          setNote]          = useState(app.adminNote ?? "");
  const [paymentAmount, setPaymentAmount] = useState(app.paymentAmount ?? "");
  const [feeName,       setFeeName]       = useState(app.feeName ?? "");
  const [loading,       setLoading]       = useState(false);
  const [error,         setError]         = useState("");

  const handleSave = async () => {
    setLoading(true);
    setError("");
    try {
      await apiFetch(`/api/admin/applications/${app.id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status, adminNote: note, paymentAmount, feeName }),
      });
      onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
          <h3 className="text-white font-bold text-base">Application Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Details */}
        <div className="px-6 py-4 border-b border-gray-100 space-y-2">
          {[
            ["Name",       app.fullName],
            ["Passport",   app.passportNumber],
            ["Country",    app.country],
            ["Occupation", app.occupation],
            ["Email",      app.email],
            ["Applied",    fmt(app.appliedAt)],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-sm">
              <span className="text-gray-500 w-28 shrink-0">{k}</span>
              <span className="text-gray-900 font-medium text-right">{v}</span>
            </div>
          ))}
        </div>

        {/* Update status */}
        <div className="px-6 py-5">
          <p className="text-sm font-semibold text-gray-700 mb-3">Update Status</p>

          <div className="flex gap-2 mb-4">
            {["Pending", "Approved", "Rejected"].map(s => (
              <button key={s} onClick={() => setStatus(s)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold border-2 transition-colors ${
                  status === s
                    ? s === "Approved" ? "bg-green-500 border-green-500 text-white"
                      : s === "Rejected" ? "bg-red-600 border-red-600 text-white"
                      : "bg-yellow-400 border-yellow-400 text-white"
                    : "border-gray-200 text-gray-500 hover:border-gray-400"
                }`}>
                {s}
              </button>
            ))}
          </div>

          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Note to Applicant <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea rows={3} value={note} onChange={e => setNote(e.target.value)}
            placeholder="e.g. Please bring your documents to our office on Monday…"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 resize-none" />

          <label className="block text-sm font-semibold text-gray-700 mt-4 mb-1.5">
            Payment Amount <span className="text-gray-400 font-normal">(shown on appointment letter)</span>
          </label>
          <input
            type="text"
            value={paymentAmount}
            onChange={e => setPaymentAmount(e.target.value)}
            placeholder="e.g. 500 CAD or $185"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500"
          />

          <label className="block text-sm font-semibold text-gray-700 mt-4 mb-1.5">
            Fee Name <span className="text-gray-400 font-normal">(shown as Fee in payment voucher)</span>
          </label>
          <input
            type="text"
            value={feeName}
            onChange={e => setFeeName(e.target.value)}
            placeholder="e.g. Biometric Fee or Processing Fee"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500"
          />

          {error && <p className="text-red-600 text-xs mt-2">{error}</p>}

          <div className="flex gap-3 mt-4">
            <button onClick={onClose}
              className="flex-1 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button onClick={handleSave} disabled={loading}
              className="flex-1 py-2.5 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60">
              {loading ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main admin dashboard ─────────────────────────────────────────
export default function Admin() {
  const navigate = useNavigate();

  const [adminName,    setAdminName]    = useState(() => getToken() ? "Admin" : null);
  const [apps,         setApps]         = useState([]);
  const [counts,       setCounts]       = useState({ total: 0, pending: 0, approved: 0, rejected: 0 });
  const [filterStatus, setFilterStatus] = useState("All");
  const [search,       setSearch]       = useState("");
  const [loading,      setLoading]      = useState(false);
  const [selected,     setSelected]     = useState(null); // app in modal
  const [deleting,        setDeleting]        = useState(null);
  const [togglingPayment, setTogglingPayment] = useState(null);
  const [toast,           setToast]           = useState("");

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const fetchApps = useCallback(async () => {
    if (!getToken()) return;
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterStatus !== "All") params.set("status", filterStatus);
      if (search.trim())          params.set("search", search.trim());
      const data = await apiFetch(`/api/admin/applications?${params}`);
      setApps(data.applications);
      setCounts(data.counts);
    } catch (err) {
      if (err.status === 401) { clearToken(); setAdminName(null); }
    } finally {
      setLoading(false);
    }
  }, [filterStatus, search]);

  useEffect(() => { fetchApps(); }, [fetchApps]);

  const handleLogin = (username) => { setAdminName(username); };

  const handleLogout = () => { clearToken(); setAdminName(null); };

  const handleModalSaved = () => {
    setSelected(null);
    fetchApps();
    showToast("Application updated successfully");
  };

  const handleTogglePayment = async (app) => {
    const next = app.paymentStatus === "Paid" ? "Unpaid" : "Paid";
    setTogglingPayment(app.id);
    try {
      await apiFetch(`/api/admin/applications/${app.id}/payment`, {
        method: "PATCH",
        body: JSON.stringify({ paymentStatus: next }),
      });
      fetchApps();
      showToast(`Payment marked as ${next}`);
    } catch (err) {
      showToast(`Error: ${err.message}`);
    } finally {
      setTogglingPayment(null);
    }
  };

  const handleDelete = async (app) => {
    if (!window.confirm(`Delete application from ${app.fullName}? This cannot be undone.`)) return;
    setDeleting(app.id);
    try {
      await apiFetch(`/api/admin/applications/${app.id}`, { method: "DELETE" });
      fetchApps();
      showToast("Application deleted");
    } catch (err) {
      showToast(`Error: ${err.message}`);
    } finally {
      setDeleting(null);
    }
  };

  if (!adminName) return <LoginScreen onLogin={handleLogin} />;

  const STAT_CARDS = [
    { label: "Total",    value: counts.total,    color: "text-blue-600",   bg: "bg-blue-50",    icon: "📋" },
    { label: "Pending",  value: counts.pending,  color: "text-yellow-600", bg: "bg-yellow-50",  icon: "⏳" },
    { label: "Approved", value: counts.approved, color: "text-green-600",  bg: "bg-green-50",   icon: "✅" },
    { label: "Rejected", value: counts.rejected, color: "text-red-600",    bg: "bg-red-50",     icon: "❌" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-medium animate-fade-in">
          {toast}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <StatusModal app={selected} onClose={() => setSelected(null)} onSaved={handleModalSaved} />
      )}

      {/* Top bar */}
      <header className="bg-gray-900 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">ShadowXpress Admin</p>
              <p className="text-gray-400 text-xs">Applications Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm hidden sm:block">Logged in as <span className="text-white font-semibold">{adminName}</span></span>
            <button onClick={() => navigate("/")}
              className="px-3 py-1.5 text-xs text-gray-300 hover:text-white border border-gray-600 rounded-lg transition-colors">
              View Site
            </button>
            <button onClick={handleLogout}
              className="px-3 py-1.5 text-xs bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STAT_CARDS.map(card => (
            <button key={card.label}
              onClick={() => setFilterStatus(card.label === "Total" ? "All" : card.label)}
              className={`text-left p-5 rounded-xl shadow-sm border-2 transition-all hover:shadow-md ${
                (filterStatus === card.label || (card.label === "Total" && filterStatus === "All"))
                  ? "border-red-500 bg-white"
                  : "border-transparent bg-white hover:border-gray-200"
              }`}>
              <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center text-xl mb-3`}>
                {card.icon}
              </div>
              <p className={`text-3xl font-black ${card.color}`}>{card.value}</p>
              <p className="text-gray-500 text-sm font-medium mt-0.5">{card.label} Applications</p>
            </button>
          ))}
        </div>

        {/* Search + filter bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-5 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, passport, email, occupation…"
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
          </div>
          <div className="flex gap-2">
            {["All", "Pending", "Approved", "Rejected"].map(s => (
              <button key={s} onClick={() => setFilterStatus(s)}
                className={`px-4 py-2 rounded-lg text-xs font-bold border-2 transition-colors whitespace-nowrap ${
                  filterStatus === s
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 bg-white"
                }`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900 text-base">
              Applications
              <span className="ml-2 text-sm text-gray-400 font-normal">({apps.length} shown)</span>
            </h2>
            {loading && (
              <svg className="w-4 h-4 animate-spin text-red-500" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
            )}
          </div>

          {apps.length === 0 && !loading ? (
            <div className="py-20 text-center">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-500 font-medium">No applications found</p>
              <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {["#", "Name", "Passport", "Country", "Occupation", "Applied", "Status", "Payment", "Actions"].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-gray-500 font-semibold text-xs uppercase tracking-wide whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {apps.map(app => (
                    <tr key={app.id} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-4 py-3.5 text-gray-400 text-xs">{app.id}</td>
                      <td className="px-4 py-3.5">
                        <div>
                          <p className="font-semibold text-gray-900">{app.fullName}</p>
                          <p className="text-gray-400 text-xs">{app.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 font-mono text-xs text-gray-600 uppercase">{app.passportNumber}</td>
                      <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{app.country}</td>
                      <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{app.occupation}</td>
                      <td className="px-4 py-3.5 text-gray-400 text-xs whitespace-nowrap">{fmt(app.appliedAt)}</td>
                      <td className="px-4 py-3.5">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${STATUS_PILL[app.status] ?? STATUS_PILL.Pending}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <button
                          onClick={() => handleTogglePayment(app)}
                          disabled={togglingPayment === app.id}
                          className={`px-2.5 py-1 rounded-full text-xs font-bold border transition-colors disabled:opacity-50 ${PAYMENT_PILL[app.paymentStatus ?? "Unpaid"]}`}>
                          {togglingPayment === app.id ? "…" : (app.paymentStatus ?? "Unpaid")}
                        </button>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setSelected(app)}
                            className="px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap">
                            Review
                          </button>
                          <button onClick={() => handleDelete(app)}
                            disabled={deleting === app.id}
                            className="px-2 py-1.5 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-40"
                            title="Delete">
                            {deleting === app.id ? (
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
