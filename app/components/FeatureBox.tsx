export default function FeatureBox({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <div className="rounded-xl dark:border-[#3f3e3e] hover:shadow-[#3758f9] min-w-min p-4 border-2 border-slate-500 hover:border-[#3758f9] flex-col justify-between flex h-max py-6 md:w-[calc(100%/3.2)] dark:bg-[#30363d67] dark:text-white">
      <div>
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-lg break-word text-slate-600 dark:text-white">
          {text}
        </p>
      </div>
    </div>
  );
}
