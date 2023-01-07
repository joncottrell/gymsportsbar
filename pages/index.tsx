import Link from "next/link";

export default function Main() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 flex flex-wrap justify-center logo-bg gap-4 h-full sm:h-fit w-fit">
        <div className="flex flex-col content-fit">
          <img src="/logo.gif" alt="Gym Sports Bar" className="aspect-auto" />
          <div className="flex flex-col h-full items-end justify-around py-4 text-3xl headline text-slate-100">
            <Link href="/ny" className="py-2 hover:text-sky-500">
              NEW YORK
            </Link>
            <Link href="/la" className="py-2 hover:text-sky-500">
              LOS ANGELES
            </Link>
            <Link href="/ftl" className="py-2 hover:text-sky-500">
              FORT LAUDERDALE
            </Link>
          </div>
        </div>
        <div>
          <iframe
            className="aspect-video max-w-full h-fit"
            src="https://player.vimeo.com/video/127615957?autoplay=1&muted=1&autopause=0&loop=1&title=0&byline=0&portrait=0 max-w-full"
            width="800"
            height="450"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
