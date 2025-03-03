import { Outlet } from "react-router";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center">
      <Header />
      <main className="h-full flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}
