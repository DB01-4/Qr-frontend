import "./App.css";
import Create from "./components/Create";
import FetchQrLink from "./components/FetchQrLink";
import "@fontsource/roboto/500.css";

function App() {
  return (
    <div class="container">
      <center>
        <div class="vertical-center">
          <Create />
          <FetchQrLink />
        </div>
      </center>
    </div>
  );
}

export default App;
