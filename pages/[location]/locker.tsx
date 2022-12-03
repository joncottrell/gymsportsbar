import { getLocationPaths, getLocationProps, Location } from "../../location";
import Navbar from "../../components/Navbar";
import { GetStaticPaths, GetStaticProps } from "next";
import lockerRoom from "../../images/lockerRoom.jpeg";

export default function LockerPage(props: { location: Location }) {
  return (
    <>
      <Navbar location={props.location} />

      <div
        className="bg-[url('/images/locker-room-background.jpeg')] bg-cover text-slate-200 p-8 text-base"
        style={{ backgroundImage: `url(${lockerRoom.src})` }}
      >
        <div className="flex flex-col content-center justify-center gap-y-4 p-8 max-w-lg mx-auto rounded bg-black bg-opacity-50">
          <h1 className="font-bold text-lg text-center">
            LOCKER ROOM can host your NEXT PARTY
          </h1>
          <p>
            Located on the basement level, the Locker Room is an alluring
            addition to GYM&apos;s main floor. The atmosphere created by the
            Locker Room&apos;s warm lighting, fun music, video displays, and
            copper-topped bar encourages the crowd to get up close and personal.
          </p>

          <p>
            During NFL Football season, The Locker Room is also open on SUNDAYS
            for viewing DirectTV&apos;s NFL Sunday Ticket Lineup of games.
          </p>

          <p>
            The Drink Specials offered EVERY day and night on our main level are
            also offererd in the locker room including Happy Hour & Weekend Beer
            Blast.
          </p>
          <p>
            Whether you&apos;re planning a birthday celebration, holiday office
            party, corporate event, or simply looking for a place to kick back
            with friends, the Locker Room is the perfect location. We offer
            complete bar services, DJ /AV equipment and can accommodate your
            catering needs.
          </p>
          <a
            className="text-center text-lg font-bold hover:text-slate-400"
            href={`/${props.location}/contact`}
          >
            Contact us to learn more
          </a>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getLocationProps(context);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return getLocationPaths(context);
};
