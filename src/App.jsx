import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogSingle from "./pages/BlogSingle";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./ui/GlobalStyle";
import BlogTable from "./pages/BlogTable";
import ProjectTable from "./pages/ProjectsTable";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ui/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60,
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop /> {/* Ensures scroll resets on navigation */}
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact-me" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogSingle />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/admin/posts" element={<BlogTable />} />
            <Route path="/admin/project" element={<ProjectTable />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          styles: {
            fontSize: "1rem",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "var(--color-grey-0)",
            color: "var(--color-grey-0)",
            borderRadius: "8px",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
