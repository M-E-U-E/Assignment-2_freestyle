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

    let adultCount = 2;
    let childCount = 0;

    function updateTotal() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
        const travelerCount = adultCount + childCount;

        if (nights > 0 && travelerCount > 0) {
            const totalPrice = nights * pricePerNight * travelerCount;
            totalInfo.textContent = `Total for ${travelerCount} traveler${travelerCount > 1 ? 's' : ''}, ${nights} night${nights > 1 ? 's' : ''}`;
            totalPriceElement.textContent = `$${totalPrice}`;
            document.getElementById("charge-message").textContent = `You will be charged $${totalPrice} USD`;
        } else {
            totalInfo.textContent = "Please select valid dates";
            totalPriceElement.textContent = "$0";
            document.getElementById("charge-message").textContent = "You will not be charged yet";
        }
    }

    startDateInput.addEventListener("change", function() {
        endDateInput.min = startDateInput.value;
        updateTotal();
    });
    
    endDateInput.addEventListener("change", updateTotal);

    travelerBox.addEventListener("click", function() {
        travelerOptions.style.display = travelerOptions.style.display === "none" ? "block" : "none";
    });

    function updateTravelerDisplay() {
        const total = adultCount + childCount;
        totalTravelers.textContent = `${total} traveler${total > 1 ? 's' : ''}`;
        updateTotal();
    }

    document.getElementById("adult-increment").addEventListener("click", function() {
        adultCount++;
        adultCountElement.textContent = adultCount;
        document.getElementById("adult-decrement").disabled = adultCount <= 1;
        updateTravelerDisplay();
    });

    document.getElementById("adult-decrement").addEventListener("click", function() {
        if (adultCount > 1) {
            adultCount--;
            adultCountElement.textContent = adultCount;
            document.getElementById("adult-decrement").disabled = adultCount <= 1;
            updateTravelerDisplay();
        }
    });

    document.getElementById("child-increment").addEventListener("click", function() {
        childCount++;
        childCountElement.textContent = childCount;
        document.getElementById("child-decrement").disabled = childCount <= 0;
        updateTravelerDisplay();
    });

    document.getElementById("child-decrement").addEventListener("click", function() {
        if (childCount > 0) {
            childCount--;
            childCountElement.textContent = childCount;
            document.getElementById("child-decrement").disabled = childCount <= 0;
            updateTravelerDisplay();
        }
    });

    document.getElementById("done-btn").addEventListener("click", function() {
        travelerOptions.style.display = "none";
    });
});

// JavaScript Gallery Functionality
// Array of 31 images
const images = [
    { src: 'image1.png', title: 'Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required' },
    { src: 'image2.png', title: 'Top right image' },
    { src: 'image3.png', title: 'Middle right image' },
    { src: 'image4.png', title: 'Bottom left image' },
    { src: 'image5.png', title: 'Bottom middle image' },
    { src: 'image6.png', title: 'Bottom right image' },
    { src: 'image7.png', title: 'Additional Image 1' },
    { src: 'image8.png', title: 'Additional Image 2' },
    { src: 'image9.png', title: 'Additional Image 3' },
    { src: 'image10.png', title: 'Additional Image 4' },
    { src: 'image11.png', title: 'Additional Image 5' },
    { src: 'image12.png', title: 'Additional Image 6' },
    { src: 'image13.png', title: 'Additional Image 7' },
    { src: 'image14.png', title: 'Additional Image 8' },
    { src: 'image15.png', title: 'Additional Image 9' },
    { src: 'image16.png', title: 'Additional Image 10' },
    { src: 'image17.png', title: 'Additional Image 11' },
    { src: 'image18.png', title: 'Additional Image 12' },
    { src: 'image19.png', title: 'Additional Image 13' },
    { src: 'image20.png', title: 'Additional Image 14' },
    { src: 'image21.png', title: 'Additional Image 15' },
    { src: 'image22.png', title: 'Additional Image 16' },
    { src: 'image23.png', title: 'Additional Image 17' },
    { src: 'image24.png', title: 'Additional Image 18' },
    { src: 'image25.png', title: 'Additional Image 19' },
    { src: 'image26.png', title: 'Additional Image 20' },
    { src: 'image27.png', title: 'Additional Image 21' },
    { src: 'image28.png', title: 'Additional Image 22' },
    { src: 'image29.png', title: 'Additional Image 23' },
    { src: 'image30.png', title: 'Additional Image 24' },
    { src: 'image31.png', title: 'Additional Image 25' }
];

let currentIndex = 0;

// Function to open the gallery lightbox
function openGallery(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCounter = document.getElementById('lightboxCounter');

    // Set the current image, title, and counter
    lightboxImage.src = images[currentIndex].src;
    lightboxTitle.textContent = images[currentIndex].title;
    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    lightbox.style.display = 'flex';
}
// Function to close the gallery lightbox
function closeGallery() {
    document.getElementById('lightbox').style.display = 'none';
}

// Function to navigate through the images
function changeImage(direction) {
    // Update current index
    currentIndex += direction;

    // Wrap around if going beyond the bounds of the array
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Update the lightbox content
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCounter = document.getElementById('lightboxCounter');

    lightboxImage.src = images[currentIndex].src;
    lightboxTitle.textContent = images[currentIndex].title;
    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}
document.querySelectorAll('.gallery-item img').forEach((img, index) => {
    img.addEventListener('click', () => openGallery(index));
});
