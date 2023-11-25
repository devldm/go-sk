interface Props {
  applyUrl?: string;
  customClassName?: string;
  buttonText: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  applyUrl,
  customClassName,
  buttonText,
  type,
}: Props) {
  return (
    <button
      type={type}
      className={`px-[30px] py-[15px] bg-[#3758f9] rounded-lg text-white border-0 cursor-pointer max-w-max hover:shadow-white shadow-sm ${customClassName}`}
      onClick={() => {
        if (applyUrl) {
          window.location.href = `https://${applyUrl}`;
        }
      }}
    >
      {buttonText}
    </button>
  );
}
