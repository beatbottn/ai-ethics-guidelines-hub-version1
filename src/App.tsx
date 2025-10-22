import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Principles from "./pages/Principles";
import Challenges from "./pages/Challenges";
import Planning from "./pages/phases/Planning";
import DataCollection from "./pages/phases/DataCollection";
import Analysis from "./pages/phases/Analysis";
import Presentation from "./pages/phases/Presentation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1">
              <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-background/95 backdrop-blur px-4">
                <SidebarTrigger />
              </header>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/principles" element={<Principles />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/phases/planning" element={<Planning />} />
                <Route path="/phases/data-collection" element={<DataCollection />} />
                <Route path="/phases/analysis" element={<Analysis />} />
                <Route path="/phases/presentation" element={<Presentation />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
