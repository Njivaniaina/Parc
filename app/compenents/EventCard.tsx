import Link from "next/link";
import Info, { BadgeInfo } from "lucide-react";

interface EventCardProps {
	title: string;
	description: string;
	imageUrl: string;
	id: string;
}

const EventCard = ({ title, description, imageUrl, id }: EventCardProps) => {
	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-md">
			<img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
			<div className="p-4">
				<h3 className="font-bold text-lg">{title}</h3>
				<p className="text-sm text-gray-600 mt-1">{description}</p>
				<Link
					href={`/events/${id}`}
					className="flex items-center gap-1 mt-2 text-sm text-gray-700"
				>
					<BadgeInfo size={16} />
					<span>Plus d'information...</span>
				</Link>
			</div>
		</div>
	);
};

export default EventCard;
