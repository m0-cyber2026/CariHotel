document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("searchButton");

    const destinationInput = document.getElementById("destination");
    const checkInInput = document.getElementById("checkIn");
    const checkOutInput = document.getElementById("checkOut");
    const guestsInput = document.getElementById("guests");

    const hotelResults = document.getElementById("hotelResults");

    searchButton.addEventListener("click", function () {

        const destination = destinationInput.value.trim();
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        const guests = guestsInput.value;

        if (destination === "") {
            alert("Please enter a destination.");
            return;
        }

        if (checkIn === "" || checkOut === "") {
            alert("Please select check-in and check-out dates.");
            return;
        }

        if (checkOut <= checkIn) {
            alert("Check-out date must be after check-in date.");
            return;
        }
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

         const timeDifference = checkOutDate -      checkInDate;

const nights = Math.ceil(
    timeDifference / (1000 * 60 * 60 * 24)
);

        const hotels = [
    {
        name: "Grand Hotel",
        rating: "8.5",
        agoda: "180",
        trip: "165",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Bayview Hotel",
        rating: "8.2",
        agoda: "150",
        trip: "142",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "The Riverside Hotel",
        rating: "8.8",
        agoda: "220",
        trip: "199",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "City View Hotel",
        rating: "7.9",
        agoda: "130",
        trip: "125",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Luxury Garden Hotel",
        rating: "9.1",
        agoda: "280",
        trip: "255",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    }
];

        hotelResults.innerHTML = `

            <div class="search-summary">

                <p>
                    <strong>${destination}</strong>
                </p>

                <p>
                    ${checkIn} → ${checkOut}
                </p>

                <p>
                    ${guests} guest(s)
                </p>

            </div>

        `;

        hotels.forEach(function (hotel) {

            const hotelCard = document.createElement("div");

            hotelCard.className = "hotel-card";

            hotelCard.innerHTML = `

                <div class="hotel-image">
    <img src="${hotel.image}" alt="${hotel.name}">
</div>

                <div class="hotel-info">

                    <h3>${hotel.name} ${destination}</h3>

                    <div class="rating">
                        ⭐ ${hotel.rating} · Excellent
                    </div>

                    <p class="location">
                        📍 ${destination}
                    </p>

                    <div class="price-comparison">

                        <div class="booking-option">

                            <span>Agoda</span>

                          <strong>RM ${hotel.agoda * nights}</strong>

<small>RM ${hotel.agoda} per night · ${nights} nights</small>

                            <button class="deal-button">
                                View Deal
                            </button>

                        </div>

                        <div class="booking-option cheapest">

                            <span>Trip.com</span>

                            <strong>RM ${hotel.trip}</strong>

                            <small>per night</small>

                            <button class="deal-button">
                                View Deal
                            </button>

                            <label>CHEAPER</label>

                        </div>

                    </div>

                </div>

            `;

            hotelResults.appendChild(hotelCard);

        });

        document.getElementById("resultsSection").scrollIntoView({
            behavior: "smooth"
        });

    });

});