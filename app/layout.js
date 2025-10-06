import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Clean Star House Washing & Custom Painting",
  description: "Professional painting and house washing services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-white">
        {/* HEADER */}
        <header className="bg-[#1E293B] text-white py-6 px-8 shadow-lg rounded-xl mt-4 mx-4 mb-8 border border-[#3B82F6] relative">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Left: Phone number */}
            <a
              href="tel:+17158913993"
              className="text-[#3B82F6] font-semibold hover:text-[#60A5FA]"
            >
              📞 (715) 891-3993
            </a>

            {/* Center: Title */}
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
              Clean Start
            </h1>

            {/* Right: Nav */}
            <nav className="space-x-6">
              <Link href="/" className="hover:text-[#3B82F6]">
                Home
              </Link>
              <Link href="/services" className="hover:text-[#3B82F6]">
                Services
              </Link>
              <Link href="/gallery" className="hover:text-[#3B82F6]">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-[#3B82F6]">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="min-h-[80vh] px-4">{children}</main>

        <footer className="bg-[#1E293B] text-white text-center text-sm py-6 mt-10 rounded-xl mx-4 mb-4 border border-[#3B82F6] shadow-lg">
          © {new Date().getFullYear()} Clean Start. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

{
  /* <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="w-1/3" />
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
              Clean Start
            </h1>
            <nav className="space-x-6">
              <Link href="/" className="hover:text-[#3B82F6]">
                Home
              </Link>
              <Link href="/services" className="hover:text-[#3B82F6]">
                Services
              </Link>
              <Link href="/gallery" className="hover:text-[#3B82F6]">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-[#3B82F6]">
                Contact
              </Link>
            </nav>
          </div> */
}
