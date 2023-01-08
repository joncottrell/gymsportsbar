import { LocationData } from "../location";

export default function Contact(props: { location: LocationData }) {
  const info = props.location.contacts;

  const phoneLink = `tel:+1${info.phone.replace(/\D/g, "")}`;

  return (
    <>
      <div className="flex justify-center items-center border p-4 m-4">
        <div id="contactleft" className="text-white">
          <div className="p-2">
            <strong>GYM Sportsbar</strong>
            <br />
            <p>
              {info.address1}
              <br />
              {info.address2}
              <br />
              <a className="text-sky-500" href={phoneLink}>
                {info.phone}
              </a>
              <br />
              <a className="text-sky-500" href={`mailto:${info.email}`}>
                gymla@gymsportsbar.com
              </a>
              <br />
            </p>
          </div>
          <br />
          <h1 className="pb-2">Hours</h1>
          <div className="grid grid-cols-[90px_1fr] gap-y-2">
            {info.hours.map((h, index) => (
              <>
                <div key={`${index}-1`} className="text-sm">
                  {h.days}
                </div>
                <div key={`${index}-2`} className="text-lg font-bold">
                  {h.hours}
                </div>
              </>
            ))}
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
