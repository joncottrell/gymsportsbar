import { Location } from "../location";
import Image from "next/image";

export default function Main({ location }: { location: Location }) {
  // FIXME: Get slides from location.
  const slides = [
    {
      img: "/images/ny/ny-home-1.jpg",
      dest: `/${location}/events`,
      title: "Event Name",
    },
  ];

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {slides.map((slide, index) => (
          <a key={index} className="flex justify-center" href={slide.dest}>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                fill
                alt={slide.title}
                src={slide.img}
                objectFit="contain"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
