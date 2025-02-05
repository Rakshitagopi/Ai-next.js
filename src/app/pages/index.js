import Counter from "../components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Next.js Site!</h1>
      <Counter />
    </div>
  );
}
