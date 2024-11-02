import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import MagicCat from "@/components/models/MagicCat";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-100 z-0"></Image> */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover object-center z-0">
        <source src="/video/background.mp4" type="video/mp4"/>
      </video>
      <div className="w-full h-screen z-10">
        <Navigation></Navigation>
        <RenderModel>
          <MagicCat></MagicCat>
        </RenderModel>
      </div>
    </main>
  );
}
