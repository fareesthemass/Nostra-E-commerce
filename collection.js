//offer close
var offerclosebtn = document.getElementById('offer-close')
var offerbar =document.querySelector('.offer_bar')
offerclosebtn.addEventListener('click',function(){
offerbar.style.display='none'
})


//side navbar
var menutoggle = document.querySelector('.navbar-menu-toggle')
var sidenavbar = document.querySelector('.side__navbar')
var sidenavbarcancel = document.getElementById('sidenavbar__cancel')
menutoggle.addEventListener('click',function(){
  sidenavbar.style.left=0
})

sidenavbarcancel.addEventListener('click',function(){
  sidenavbar.style.left = '-50%'
})


document.addEventListener('DOMContentLoaded', () => {
    // Select all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Add event listeners to checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProducts);
    });

    function updateProducts() {
        // Get all selected checkbox values
        const selectedFilters = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value.toLowerCase());

        // Get all product containers
        const products = document.querySelectorAll('.collections__container');

        // Show or hide products based on filters
        products.forEach(product => {
            product.style.display = 'none'; // Hide all products initially
        });

        if (selectedFilters.includes('new')) {
            // Display the top 3 "new" shirts
            let newCount = 0;
            products.forEach(product => {
                if (newCount < 3 && product.querySelector('h1').textContent.toLowerCase().includes('new')) {
                    product.style.display = 'block';
                    newCount++;
                }
            });
        } else if (selectedFilters.includes('old')) {
            // Display the bottom 3 "old" shirts
            let oldCount = 0;
            const reversedProducts = Array.from(products).reverse(); // Reverse the product list to get the last 3 items
            reversedProducts.forEach(product => {
                if (oldCount < 3 && product.querySelector('h1').textContent.toLowerCase().includes('old')) {
                    product.style.display = 'block';
                    oldCount++;
                }
            });
        } else {
            // Display products based on other filters
            products.forEach(product => {
                const productTitle = product.querySelector('h1').textContent.toLowerCase();
                const matchesFilter = selectedFilters.some(filter => productTitle.includes(filter));
                if (matchesFilter || selectedFilters.length === 0) {
                    product.style.display = 'block';
                }
            });
        }
    }
});

var collection__search = document.getElementById('collection__search')
var collections__container = document.querySelectorAll('.collections__container')

// Get the search input element
var collection__search = document.getElementById('collection__search');

// Add an event listener for the keyup event
collection__search.addEventListener('keyup', function(event) {
    // Get the search text and convert it to uppercase for case-insensitive comparison
    var searchText = event.target.value.toUpperCase();
    
    // Get all collection container elements
    var collections__container = document.querySelectorAll('.collections__container');
    
    // Iterate through each container
    collections__container.forEach(container => {
        // Select the h1 element within the container
        var h1 = container.querySelector('h1');
        
        // If the h1 element exists
        if (h1) {
            // Convert the text content of h1 to uppercase for case-insensitive comparison
            var text = h1.textContent.toUpperCase();
            
            // Check if the search text is found within the h1 text
            if (text.indexOf(searchText) !== -1) {
                // If found, display the container
                container.style.display = 'block';
            } else {
                // If not found, hide the container
                container.style.display = 'none';
            }
        }
    });
});

