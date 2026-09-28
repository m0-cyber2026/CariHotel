document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("searchButton");
    const destinationInput = document.getElementById("destination");
    const hotelResults = document.getElementById("hotelResults");

    searchButton.addEventListener("click", function () {

        const destination = destinationInput.value.trim();

        if (destination === "") {
            alert("Please enter a destination.");
            return;
        }

        const hotels = [
            {
                name: "Grand Hotel",
                rating: "8.5",
                agoda: "180",
                trip: "165"
            },
            {
                name: "Bayview Hotel",
                rating: "8.2",
                agoda: "150",
                trip: "142"
            },
            {
                name: "The Riverside Hotel",
                rating: "8.8",
                agoda: "220",
                trip: "199"
            },
            {
                name: "City View Hotel",
                rating: "7.9",
                agoda: "130",
                trip: "125"
            },
            {
                name: "Luxury Garden Hotel",
                rating: "9.1",
                agoda: "280",
                trip: "255"
            }
        ];

        hotelResults.innerHTML = "";

        hotels.forEach(function (hotel) {

            const hotelCard = document.createElement("div");

            hotelCard.className = "hotel-card";

            hotelCard.innerHTML = `

                <div class="hotel-image">
                    🏨
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

                            <strong>RM ${hotel.agoda}</strong>

                            <small>per night</small>

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