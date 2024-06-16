document.addEventListener("DOMContentLoaded", function () {
    const cartItems = [];
    let isMember = false;
    const standardDeliveryFee = 30.00;

    const openPopup = (itemType, itemName) => {
        const popupId = `${itemType}-popup`;
        document.getElementById(popupId).style.display = "flex";
        document.getElementById(`${itemType}-customization-form`).dataset.itemName = itemName;
    };

    const closePopup = () => {
        document.getElementById("cake-popup").style.display = "none";
        document.getElementById("cookie-popup").style.display = "none";
        document.getElementById("drink-popup").style.display = "none";
    };

    const addToCart = (itemName, itemPrice, itemCustomization, quantity) => {
        const cartItem = {
            name: itemName,
            price: itemPrice,
            customization: itemCustomization,
            quantity: quantity
        };

        cartItems.push(cartItem);
        updateCart();
    };

    const updateCart = () => {
        const cartList = document.getElementById("cart-items");
        cartList.innerHTML = "";

        cartItems.forEach((item, index) => {
            let customizationDetails = "";
            if (item.customization) {
                customizationDetails = ` (${item.customization.size}, ${item.customization.sugar} sugar`;
                if (item.customization.ice) {
                    customizationDetails += `, ${item.customization.ice}`;
                }
                customizationDetails += ")";
            }
            const li = document.createElement("li");
            li.innerHTML = `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}${customizationDetails}
                            <button class="remove-item" data-index="${index}">&times;</button>`;
            cartList.appendChild(li);
        });

        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById("total-price").textContent = total.toFixed(2);

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.dataset.index;
                cartItems.splice(index, 1);
                updateCart();
            });
        });
    };
    const checkout = () => {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const deliveryFee = isMember ? 0 : standardDeliveryFee;
        const grandTotal = total + deliveryFee;

        document.getElementById("final-total-price").textContent = total.toFixed(2);
        document.getElementById("delivery-fee").textContent = deliveryFee.toFixed(2);
        document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
        document.getElementById("payment-popup").style.display = "flex";
    };

    const closePaymentPopup = () => {
        document.getElementById("payment-popup").style.display = "none";
    };

    const confirmPayment = () => {
        const paymentType = document.getElementById("payment-type").value;
        const customerName = document.getElementById("customer-name").value;
        const customerAddress = document.getElementById("customer-address").value;
        const deliveryDate = document.getElementById("delivery-date").value;

        if (!customerName || !customerAddress || !deliveryDate) {
            alert("Please enter your data and select delivery date.");
            return;
        }

        if (paymentType === "card") {
            const cardNumber = document.getElementById("card-number").value;
            if (!cardNumber) {
                alert("Please enter your card number.");
                return;
            }
            alert("Payment successful with card!");
        } else {
            alert("Payment successful with Cash on Delivery!");
        }
        document.getElementById("customer-name").value = "";
        document.getElementById("customer-address").value = "";
        document.getElementById("delivery-date").value = "";
        document.getElementById("card-number").value = "";
        cartItems.length = 0;

        updateCart();
        closePaymentPopup();
        closeCart();
    };

    const openCart = () => {
        document.getElementById("cart-popup").style.display = "flex";
    };

    const closeCart = () => {
        document.getElementById("cart-popup").style.display = "none";
    };

    const login = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username == "member" && password == "member") {
            isMember = true;
            alert("login successful");
            document.getElementById("member-status").textContent = "Member";
            document.getElementById("member-status").style.display = "inline";
            document.getElementById("member-info").textContent = "Free shipping for members!";
            closeLoginPopup();
        } else {
            alert("Invalid username or password.");
        }
        closeLoginPopup();
    };

    const openLoginPopup = () => {
        document.getElementById("login-popup").style.display = "flex";
    };

    const closeLoginPopup = () => {
        document.getElementById("login-popup").style.display = "none";
    };

    document.getElementById("cake-customization-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const form = e.target;
        const itemName = form.dataset.itemName;
        const sizeOption = form["cake-size"].selectedOptions[0];
        const itemPrice = parseFloat(sizeOption.dataset.price);
        const size = sizeOption.value;
        const sugar = form["sugar-level"].value;
        const quantity = parseInt(form["quantity"].value);

        const customization = {
            size: size,
            sugar: sugar
        };

        closePopup();
        addToCart(itemName, itemPrice, customization, quantity);
    });

    document.getElementById("cookie-customization-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const form = e.target;
        const itemName = form.dataset.itemName;
        const sizeOption = form["cookie-box-size"].selectedOptions[0];
        const itemPrice = parseFloat(sizeOption.dataset.price);
        const size = sizeOption.value;
        const sugar = form["cookie-sugar-level"].value;
        const quantity = parseInt(form["quantity"].value);

        const customization = {
            size: size,
            sugar: sugar
        };

        closePopup();
        addToCart(itemName, itemPrice, customization, quantity);
    });

    document.getElementById("drink-customization-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const form = e.target;
        const itemName = form.dataset.itemName;
        const sizeOption = form["drink-size"].selectedOptions[0];
        const itemPrice = parseFloat(sizeOption.dataset.price);
        const size = sizeOption.value;
        const sugar = form["drink-sugar-level"].value;
        const ice = form["drink-ice-level"].value;
        const quantity = parseInt(form["quantity"].value);

        const customization = {
            size: size,
            sugar: sugar,
            ice: ice
        };

        closePopup();
        addToCart(itemName, itemPrice, customization, quantity);
    });

    document.getElementById("checkout-button").addEventListener("click", checkout);
    document.getElementById("confirm-payment").addEventListener("click", confirmPayment);
    document.getElementById("close-cart").addEventListener("click", closeCart);
    document.getElementById("close-payment-popup").addEventListener("click", closePaymentPopup);
    document.getElementById("user-icon").addEventListener("click", openLoginPopup);
    document.getElementById("close-login-popup").addEventListener("click", closeLoginPopup);
    document.getElementById("login-button").addEventListener("click", login);

    document.getElementById("payment-type").addEventListener("change", function () {
        const cardDetails = document.getElementById("card-details");
        if (this.value === "card") {
            cardDetails.style.display = "block";
        } else {
            cardDetails.style.display = "none";
        }
    });

    const filterMenu = (category) => {
        const cakeItems = document.querySelectorAll('.card:not(.cookie-item):not(.drink-item)');
        const cookieItems = document.querySelectorAll('.cookie-item');
        const drinkItems = document.querySelectorAll('.drink-item');

        cakeItems.forEach(item => item.style.display = 'none');
        cookieItems.forEach(item => item.style.display = 'none');
        drinkItems.forEach(item => item.style.display = 'none');

        if (category === 'cakes') {
            cakeItems.forEach(item => item.style.display = 'block');
        } else if (category === 'cookies') {
            cookieItems.forEach(item => item.style.display = 'block');
        } else if (category === 'drinks') {
            drinkItems.forEach(item => item.style.display = 'block');
        }
    };

    document.getElementById("cakes-category").addEventListener("click", function () {
        filterMenu('cakes');
    });
    document.getElementById("cookies-category").addEventListener("click", function () {
        filterMenu('cookies');
    });
    document.getElementById("drinks-category").addEventListener("click", function () {
        filterMenu('drinks');
    });

    filterMenu('cakes');

    window.openPopup = openPopup;
    window.closePopup = closePopup;
    window.addToCart = addToCart;
    window.openCart = openCart;
    window.openLoginPopup = openLoginPopup;
    window.closeLoginPopup = closeLoginPopup;
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('Thank you for your feedback!');
    document.getElementById('contactForm').reset();
});

document.querySelector('.booking-container button[type="submit"]').addEventListener('click', function (event) {
    event.preventDefault();
    openBookingPopup();
});

document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Booking successful!');
    closeBookingPopup();
});

function openBookingPopup() {
    document.getElementById('booking-popup').style.display = 'flex';
}

function closeBookingPopup() {
    document.getElementById('booking-popup').style.display = 'none';
}
