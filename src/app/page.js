import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import MagicCat from "@/components/models/MagicCat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-100 z-0"></Image>

    <div className="w-full h-screen z-10">
      <RenderModel>
        <MagicCat></MagicCat>
      </RenderModel>
    </div>
    </main>
  );
}
