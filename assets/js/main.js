let products = [
    {
        id: 1,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
        name: "Nike Air Zoom Pegasus 36",
        description:
          "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
        price: 108.97,
        color: "#e1e7ed"
      },
      {
        id: 2,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
        name: "Nike Air Zoom Pegasus 36 Shield",
        description:
          "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
        price: 89.97,
        color: "#4D317F"
      },
      {
        id: 3,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
        name: "Nike CruzrOne",
        description:
          "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
        price: 100.97,
        color: "#E8D026"
      },
      {
        id: 4,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
        name: "Nike Epic React Flyknit 2",
        description:
          "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
        price: 89.97,
        color: "#FD584A"
      },
      {
        id: 5,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png",
        name: "Nike Odyssey React Flyknit 2",
        description:
          "The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.",
        price: 71.97,
        color: "#D4D7D6"
      },
      {
        id: 6,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png",
        name: "Nike React Infinity Run Flyknit",
        description:
          "A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
        price: 160.0,
        color: "#F2F5F4"
      },
      {
        id: 7,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png",
        name: "Nike React Miler",
        description:
          "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
        price: 130.0,
        color: "#22AFDC"
      },
      {
        id: 8,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png",
        name: "Nike Renew Ride",
        description:
          "The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.",
        price: 60.97,
        color: "#B50320"
      },
      {
        id: 9,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png",
        name: "Nike Vaporfly 4% Flyknit",
        description:
          "Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.",
        price: 187.97,
        color: "#3569A1"
      },
      {
        id: 10,
        image:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png",
        name: "Nike Zoom Fly 3 Premium",
        description:
          "Inspired by the Vaporfly, the Nike Zoom Fly 3 Premium gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.",
        price: 160.0,
        color: "#54D4C9"
      }
];

const dataElement = document.getElementById('cart__body');
const cartElement = document.getElementById('cartList');
const countCart = document.getElementById('cart__total');
const totalCart = document.getElementById('price');

function renderData(dataSource){
    dataElement.innerHTML = "";
    dataSource.forEach(data => {
        const imgElement = document.createElement('div');
        imgElement.setAttribute('class','cart__img');
        imgElement.style.backgroundColor = data.color;
        const image = document.createElement('img');
        image.src = `${data.image}`;

        const productTitle = document.createElement('h3');
        productTitle.textContent = `${data.name}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = `${data.description}`;

        // Cart Body Bottom
        const cart__bodyBottom = document.createElement('div');
        cart__bodyBottom.setAttribute('class','cart__bodyBottom');

        const cartPrice = document.createElement('div');
        cartPrice.setAttribute('class','cart__price');

        const price = document.createElement('span');
        price.innerHTML =  "$" +`${data.price}`;

        const cartAdd = document.createElement('div');
        cartAdd.setAttribute('class','cart__add');
        cartAdd.setAttribute('id','cart__add');
        cartAdd.setAttribute('data-id', data.id); 

        const productAdd = document.createElement('p');
        productAdd.innerHTML = "Add to cart";
        productAdd.addEventListener('click', () => {
            addCart(data.id);
            cartAdd.style.width = "86px";
            cartAdd.style.cursor = "not-allowed";
            cartAdd.style.opacity = "0.5";
            productAdd.innerHTML = "Added";
        });

        imgElement.appendChild(image);

        // Button add
        cartAdd.appendChild(productAdd);
        // Product Price
        cartPrice.appendChild(price);
        // Cart Body Bottom
        cart__bodyBottom.appendChild(cartPrice);
        cart__bodyBottom.appendChild(cartAdd);

        // Cart Body
        dataElement.appendChild(imgElement);
        dataElement.appendChild(productTitle);
        dataElement.appendChild(productDescription);
        dataElement.appendChild(cart__bodyBottom);

    })
}
renderData(products);

// Cart
let cart = [];

function renderCart(dataSource){
    cartElement.innerHTML = "";
    dataSource.forEach(cart => {
        const cartBody = document.createElement('div');
        cartBody.setAttribute('class','cart__body');
        cartBody.setAttribute('data-id',`${cart.id}`);

        // Cart Left
        const cartLeft = document.createElement('div');
        cartLeft.setAttribute('class','cartLeft');

        const cartLeftImg = document.createElement('div');
        cartLeftImg.setAttribute('class','cartLeft__img');
        cartLeftImg.style.backgroundColor = cart.color;

        const cartImg = document.createElement('img');
        cartImg.src = `${cart.image}`;

        // Cart Right
        const cartRight = document.createElement('div');
        cartRight.setAttribute('class','cartRight');

        // Cart Title
        const cartTitle = document.createElement('div');
        cartTitle.setAttribute('class','cart__title');

        const cartTitleH3 = document.createElement('h3');
        cartTitleH3.innerHTML = cart.name;

        // Cart Price
        const cartPrice = document.createElement('div');
        cartPrice.setAttribute('class','cart__price');
        cartPrice.innerHTML = "$" + cart.price;

        // Cart Bottom 
        const cartBottom = document.createElement('div');
        cartBottom.setAttribute('class','cart__bottom');

        const cartBottomLeft  = document.createElement('div');
        cartBottomLeft.setAttribute('class','cart__bottomLeft');

        const cartBottomDesc = document.createElement('div');
        cartBottomDesc.setAttribute('class','cartBottom_button');
        cartBottomDesc.innerHTML = "-"
        cartBottomDesc.addEventListener('click',() => {
            const parseQuantity = cartBottomQuantity.innerHTML;
            if(parseQuantity > 1){
                descQuantity(`${cart.id}`);
                cartBottomQuantity.innerHTML = cart.quantity;
                totalPrice();
                return;
            }
            removeCart(`${cart.id}`);
            const cartAdd = document.querySelector(`[data-id = "${cart.id}"]`);
            cartAdd.style.width = "";
            cartAdd.style.cursor = "";
            cartAdd.style.opacity = "";
            cartAdd.querySelector('p').innerHTML = "Add to cart";
        })

        const cartBottomQuantity = document.createElement('div');
        cartBottomQuantity.setAttribute('class','cartBottom_number');
        cartBottomQuantity.innerHTML = "1"

        const cartBottomAsc = document.createElement('div');
        cartBottomAsc.setAttribute('class','cartBottom_button');
        cartBottomAsc.innerHTML = "+"
        cartBottomAsc.addEventListener('click',() => {
            ascQuantity(`${cart.id}`);
            cartBottomQuantity.innerHTML = cart.quantity;
            totalPrice();
        })

        // Cart Bottom Right
        const cartBottomRight = document.createElement('div');
        cartBottomRight.setAttribute('class','cart__bottomRight');

        const cartDelete = document.createElement('div');
        cartDelete.setAttribute('class','cart__delete');
        cartDelete.setAttribute('id','cart__delete');
        cartDelete.addEventListener('click',() => {
            removeCart(`${cart.id}`);
            const cartAdd = document.querySelector(`[data-id = "${cart.id}"]`);
            cartAdd.style.width = "";
            cartAdd.style.cursor = "";
            cartAdd.style.opacity = "";
            cartAdd.querySelector('p').innerHTML = "Add to cart";
        })

        const cartAddIcon = document.createElement('img');
        cartAddIcon.src = "assets/image/delete.png";
        cartAddIcon.style.width = "16px";
        cartAddIcon.style.height = "16px";

        // Cart Bottom Add Icon
        cartDelete.appendChild(cartAddIcon);
        // Cart Bottom Add
        cartBottomRight.appendChild(cartDelete);

        // Cart Bottom Content
        cartBottomLeft.appendChild(cartBottomDesc);
        cartBottomLeft.appendChild(cartBottomQuantity);
        cartBottomLeft.appendChild(cartBottomAsc);
        // Cart Bottom 
        cartBottom.appendChild(cartBottomLeft);
        cartBottom.appendChild(cartBottomRight);

        // Cart Img
        cartLeftImg.appendChild(cartImg);

        // Cart Title
        cartTitle.appendChild(cartTitleH3);

        // Cart Right
        cartRight.appendChild(cartTitle);
        cartRight.appendChild(cartPrice);
        cartRight.appendChild(cartBottom);

        // Cart Left
        cartLeft.appendChild(cartLeftImg);
        cartLeft.appendChild(cartRight);

        cartBody.appendChild(cartLeft);
        // Cart Body
        cartElement.appendChild(cartBody);
    })
}

// Add Cart
function addCart(id) {
    const index = products.findIndex(items => items.id === Number(id));
    const addToCart = {
        "id": products[index].id,
        "name": products[index].name,
        "quantity": 1,
        "price": products[index].price,
        "color": products[index].color,
        "image": products[index].image
    };
    cart.push(addToCart);
    countItemCart();
    renderCart(cart);
    totalPrice();
}

// Remove Cart
function removeCart(id){
    const index = cart.findIndex((items) => items.id === parseInt(id));
    cart.splice(index,1);
    renderCart(cart);
    countItemCart();
    totalPrice();
}

// Count Cart
function countItemCart() {
    const count = cart.length;
    countCart.innerHTML = "Total: " + count;
}

// Total price
function totalPrice(){
    const total = cart.reduce((acc,curr) => {
        return acc += curr.price * curr.quantity;
    },0)
    totalCart.innerHTML = "$" + total.toFixed(2);
}

// Asceding quantity
function ascQuantity(id){
    const ascQuantity = cart.find(item => item.id === parseInt(id));
    ascQuantity.quantity++;
}

// Desceding quantity
function descQuantity(id){
    const descQuantity = cart.find(item => item.id === parseInt(id));
    descQuantity.quantity--;
}