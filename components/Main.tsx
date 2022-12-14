import { Location } from "../location";
import postersData from "../data/posters.json";

export default function Main({ location }: { location: Location }) {
  const posters = postersData[location];

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {posters.map((poster, index) => (
          <a key={index} className="flex justify-center" href={poster.link}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={poster.title} src={poster.img} className="w-full" />
          </a>
        ))}
      </div>
    </>
  );
}
