import {
	Phone,
	Facebook,
	Mail,
	Instagram,
	Twitter,
	Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer
			style={{
				clipPath: "polygon(0% 0%, 50% 20%, 100% 0, 100% 100%, 0% 100%)",
			}}
			className=" h-[50%] bg-[#1a661a] text-white park-reverse-diagonal-clip pt-32"
		>
			<div className="container mx-auto pt-20 pb-6 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-lg font-bold mb-4">Spécificité</h3>
						<p className="mb-2">
							+ de 200 espace différent dans le zone de service
						</p>
						<div className="flex items-center gap-2 mt-6">
							<Phone size={18} />
							<span>+26134166166</span>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4">Historique</h3>
						<p>
							Créer en 1993, parc d'attraction qui attire plus de +1 Million de
							visiteurs par an.
						</p>
					</div>
				</div>

				<div className="mt-8 flex flex-wrap gap-3">
					<Link
						href=""
						className="bg-white text-black px-3 py-2 rounded-md flex items-center gap-2"
					>
						<Facebook size={18} />
						<span>Facebook</span>
					</Link>
					<Link
						href=""
						className="bg-orange-400 text-black px-3 py-2 rounded-md flex items-center gap-2"
					>
						<Mail size={18} />
						<span>E-mail</span>
					</Link>
				</div>

				<div className="flex justify-end gap-6 mt-8">
					<Link href="/instagram" aria-label="Instagram">
						<Instagram size={24} />
					</Link>
					<Link href="/twitter" aria-label="Twitter">
						<Twitter size={24} />
					</Link>
					<Link href="/linkedin" aria-label="LinkedIn">
						<Linkedin size={24} />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
