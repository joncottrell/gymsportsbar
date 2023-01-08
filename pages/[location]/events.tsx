import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import {
  LocationData,
  getLocationProps,
  getLocationPaths,
} from "../../location";
import { GetStaticPaths, GetStaticProps } from "next";

export default function EventsPage(props: { location: LocationData }) {
  return (
    <>
      <Navbar location={props.location} />
      <Events location={props.location} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getLocationProps(context);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return getLocationPaths(context);
};
