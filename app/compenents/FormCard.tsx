import { ReactNode } from "react";

interface FormCardProps {
  children: ReactNode;
  className?: string;
}

const FormCard = ({ children, className = "" }: FormCardProps) => {
  return (
    <div
      className={`bg-white z-20 rounded-lg shadow-md p-8 max-w-xl w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default FormCard;
