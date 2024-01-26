import { cn } from "@Helpers/cn";
import React from "react";

type ButtonProps = {
  title?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = ({
  title,
  className,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(`w-full bg-yellow text-white rounded py-[8px]`, className)}
      {...props}
    >
      {title || children}
    </button>
  );
};

export default Button;
