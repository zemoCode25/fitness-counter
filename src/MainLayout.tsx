import { Outlet } from "react-router";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center">
      <Header />
      <main className="w-dvh h-dvh flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}
