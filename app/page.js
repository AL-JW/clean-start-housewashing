import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 rounded-xl mx-4 mb-4">
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg mb-8">
          Custom house painting & exterior washing services in Northern
          Wisconsin.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-block bg-[#3B82F6] text-white py-3 px-6 rounded hover:bg-[#60A5FA] transition"
          >
            Request a Quote
          </Link>
          <Link
            href="/services"
            className="inline-block border border-[#3B82F6] text-white py-3 px-6 rounded hover:bg-[#1E293B] transition"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* ABOUT (short) */}
      <section className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-base opacity-90">
          5 years of experience washing and painting/working on houses, learning
          the best practices from a professional with many more years in the
          business. We take pride in prep work, clean lines, and using the right
          materials so the job looks great and lasts.
        </p>
      </section>

      {/* GALLERY (preview) */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <img
            src="/images/shinyhouse_closeup.jpg"
            alt="Paint Job 1"
            className="rounded shadow"
          />
          <img
            src="/images/Epay_Stain_Job.jpg"
            alt="Paint Job 2"
            className="rounded shadow"
          />
          <img
            src="/images/Vertical_High_Paint.jpg"
            alt="Paint Job 3"
            className="rounded shadow"
          />
        </div>
        <div className="text-center mt-6">
          <Link href="/gallery" className="underline hover:opacity-80">
            View full gallery
          </Link>
        </div>
      </section>
    </main>
  );
}
