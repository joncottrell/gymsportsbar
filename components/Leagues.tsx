import { LocationData } from "../location";

export default function Leagues({
  location,
  league,
}: {
  location: LocationData;
  league?: string;
}) {
  const leagues = location.leagues;
  const info = leagues.find((l) => l.slug == league);

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      {/* FIXME: add image here */}
      <div className="flex flex-row items-center justify-center text-white container mx-auto flex-wrap gap-4">
        <div className="flex-col flex gap-4 max-w-lg">
          <p className="text-white">
            {info
              ? info.description
              : "GYM Sportsbar is a proud supporter of gay sport leagues in the area."}
          </p>
          {info && info.website && (
            <a className="text-sky-500" href={info.website}>
              {info.website.replace(/^https?:\/\//, "")}
            </a>
          )}
        </div>
      </div>

      <h1 className="text-slate-300 text-xl mt-4">Sports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 m-6 text-white">
        {leagues.map((l) => (
          <div key={l.slug} className="flex flex-col p-2 border border-white">
            <a
              className="font-bold text-white"
              href={`/${location}/leagues/${l.slug}`}
            >
              {l.name}
            </a>
          </div>
        ))}
      </div>
      <h1 className="text-slate-300 text-xl mt-4">Resources</h1>
      <p className="text-white">FIXME: add resources</p>
    </div>
  );
}
