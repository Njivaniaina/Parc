import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  to: string;
}

const BackButton = ({ to }: BackButtonProps) => {
  return (
    <Link href={to} className="absolute top-8 left-8 text-white z-10">
      <div className="flex items-center justify-center w-10 h-10">
        <ArrowLeft size={32} />
      </div>
    </Link>
  );
};

export default BackButton;
