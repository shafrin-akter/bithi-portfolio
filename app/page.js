import Header from "@/components/Header";
import SocialFab from "@/components/SocialFab";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-900 text-white selection:bg-blue-600 selection:text-white">
      <Header />
      <SocialFab />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}
