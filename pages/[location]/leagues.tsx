import Navbar from "../../components/Navbar";
import Leagues from "../../components/Leagues";
import {
  LocationData,
  getLocationProps,
  getLocationPaths,
} from "../../location";
import { GetStaticPaths, GetStaticProps } from "next";

export default function LeaguesPage(props: { location: LocationData }) {
  return (
    <>
      <Navbar location={props.location} />
      <Leagues location={props.location} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getLocationProps(context);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return getLocationPaths(context);
};
