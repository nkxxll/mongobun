import { loadData } from "./load";
import "./style.css";

let app = document.getElementById("app")!;
app.innerHTML = `
<div id="data">
  Loading...
</div>
`;

let data: HTMLElement = document.getElementById("data")!;
loadData(data);
