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

                <h3>Hotels in ${destination}</h3>

                <p>
                    Hotel search results for ${destination} will appear here.
                </p>

                <div class="price">
                    Agoda: Checking price...
                </div>

                <div class="price">
                    Trip.com: Checking price...
                </div>

            </div>
        `;

        document.getElementById("resultsSection").scrollIntoView({
            behavior: "smooth"
        });

    });

});