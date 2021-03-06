const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:30,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-1.png",
        category:1
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category:1
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price:20,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-3.png",
        category: 3
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price:50,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-1.png",
        category: 4
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category: 3
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price:15,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-3.png",
        category: 3
    }
]
const ListCategory = [
    {
        id:1,
        name:"breakfast",
        image:"./image/home/breakfast.png"
    },
    {
        id:2,
        name:"vegan",
        image:"./image/home/breakfast.png"
    },
    {
        id:3,
        name:"meat",
        image:"./image/home/breakfast.png"
    },
    {
        id:4,
        name:"dessert",
        image:"./image/home/breakfast.png"
    },
    {
        id:5,
        name:"lunch",
        image:"./image/home/breakfast.png"
    },
    {
        id:6,
        name:"chocolate",
        image:"./image/home/breakfast.png"
    }
]

function showProduct(data){ //khai b??o h??m, truy???n v??o tham s??? data ????? c???n hi???n th??? m???ng n??o th?? truy???n v??o m???ng ????
    const popularList = document.querySelector(".popular-list") //t??m th??? div c?? class popular-list
    if(popularList){
        popularList.innerHTML = "" //clear kh???i s???n ph???m ??i ????? hi???n th??? l???i d??? li???u m???i
        for(let item of data){ // l???p qua m???ng truy???n v??o tham s??? data

            // ????? d??? li???u v??o trong th??? div popular
            popularList.innerHTML += `
                <div class="popular__item">
                    <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                    <h3><a href="./detail.html?id=${item.id}">${item.name}</a></h3>
                    <p>
                        <img src="./image/home/Timer.png" alt="">
                        <span>30 Minutes</span>
                        <img src="./image/home/ForkKnife.png" alt="">
                        <span>Snack</span>
                    </p>
                </div>
            `         
        }
    }
    
}
showProduct(ListProduct) //g???i h??m ra ????? hi???n th??? s???n ph???m

const filterSelect = document.querySelector("#filter-select") // t??m th??? select
function filterProduct(){ //t???o h??m ????? th???c hi???n ch???c n??ng l???c 
    const over30 = ListProduct.filter(function(item){
        // khai b??o bi???n over30 ch???a d??? li???u l???c ???????c t??? m???ng ListProduct
        return item.price > 30 
        // return v??? ??i???u ki???n ????? l???c
    })
    const under30 = ListProduct.filter(function(item){
        return item.price <= 30
    })
    if(filterSelect.value == 'over30'){ //ki???m tra xem ??ang ch???n v??o option n??o trong th??? select
        showProduct(over30) // g???i h??m ra v?? truy???n v??o m???ng l???y ???????c b??n tr??n ????? hi???n th??? s???n ph???m t????ng ???ng
    }
    if(filterSelect.value == 'under30'){

    }
    if(filterSelect.value == 'all'){

    }
}
if(filterSelect){
    filterSelect.addEventListener("change",filterProduct)
}


function detailProduct(){
    const prdId = new URLSearchParams(window.location.search).get('id')
    // console.log(prdId);
    if(prdId){
        const product = ListProduct.find(function(item){
            return item.id == prdId
        })
        
        const detailProductDiv = document.querySelector('.detail-product')
        detailProductDiv.innerHTML = `
            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="price">$ ${product.price}</p>
                <p class="desc">${product.desc}</p>
                <form action="">
                    <input type="text" placeholder="Quantity">
                    <button type="submit">Add To Cart</button>
                </form>
            </div>
            <div class="product-img">
                <img src="${product.image}" alt="">
            </div>
        `
    }
    
}
detailProduct()

function listCategory(){
    const cateList = document.querySelector('#cate-list')
    for(let item of ListCategory){
        cateList.innerHTML += `
            <li><a href="./products.html?cateId=${item.id}">${item.name}</a></li>
        `
    }
}
listCategory()

function listProductPage(data){
    const listProductDiv = document.querySelector('#list-product')
    listProductDiv.innerHTML = ""
    for(let item of data){ // l???p qua m???ng truy???n v??o tham s??? data

        // ????? d??? li???u v??o trong th??? div popular
        listProductDiv.innerHTML += `
            <div class="popular__item">
                <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                <h3><a href="./detail.html?id=${item.id}">${item.name}</a></h3>
                <p>
                    <img src="./image/home/Timer.png" alt="">
                    <span>30 Minutes</span>
                    <img src="./image/home/ForkKnife.png" alt="">
                    <span>Snack</span>
                </p>
            </div>
        `         
    }
}


function reRender(){
    const cateId = new URLSearchParams(window.location.search).get('cateId')
    const productByCategory = ListProduct.filter(function(item){
        return item.category == cateId
    })   
    if(cateId){
        listProductPage(productByCategory)
    }else{
        listProductPage(ListProduct)
    }
    
}
reRender()