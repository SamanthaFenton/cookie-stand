"use strict"
console.log(salmoncookie)

const shop = {
    location: seattle,
    minCustomer: 23,
    maxCustomer: 65,
    avgCustomerPerHr: 0,
    avgPerCustomer: 6.3,
    hoursOfService: 14,

    customersPerHr: function () {

        this.avgCustomerPerHr = randomCustomersPerHr(23,65) + "customers per hour";
        console.log(this.avgCustomerPerHr);
    }
}

function randomCustomersPerHr(minCustomer, maxCustomer) {
    return Math.floor(Math.random() * (maxCustomer - minCustomer +1) + minCustomer);

}





