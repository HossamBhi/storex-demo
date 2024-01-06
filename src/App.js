import "./App.css";
import { SimpleForm } from "storex-demo-package";
function App() {
  return (
    <div className="App">
      <SimpleForm
        onSubmit={(e, values) => console.log({ values })}
        getApiData={(data) =>
          console.log("Api Data from storex-demo-package: ", data)
        }
      />
    </div>
  );
}

export default App;
