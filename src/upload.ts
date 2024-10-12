const app = document.getElementById("app")!;

if (!app) {
  console.log("no app found");
}

app.innerHTML = `
<form 
  action="http://localhost:3000/api/upload" 
  method="POST" 
  class="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
>
  <h2 class="text-2xl font-semibold text-gray-800 mb-4">Add Stock</h2>
  
  <label class="block mb-3">
    <span class="text-gray-700">Symbol</span>
    <input type="text" name="symbol" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="e.g., AAPL" required>
  </label>
  
  <label class="block mb-3">
    <span class="text-gray-700">Name</span>
    <input type="text" name="name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="e.g., Apple Inc." required>
  </label>
  
  <label class="block mb-3">
    <span class="text-gray-700">Price</span>
    <input type="number" name="price" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="e.g., 150.00" step="0.01" required>
  </label>
  
  <label class="block mb-5">
    <span class="text-gray-700">Quantity</span>
    <input type="number" name="quantity" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="e.g., 100" required>
  </label>
  
  <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors">
    Add Stock
  </button>
</form>
  `;
