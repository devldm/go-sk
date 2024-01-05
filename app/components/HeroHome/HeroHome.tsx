import Image from "next/image";
import skImage from "../../public/skImage2.jpg";
import Link from "next/link";
import Button from "../Button/Button";

export default function HeroHome() {
  return (
    <div className="grid grow grid-cols-1 lg:grid-flow-row lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8">
        <h1 className="text-5xl md:text-[5rem] leading-[1.15] font-bold">
          Start your journey to <br />
          <span className="text-[#3758f9]">South Korea</span>
        </h1>

        <p className="italic text-left opacity-70 my-4 text-xl lg:text-3xl">
          {`We aim to be the bridge between the worlds talent and South Korea's
          vibrant economy`}{" "}
        </p>

        <Link href="/jobs">
          <Button
            buttonText="See our jobs"
            customClassName={`min-w-[40%] rounded-lg p-4 text-xl`}
          />
        </Link>
      </div>
      <div className="">
        <Image
          src={skImage}
          className="max-h-[100vh] object-cover overflow-hidden"
          priority
          alt="View of N Seoul Tower"
        />
      </div>
    </div>
  );
}
