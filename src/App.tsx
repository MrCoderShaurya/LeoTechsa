import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Transport = lazy(() => import("./pages/transport"));
const Agriculture = lazy(() => import("./pages/agriculture"));
const Defence = lazy(() => import("./pages/defence"));
const Career = lazy(() => import("./pages/career"));
const ApplicationForm = lazy(() => import("./pages/ApplicationForm"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* ROUTES ONLY — NO BrowserRouter HERE */}
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/defence" element={<Defence />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
