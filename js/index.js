//Открыть бургер меню
let burgerMenu_list = document.querySelector('.burgerMenu-list');
let burgerMenu = document.querySelector('.burgerMenu');

burgerMenu.onclick = () => {
    burgerMenu_list.classList.toggle('active');
}

//Скрыть фильтр
let filterButton = document.querySelector('.filter-button');
let filterMain = document.querySelector('.filter-main');
let clickCounter = 0;

filterButton.onclick = () => {
    clickCounter++;
    filterMain.classList.toggle('unactive');
    if (clickCounter % 2 == 0){
        filterButton.innerText = 'Свернуть';
    }else{
        filterButton.innerText = 'Открыть';
    }  
}

//Открывать другие страницы
let button = document.querySelectorAll(".card button");

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function openWindow(){
        switch(button[i]){
            case button[0]:
            window.open('./pages/shortenSprings.html');
            break;
            case button[1]:
                window.open('./pages/buyShortenedSprings.html');
            break;
            case button[2]:
                window.open('./pages/setCoilovers.html');
            break;
            case button[3]:
                window.open('./pages/airSuspension.html');
            break;
            case button[4]:
                window.open('./pages/takeOffSprings.html');
            break;
            case button[5]:
                window.open('./pages/takeOffWheel.html');
            break;
            case button[6]:
                window.open('./pages/compress.html');
            break;
            case button[7]:
                window.open('./pages/stuckIntextures.html');
            break;
            case button[8]:
                window.open('./pages/punctureTires.html');
            break;
            case button[9]:
            window.open('./pages/pushFatman.html');
            break;
        }
    })
}

//Переход на вход или регистрацию
let headerButton = document.querySelectorAll(".signUp-item");

headerButton[0].onclick = () =>{
    window.open('./pages/entrance.html');
}
headerButton[1].onclick = () =>{
    window.open('./pages/registration.html');
}

//Смена темы
let changeThemeButton = document.querySelector('.change-theme');
let changeValueInput = document.querySelector('.theme-value');
let main = document.querySelector('.main');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let filter = document.querySelector('.filter');

changeThemeButton.onclick = () =>{
    let themeValue = changeValueInput.value;
    main.style.backgroundColor = `#${themeValue}`;
    header.style.backgroundColor = `#${themeValue}`;
    footer.style.backgroundColor = `#${themeValue}`;
    filter.style.backgroundColor = `#${themeValue}`;
}