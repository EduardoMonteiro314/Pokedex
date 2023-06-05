async function pokemon(){
    let id = document.getElementById("pokemon").value
    let clicar = document.getElementById('nome')
    let caixaFoto = document.querySelector('.caixa2')
    let caixaPoder1 = document.querySelector('.poder1')
    let caixaPoder2 = document.querySelector('.poder2')
    try{
        let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pokemon = await pokemons.json()


        let foto = pokemon["sprites"]["other"]['official-artwork']['front_default']
        let poder1 = pokemon['abilities'][0]['ability']['name']
        let poder2 = pokemon['abilities'][1] ? pokemon['abilities'][1]['ability']['name'] : ""
        poder2 = poder2 == poder1 ? "" : poder2

        caixaPoder1.innerHTML = `Poder 1: ${poder1}`
        caixaPoder2.innerHTML = poder2 ? `Poder 2: ${poder2}` : ""

        caixaFoto.style.backgroundImage = `url('${foto}')` 
        clicar.innerHTML = `${pokemon['name']}`
    }catch(error){
        clicar.innerHTML = "Pokemon inexistente"
        caixaFoto.style.backgroundImage = ""
        caixaPoder1.innerHTML = ""
        caixaPoder2.innerHTML = ""
    }
}