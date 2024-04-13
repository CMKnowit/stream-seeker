import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative max-h-[75%]">
      <Image
        src="/hero.jpg"
        alt="Featured Show"
        className="object-cover w-full max-h-[75%] opacity-60"
        width={2000}
        height={1125}
      />
      <div className="absolute top-2/4 left-[10%] text-white space-y-5">
        <h1 className="text-5xl font-bold">Find Your Show or Movie</h1>
        <p className="text-xl">Find where you can stream your show or movie</p>
      </div>
    </div>
  );
}
