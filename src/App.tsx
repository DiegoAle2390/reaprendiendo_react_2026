import "./App.css";
import Card from "./components/Card";
// import Headers from "./components/Header";
import Hero from "./components/Hero";
import { Button } from "./components/ui/button";
import { TextHoverEffect } from "./components/ui/text-hover-effect";

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
    <>
      <Hero />
      {/* <Headers /> */}

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="h-80 flex items-center justify-center">
          <TextHoverEffect text="DiegoAle" />
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <Button>Clickeame</Button>
    </>
  );
}

export default App;
