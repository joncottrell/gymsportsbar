import Navbar from "../../../components/Navbar";
import Leagues from "../../../components/Leagues";
import { ALL_LOCATION_DATA, LocationData } from "../../../location";
import { GetStaticPaths, GetStaticProps } from "next";

export default function LeaguePage(props: {
  location: LocationData;
  league: string;
}) {
  return (
    <>
      <Navbar location={props.location} />
      <Leagues location={props.location} league={props.league} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      location: ALL_LOCATION_DATA.find(
        (data) => data.title == context.params?.location
      )!,
      league: context.params?.league,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: ALL_LOCATION_DATA.flatMap((location) =>
      location.leagues.map((league) => {
        return {
          params: {
            location: location.title,
            league: league.slug,
          },
        };
      })
    ),
    fallback: false,
  };
};
