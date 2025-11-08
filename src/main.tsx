import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./firebaseConfig"; //added

createRoot(document.getElementById("root")!).render(<App />);
