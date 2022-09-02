function getProductDetail () {
    console.log('123')
    var promise = axios ({
        url:`https://shop.cyberlearn.vn/api/Product`,
        method:'GET',
        reponseType:'JSON',
    });

    promise.then(function(result){
        console.log(result);
    });

    promise.catch(function(err){
        console.log(err);
    });
}

function getProductDetail (arrProduct) {
    var html = '';
    html =+ `
    <img src="${pr.image}" />
    <h1>${pr.name}</h1>
    <h2>${pr.description}</h2>
    <span>${pr.size}</span>
    <h2>${pr.price}</h2>
    <button class=plus>+</button>


    <button class=addToCart>Add to cart</button>
    `

    document.querySelector('#detailProduct').innerHTML = html;
}

function getProductAPI() {
    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
        reponseType:'JSON',
    });

    promise.then(function(result){
        console.log('result', result.data);
        renderProduct(result.data.content);
    });

    promise.catch(function(err) {
        console.log(err);
    });
}

function renderProduct(arrProduct) {
    var html = '';
    for (var i = 0; i < 6; i++) {
         var pr = arrProduct[i];
         html += `
          <div class="col-3">

            <div class="product-img">
            <img src="${pr.image}" alt="product"/>
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

         document.querySelector('#relateProduct').innerHTML = html;
        }
}






window.onload = function () {
    getProductAPI();
    getProductDetail();
    console.log(getProductDetail())
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('param',myParam);
}