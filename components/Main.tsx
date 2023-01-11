import { LocationData } from "../location";

export default function Main({ location }: { location: LocationData }) {
  const posters = location.posters;

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {posters.map((poster, index) => (
          <a key={index} className="flex justify-center" href={poster.link}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={poster.title}
              src={poster.img}
              className="w-full object-contain"
            />
          </a>
        ))}
      </div>
    </>
  );
}
