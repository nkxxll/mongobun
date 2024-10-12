export function loadData(element: HTMLElement) {
  element.innerHTML = `
  <h1>Data from MongoDB</h1>
  <div id="table">
  </div>
  `;

  let table = document.getElementById("table")!;
  makeTable(table);
}

async function makeTable(table: HTMLElement) {
  let res: Response | undefined = undefined;
  try {
    res = await fetch("http://localhost:3000/api/mongo", {});
  } catch {
    setData(table, "aiaiaiai localhost 3000 downnnnn");
  }
  if (!res) {
    console.warn("request failed");
  }

  if (res && res.ok) {
    const json = await res.json();
    setData(table, json);
  }
  if (res && !res.ok) {
    console.log("not ok");
    setData(table, `${res.body}`);
  }
}

interface Stock {
  symbol: string;
  name: string;
  price: number;
  quantity: number;
}

// TODO: make an table here
function setData(data: HTMLElement, json: Array<Stock>) {
  let display =
    '<ul class="list-none p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">';
  json.forEach((element: Stock) => {
    display += `<li class="flex items-center p-3 mb-2 bg-white rounded-md shadow-sm hover:bg-blue-50 transition-colors">
    <span class="text-blue-500 mr-3">🔹</span>
    <span class="text-gray-800 font-semibold">symbol: ${element.symbol}, name: ${element.name}, price: ${element.price}, quantity: ${element.quantity}</span>
  </li>`;
  });
  display += "</ul>";
  data.innerHTML = display;
}
