document.addEventListener("DOMContentLoaded", function() {
    const pricePerNight = 134;
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");
    const travelerBox = document.getElementById("traveler-box");
    const travelerOptions = document.getElementById("traveler-options");
    const totalTravelers = document.getElementById("total-travelers");
    const adultCountElement = document.getElementById("adult-count");
    const childCountElement = document.getElementById("child-count");
    const totalInfo = document.getElementById("total-info");
    const totalPriceElement = document.getElementById("total-price");
    
    // Initialize counts
    let adultCount = 2;
    let childCount = 0;

    // Set minimum date to today
    const today = new Date().toISOString().split("T")[0];
    startDateInput.min = today;
    endDateInput.min = today;

    function updateTotal() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
        const travelerCount = adultCount + childCount;
    
        if (nights > 0 && travelerCount > 0) {
            const totalPrice = nights * pricePerNight * travelerCount;
            totalInfo.textContent = `Total for ${travelerCount} traveler${travelerCount > 1 ? 's' : ''}, ${nights} night${nights > 1 ? 's' : ''}`;
            totalPriceElement.textContent = `$${totalPrice}`;
    
            // Update the message with the total amount
            document.getElementById("charge-message").textContent = `You will be charged $${totalPrice} USD`;
        } else {
            totalInfo.textContent = "Please select valid dates";
            totalPriceElement.textContent = "$0";
    
            // Reset the message to the default text
            document.getElementById("charge-message").textContent = "You will not be charged yet";
        }
    }

    // Event listeners for date inputs
    startDateInput.addEventListener("change", function() {
        endDateInput.min = startDateInput.value;
        updateTotal();
    });
    
    endDateInput.addEventListener("change", updateTotal);

    // Event listeners for traveler box toggle
    travelerBox.addEventListener("click", function() {
        travelerOptions.style.display = travelerOptions.style.display === "none" ? "block" : "none";
    });

    // Update traveler count display
    function updateTravelerDisplay() {
        const total = adultCount + childCount;
        totalTravelers.textContent = `${total} traveler${total > 1 ? 's' : ''}`;
        updateTotal();
    }

    // Increment and decrement functions
    document.getElementById("adult-increment").addEventListener("click", function() {
        adultCount++;
        adultCountElement.textContent = adultCount;
        updateTravelerDisplay();
    });

    document.getElementById("adult-decrement").addEventListener("click", function() {
        if (adultCount > 1) {
            adultCount--;
            adultCountElement.textContent = adultCount;
            updateTravelerDisplay();
        }
    });

    document.getElementById("child-increment").addEventListener("click", function() {
        childCount++;
        childCountElement.textContent = childCount;
        updateTravelerDisplay();
    });

    document.getElementById("child-decrement").addEventListener("click", function() {
        if (childCount > 0) {
            childCount--;
            childCountElement.textContent = childCount;
            updateTravelerDisplay();
        }
    });

    // Close traveler options on "Done" button click
    document.getElementById("done-btn").addEventListener("click", function() {
        travelerOptions.style.display = "none";
    });
});
