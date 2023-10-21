import styles from "./Button.module.css";

interface Props {
  applyUrl?: string;
  customClassName?: string;
  buttonText: string;
}

export default function Button({
  applyUrl,
  customClassName,
  buttonText,
}: Props) {
  return (
    <button
      className={`px-[30px] py-[15px] bg-[#3758f9] rounded-lg text-white border-0 cursor-pointer max-w-max hover:shadow-white shadow-sm ${customClassName}`}
      onClick={() => console.log(applyUrl)}
    >
      <a href={`https://${applyUrl}`}>{buttonText}</a>
    </button>
  );
}
