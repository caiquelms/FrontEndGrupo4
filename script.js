const apiKey = "c33f66dfe1fc4f468c508917dbdf6107";
const pageSize = 26;
var games;
var creators;

loadGames();

async function loadGames() {
  try {
    const result = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${pageSize}`);
    const data = await result.json();
    games = data.results;

    games.sort((a, b) => b.rating - a.rating)

    setGames();
  } catch (error) {

    throw new Error("Não foi possível obter os dados")
  }
}
function setGames() {
    let cards = "";
  
    for (let i = 5; i < 10; i++) {
      cards += `
        <div class="game-container">
        <a href="produto.html?id=${games[i].id}">
          <div class="image-container">
          <img src="${games[i].background_image}" alt="${games[i].name}">
          </div>
          <h3>${games[i].name}</h3>
          <p>R$1,99</p>
          </a>
        </div>
      `
    }
    document.querySelector('.row').innerHTML = cards;
  }

  
