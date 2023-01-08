import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import { LocationData } from "../../location";
import { GetStaticPaths, GetStaticProps } from "next";
import { getLocationProps, getLocationPaths } from "../../location";

export default function HomePage(props: { location: LocationData }) {
  return (
    <>
      <Navbar location={props.location} />
      <Main location={props.location} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getLocationProps(context);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return getLocationPaths(context);
};
