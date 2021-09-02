const inputFiled = document.getElementById('input-Filed');
const totalBook = document.getElementById('total-book');
const error = document.getElementById('error-message').style.display = 'none';
const searchBox = () => {


    // const url = `https://openlibrary.org/search.json?q=${searchResult}`
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displyUi(data.docs))
    // inputFiled.value = '';

    if (inputFiled.value == '') {

        document.getElementById('error-message').style.display = 'block';
        console.log(4)

    } else {
        const searchResult = inputFiled.value;
        const url = `https://openlibrary.org/search.json?q=${searchResult}`
        fetch(url)
            .then(res => res.json())
            .then(data => displyUi(data))
        inputFiled.value = '';
    }
}

const displyUi = dUi => {
        totalBook.innerText = `${dUi.numFound}`
        console.log(dUi)
        const allbooks = document.getElementById('all-Book');
        allbooks.textContent = '';
        dUi.docs.forEach(book => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="col">
            <div class="card full-card bg-light border border-1 shadow-sm">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid imageSize" alt="...">
                <div class="p-1">
                <p class="card-title fontSize">Book Name: ${book.title}</p>
                    <p class="card-text fontSize">Writer: ${book.author_name} </p>
                    <p class="card-text fontSize">Publisher:${book.edition_count} </p>
                    <p class="card-text fontSize">edition_count:First Publish Year:${book.first_publish_year} </p>
                    
                </div>
            </div>
        </div>

                    `
            allbooks.appendChild(div);

        });
    }
    // error

// <div class="card"> 
// <
//     div class = "card-body" >
//     <
//     img src = "https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
// class = "card-img-top"
// alt = "..." >
//     <
//     h5 class = "card-title" > $ { book.title } < /h5> <
//     p class = "card-text" > $ { book.author_name } < /p> <
//     /div> <
//     /div>