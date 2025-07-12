// Task 1
function filterPlacesByType(typePreference) {
    let filteredPlaces = [];
    for (let place of PLACES) {
      if (place.type === typePreference) {
        filteredPlaces.push(place);
      }
    }
    return filteredPlaces;
  }
  
  // Task 2
  function createCard(place) {
    let div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
        <img src="${place.img}" class="card-img-top h-100" alt="${place.name}">
        <div class="card-body">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text">${place.location}</p>
        </div>
      </div>
    `;
    return div;
  }
  
  // Task 3
  function populateRecommendationCards(filteredPlaces) {
    const recommendationsSection = document.getElementById("recommendations");
    recommendationsSection.innerHTML = "";
  
    // Clear the Navbar Mega Menu too
    document.getElementById("mega-menu-col-1").innerHTML = "";
    document.getElementById("mega-menu-col-2").innerHTML = "";
  
    for (let place of filteredPlaces) {
      const card = createCard(place);
      recommendationsSection.appendChild(card);
  
      // Add each place to the Navbar menu too
      addPlaceToMegaMenu(place);
    }
  }
  
  // Task 4
  function findPlaceByName(placeName) {
    for (let place of PLACES) {
      if (place.name === placeName) {
        return place;
      }
    }
    return null;
  }
  