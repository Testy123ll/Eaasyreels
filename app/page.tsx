'use client';

import Layout from '@/components/ui/Layout';
import Hero from '@/components/Hero';
import Arsenal from '@/components/Arsenal';
import SelectedWorks from '@/components/SelectedWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Arsenal />
      <SelectedWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
}
