var body = document.body
console.log(body)

var h1 = document.body.childNodes[1]
console.log(h1)

var helloWorld = h1.innerHTML//innHTML grabs content inside tags. USE THIS
console.log(helloWorld)

h1.innerHTML = "Hello Universe"//This will change values

// console.log(h1.childNodes)
// console.dir(h1)//GETS THE META DATA


var helloH1 = document.getElementById('hello')
console.log(helloH1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems) //Rarely used!
//VS
var navItems = document.querySelectorAll('body *')//# for id and . for class
console.log(navItems)//Powerful and easy to use.
var helloH1 = document.querySelector('#hello')//querySelector returns the first math. It will be an object.
console.log(helloH1)

//console.log(navItems.includes('li'))//not really an aray. It is a node list that can only do forEach.
//VS
//Convert NodeList to an Array data type
//console.log(Array.from(navItems).includes('li'))//Array.from treats it as an array.

//***
navItems.forEach(function(navItem) {
    navItem.addEventListener('mouseover', function(e) {
        e.target.classList.add('red')
    })
    navItem.addEventListener('mouseout', function(e){
        e.target.classList.remove('red')
    })
    navItem.addEventListener('click', function(e) {
        e.target.remove()
    })
//     //console.dir(navItem)
//     //console.log(navItem.nodeName)//nodeName or tagName
//     if (navItem.nodeName === 'LI' && navItem.classList.contains('active')) {
//       //navItem.style.color = 'red'
//       navItem.classList.add('red')
//     }
})

var navItems = document.querySelectorAll('.nav-item')

navItems.forEach(function(navItem) {
    console.log(navItem.id)
    console.log(navItem.tagName)
    console.log(navItem.className)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.setAttribute('title', 'Foo'))
    console.log(navItem.getAttribute('data-details'))
    navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'//set the innerHTMl to what is currently in Data Details
    console.log(navItem.innerHTML)

})

//Getting at the form field
var searchInput = document.getElementById('search')
//or
var searchInput = document.querySelector('#search')

searchInput.setAttribute('value', 'pizza party in my area')
searchInput.value = 'movies near me'

// alert(searchInput.value)//or
// alert(searchInput.getAttribute('value'))
