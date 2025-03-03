import { Overlay } from "./Overlay";
export function Modal() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 z-50 flex w-[90%] max-w-[20rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-2 bg-white p-4 rounded-md">
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
      <Overlay />
    </>
  );
}
