export default function DetailsPill({ jobProps }: { jobProps: string }) {
  return (
    <div className="my-3 max-w-[150px] border-2 w-max px-3 py-1 border-[#3758f9] rounded-full">
      <p>{jobProps}</p>
    </div>
  );
}
