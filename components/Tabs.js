// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(function successHandler(response) {
        console.log(response);

        // First, let's get the array
        const tabArray = response.data.topics;
        console.log(response.data.topics);

        // Next, let's iterate over the array
        tabArray.forEach(elem => {

            // We're going to create the HTML structure here

            // Creating the elements
            const tab = document.createElement('div')

            // Setting class names, attributes, and text
            tab.classList.add('tab')
            
            tab.textContent = `${elem}`

            // Creating entry point
            const entryPoint = document.querySelector('.topics')

            // Appending to entry point
            entryPoint.appendChild(tab)
        })
    })
    .catch(function failureHandler(error) {

        // In case things go haywire
        console.log(error);
      });