

let agregaralcarrito = document.querySelectorAll('.addcarrito');
agregaralcarrito.forEach(botoncarrito => {botoncarrito.addEventListener('click', clicagregar); })


function clicagregar(event) {
const button = event.target;
const item = button.closest('.item');
const titulo = item.querySelector('.item-title').textContent;
const precio = item.querySelector('.item-price').textContent;
const imagen = item.querySelector('.item-image').src;

agregaritemalcarrito(titulo, precio, imagen);
}

let contenedordeitems = document.querySelector ('.shoppingCartItemsContainer')
function agregaritemalcarrito (titulo,precio,imagen) {
const filadecarrito =  document.createElement ('div'); 
const contenidocarrito = `
<div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${imagen} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${titulo}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
filadecarrito.innerHTML = contenidocarrito
contenedordeitems.append(filadecarrito)
actualizartotal ();
filadecarrito
.querySelector ('.buttonDelete')
.addEventListener ('click', borrar);
}




function actualizartotal () {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal'); 
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    shoppingCartItems.forEach((shoppingCartItem) => {
const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice');const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('$', ''));
const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        '.shoppingCartItemQuantity');
const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;}

    function borrar (event) {
        const buttonClicked = event.target;
        buttonClicked.closest('.shoppingCartItem').remove();
        actualizartotal();}
