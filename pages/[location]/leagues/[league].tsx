import Navbar from "../../../components/Navbar";
import Leagues from "../../../components/Leagues";
import {
  Location,
  getLocationProps,
  getLocationPaths,
  ALL_LOCATIONS,
} from "../../../location";
import leaguesData from "../../../data/leagues.json";
import { GetStaticPaths, GetStaticProps } from "next";

export default function LeaguePage(props: {
  location: Location;
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
      location: context.params?.location,
      league: context.params?.league,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: ALL_LOCATIONS.flatMap((location) =>
      leaguesData[location].map((league) => {
        return {
          params: {
            location: location,
            league: league.slug,
          },
        };
      })
    ),
    fallback: false,
  };
};
