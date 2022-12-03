import * as React from "react";
import { Location } from "../location";

export default function Events({ location }: { location: Location }) {
  const today = new Date().toISOString().split("T")[0];
  const todayRef = React.useRef<HTMLDivElement>(null);
  const months = [
    {
      name: "January",
      days: [
        {
          iso: "2022-11-19",
          date: "2022-11-19",
          events: [
            {
              title: "Event Name",
            },
          ],
        },
      ],
    },
  ];

  React.useEffect(() => {
    setTimeout(() => {
      todayRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {months.map((month, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center border border-slate-100 py-2 px-4 text-neutral-100"
        >
          <div className="text-2xl border-b w-full text-center p-2">
            {month.name}
          </div>
          <div className="flex flex-col font-family-verdana">
            {month.days.map((day) => (
              <div
                key={day.iso}
                ref={today == day.iso ? todayRef : null}
                className={`grid grid-cols-[100px_1fr] border-b py-1.5 px-2 transition-colors ${
                  today == day.iso ? "bg-slate-100 text-neutral-900" : ""
                }`}
              >
                <div>
                  {/* date */}
                  <span className="text-sm">{day.date}</span>
                  {/* weekday */}
                  <span className="text-lg font-semibold">{day.date}</span>
                </div>
                <div className="flex flex-col flex-grow md:text-base text-sm gap-1.5 py-1">
                  {day.events.map((event, index) => (
                    <h3 key={index}>{event.title}</h3>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
