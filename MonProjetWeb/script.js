document.addEventListener("DOMContentLoaded", function () {
  
  let locationElement = document.getElementById("location");
  let propertyCountElement = document.getElementById("propertyCount");

  
  let currentLocation = "Mauritius";
  let propertyCount = 6; 

  
  locationElement.textContent = `Home > ${currentLocation}`;
  propertyCountElement.innerHTML = `
      <bold>${propertyCount}</bold> Properties For Sale in <bold>${currentLocation}</bold>
  `;
});


// Scroll
document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('.category');
    let navLinks = document.querySelectorAll('.nav a');

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
