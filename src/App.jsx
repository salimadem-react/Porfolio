import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";

export default function App() {
  return (
    <div>
      <Topbar />
      <div className="secti">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
