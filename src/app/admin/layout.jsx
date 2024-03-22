

import AdminNavbar from "@/components/AdminNavbar";
import Navbar from "@/components/Navbar";



export default function RootLayout({ children }) {
  return (
    <div>
        <AdminNavbar/>
        {children}
    </div>
  );
}