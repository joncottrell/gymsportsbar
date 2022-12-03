import Image from "next/image";
import Link from "next/link";
import { Location, LOCATION_DATA } from "../location";
import logoBright from "../images/logoBright.gif";

export default function Navbar({ location }: { location: Location }) {
  const locationData = LOCATION_DATA[location];
  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 bg-opacity-70 bg-black">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              className="mr-3 h-16 sm:h-24"
              src={logoBright}
              alt="Gym Sports Bar"
            />
          </Link>
          <div className="flex md:order-2">
            <button
              id="hamburger"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 headline tracking-wider"
            id="navbar-default"
          >
            <ul className="flex flex-col py-4 px-8 mt-4 uppercase bg-gray-600 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-600">
              <li>
                <a
                  href={`/${location}`}
                  className="block py-2 px-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-slate-700 md:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={`/${location}/events`}
                  className="block py-2 px-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-slate-700 md:p-0"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href={`/${location}/leagues`}
                  className="block py-2 px-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-slate-700 md:p-0"
                >
                  Leagues
                </a>
              </li>
              <li>
                <a
                  href={`/${location}/shop`}
                  className="block py-2 px-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-slate-700 md:p-0"
                >
                  Shop
                </a>
              </li>
              {location == "ny" && (
                <li>
                  <a
                    href={`/${location}/locker`}
                    className="block py-2 px-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-slate-700 md:p-0"
                  >
                    Locker Room
                  </a>
                </li>
              )}
              {location != "ny" && (
                <li>
                  <a
                    href={`/${location}/menu`}
                    className="block py-2 px-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-slate-700 md:p-0"
                  >
                    Menu
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`/${location}/contact`}
                  className="block py-2 px-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-slate-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
          <a
            href={locationData.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-500 hover:bg-opacity-80 bg-opacity-50 rounded p-4"
          >
            <div className="text-white text-4xl font-bold">
              <div className="flex flex-row flex-wrap justify-center items-center gap-x-2">
                <div className="uppercase text-center">{locationData.team}</div>
              </div>
            </div>
            <div className="text-blue-300 text-center text-sm">
              {locationData.address}
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}