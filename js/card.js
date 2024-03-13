//Открыть бургер меню
let burgerMenu_list = document.querySelector('.burgerMenu-list');
let burgerMenu = document.querySelector('.burgerMenu');

burgerMenu.onclick = () => {
    burgerMenu_list.classList.toggle('active');
}

//Открыть другие страницы
let headerButton = document.querySelectorAll('.signUp-item');

for (let i = 0; i < headerButton.length; i++){
    headerButton[i].addEventListener("click", function openWindow(){
        switch(headerButton[i]){
            case headerButton[0]:
            window.open('./entrance.html');
            break;
            case headerButton[1]:
                window.open('./registration.html');
            break;
        }
    })
}