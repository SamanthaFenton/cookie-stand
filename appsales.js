"use Strict";
console.log(2);

const storeForm = document.getElementById("addStoreForm");

const container = document.getElementById("container");
const storeTable = document.getElementById("storeTable");

const allStores = [];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

console.log(hours.length);

function Store(storeName, minCustPerhour, maxCustPerHour, avgcookiesPerHour) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerhour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgcookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  /*this.pushStore = function () {
    allStores.push(this);
    console.log(allStores);
  };
  this.pushStore();*/
  this.render();
  allStores.push(this);
}

Store.prototype.calcCustPerHr = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
  }
};

Store.prototype.calcCookiesEachHr = function () {
  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

Store.prototype.render = function () {
  this.calcCustPerHr();
  this.calcCookiesEachHr();

  // creating a table row
  const tr = document.createElement("tr");

  //creating a table data cell
  const th = document.createElement("th");
  th.textContent = this.storeName;

  //append the table data to the table row
  tr.appendChild(th);

  //loop through cookied each hr - create a td for each index and append to th
  for (let i = 0; i < hours.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }

  //create a th to display the totals and append to the tr
  const storeTotal = document.createElement("th");
  storeTotal.textContent = this.totalDailyCookies;
  tr.appendChild(storeTotal);

  //how to creat a daily total?? how to creat a time display??

  //append the tr to the table - storeTable
  storeTable.appendChild(tr);

  //test constructor works

  const article = document.createElement("article");
  container.appendChild(article);

  const h3 = document.createElement("h3");
  h3.textContent = this.storeName;
  article.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = `${this.storeName} currently sells ${this.totalDailyCookies} cookies each day.`;
  article.appendChild(p);

  const ul = document.createElement("ul");
  article.appendChild(ul);
  for (let i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    ul.appendChild(li);
  }

  const li = document.createElement("li");
  li.textContent = `Total Cookies: ${this.totalDailyCookies}`;
  ul.appendChild(li);
};

const Seattle = new Store("Seattle", 23, 65, 6.3);
const Tokyo = new Store("Tokyo", 3, 24, 1.2);
const Dubai = new Store("Dubai", 11, 38, 3.7);
const Paris = new Store("Paris", 20, 38, 2.3);
const Lima = new Store("Lima", 2, 16, 4.6);

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

storeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  const name = event.target.name.value;
  const minCustPerHour = event.target.minCustPerHour.value;
  const maxCustPerHour = event.target.maxCustPerHour.value;
  const avgCookiesPerHour = event.target.avgCookiesPerHour.value;
  new Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerHour);

  renderallStores();
  storeForm.render();
});

/*function renderallStores() {
    for (let i = 0; < allStores.number; i++) {
    allStores[i].render();

 }
}*/

console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);
console.log(storeForm);
console.log(allStores);

//renderallStores();
