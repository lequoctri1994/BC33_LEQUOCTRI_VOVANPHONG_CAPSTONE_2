function getProductDetail () {
    console.log('123')
    var promise = axios ({
        url:`./detail.html?productid=${pr.id}`,
        method:'GET',
    })

    promise.then(function(result){
        console.log(result);
    })
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
    })
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
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('param',myParam);
}