let totalBill = 0;

function order(foodName, price) {
    // Add the price to the total bill
    totalBill = totalBill + price;
    
    // Update the number on the screen
    document.getElementById("total-price").innerText = totalBill;
    
    alert(foodName + " added! Current total: $" + totalBill);
}

function checkout() {
    if (totalBill === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to payment for: $" + totalBill);
        // Reset after "buying"
        totalBill = 0;
        document.getElementById("total-price").innerText = totalBill;
    }
}
function searchFood() {
    // 1. Get the text typed in the search bar
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // 2. Get all the food cards
    let cards = document.getElementsByClassName('food-card');

    // 3. Loop through every card
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        // 4. If the title matches the search, show it. If not, hide it.
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
function filterCategory(category) {
    let cards = document.getElementsByClassName('food-card');

    for (let i = 0; i < cards.length; i++) {
        // Get the category of the current card
        let cardCategory = cards[i].getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            cards[i].style.display = "block"; // Show it
        } else {
            cards[i].style.display = "none";  // Hide it
        }
    }
}
function checkout() {
    if (totalBill === 0) {
        alert("Your cart is empty!");
    } else {
        // Show a message on the screen instead of a popup
        const statusBox = document.querySelector('.checkout-box');
        statusBox.innerHTML = `
            <h3 style="color: #2a9d8f;">✅ Order Placed!</h3>
            <p>Your driver is picking up the food...</p>
            <p>Estimated Arrival: 25 mins</p>
        `;

        // Reset everything after 5 seconds to look like a new order
        setTimeout(() => {
            location.reload(); // This refreshes the page automatically
        }, 5000);
    }
}