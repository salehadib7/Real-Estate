import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Houses from "@/components/houses/Houses";
import Navbar from "@/components/navbar/Navbar";
import Testimonial from "@/components/testimonial/Testimonial";
import Video from "@/components/videobox/Video";

export default function Home() {
  return (
    <div className="font-poppins">
      <div className="linearBg">
        <div className="patternBg">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Houses/>
      <About/>
      <Video/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
