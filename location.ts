import { GetStaticPaths, GetStaticProps } from "next";

export const ALL_LOCATIONS = ["la", "ny", "ftl"] as const;

export type Location = typeof ALL_LOCATIONS[number];

export type LocationData = { location: Location; team: string; address: string; mapsLink: string }

export const LOCATION_DATA: Record<Location, LocationData> = {
  la: {
    location: "la",
    team: "West Hollywood",
    address: "8919 Santa Monica Blvd",
    mapsLink: "https://goo.gl/maps/982V6T1QBkPNC6J78",
  },
  ny: {
    location: "ny",
    team: "New York",
    address: "167 8th Ave. @ 18/19th NYC",
    mapsLink: "https://g.page/gymsportsbarny?share",
  },
  ftl: {
    location: "ftl",
    team: "Fort Lauderdale",
    address: "2287 Wilton Dr",
    mapsLink: "https://goo.gl/maps/7dh1Lh6bHHLnR1mt5",
  },
};

export const getLocationProps: GetStaticProps = async (context) => {
  return {
    props: {
      location: context.params?.location,
    }
  }
}

export const getLocationPaths: GetStaticPaths = async () => {
  return {
    paths: ALL_LOCATIONS.map(location => ({ params: { location } })),
    fallback: false,
  }
}