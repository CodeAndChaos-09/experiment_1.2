const products = [
    { name: "Laptop", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "Jeans", category: "fashion" },
    { name: "T-Shirt", category: "fashion" },
    { name: "JavaScript Book", category: "books" },
    { name: "Data Science Book", category: "books" }
];

const productList = document.getElementById("product-list");
const filter = document.getElementById("filter");

function displayProducts(category) {
    productList.innerHTML = "";

    const filteredProducts =
        category === "all"
            ? products
            : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
        `;
        productList.appendChild(card);
    });
}

filter.addEventListener("change", () => {
    displayProducts(filter.value);
});

displayProducts("all");
