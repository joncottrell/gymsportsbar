import Navbar from "../../components/Navbar";
import { LocationData } from "../../location";
import { GetStaticPaths, GetStaticProps } from "next";
import { getLocationProps, getLocationPaths } from "../../location";

export default function ShopPage(props: { location: LocationData }) {
  return (
    <>
      <Navbar location={props.location} />
      <div className="text-white text-center text-xl mx-8 p-2 md:text-3xl md:mx-30 md:p-4 border-rounded border">
        <h2>COMING SOON</h2>
        <p className="text-lg">You can ask your bartenders about our shirts!</p>
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
