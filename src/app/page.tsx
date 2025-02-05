export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Next.js Site!</h1>
      <p className="mt-4 text-lg text-gray-700">This is a simple responsive page using Tailwind.</p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
