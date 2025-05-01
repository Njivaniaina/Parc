import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Bell,
  MapPin,
  Plus,
} from "lucide-react";
import Footer from "./compenents/Footer";
import NavBar from "./compenents/NavBar";
import Link from "next/link";
import EventCard from "./compenents/EventCard";

const eventsSample = [
  {
    id: "1",
    title: "Une titre d'événement à venir",
    description: "Une description qui concernant cette événement...",
    imageUrl: "./cite.jpg",
  },
  {
    id: "2",
    title: "Une titre d'événement à venir",
    description: "Une description qui concernant cette événement...",
    imageUrl: "./cite.jpg",
  },
  {
    id: "3",
    title: "Une titre d'événement à venir",
    description: "Une description qui concernant cette événement...",
    imageUrl: "./cite.jpg",
  },
];

const structuresSample = [
  {
    id: "1",
    title: "Des differents structure",
    imageUrl: "./cite.jpg",
  },
  {
    id: "2",
    title: "Des differents structure",
    imageUrl: "./cite.jpg",
  },
  {
    id: "3",
    title: "Des differents structure",
    imageUrl: "./cite.jpg",
  },
];

export default function Home() {
  return (
    <div className="w-full h-full p-0">
      <header className="relative p-0 h-[500px]">
        <div className="absolute inset-0">
          <img
            src="./Home.jpg"
            alt="Parc National"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>

        <div
          style={{
            clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
          }}
          className="absolute top-0 left-0 h-full w-[30%] bg-[#1a661aff]"
        ></div>
        <div
          style={{
            clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
          }}
          className="absolute top-0 left-0 h-full w-[40%] bg-[#1a661aaa]"
        ></div>

        <NavBar />

        <div className="absolute top-1/4 left-12 text-white z-10">
          <h1 className="text-5xl font-bold mb-4">PARC</h1>
          <h1 className="text-5xl font-bold">NATIONALLE</h1>
        </div>

        <div
          style={{
            clipPath: "polygon(0% 0%, 50% 15%, 100% 0, 100% 100%, 0% 100%)",
          }}
          className=" w-full p-4 absolute bottom-0 left-0 bg-white flex justify-around text-center"
        >
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              <MapPin className="h-6 w-6 text-[#1a661a]" />
            </div>
            <span className="text-sm mt-2">Localisation</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              <Archive className="h-6 w-6 text-[#1a661a]" />
            </div>
            <span className="text-sm mt-2">Archive</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full">
              <Bell className="h-6 w-6 text-[#1a661a]" />
            </div>
            <span className="text-sm mt-2">Mise à jour</span>
          </div>
        </div>
      </header>

      <section id="events" className="h-full bg-[#d2ecd6]">
        <div className=" container mx-auto py-8">
          <div className="w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {eventsSample.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  imageUrl={event.imageUrl}
                />
              ))}
            </div>

            <div className="flex justify-between items-center mb-6 ">
              <div className="flex gap-2">
                <button className="bg-white p-2 rounded-md shadow">
                  <ArrowLeft size={20} />
                </button>
                <button className="bg-white p-2 rounded-md shadow">
                  <ArrowRight size={20} />
                </button>
              </div>
              <Link
                href="/events"
                className="bg-white px-4 py-2 rounded-md shadow text-sm"
              >
                Voir plus ...
              </Link>
            </div>
          </div>

          <div className="bg-[#1a661a] text-white flex justify-between items-center p-4 mb-8">
            <h2 className="font-bold">Actualité</h2>
            <div className="flex items-center">
              <p className="mr-4">
                Une texte pour une actualité dans le parc ......
              </p>
              <div className="flex gap-2">
                <button className="bg-gray-300 p-1 rounded-md">
                  <ArrowLeft size={16} className="text-gray-700" />
                </button>
                <button className="bg-gray-300 p-1 rounded-md">
                  <ArrowRight size={16} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {structuresSample.map((structure) => (
              <div
                key={structure.id}
                className="bg-[#1a661a] text-white overflow-hidden"
              >
                <img
                  src={structure.imageUrl}
                  alt={structure.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium">{structure.title}</h3>
                </div>
              </div>
            ))}
            <div className="bg-[#1a661a] text-white flex items-center justify-center flex-col p-4">
              <div className="bg-white text-[#1a661a] p-2 rounded-full mb-4">
                <Plus />
              </div>
              <p className="text-center">Plus d'actualité ....</p>
            </div>
          </div>
        </div>
      </section>

      <div id="info" className=" w-screen">
        <Footer />
      </div>
    </div>
  );
}
