import { cn } from "@Helpers/cn";

type InputProps = {
  className?: string;
  placeholder?: string;
};

const Input = ({ className, placeholder, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className={cn(
        `border border-white rounded focus:border-yellow focus:outline-none px-[22px] py-2  w-full`,
        className
      )}
      {...props}
      placeholder={placeholder}
    />
  );
};

export default Input;
