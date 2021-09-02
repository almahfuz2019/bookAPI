const inputFiled = document.getElementById('input-Filed');
const totalBookitems = document.getElementById('total-book-items');
const error = document.getElementById('error-message').style.display = 'none';
const searchError = document.getElementById('search-error');
const searchBox = () => {

    if (inputFiled.value == '') {

        document.getElementById('error-message').style.display = 'block';
        // console.log(4)

    } else {
        const searchResult = inputFiled.value;
        const url = `https://openlibrary.org/search.json?q=${searchResult}`
        fetch(url)
            .then(res => res.json())
            .then(data => displyUi(data))
        inputFiled.value = '';
    }
}

const displyUi = display => {

    if (display.docs.length === 0) {
        searchError.innerHTML = `Your search - didn't match our books. Please enter a
    correct name.`
    } else {
        totalBookitems.innerText = `Total Result-${display.numFound}`
            // console.log(display)
        const allbooks = document.getElementById('all-Book');
        allbooks.textContent = '';
        display.docs.forEach(book => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="col">
                <div class="card full-card bg-light border border-1 shadow-sm">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid imageSize" alt="...">
                    <div class="p-1">
                    <p class="card-title fontSize">Book Name: ${book?.title}</p>
                        <p class="card-text fontSize">Writer: ${book?.author_name}</p>
                        <p class="card-text fontSize">edition_count:First Publish Year:${book?.first_publish_year} </p>
                        
                    </div>
                </div>
            </div>
    
                        `
            allbooks.appendChild(div);

        });
    }

}