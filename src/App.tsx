import { BellRing } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <>
      <div className="">
        <Alert
          type="alert-error"
          icon={<BellRing />}
          title="This is warning"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sint
          quidem facilis soluta quae numquam laboriosam expedita magni ratione
          ea."
        />
        <br />
        <Alert
          type="alert-default"
          icon={<BellRing />}
          title="This is warning"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sint
          quidem facilis soluta quae numquam laboriosam expedita magni ratione
          ea."
        />
        <br />

        <Alert type="alert-default" icon={<BellRing />} title="This is warning">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            sunt. <a href="#">Hello this is link</a>
          </div>
        </Alert>
      </div>
    </>
  );
}

export default App;
