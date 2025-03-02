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
