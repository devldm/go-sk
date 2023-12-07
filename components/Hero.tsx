import Link from "next/link";
import Button from "./Button/Button";
import FeatureBox from "./FeatureBox";

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
        <div className="flex flex-col items-center justify-center md:gap-8 gap-8 w-screen">
          <h1 className="text-4xl font-bold text-center">What is GO-SK?</h1>
          <div className="flex flex-col justify-between xl:w-[80%] md:flex-row flex-wrap gap-3 md:gap-6 w-screen px-6 mb-16 md:px-12 items-center h-full">
            <FeatureBox
              title="Find a role"
              text="We work with the best Korean and global companies to find the
                  right role for you."
            />
            <FeatureBox
              title="Find a company"
              text=" We get the help of the Korean developer community to find and
              list great companies."
            />
            <FeatureBox
              title="Find your feet"
              text="We know taking the first step is difficult. We help you find
              your feet and get started."
            />
          </div>
        </div>
      </section>
    </>
  );
}