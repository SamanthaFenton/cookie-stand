"use strict"
console.log(salmoncookie)

const shop = {
    location: seattle,
    minCustomerPerHr: 23,
    maxCustomerPerHr: 65,
    avgCustomerPerHr: 0,
    avgCookiePerCustomer: 6.3,
    hoursOfService: 14,
    totalDailyCookies: 0;

    customersPerHr: function () {

        this.avgCustomerPerHr = randomCustomersPerHr(23,65) + "customers per hour";
        console.log(this.avgCustomerPerHr);
    }
}

function randomCustomersPerHr(minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer - minCustomer +1) + minCustomer);

}

function multiply(hoursOfService, avgCookiePerCustomer, avgCustomerPerHr) {
    
}



