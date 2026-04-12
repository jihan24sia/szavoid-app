import { createRoot } from "react-dom/client";
import "./tailwind.css";
import ServiceGuest from "./ServiceGuest";
import ServiceAdmin from "./ServiceAdmin";
// import ServiceAdmin from "./components/ServiceAdmin";

createRoot(document.getElementById("root"))
    .render(
        <div>
            
            <ServiceGuest/> 
            <ServiceAdmin/> 
        </div>
    )
    