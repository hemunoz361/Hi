var buttons = document.getElementsByClassName('shop-item-button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClicked);
}

function buttonClicked() {
    alert('Thank you for your purchase!');
}
