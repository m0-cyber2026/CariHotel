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

        hotelResults.innerHTML = `

            <div class="hotel-card">

                <div class="hotel-image">
                    🏨
                </div>

                <div class="hotel-info">

                    <h3>Grand Hotel ${destination}</h3>

                    <div class="rating">
                        ⭐ 8.5 · Excellent
                    </div>

                    <p class="location">
                        📍 ${destination}
                    </p>

                    <div class="price-comparison">

                        <div class="booking-option">
                            <span>Agoda</span>
                            <strong>RM 180</strong>
                            <small>per night</small>
                            <button class="deal-button">
                                View Deal
                            </button>
                        </div>

                        <div class="booking-option cheapest">

                            <span>Trip.com</span>

                            <strong>RM 165</strong>

                            <small>per night</small>

                            <button class="deal-button">
                                View Deal
                            </button>

                            <label>CHEAPER</label>

                        </div>

                    </div>

                </div>

            </div>

        `;

        document.getElementById("resultsSection").scrollIntoView({
            behavior: "smooth"
        });

    });

});