//Task 1: Business Dashboard – DOM Element Selection and Creation


// Select the dashboard container using both getElementById and querySelector
const dashboard1 = document.getElementById("dashboard");
const dashboard2 = document.querySelector("#dashboard");

// Create a new div element for the metric card
const revenueCard = document.createElement("div");

// Set attributes (class and id)
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Add title and placeholder value
revenueCard.innerHTML = `
    <h2>Revenue</h2>
    <p>$0</p>
`;

// Append the new metric card to the dashboard container
dashboard1.appendChild(revenueCard);

console.log("Revenue metric card added successfully!");


//Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays


// Select all metric cards using querySelectorAll
const metricCards = document.querySelectorAll(".metric-card");

// Convert NodeList to an array (Option 1: Using Array.from)
const cardsArray = Array.from(metricCards);

// Convert NodeList to an array (Option 2: Using Spread Operator)
// const cardsArray = [...metricCards];

// Use forEach() to update each metric card
cardsArray.forEach((card, index) => {
    // Append " - Updated" to each card's title
    let titleElement = card.querySelector("h2");
    titleElement.textContent += " - Updated";

    // Change the background color dynamically
    const colors = ["#ffcccb", "#d4edda", "#cce5ff"]; // Light red, green, blue
    card.style.backgroundColor = colors[index % colors.length];
});

console.log("All metric cards updated successfully!");


//Task 3: Dynamic Inventory Management – Adding and Removing Items


// Select the inventory list
const inventoryList = document.getElementById("inventoryList");

// Function to add a new product
function addProduct() {
    // Create a new list item
    const newItem = document.createElement("li");

    // Generate a random product name
    const productNames = ["Laptop", "Phone", "Headphones", "Tablet", "Smartwatch"];
    const randomProduct = productNames[Math.floor(Math.random() * productNames.length)];

    // Set attributes for the new item
    newItem.setAttribute("class", "product-item"); // Adds styling class
    newItem.setAttribute("data-product", randomProduct); // Custom attribute

    // Set the text content to the product name
    newItem.textContent = randomProduct;

    // Add a click event to remove the item when clicked
    newItem.addEventListener("click", function () {
        removeProduct(newItem);
    });

    // Append the new item to the inventory list
    inventoryList.appendChild(newItem);
}

// Function to remove a product when clicked
function removeProduct(item) {
    inventoryList.removeChild(item);
}


//Task 4: Business Customer Section – Handling Event Bubbling

// Select the parent container
const customerSection = document.getElementById("customerSection");

// Add a click event listener to the parent container
customerSection.addEventListener("click", function () {
    console.log("Customer section clicked!");
});

// Select all customer cards
const customerCards = document.querySelectorAll(".customer-card");

// Add a click event listener to each customer card
customerCards.forEach(card => {
    card.addEventListener("click", function (event) {
        console.log("Customer card clicked!");
        event.stopPropagation(); // Prevents the parent’s event from triggering
    });
});
