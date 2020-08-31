// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    // Creating the elements
    const header = document.createElement("div")
    const dateSpan = document.createElement("span")
    const heading = document.createElement("h1")
    const temperatureSpan = document.createElement('span')

    // Setting class names, attribute, and text
    header.classList.add('header')
    dateSpan.classList.add('date')
    temperatureSpan.classList.add('temp')
    
    dateSpan.textContent = "MARCH 28, 2020"
    heading.textContent = "Lambda Times"
    temperatureSpan.textContent = "98°"

    // Creating the hierarchy
    header.appendChild(dateSpan)
    header.appendChild(heading)
    header.appendChild(temperatureSpan)

    return header

}

const entryPoint = document.querySelector('.header-container')
const headerElem = Header();
entryPoint.appendChild(headerElem)
