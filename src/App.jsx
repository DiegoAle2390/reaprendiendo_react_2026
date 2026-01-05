import "./App.css";
import Card from "./components/Card";

function App() {
  const data = [
    {
      title: "Cafe con leche",
      description: "Delicioso cafe con leche",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      title: "Cafe con medialuna",
      description: "Delicioso cafe con medialuna",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      title: "Te de canela",
      description: "Delicioso te de canela",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <h1 className="text-blue-600 dark:text-blue-400 border-2 p-4 rounded-xl mb-4">
        Modificado con OpenCode DiegoAle
      </h1>

      <div className="flex gap-4 flex-wrap justify-center">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            buttonLabel={item.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
