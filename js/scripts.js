const container = document.getElementById('content');
const banner = document.getElementById('banner');
const logo = document.getElementById('logo');

function createPlanetCard(planet) {
    const card = document.createElement('div');
    card.className = 'planet-card';
    card.innerHTML = `
                <div class="card" style="width: 18rem;">
                  <img src="images/banner.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${planet.name}</h5>
                    <p><strong>Climate:</strong> ${planet.climate}</p>
                    <p><strong>Terrain:</strong> ${planet.terrain}</p>
                    <p><strong>Population:</strong> ${planet.population}</p>
                    <a href="#" class="btn btn-dark">More</a>
                  </div>
                </div>            
                `;
    return card;
}

function showPlanetCard() {

    banner.style.display = "none";
    container.style.display = "flex";

    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            const planets = data.results;

            planets.forEach(planet => {
                const planetCard = createPlanetCard(planet);
                container.appendChild(planetCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function createPeopleCard(people) {
    const card = document.createElement('div');
    card.className = 'people-card';
    card.innerHTML = `
                <div class="card" style="width: 18rem;">
                  <img src="images/banner.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${people.name}</h5>
                    <p><strong>Gender:</strong> ${people.gender}</p>
                    <p><strong>Birth:</strong> ${people.birth_year}</p>
                    <p><strong>Height:</strong> ${people.height}</p>
                    <a href="#" class="btn btn-dark">More</a>
                  </div>
                </div>            
                `;
    return card;
}

function showPeopleCard() {

    banner.style.display = "none";
    container.style.display = "flex";

    fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            const peoples = data.results;

            peoples.forEach(people => {
                const peopleCard = createPeopleCard(people);
                container.appendChild(peopleCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function backBanner() {
    container.style.display = "none";
    banner.style.display = "block";
}

logo.addEventListener('click', (e) => {
    backBanner();
});
