import Button from "./Button";

function Card({ title, description, image }) {
  return (
    <div
      id="card1"
      className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow hover:shadow-lg"
    >
      <img
        className="w-full h-64 object-cover"
        src={image}
        alt="Imagen de muestra"
      />

      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        <p className="mt-2 text-gray-600 text-sm">{description}</p>

        <Button />
      </div>
    </div>
  );
}

export default Card;
