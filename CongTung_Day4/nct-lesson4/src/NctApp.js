import "./App.css";
import NctClasscompo from "./components/NctClasscompo";
import NctFunccompo from "./components/NctFunccompo";
import NctFunccompo1 from "./components/NctFunccompo1";
function App() {
  //object
  const users = {
    name: "Lee Van Seen",
    address: "Nigeria",
    age: 25,
    hotline: "0987654321",
  };
  return (
    <div className="container border mt-3">
      <h1>Components-State-Props</h1>
      <hr />
      <div className="alert alert-danger">
        Boka-Chan
        <NctFunccompo
          name="Tung"
          address="Ninh Binh"
          age="20"
          hotline="0334402527"
        />
      </div>
      <div className="alert alert-info">
        <NctFunccompo1 renderInfo={users} />
      </div>
      <div>
        <NctClasscompo />
      </div>
      {/* data from app->funccompo */}
      <div>
        <NctClasscompo
          rendername="YahoooooTao"
          rendernoitice="Take The Phone Now"
          renderUsers={users}
        />
      </div>
    </div>
  );
}

export default App;
