const mobile = document.querySelector('.menu-toggle')
const mobileLink = document.querySelector('.sidebar')

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active")
    mobileLink.classList.toggle("active")
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector("is-active")
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active")
        mobile.classList.toggle("active")
    }
})

var step = 100
var stepFilter = 60
var scrolling = true

// Add to cart functionality

document.addEventListener('DOMContentLoaded', function() {
    var cart = []; // Array to store added items

    // Add event listener to all add to cart buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get item details
            var item = this.parentNode;
            var itemName = item.getAttribute('data-name');
            var itemPrice = parseFloat(item.getAttribute('data-price'));

            // Add item to cart array
            cart.push({name: itemName, price: itemPrice});
        });
    });

    // Add event listener to view cart button
    document.getElementById('view-cart').addEventListener('click', function() {
        // Generate cart summary message
        var cartSummary = '';
        var totalPrice = 0;
        cart.forEach(function(item) {
            cartSummary += item.name + ' - Rs. ' + item.price + '<br>';
            totalPrice += item.price;
        });

        // Create popup window
        var popupWindow = window.open('', 'Cart Summary', 'width=400,height=300');
        popupWindow.document.write('<h2>Cart Summary</h2>');
        popupWindow.document.write(cartSummary);
        popupWindow.document.write('<p>Total Price: Rs' + totalPrice + '</p>');

        // Add Proceed to Payment button
        popupWindow.document.write('<button id="proceed-to-payment">Proceed to Payment</button>');

        // Add event listener to Proceed to Payment button
        popupWindow.document.getElementById('proceed-to-payment').addEventListener('click', function() {
            // Redirect user to payment page with order summary as query parameters
            var orderSummary = encodeURIComponent(JSON.stringify({cart: cart, totalPrice: totalPrice}));
            window.location.href = 'payment.html?orderSummary=' + orderSummary;
        });
    });
});
