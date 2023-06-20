"use Strict"
console.log(2)

const container = document.getElementById("container");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

console.log(hours.length);

function Store(storeName, minCustPerhour, maxCustPerHour, avgcookiesPerHour, customersEachHour, cookiesEachHour, totalDailyCookies) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerhour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerHour = avgcookiesPerHour;
    this.customersEachHour = this.calcCustPerHr();
    this.cookiesEachHour = this.calcCookiesEachHr ();
    this.totalDailyCookies = totalDailyCookies;



Store.prototype.calcCustPerHr = function (){
    for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));}
    }
Store.prototype.calcCookiesEachHr = function (){
    for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
      }
}



Store.prototype.render = function (){
    const containerElement = document.getElementById("container");

    const article = document.createElement("article");
    containerElement.appendChild(article)

    const h3 = document.createElement("h3");
    h3.textContent = this.storeName;
    article.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = `${this.storeName} currently sells ${this.totalDailyCookies} each day.`;
    article.appendChild(p)

    const ul = document.createElement("ul");
    article.appendChild(ul);
    for (let i = 0; i < hours.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
        ul.appendChild(li);
      }
  
      const li =document.createElement ("li");
      li.textContent = `Total Cookies: ${this.totalDailyCookies}`;
      ul.appendChild(li);
      
    },
}

const Seattle = new Store("seattle", 23, 65, 6.3, 0, 0, 0)





console.log(Seattle);


