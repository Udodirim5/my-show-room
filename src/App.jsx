import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact-me" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
