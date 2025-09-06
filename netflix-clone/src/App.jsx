import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-mono">
      <Navbar />
      <Hero />
      <div className="h-1 bg-neutral-600 my-6"></div>
      <Trending />
      <div className="h-1 bg-neutral-600 my-6"></div>
      <Reasons />
      <div className="h-1 bg-neutral-600 my-6"></div>
      <FAQ />
      <div className="h-1 bg-neutral-600 my-6"></div>
      <PreFooter />
      <div className="h-1 bg-neutral-600 my-6"></div>
      <Footer />
    </div>
  );
}

export default App;
