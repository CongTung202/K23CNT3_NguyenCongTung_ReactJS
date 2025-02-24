import "./App.css";
import NctFuncEvent1 from "./NctFuncEvent1";
import NctClasEvent1 from "./NctClasEvent1";
import NctCompoEventProps from "./NctCompoEventProps";
import NctClassCompoEventProps from "./NctClassCompoEventProps";
import NctClassEventSate from "./NctClassEventSate";
import NctCompoEventPost from "./NctompoEventPost";

function App() {
  // Khai báo hàm đúng cách
  const NctompoEventPostUp = (content) => {
    alert(content);
  };

  return (
    <div className="container border mt-3">
      <h1 className="text-center alert alert-info my-2">Boka Chan 123</h1>
      <div>
        <h3>Func Compo</h3>
        <NctFuncEvent1 />
      </div>
      <div>
        <h3>Clas Compo</h3>
        <NctClasEvent1 />
      </div>
      <div>
        <h3>Func Props</h3>
        <NctCompoEventProps nctRenderName="Boka Chan" />
      </div>
      <div>
        <h3>Clas Props</h3>
        <NctClassCompoEventProps nctRenderTitle="TungLoveBocchi" />
      </div>
      <div>
        <h3>Clas Props States</h3>
        <NctClassEventSate />
      </div>
      <div>
        <h3>Clas Props States, Data to App</h3>
        <NctCompoEventPost onNctDataToApp={NctompoEventPostUp} />{" "}
        {/* Sửa tên hàm */}
      </div>
    </div>
  );
}

export default App;
