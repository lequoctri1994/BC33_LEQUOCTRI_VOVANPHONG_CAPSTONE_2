function getProductAPI() {
    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
        reponseType:'JSON',
    });

    promise.then(function(result){
        console.log('result', result.data);
        renderProduct(result.data.content);
        renderCarousel(result.data.content);
    });

    promise.catch(function(err) {
        console.log(err);
    })
}

function renderCarousel(arrProduct) {
    for (var i = 0; i < 1; i++) {
        var pr = arrProduct[i];
        var html = '';
         html += `
       <div class="img">
       <a href="./detail.html?productid=${pr.id}">
       <img src="${pr.image}" alt="product"/>
       </a>
       </div>

        <div class="info">

        <div class="content">
        <h2>${pr.name}</h2>
        <p>${pr.description}</p>
        </div>

        <div class="button">
        <a href="./detail.html?productid=${pr.id}">
        <button >Buy now</button>
        </a>
        </div>
        
        </div>
      
         `;

         document.querySelector('#productCarousel').innerHTML = html;
        }
}

function renderProduct(arrProduct) {
    var html = '';
    for (var i = 0; i < 6; i++) {
         var pr = arrProduct[i];
         html += `
          <div class="col-3">

            <div class="product-img">
            <a href="./detail.html?productid=${pr.id}">
       <img src="${pr.image}" alt="product"/>
       </a>
            </div>

            <div class="product-info">
            <h1>${pr.name}</h1>
            <h2>${pr.description}</h2>
            </div>

            <div class="product-buy-price">
                <div class=button-buy>
                <a href="./detail.html?productid=${pr.id}">
                <button >Buy now</button>
                </a>
                </div>
                <div class="price">
                <button>${pr.price}$</button>
                </div>
            
            </div>
          </div>       
         `;

         document.querySelector('#products').innerHTML = html;
        }
}






window.onload = function () {
    getProductAPI();

}