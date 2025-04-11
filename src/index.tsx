import { createRoot } from "react-dom/client";
// @ts-ignore
import "./app.css";
import { Main } from "./screens/Main";

createRoot(document.getElementById("app") as HTMLElement).render(<Main />);
