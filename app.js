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

        const timeDifference = checkOutDate - checkInDate;

        const nights = Math.ceil(
            timeDifference / (1000 * 60 * 60 * 24)
        );

        const hotels = [

            {
                name: "Grand Hotel",
                rating: "8.5",
                agoda: 180,
                trip: 165,
                agodaLink: "#",
                tripLink: "#",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
            },

            {
                name: "Bayview Hotel",
                rating: "8.2",
                agoda: 150,
                trip: 142,
                agodaLink: "#",
                tripLink: "#",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
            },

            {
                name: "The Riverside Hotel",
                rating: "8.8",
                agoda: 220,
                trip: 199,
                agodaLink: "#",
                tripLink: "#",
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
            },

            {
                name: "City View Hotel",
                rating: "7.9",
                agoda: 130,
                trip: 125,
                agodaLink: "#",
                tripLink: "#",
                image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
            },

            {
                name: "Luxury Garden Hotel",
                rating: "9.1",
                agoda: 280,
                trip: 255,
                agodaLink: "#",
                tripLink: "#",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
            }

        ];

        /* SORT