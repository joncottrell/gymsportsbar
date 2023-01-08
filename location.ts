import { GetStaticPaths, GetStaticProps } from "next";
import laLocationData from "./data/locations/la.json";
import fs from "fs";
import path from "path";

export type LocationData = typeof laLocationData;

const allLocationData = () => {
  const locationDataPath = "./data/locations";
  return fs
    .readdirSync(locationDataPath)
    .filter((filename) => path.extname(filename) == ".json")
    .map((filename) => fs.readFileSync(`${locationDataPath}/${filename}`))
    .map((file) => {
      const locationData = JSON.parse(`${file}`) as LocationData;
      return locationData;
    });
};

// Only use from getStaticPaths or getStaticProps
export const ALL_LOCATION_DATA = allLocationData();

export const getLocationProps: GetStaticProps = async (context) => {
  return {
    props: {
      location: ALL_LOCATION_DATA.find((data) => data.title == context.params?.location)!,
    }
  }
}

export const getLocationPaths: GetStaticPaths = async () => {
  return {
    paths: ALL_LOCATION_DATA.map(location => ({ params: { location: location.title } })),
    fallback: false,
  }
}