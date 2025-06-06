import { ServiceContainer } from './ServicesContainer';
 import {Navbar} from "../navBar";
 import "leaflet/dist/leaflet.css";

export default function LoginDashboard() {
  return (
    <div>
      <Navbar />
      <ServiceContainer/> 
    </div>
  );
}
