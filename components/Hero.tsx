import Link from "next/link";
import Button from "./Button/Button";
import FeatureFlex from "./FeatureFlex";

export default function Hero() {
  return (
    <>
      <main className="grid grid-cols-1 h-[80vh] w-screen place-items-center">
        <div className="flex flex-col items-center h-full justify-center w-full p-6 md:w-[60%] text-center gap-3 md:gap-6">
          <h1 className="text-6xl md:text-[5rem] leading-[1.15] font-bold">
            Start your journey to <br />
            <span className="text-[#3758f9]">South Korea</span>
          </h1>
          <p className="italic opacity-70 my-4 text-xl lg:text-2xl">
            {`We aim to be the bridge between the worlds talent and South Korea's
          vibrant economy`}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/jobs" className="w-max">
              <Button
                buttonText="See our jobs"
                customClassName={`min-w-[40%] w-max rounded-lg p-2 md:p-4 text-lg md:text-xl`}
              />
            </Link>
            <Link href="/companies" className="w-max">
              <Button
                buttonText="See our companies"
                customClassName={`min-w-[40%] w-max rounded-lg p-2 md:p-4 text-lg md:text-xl`}
              />
            </Link>
          </div>
        </div>
      </main>
      <section
        id="what-we-do"
        className="flex flex-col justify-center items-center w-full"
      >
        <FeatureFlex />
      </section>
    </>
  );
}
