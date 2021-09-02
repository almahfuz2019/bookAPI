const inputFiled = document.getElementById('input-Filed');
const totalBookitems = document.getElementById('total-book-items');
const error = document.getElementById('error-message').style.display = 'none';
const searchError = document.getElementById('search-error');
const searchBox = () => {

        if (inputFiled.value == '') {
            document.getElementById('error-message').style.display = 'block';
        } else {
            const searchResult = inputFiled.value;
            const url = `https://openlibrary.org/search.json?q=${searchResult}`
            fetch(url)
                .then(res => res.json())
                .then(data => displyUi(data))
            inputFiled.value = '';
            searchError.innerHTML = '';
        }
    }
    // display UI part
const displyUi = display => {
    if (display.docs.length === 0) {
        searchError.innerHTML = `Your search - didn't match our books. Please enter a
    correct name.`
    } else {
        totalBookitems.innerText = `Total Result-${display.numFound}`
        const allbooks = document.getElementById('all-Book');
        allbooks.textContent = '';
        display.docs.forEach(book => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="col">
                <div class="card full-card bg-light border border-1 shadow-sm">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top  imageSize" alt="...">
                    <div class="p-1 card-body">
                    <p class="card-title fontSize fw-bold">Book name: <span class="fw-normal my-color">${book?.title}</span></p>
                        <p class="card-text fontSize fw-bold">Author: <span class="fw-normal my-color">${book?.author_name}</span></p>
                        <p class="card-text fontSize fw-bold">First published date : <span class="fw-normal my-color">${book?.first_publish_year}</span></p>
                    </div>
                </div>
            </div>`
            allbooks.appendChild(div);
        });
    }
}