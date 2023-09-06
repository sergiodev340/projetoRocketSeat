function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    //pegar a img
    const img = document.querySelector("#profile img")
    //substituir a imagem 
    //se estiver no light mod troca a imagem 
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo de oculos escuro ')
    } else {
        //se nao estiver no light mode manter a imagem padrao    
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo')
    }







}



