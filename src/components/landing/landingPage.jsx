import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import ExploreGrades from "./ExploreGrades.jsx";
import WhyLearnWithUs from "./WhyLearnWithUs.jsx";
import PopularCourses from "./PopularCourses.jsx";
import Stats from "./Stats.jsx";
import Testimonials from "./Testimonials.jsx";
import CallToAction from "./CallToAction.jsx";
import Footer from "./Footer.jsx";

function LandingPage() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ExploreGrades />
      <WhyLearnWithUs />
      <PopularCourses />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default LandingPage;