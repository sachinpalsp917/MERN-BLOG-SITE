import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
