import * as React from "react";
import { Location, LOCATION_DATA } from "../location";
import { DateTime } from "luxon";
import recurringData from "../data/recurring.json";
import eventsData from "../data/events.json";

function getEvents(location: Location) {
  const events = eventsData[location];
  const recurring = recurringData[location];

  const start = DateTime.now()
    .setZone(LOCATION_DATA[location].timezone)
    .startOf("month");
  const end = start.plus({ months: 2 }).endOf("month");

  let results: {
    start?: string;
    end?: string;
    name: string;
    url?: string;
    date: DateTime;
  }[] = [];
  let days: DateTime[] = [];
  let day = start;
  while (day < end) {
    days.push(day);
    results = [
      ...results,
      ...recurring
        .filter((event) => event.weekday == day.weekday)
        .map((event) => ({
          start: event.start,
          end: event.end,
          name: event.name,
          url: event.url,
          date: day,
        })),
      ...events
        .filter((event) => day.hasSame(DateTime.fromISO(event.date), "day"))
        .map((event) => ({
          start: event.start,
          end: event.end,
          name: event.name,
          url: event.url,
          date: day,
        })),
    ];
    day = day.plus({ days: 1 });
  }

  let months: DateTime[] = [];

  let month = start;
  while (month.toMillis() < end.toMillis()) {
    console.log(`month: ${month.toISODate()}`);
    months.push(month);
    month = month.plus({ months: 1 });
  }

  results.sort((a, b) => {
    const dateDiff = a.date.toMillis() - b.date.toMillis();
    if (dateDiff != 0) {
      return dateDiff;
    }
    if (a.start == b.start) {
      return 0;
    } else if (!a.start) {
      return -1;
    } else if (!b.start) {
      return 1;
    } else {
      return a.start < b.start ? -1 : 1;
    }
  });

  return { months, days, events: results };
}

export default function Events({ location }: { location: Location }) {
  const today = DateTime.now()
    .setZone(LOCATION_DATA[location].timezone)
    .toISODate();
  const todayRef = React.useRef<HTMLDivElement>(null);

  const { months, days, events } = getEvents(location);

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
          className="flex flex-col justify-center items-center border border-slate-100 py-2 px-4 text-neutral-100 w-full max-w-[600px]"
        >
          <div className="text-2xl border-b w-full text-center p-2">
            {month.toLocaleString({ month: "long", year: "numeric" })}
          </div>
          <div className="flex flex-col font-family-verdana w-full">
            {days
              .filter((day) => day.hasSame(month, "month"))
              .map((day) => (
                <div
                  key={day.toISODate()}
                  ref={today == day.toISODate() ? todayRef : null}
                  className={`grid grid-cols-[100px_1fr] border-b py-1.5 px-2 transition-colors ${
                    today == day.toISODate()
                      ? "bg-slate-100 text-neutral-900"
                      : ""
                  }`}
                >
                  <div>
                    {/* date */}
                    <span className="text-sm">
                      {day.toLocaleString({ day: "numeric" })}
                    </span>
                    {/* weekday */}
                    <span className="text-lg font-semibold px-2">
                      {day.toLocaleString({ weekday: "short" })}
                    </span>
                  </div>
                  <div className="flex flex-col flex-grow md:text-base text-sm gap-1.5 py-1">
                    {events
                      .filter((event) => day.hasSame(event.date, "day"))
                      .map((event, index) => (
                        <h3 key={index}>{event.name}</h3>
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
