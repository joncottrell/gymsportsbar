import { GetStaticPaths, GetStaticProps } from "next";
import nyLocationData from "./data/locations/ny.json";
import fs from "fs";

export const ALL_LOCATIONS = ["la", "ny", "ftl"] as const;

export type Location = typeof ALL_LOCATIONS[number];

export type LocationData = typeof nyLocationData;

// export type LocationData = { location: Location; team: string; address: string; mapsLink: string; timezone: string; }

// export const LOCATION_DATA: Record<Location, LocationData> = {
//   la: {
//     location: "la",
//     team: "West Hollywood",
//     address: "8919 Santa Monica Blvd",
//     mapsLink: "https://goo.gl/maps/982V6T1QBkPNC6J78",
//     timezone: "America/Los_Angeles"
//   },
//   ny: {
//     location: "ny",
//     team: "New York",
//     address: "167 8th Ave. @ 18/19th NYC",
//     mapsLink: "https://g.page/gymsportsbarny?share",
//     timezone: "America/New_York"
//   },
//   ftl: {
//     location: "ftl",
//     team: "Fort Lauderdale",
//     address: "2287 Wilton Dr",
//     mapsLink: "https://goo.gl/maps/7dh1Lh6bHHLnR1mt5",
//     timezone: "America/New_York"
//   },
// };

const allLocationData = () => {
  const allData: LocationData[] = [];
  fs.readdir("./data/locations", (err, files) => {
    files.forEach(file => {
      const locationData = JSON.parse(file) as LocationData;
      allData.push(locationData);
    });
  });
  return allData;
}

export const getLocationProps: GetStaticProps = async (context) => {
  return {
    props: {
      location: context.params?.location,
    }
  }
}

export const getLocationPaths: GetStaticPaths = async () => {
  return {
    paths: allLocationData().map(location => ({ params: { location: location.title } })),
    fallback: false,
  }
}