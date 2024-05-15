import Layout from "Layout/Layout";
import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
