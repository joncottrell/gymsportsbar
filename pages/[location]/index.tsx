import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import { LocationData } from "../../location";
import { GetStaticPaths, GetStaticProps } from "next";
import { getLocationProps, getLocationPaths } from "../../location";
import { SocialIcon } from "react-social-icons";

export default function HomePage(props: { location: LocationData }) {
  return (
    <>
      <Navbar location={props.location} />
      <Main location={props.location} />
      <div style={{ height: "100px" }} />
      <footer className="fixed bottom-0 w-full ">
        <div className="flex flex-col justify-center items-center py-4">
          <div className="flex flex-row gap-4">
            {props.location.socials.map((social) => (
              <SocialIcon key={social.url} url={social.url} fgColor="white" />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getLocationProps(context);
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return getLocationPaths(context);
};
