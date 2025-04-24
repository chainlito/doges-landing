export const metadata = {
  title: "$DOGES - Doges Only Governing Every Shibes",
  description: "A meme token with no utility, no promises, and no mercy.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Background from "@/public/images/total-back.png";
import DogGlass from "@/public/images/dog-glass.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <div className="w-full items-center justify-items-center ">
        <Image src={DogGlass} alt="Shiba"></Image>
      </div> */}
      {/* <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta /> */}
      
    </div>
  );
}
