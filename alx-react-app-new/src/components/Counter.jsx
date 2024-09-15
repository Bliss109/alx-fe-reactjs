import useCounterStore from 'stores/useCounterStore';

function Counter() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div className="flex items-center justify-center">
      <span className="text-4xl font-bold mr-4">{count}</span>
      <div className="flex flex-col">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;

