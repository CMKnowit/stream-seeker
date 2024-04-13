import Card from "./Card";

export default function Row({ title, items }) {
  return (
    <div className="my-8 mx-4">
      <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto overflow-y-hidden space-x-4">
        {items.map((item, index) => (
          <Card key={`${title}Row${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
