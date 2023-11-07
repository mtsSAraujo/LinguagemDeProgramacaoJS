async function api(){
    let nomeDoFilme = document.getElementById("nome").value.toLowerCase()
    try{
        let resposta = await fetch(`https://www.omdbapi.com/?t=${nomeDoFilme}&apikey=cba97828`)
        .then(response => response.json())

        document.getElementById("nome").value = resposta.Title
        document.getElementById("diretor").value = resposta.Director
        document.getElementById("poster").src = resposta.Poster
    }
    catch(exception){
        alert("Filme não encontrado")
    }
}