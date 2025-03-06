import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F3F3F3] h-screen">
        <div className="flex h-screen">
          <div className="w-[15%] h-full bg-[#0F0F0F] border-r shadow-lg overflow-y-auto">
            <Sidebar />
          </div>

          <div className="w-[85%] flex flex-col h-full">
            <Navbar />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
