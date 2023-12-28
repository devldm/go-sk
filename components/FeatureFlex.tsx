import FeatureBox from "./FeatureBox";

export default function FeatureFlex() {
  return (
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
  );
}
