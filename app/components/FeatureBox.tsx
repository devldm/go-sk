export default function FeatureBox({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <div className="bg-[#30363d67] rounded-xl hover:shadow-[#3758f9] min-w-min p-4 border-2 border-[#3f3e3e] hover:border-[#3758f9] flex-col justify-between flex h-max py-6 md:w-[calc(100%/3.2)]">
      <div>
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-lg break-word">{text}</p>
      </div>
    </div>
  );
}
