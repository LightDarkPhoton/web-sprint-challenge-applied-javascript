// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const entryPoint = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(function successHandler(response) {
    console.log(response.data.articles);

    const bootstrapArticles = response.data.articles["bootstrap"]
    const javascriptArticles = response.data.articles["javascript"]
    const technologyArticles = response.data.articles["technology"]
    const jqueryArticles = response.data.articles["jquery"]
    const nodeArticles = response.data.articles["node"]

    const articleArray = [bootstrapArticles, javascriptArticles, technologyArticles, jqueryArticles, nodeArticles]

    articleArray.forEach(articleArrayelem => {
        //console.log(articleArrayelem)

        articleArrayelem.forEach(articleElem => {

            console.log(articleElem)
            const card = articleCard(articleElem)
            entryPoint.appendChild(card)
            card.addEventListener('click', function() {
                console.log(`${articleElem.headline}`)
            })
        })
    })

    
})
.catch(function failureHandler(error) {
    console.log(error);
})

function articleCard(articleObject) {


    // Creating the elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const authorDiv = document.createElement('author')
    const imgContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const authorName = document.createElement('span')

    // Setting class names
    card.classList.add('card')
    headline.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainer.classList.add('img-container')

    // Setting attributes
    authorImage.setAttribute('src',`${articleObject.authorPhoto}`)

    // Setting text
    headline.textContent = `${articleObject.headline}`
    authorName.textContent = `${articleObject.authorName}`
    // Creating the hiearchy
    card.appendChild(headline)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    imgContainer.appendChild(authorImage)
    authorDiv.appendChild(authorName)

    return card
}