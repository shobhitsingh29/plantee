import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Auth from "@/pages/auth";
import PlantPage from "@/pages/plant/[id]";
import IdentifyPage from "@/pages/identify";
import WaterCalculator from "@/pages/water-calculator";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/plant/:id" component={PlantPage} />
          <Route path="/identify" component={IdentifyPage} />
          <Route path="/water-calculator" component={WaterCalculator} />
          <Route path="/diagnose" component={DiagnosePage} />
          <Route path="/reminders" component={RemindersPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;