import { Outlet } from "react-router";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
