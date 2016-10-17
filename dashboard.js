var body = document.body
console.log(body)
// 1. Count the number of records in the "Current Quarter Details" table.
var headerCount = document.querySelectorAll('tbody > tr')

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
var imgChange = document.querySelectorAll('img')
    imgChange[0].setAttribute('src', 'http://unsplash.it/400?image=4')
    imgChange[1].setAttribute('src', 'http://unsplash.it/400?image=5')
    imgChange[2].setAttribute('src', 'http://unsplash.it/400?image=6')
    imgChange[3].setAttribute('src', 'http://unsplash.it/400?image=7')


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
var dotChange = document.querySelectorAll('.placeholder > span')
    // dotChange[0].innerHTML='$ ' + (Math.random(10) * 10000)
    dotChange[0].innerHTML=accounting.formatMoney((Math.random(10) * 10000))
    dotChange[1].innerHTML=accounting.formatMoney((Math.random(10) * 10000))
    dotChange[2].innerHTML=accounting.formatMoney((Math.random(10) * 10000))
    dotChange[3].innerHTML=accounting.formatMoney((Math.random(10) * 10000))

// 4. Change the currently selected left side menu item from Overview to Reports.
var menu = document.querySelectorAll('.nav-sidebar > li')
    menu[0].setAttribute('class', 'none')
    menu[1].setAttribute('class', 'active')

// 5. Set the default search input value to "Q4 sales".
var search = document.querySelectorAll('.form-control')
    search.forEach(function(search) {
    search.setAttribute('placeholder', 'Q4 Sales')
})
// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
var hoverRows = document.querySelector('.table-striped')
    hoverRows.setAttribute('class', 'table table-hover')


// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
var successRows = document.querySelectorAll('tbody > tr')
    successRows[6].setAttribute('class', 'table success')
    successRows[7].setAttribute('class', 'table success')
    successRows[8].setAttribute('class', 'table success')
    successRows[9].setAttribute('class', 'table success')

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var headerNamesChange = document.querySelectorAll('thead > tr > th')
    headerNamesChange[0].innerHTML='ID'
    headerNamesChange[1].innerHTML='First Name'
    headerNamesChange[2].innerHTML='Last Name'
    headerNamesChange[3].innerHTML='Department'
    headerNamesChange[4].innerHTML='Client'


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var emptyArray = [];
var rows = document.querySelectorAll('tbody > tr')
    rows.forEach(function(row){
        var rowObject = {
            id: Number(row.children[0].innerHTML.replace(',', '')),
            firstName: row.children[1].innerHTML,
            lastName: row.children[2].innerHTML,
            department: row.children[3].innerHTML,
            client: row.children[4].innerHTML
        }
        emptyArray.push(rowObject);
    })
    console.log(emptyArray)

// 10. Make each word in the table capitalized.
var capitalizeText = document.querySelectorAll('tbody > tr > td')
    function testFunction(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    capitalizeText.forEach(function(test) {
        test.innerHTML = testFunction(test.innerHTML)
    })
