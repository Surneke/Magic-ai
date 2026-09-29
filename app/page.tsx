import { Curriculum } from "./components/curriculum";
import { Enrollment } from "./components/enrollment";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { LearningPaths } from "./components/learning-paths";
import { Navbar } from "./components/navbar";
import { Outcomes } from "./components/outcomes";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Outcomes />
        <LearningPaths />
        <Curriculum />
        <Testimonials />
        <Enrollment />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
