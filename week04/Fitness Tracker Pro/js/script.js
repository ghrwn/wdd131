const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  }
];

// Function to generate and display temple cards
function displayTemples(temples) {
  const templeContainer = document.getElementById('temple-cards'); 
  templeContainer.innerHTML = ''; 

  temples.forEach(temple => {
    const card = `
      <div class="temple-card">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sqft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
      </div>
    `;
    templeContainer.innerHTML += card;
  });
}

// Call the function to display temples
displayTemples(temples);

// Filter for temples built before 1900
function filterOldTemples(temples) {
  return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
}

// Filter for temples built after 2000
function filterNewTemples(temples) {
  return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
}

// Filter for large temples (area greater than 90,000 sqft)
function filterLargeTemples(temples) {
  return temples.filter(temple => temple.area > 90000);
}

// Filter for small temples (area less than 10,000 sqft)
function filterSmallTemples(temples) {
  return temples.filter(temple => temple.area < 10000);
}

// Event listeners for filter buttons
document.getElementById('old-filter').addEventListener('click', () => displayTemples(filterOldTemples(temples)));
document.getElementById('new-filter').addEventListener('click', () => displayTemples(filterNewTemples(temples)));
document.getElementById('large-filter').addEventListener('click', () => displayTemples(filterLargeTemples(temples)));
document.getElementById('small-filter').addEventListener('click', () => displayTemples(filterSmallTemples(temples)));
document.getElementById('home-filter').addEventListener('click', () => displayTemples(temples));

// Display last modified date in the footer
document.querySelector('#lastModified').textContent = `Last modified: ${document.lastModified}`;