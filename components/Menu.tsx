import { LocationData } from "../location";

export default function Menu(props: { location: LocationData }) {
  const menu = props.location.menu;
  return (
    <div className="container mx-auto">
      {menu.map((section, index) => (
        <div key={index}>
          <h2 className="font-bold text-xl text-white px-4">
            {section.section}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 m-6">
            {section.items.map((item, index) => (
              <div key={index} className="flex flex-col p-2">
                <div className="font-bold text-white">{item.name}</div>
                <div className="text-slate-400">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
