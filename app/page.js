import Header from '../components/Header';
import Hero from '../components/Hero';
import DrivingTransformation from '../components/DrivingTransformation';
import WhatWeDo from '../components/WhatWeDo';
import Expertise from '../components/Expertise';
import CoreTechnologies from '../components/CoreTechnologies';
import EngagementModel from '../components/EngagementModel';
import OurTeam from '../components/OurTeam';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DrivingTransformation />
      <WhatWeDo />
      <Expertise />
      <CoreTechnologies />
      <EngagementModel />
      <OurTeam />
      <Testimonials />
      <Certifications />
      <Footer />
    </main>
  );
}
