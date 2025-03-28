document.addEventListener("DOMContentLoaded", function() {
    // Check if user has already used free trial
    let hasUsedTrial = localStorage.getItem("usedTrial");

    if (!hasUsedTrial) {
        alert("Welcome! You have a 30-minute free trial.");
        localStorage.setItem("usedTrial", "true"); // Mark trial as used
        setTimeout(() => {
            alert("Your free trial has ended. Please pay to continue.");
            window.location.href = "payment.html"; // Redirect to payment page
        }, 30 * 60 * 1000); // 30 minutes in milliseconds
    } else {
        alert("Free trial is over. Please log in and pay to continue.");
        window.location.href = "payment.html";
    }
});

// Function to simulate payment
function payForAccess() {
    alert("Payment successful! You have access for 12 hours.");
    localStorage.setItem("paidAccess", Date.now() + (12 * 60 * 60 * 1000)); // Store expiry time
}

// Function to check if access is still valid
function checkAccess() {
    let paidAccessExpiry = localStorage.getItem("paidAccess");

    if (paidAccessExpiry && Date.now() < paidAccessExpiry) {
        alert("Access granted!");
    } else {
        alert("Access expired. Please pay again.");
        window.location.href = "payment.html";
    }
}
