document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(function (slider) {
        let currentIndex = 0;

        function moveSlider() {
            currentIndex = (currentIndex + 1) % (slider.children.length-2);
            const translateValue = -currentIndex * 100;
            slider.style.transform = `translateX(${translateValue}%)`;
        }

        setInterval(moveSlider, 5000);
    });

    const gamesLink = document.querySelector('a[href="#Games"]');
    const animeLink = document.querySelector('a[href="#Anime"]');

    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);

        // Using scrollIntoView for smooth scrolling
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

    gamesLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('Games');
    });

    animeLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('Anime');
    });
    //Search Function
        var searchInput = document.getElementById('txt');
        var searchButton = document.getElementById('btn');
        var serviceItems = document.querySelectorAll('.img');

        searchButton.addEventListener('click', function () {
            var searchTerm = searchInput.value.toLowerCase();

            serviceItems.forEach(function (item) {
                var val = item.querySelector('.val').innerText.toLowerCase();

                if (val.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });


});