import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-28 text-center">
      <h1 className="text-5xl font-extrabold text-blue-gray-900">404</h1>
      <p className="mt-4 text-lg text-blue-gray-700">Page not found</p>
      <p className="mt-2 text-blue-gray-500">The page you are looking for doesn’t exist or has been moved.</p>
      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    </section>
  );
}

