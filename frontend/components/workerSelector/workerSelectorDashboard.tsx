 import WorkerSelectorPage from "./selectorDiv"
 import {Navbar} from "../navBar";
 import "leaflet/dist/leaflet.css";

export default function LoginDashboard() {
  return (
    <div>
      <Navbar />
      <WorkerSelectorPage/> 
    </div>
  );
}
