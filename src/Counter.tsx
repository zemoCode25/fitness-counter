import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Count Fitness</h1>
        <p className="text-sm text-gray-500">Tally your steps to fitness</p>
        <h2 className="mt-3 text-xl font-semibold">Steps:</h2>
        <h3 className="my-3 text-7xl font-semibold">{count}</h3>
        <div className="flex justify-between w-full gap-2">
          <button
            onClick={() => setCount((prevCount) => (prevCount -= 1))}
            className="cursor-pointer rounded-md bg-red-700 px-4 py-4 text-white w-full"
          >
            -1
          </button>
          <button
            onClick={() => setCount((prevCount) => (prevCount += 1))}
            className="cursor-pointer rounded-md bg-green-700 px-4 py-4 text-white w-full"
          >
            +1
          </button>
        </div>
        <div className="flex my-2 w-full gap-2">
          <button className="cursor-pointer rounded-md bg-gray-300 px-4 py-1 text-black w-full font-semibold">
            Reset
          </button>
          <button className="cursor-pointer rounded-md bg-gray-300 px-4 py-1 text-black w-full font-semibold">
            Settings
          </button>
        </div>
        <button className="cursor-pointer rounded-md bg-black px-4 py-2 text-white w-full font-semibold">
          Save
        </button>
      </div>
    </div>
  );
}
