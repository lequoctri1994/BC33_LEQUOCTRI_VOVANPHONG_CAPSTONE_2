function getProductAPI () {
    console.log('123')
    var promise = axios ({
        url:`https://shop.cyberlearn.vn/api/Product`,
        method:'GET',
        reponseType:'JSON',
    });

    promise.then(function(result){
        renderProduct(result.data.content);
        renderDetail(result.data.content);

    });

    promise.catch(function(err){
        console.log(err);
    });
}

// function getProductAPI() {
//     var promise = axios ({
//         url:'https://shop.cyberlearn.vn/api/Product',
//         method:'GET',
//         reponseType:'JSON',
//     });

//     promise.then(function(result){
//         console.log('result', result.data);
//         renderProduct(result.data.content);
//     });

//     promise.catch(function(err) {
//         console.log(err);
//     });
// }


function renderDetail (arrProduct) {
    const urlParams = new URLSearchParams(window.location.search);
    const detailId = urlParams.get('productid'); 
    for (var i = 0; i < 6; i++) {
        var pr = arrProduct[i];
        if (pr.id == detailId) {
    var html = '';
    html += `
    <div class=left>
    <div class="product-img">
    <a href="./detail.html?productid=${pr.id}">
       <img src="${pr.image}" alt="product"/>
       </a>
    </div>
    </div>
    
    
    <div class=right>
    <div class="product-info">
    <h1>${pr.name}</h1>
    <h2>${pr.description}</h2>
    </div>

    <div class="product-size">
    <h3>Available size</h3>
    <button>${(JSON.parse(pr.size))[0]}</button>
    <button>${(JSON.parse(pr.size))[1]}</button>
    <button>${(JSON.parse(pr.size))[2]}</button>
    <button>${(JSON.parse(pr.size))[3]}</button>
    <button>${(JSON.parse(pr.size))[4]}</button>
    </div>

    <div class=product-price>
    <h2>${pr.price}$</h2>
    </div>

    <div class=product-cart>
    <div class="count">
    <button class=plus>+</button>
    <span id="productCount">1</span>
    <button class=plus>-</button>
    </div>
    <div class=cart>
    <button class=addToCart>Add to cart</button>
    </div>
    </div>
    </div>

    `
            console.log(JSON.parse(pr.size)[0])
    document.querySelector('#detailProduct').innerHTML = html;
        }
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

         document.querySelector('#relateProduct').innerHTML = html;
        }
}






window.onload = function () {
    getProductAPI();
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log(myParam);
}



// function getProductDetail (id) {
//     console.log('123')
//     var promise = axios ({
//         url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
//         method:'GET',
//         reponseType:'JSON',
//     });

//     promise.then(function(result){
//         renderProduct(result.data.content)
//     });

//     promise.catch(function(err){
//         console.log(err);
//     });
// }

// function renderProduct (pr) {
//     var html = '';
//     html += `
//     <img src="${pr.image}" />
//     <h1>${pr.name}</h1>
//     <h2>${pr.description}</h2>
//     <span>${pr.size}</span>
//     <h2>${pr.price}</h2>
//     <button class=plus>+</button>


//     <button class=addToCart>Add to cart</button>
//     `

//     document.querySelector('#detailProduct').innerHTML = html;
// }

// window.onload = function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const myParam = urlParams.get('productid');
//     getProductDetail(myParam);