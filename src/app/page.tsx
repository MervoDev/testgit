import Nav from '../../components/Navbar';
import Image from "next/image";
// import NextJsCarousel from './accueil/carousel';
import Hero from './accueil/Hero';
// import Footer from '../../components/footer';
import Circuit from './circuit/page';
import Reservation from './reservation/page';
import Transport from './transport/page';
import Guides from './guide/page';
import Excursion from './excursion/page';
import Securite from './securite/page';
import Contact from './contact/page';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Nav/>
     {/* <NextJsCarousel/> */}
     <Hero/>
      
      
     {/* <Footer/> */}
    
    </div>

  );
}
