let html = items.results
  .map(function(item) {
    var eur = ""
    if (item.currency_code === "GBP") {
      eur += "&pound;"
    } else if (item.currency_code === "USD") {
      eur += "$"
    } else if (item.currency_code === "EUR") {
      eur += "&euro;"
    }
    return `
      <a href=""><div class="productDisplay">
        <img src="${item.Images[0].url_170x135}" />
        <div class="desricption"></div>
        <p class="title">${item.title}</p>
        <p class="price">${eur}${item.price}</p>
      </div></a>`
  })
  .join("")

document.querySelector(".products").innerHTML = html
