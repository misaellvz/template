const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");

const formatPrice = (price) => {

  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency", currency: "USD",
  }).format(price);
  return newPrice;
}
// Web api
// Conectar con el servidor
async function fetchData() {
  const response = await fetch(`${baseUrl}/api/avo`);
  // procesar la respuesta y converitrla a JSON
  const data = await response.json();
  const allItems = [];
  // Renderiza la respuesta
  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = `${baseUrl}${item.image}`;
    // create tittle
    const tittle = document.createElement("h2");
    tittle.className = "text-lg";
    tittle.textContent = item.name;
    //create price
    const price = document.createElement("div");
    price.className = "text-gray-600";
    price.textContent = formatPrice(item.price);
    //Que se cree no quiere decir que se agregue al DOM
    const container = document.createElement("div");
    container.classList.add("text-center");
    container.classList.add("border");
    container.classList.add("rounded-2xl");
    container.classList.add("shadow-2xl");
    container.classList.add("m-6");


    container.append(image, tittle, price);

    allItems.push(container);
  });
  // por eso acá lo agregamos
  const parent = document.createElement("div");
  parent.append(...allItems);
  parent.className = "flex justify-center flex-wrap";
  document.body.append(parent);
}

fetchData();
