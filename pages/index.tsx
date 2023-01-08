import { GetStaticProps } from "next";
import Link from "next/link";
import { ALL_LOCATION_DATA, LocationData } from "../location";

export default function Main(props: { locations: LocationData[] }) {
  const locations = [...props.locations].sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    } else if (a.name > b.name) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 flex flex-wrap justify-center logo-bg gap-4 h-full sm:h-fit w-fit">
        <div className="flex flex-col content-fit">
          <img src="/logo.gif" alt="Gym Sports Bar" className="aspect-auto" />
          <div className="flex flex-col h-full items-end justify-around py-4 text-3xl headline text-slate-100">
            {locations.map((location) => (
              <Link
                key={location.title}
                href={location.title}
                className="py-2 hover:text-sky-500 uppercase"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <iframe
            className="aspect-video max-w-full h-fit"
            src="https://player.vimeo.com/video/127615957?autoplay=1&muted=1&autopause=0&loop=1&title=0&byline=0&portrait=0 max-w-full"
            width="800"
            height="450"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      locations: ALL_LOCATION_DATA,
    },
  };
};
