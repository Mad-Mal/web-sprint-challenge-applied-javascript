const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let divContainer = document.createElement('div')
  let spanDate = document.createElement('span')
  let titleHead = document.createElement('h1')
  let spanTemp = document.createElement('span')

  divContainer.classList.add('header')
  spanDate.classList.add('date')
  spanTemp.classList.add('temp')

  divContainer.appendChild(spanDate)
  divContainer.appendChild(titleHead)
  divContainer.appendChild(spanTemp)

  spanDate.textContent = `${date}`
  titleHead.textContent = `${title}`
  spanTemp.textContent = `${temp}`

  return divContainer;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const newHead = Header("The Lambda Times","12/02/1994","28 degrees" );
  document.querySelector(selector).appendChild(newHeader);
}

export { Header, headerAppender }
