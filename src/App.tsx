import { useEffect, useRef, useState, type JSX } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { WhatsAppFloat, MobileCtaBar } from "./components/Floating";
import Intro from "./components/Intro";
import { ServiceProvider } from "./components/ServicePanel";
import { ScrollProgress, PageVeil, Grain, LitObserver } from "./components/motion";
import { useRoute } from "./lib/router";
import { SEO } from "./lib/site";
import Home from "./content/Home";
import About from "./content/About";
import Services from "./content/Services";
import PortfolioPage from "./content/PortfolioPage";
import Printing from "./content/Printing";
import WebDesign from "./content/WebDesign";
import Contact from "./content/Contact";

function setMeta(description: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", description);
}

export default function App() {
  const route = useRoute();
  const [veil, setVeil] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const seo = SEO[route.path] ?? SEO["/"];
    document.title = seo.title;
    setMeta(seo.description);
  }, [route.path]);

  /* fast page transition: dark veil + travelling gold line */
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setVeil(true);
    const t = window.setTimeout(() => setVeil(false), 700);
    return () => window.clearTimeout(t);
  }, [route.path]);

  let page: JSX.Element;
  switch (route.path) {
    case "/about":
      page = <About />;
      break;
    case "/services":
      page = <Services />;
      break;
    case "/portfolio":
      page = <PortfolioPage />;
      break;
    case "/printing":
      page = <Printing />;
      break;
    case "/web-design":
      page = <WebDesign />;
      break;
    case "/contact":
      page = <Contact prefillService={route.param} />;
      break;
    default:
      page = <Home />;
  }

  return (
    <ServiceProvider>
      <div className="min-h-screen bg-black pb-[52px] md:pb-0">
        <ScrollProgress />
        <Nav path={route.path} />
        <main>{page}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileCtaBar />
        <Grain />
        <PageVeil active={veil} />
        <LitObserver dep={route.path} />
        <Intro />
      </div>
    </ServiceProvider>
  );
}
