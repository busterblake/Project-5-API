const version = "16.22.1";
const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById("grid");







    // Makes one card per champ
    for (const champ of Object.values(data.data)) {
      grid.innerHTML += `
        <div class="card">
          <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}" alt="${champ.name}">
          <p>${champ.name}</p>
        </div>
      `;
    }







    // Adds animation to the cards from anime.js library
    anime({
      targets: ".card", // targets the cards
      scale: [0, 1],
      delay: anime.stagger(10),  // delay between each cards animation
      easing: "spring(1, 80, 10, 0)" // mass stiffness damping velocity
    });
  });


  // mass is how heavy the object feels
  // stiffness is how stiff the spring is
  // damping is how much the spring slows down over time
  // velocity is how fast the object is moving when the animation starts
