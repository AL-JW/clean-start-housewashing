export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Request a Quote</h1>
      <p className="mb-6 text-center text-gray-600">
        Fill out the form below and we’ll get back to you shortly.
      </p>

      <form
        action="https://formspree.io/f/mvgazprb"
        method="POST"
        className="space-y-4"
      >
        {/* Remove CAPTCHA prompt */}
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Service Needed
          </label>
          <select
            name="service"
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="Painting">Painting</option>
            <option value="House Washing">House Washing</option>
            <option value="Both">Both</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
