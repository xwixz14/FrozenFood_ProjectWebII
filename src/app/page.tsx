import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Gallery from "@/components/gallery/page";
import Menu from "@/components/menu/page";
import Navbar from "@/components/navbar/page";
import About from "@/components/about/page";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* taro header disini */}
      <Header />
      {/* Taro about disini */}

      <Menu />
      <Gallery />
      <Footer />
    </>
  );
}
