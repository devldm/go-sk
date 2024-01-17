export default function FormSelect({
  label,
  htmlFor,
  id,
  placeholderOption,
  selectOptions,
}: {
  label: string;
  htmlFor: string;
  id: string;
  placeholderOption: string;
  selectOptions: string[];
}) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        {label}
      </label>
      <select
        className="mb-2 p-2 text-xl  dark:bg-[#222] rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
        id={id}
        required
        name={id}
      >
        <option value="" disabled>
          {placeholderOption}
        </option>
        {selectOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
}
