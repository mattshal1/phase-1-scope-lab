var customerName;

function upperCaseCustomerName() {
    if (customerName) {
        return customerName.toUpperCase();
    } else {
        return "No customer name provided.";
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'still not bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; 
}

// Testing the functions
customerName = 'Alice';
console.log(upperCaseCustomerName()); 

setBestCustomer();
console.log(bestCustomer); 

overwriteBestCustomer();
console.log(bestCustomer); 

console.log(leastFavoriteCustomer); 

