import Header from '@/components/Header';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <Layout title="Brian Saitabau">
      <div className="px-3 mx-auto md:px-8 lg:w-3/4 ">
        <Header />
        <About />
        <Resume />
        <Services />
        <Projects />
        <Testimonials />
        <Banner />
        <Contact />
      </div>
    </Layout>
  );
}
