import Navbar from "../../components/Navbar";
import { Location } from "../../location";
import { GetStaticPaths, GetStaticProps } from "next";
import { getLocationProps, getLocationPaths } from "../../location";
import Menu from "../../components/Menu";

export default function MenuPage(props: { location: Location }) {
  return (
    <>
      <Navbar location={props.location} />
      <Menu location={props.location} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getLocationProps(context);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return getLocationPaths(context);
};
