import Layout from "Layout/Layout";
import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Ebook from "pages/EBook/Ebook";
import Decision from "pages/Decision/Decision";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Ebook />} />
          <Route path="/decide" element={<Decision />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
