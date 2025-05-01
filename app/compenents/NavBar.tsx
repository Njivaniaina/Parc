import { CalendarCheck, Info, ShoppingCart } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-end gap-2 p-4 bg-transparent absolute top-0 right-0 z-10 w-full">
      <Link
        href="/#events"
        className="flex justify-center bg-white text-black px-4 py-2 rounded-md font-medium"
      >
        <CalendarCheck size={20} strokeWidth={1.5} className="text-bold" />
        EVENEMENT
      </Link>
      <Link
        href="/Purchase"
        className="flex justify-center bg-white text-black px-4 py-2 rounded-md font-medium"
      >
        <ShoppingCart size={20} strokeWidth={1.5} className="text-bold" />
        ACHAT
      </Link>
      <Link
        href="/#info"
        className="flex justify-center bg-white text-black px-4 py-2 rounded-md font-medium"
      >
        <Info size={20} strokeWidth={1.5} className="text-bold" />
        INFORMATION
      </Link>
      <Link
        href="/SignUp"
        className="bg-[#ffffff11] hover:bg-[#ffffffaa] hover:text-black text-white px-4 py-2 rounded-md font-medium"
      >
        INSCRIPTION
      </Link>
      <Link
        href="/Login"
        className="bg-orange-400 text-black px-4 py-2 rounded-md font-medium"
      >
        CONNEXION
      </Link>
    </nav>
  );
};

export default NavBar;
