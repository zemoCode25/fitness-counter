import { Routes, Route } from "react-router";
import { MainLayout } from "./MainLayout";
import { Counter } from "./Counter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Counter />}></Route>
        <Route path="/records"></Route>
      </Route>
    </Routes>
  );
}

export default App;
