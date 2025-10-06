import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600">
        We’ve received your request and will get back to you shortly.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        Back to Home
      </Link>
    </div>
  );
}
