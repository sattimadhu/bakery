async function fetchProducts() {
    const response = await fetch('cardData.json');
    const products = await response.json();
    createProductCards(products);
}

// function to create product cards
function createProductCards(products) {
    const productsContainer = document.getElementById("products");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = `col-sm-6 col-md-3 product-item ${product.category}`;
        productCard.innerHTML = `
            <div class="card">
                <a href="#" class="poster-link"><img src="${product.image_link}" class="card-img-top" alt="${product.name}"></a>
                <div class="card-body">
                    <h6 class="card-title title">${product.name}</h6>
                    <h6 class="card-subtitle price">&#8377; ${product.price}</h6>
                    <div class="card-text summary" >${product.summary}</div>
                    <div class="d-flex addcart">
                        <a href="#" class="btn btn-success">Add to cart</a>
                        <input type="text" class="form-control inp-co ml-2" placeholder="Qty" min="1" max="99" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                    </div>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// function to filter products
function filterProducts() {
    const category = document.getElementById("category").value;
    const items = document.querySelectorAll(".product-item");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// fetch products and filter
fetchProducts().then(() => filterProducts());