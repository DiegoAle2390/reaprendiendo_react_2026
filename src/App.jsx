import './App.css'
import Card from './components/Card';

function App() {
  const data = [
    {
      title: "Cafe con leche",
      description: "Delicioso cafe con leche",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      buttonLabel: "Saborealo Ahora"
    },
    {
      title: "Cafe con medialuna",
      description: "Delicioso cafe con medialuna",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      buttonLabel: "Obtenlo Ahora"
    },
    {
      title: "Te de canela",
      description: "Delicioso te de canela",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    }
  ];

  return (
    <>
      <h1 className="text-blue-600 dark:text-blue-400 border-2 p-4 rounded-xl">
        Aprendiendo React con AI
      </h1>

      <div className="flex gap-4">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} image={item.image} buttonLabel={item.buttonLabel} />
        ))}
      </div>
    </>
  )
}

export default App
