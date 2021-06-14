import axios from "axios"


const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let mainContainer = document.createElement('div')
  let headDiv = document.createElement('div')
  let authorDiv = document.createElement('div')
  let imgContainer = document.createElement('div')
  let nestedImg = document.createElement('img')
  let authorName = document.createElement('span')

  mainContainer.classList.add('card')
  headDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imgContainer.classList.add('img-container')

  headDiv.textContent = `${article[headline]}`
  authorName.textContent = `${article[authorName]}`
  imgContainer.src = `${article[authorPhore]}`

  headDiv.addEventListener('click', () => {
    console.log(headDiv)
  })
  return mainContainer;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res => {
    const newArticles = Card(res.data)
    document.querySelector(selector).appendChild(newArticles) 
  })
}

export { Card, cardAppender }
