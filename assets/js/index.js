const getPosts = async () => {
    try {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        let response = await fetch(url);

        let data = await response.json();

        let nuevoArreglo = data.map((objeto) => {
            return `<ul> 
    <li>
    <strong>${objeto.title}</strong>
    <span><br>${objeto.body}</span>
    </li>
    </ul>`
        })
        document.getElementById("post-data").innerHTML = nuevoArreglo.join("");
    }

    catch (error) {
        console.log("Estamos en el catch")
        console.log(error)
    }

}