import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <div className='bg-red-500'>
                <div className='flex'>
                    <div className='flex'>
                        <div><FaPhoneAlt /> +1 647 800 8569</div>
                        <div>info@shadowxpress.com</div>
                    </div>
                </div>

            </div>
        </>
    )
}
