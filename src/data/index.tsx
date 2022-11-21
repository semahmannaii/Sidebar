import { Sidebar } from "../interfaces/Sidebar";
import { FaHome, FaLayerGroup, FaPhone } from "react-icons/fa";

export const data: Sidebar[] = [
    {
        title: "Home",
        path: "/",
        icon: <FaHome />
    },
    {
        title: "Services",
        path: "/services",
        icon: <FaLayerGroup />
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaPhone />
    }
]