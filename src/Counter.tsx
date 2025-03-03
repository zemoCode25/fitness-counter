export function Counter() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Count Fitness</h1>
        <p className="text-sm text-gray-500">Tally your steps to fitness</p>
        <h2 className="mt-5 text-xl font-semibold">Steps:</h2>
        <h3 className="my-3 text-7xl font-semibold">0</h3>
        <div className="flex justify-between w-full gap-2">
          <button className="cursor-pointer rounded-md bg-red-700 px-4 py-3 text-white w-full">
            -1
          </button>
          <button className="cursor-pointer rounded-md bg-green-700 px-4 py-3 text-white w-full">
            +1
          </button>
        </div>
        <button className="cursor-pointer rounded-md bg-black px-4 py-2 text-white my-3 w-full">
          Record
        </button>
      </div>
    </div>
  );
}
