import Header from "./components/Header";
import Hero from "./components/Hero";
import AgentsGrid from "./components/AgentsGrid";
import Pipeline from "./components/Pipeline";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <AgentsGrid />
        <Pipeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
