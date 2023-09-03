import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import weatherData from "./weatherData";
import Footer from "./components/Footer";

function App() {
  var tempData = weatherData.days;
  console.log(tempData[0]);
  return (
    <div>
      <Navbar />
      <WeatherCard
        name={weatherData.resolvedAddress}
        temperature={tempData[0].temp}
        conditions={tempData[0].conditions}
        description={tempData[0].description}
      />
      <Footer />
    </div>
  );
}

export default App;
