import useCounterStore from "../lib/store";

export default function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="flex space-x-4">
        <button onClick={increase} className="px-4 py-2 bg-green-500 text-white rounded">
          +
        </button>
        <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded">
          -
        </button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
