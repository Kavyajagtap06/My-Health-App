import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" className="text-white text-xl font-bold">Your Logo</a>
          <ul className="flex space-x-4">
            <li><Link href="/Home" className="text-white">Home</Link></li>
            <li><Link href="/Blogs" className="text-white">Blogs</Link></li>
            <li><Link href="/Chatroom" className="text-white">Chatroom</Link></li>
            <li><Link href="/HealthBot" className="text-white">Health Bot</Link></li>
            <li><Link href="/ScheduleAppointment" className="text-white">Schedule Appointment</Link></li>
            <li><Link href="/ContactUs" className="text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;