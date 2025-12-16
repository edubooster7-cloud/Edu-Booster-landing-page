import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Features } from "./components/Features";
import { Demo } from "./components/Demo";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { PreorderSection } from "./components/PreorderSection";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
// import { About } from "./components/About"
import { Contact } from "./components/Contact";
import { CookieConsent } from "./components/CookieConsent";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* <About /> */}
        <Partners />
        <Features />
        <Demo />
        <Testimonials />
        <Pricing />
        <Contact />
        <FAQ />
        <PreorderSection />
      </main>
      <Footer />
      <CookieConsent />

      <Toaster />
    </div>
  );
}

export default App;
