import axios from 'axios';

const elements = {
    categoryList: document.querySelector(".js-category-list"),
    books_showcase: document.querySelector(".books-showcase")
}

elements.books_showcase.addEventListener('click', handlerClickOpenModal);

function handlerClickOpenModal(evt) {
  const bookItem = evt.target.closest('.js-book-item'); //js-book-item  - клас для li
  if (!bookItem) {     // або (evt.target === evt.currentarget)
    return;
  } else {
    const { id } = bookItem.dataset;
    console.log(id);
      serviceBooks()
        .then(response => {
      console.log(response);
          bookModalMarkup(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }


async function serviceBooks(id) {
    const BASE_URL = 'https://books-backend.p.goit.global/books';
    const response = await axios.get(`${BASE_URL}${id}`);
    console.log(response);
    return response;
}


function bookModalMarkup({ book_image, list_name, author, description }) {
  const arr = `<div>
        <img src="${book_image}" alt="" />
        <h2>${list_name}</h2>
        <p>${author}</p>
        <p>${description}</p>
        <button>ADD</button>
      </div>`;
  console.log(arr);
  return arr;
}



// async function serviceBooks() {
//   const BASE_URL = 'https://books-backend.p.goit.global/books/';
//   const id = '643282b1e85766588626a0dc';
//   const response = await axios.get(`${BASE_URL}${id}`);
//   //   console.log(response);
//   return response;
// }

