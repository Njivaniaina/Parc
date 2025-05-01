import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({
  children,
  className = "",
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={`w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
