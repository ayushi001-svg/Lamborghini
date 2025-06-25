import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Configure from "./pages/Configure";
import LearnMore from "./pages/LearnMore";
import Experience from "./pages/Experience";
import Ownership from "./pages/Ownership";
import BookTestDrive from "./pages/BookTestDrive";
import NotFound from "./pages/NotFound";
import ThreeBackground from './components/ThreeBackground';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThreeBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/configure" element={<Configure />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/ownership" element={<Ownership />} />
          <Route path="/book-test-drive" element={<BookTestDrive />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
