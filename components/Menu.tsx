import { Location } from "../location";
import menus from "../data/menu.json";

export default function Menu(props: { location: Location }) {
  const menu = menus[props.location];
  return (
    <div className="container mx-auto">
      {menu.sections.map((section, index) => (
        <div key={index}>
          <h2 className="font-bold text-xl text-white px-4">{section.name}</h2>
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
