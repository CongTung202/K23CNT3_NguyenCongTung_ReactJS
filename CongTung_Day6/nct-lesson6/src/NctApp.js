import "./App.css";
import NctClassEventForm1 from "./components/NctClassEventForm1";
import NctClassEventForm2 from "./components/NctClassEventForm2";
import NctClassEventForm3 from "./components/NctClassEventForm3";
import NctClassEventForm4 from "./components/NctClassEventForm4";
import NctClassEventForm5 from "./components/NctClassEventForm5";

function App() {
  return (
    <div className="container border my-3 bg-white">
      <h1 className="text-center">Event Form -Demo</h1>
      <div>
        <NctClassEventForm1 />
        <NctClassEventForm2 />
        <NctClassEventForm3 />
        <NctClassEventForm4 />
        <NctClassEventForm5 />
      </div>
    </div>
  );
}

export default App;
