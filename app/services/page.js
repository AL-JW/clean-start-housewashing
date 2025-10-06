export const metadata = {
  title: "Services | Clean Start",
  description:
    "Interior & exterior painting, staining, house washing, and wallpapering.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-12 rounded-xl mx-4 mb-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Services</h1>
      <p className="opacity-90 mb-8 text-center">
        Quality prep, materials, and clean finishes. Free estimates.
      </p>

      <ul className="space-y-4 text-lg">
        <li className="border border-[#3B82F6] rounded-xl p-4">
          Exterior Painting & Staining
        </li>
        <li className="border border-[#3B82F6] rounded-xl p-4">
          Interior Painting
        </li>
        <li className="border border-[#3B82F6] rounded-xl p-4">
          Exterior House Washing
        </li>
        <li className="border border-[#3B82F6] rounded-xl p-4">Wallpapering</li>
      </ul>

      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-[#3B82F6] text-white py-3 px-6 rounded hover:bg-[#60A5FA] transition"
        >
          Request a Quote
        </a>
      </div>
    </main>
  );
}
