const apiKey = "c33f66dfe1fc4f468c508917dbdf6107";
    const urlParams = new URLSearchParams(location.search);
    let gameId = parseInt(urlParams.get('id'))

    loadGame(gameId);

    async function loadGame(gId){
      try{
        const result = await fetch(`https://api.rawg.io/api/games/${gId}?key=${apiKey}`);
        const data = await result.json();

        loadInfo(data)
      }catch(error) {
        throw new Error("Não foi possível obter os dados")
      }
    }

    function loadInfo(tgame) {
      console.log(tgame)

      let info = `
      <div  id="banner" >
      <img src="${tgame.background_image}"/>
      </div>
      <div id="container">
        <div id="capajogo">
          <img src="${tgame.background_image}" alt="${tgame.name}" />
          <button id="botao">Comprar</button>
        </div>
        <div id="texts">
          <h2>${tgame.name}</h2>
          <h3>${tgame.released}</h3>
          <h3>${tgame.genres[1].name}</h3>
          <h3>${tgame.developers[1].name}</h3>
          <p>
          ${tgame.description}
          </p>
        </div>
      </div>




       
      `

      document.querySelector('.container1').innerHTML = info;
    }