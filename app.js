"use strict"
console.log("salmoncookies")

const parentElement = document.getElementById("container");
console.log(parentElement);

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm","6pm", "7pm"];
console.log(hours.length);

const seattle = {
    storeName: "seattle",
    minCustomerPerHr: 23,
    maxCustomerPerHr: 65,
    avgCustomerPerHr: 0,
    avgCookiePerCustomer: 6.3,
    hoursOfService: 14,
    avgCookiesPerHour: 0,
    totalDailyCookies: 0,
    render: function () {
        const article = document.createElement("article");
        container.appendChild(article);

        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(article);

        const ul = document.createElement("ul");
        article.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {
            const li = document.createElement("li");
            li.textContent = ${hours[i]}: ${this.cookiesEachHour[i];}
            cookies;
            ul.appendChild(li);
            }
        },
};

    container; render

    //customersPerHr: function () {

       // this.avgCustomerPerHr = randomCustomersPerHr(23,65) + "customers per hour";
        //console.log(this.avgCustomerPerHr);
    


//function randomCustomersPerHr(minCustomer, maxCustomer) {
    //return Math.floor(Math.random() * (maxCustomer - minCustomer +1) + minCustomer);



//function multiply(hoursOfService, avgCookiePerCustomer, avgCustomerPerHr){
  

    




