const searchBox = () => {
    const inputFiled = document.getElementById('input-Filed');
    const searchResult = inputFiled.value;

    console.log(searchResult);
    inputFiled.value = '';

    // console.log(search)

}


const loadSingleUser = () => {
    const url = `https://openlibrary.org/search.json?q=${searchResult}`

    fetch(url)
        .then(res => res.json())
        .then(data => displyUi(data))

}



const displyUi = dUi => {
    console.log(dui);
    const allbooks = document.getElementById('all-Book');
    dUi.forEach(book => {
        const Div = document.createElement('div');

        Div.innerHTML = `

    <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.num_found}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
    `
        allbooks.appendChild(Div);

    });



}