export function Modal() {
  return (
    <div className="flex flex-col gap-2">
      <label>Set Initial Value</label>
      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          className="rounded-md px-2 py-1 text-lg font-semibold outline-none border border-gray-200 focus:border-gray-300"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-black px-4 py-1 text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}
