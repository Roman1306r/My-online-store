//Показ body по загрузки страницы
const body = document.body
window.addEventListener('DOMContentLoaded', (e) => body.style.display = 'block')


//шапка
const header = document.querySelector('.header')
const headerMenuClose = document.querySelector('.header__menu-close')
const headerMenu = document.querySelector('.header__menu.close')
const btnOpenHeaderMenu = document.querySelector('.header__burger')

//Обратный звонок
const callClose = document.querySelector('.call__body-close')
const callWindow = document.querySelector('.reverse__call')
const callOpens = document.querySelectorAll('.header__call a')
const callBtnFirstBlock = document.querySelector('.callreverse')
const labelFormCallReverse = document.querySelectorAll('.call__form label')
const inputsFormCallReverse = document.querySelectorAll('.call__form input')
const callForm = document.querySelector('.call__form')
const callThenks = document.querySelector('.call__thenks')

//Прокрутка к каталогу
const fullscrenSecond = document.querySelector('.fullscrenn__second-block')
const btnCatalog = document.getElementById('catalog')
const cartridgeSlide = document.querySelector('#cartridgeslide')

//блок со спойлерами
const spoileTitles = document.querySelectorAll('.spoiler__title.noactive')
const spoilerDescriptions = document.querySelectorAll('.spoiler__description')



//Большая форма
const categoryColumns = document.querySelectorAll('.category__column')
const categoryResults = document.querySelectorAll('.category__result')
const formBig = document.querySelector('.form__bigbody')
const inputsCheckbox = document.querySelectorAll('input[type=checkbox]')
const spanInputHelper = document.querySelectorAll('.category__result p span')
const inputsNumber = document.querySelectorAll('.category__result p span input')
const categoryBlock = document.querySelector('.category__block')
const toggleBtnOpenCategoryBlock = document.querySelector('.form__opencategoty') 
const rotateImgBtnOpenCategory = document.querySelector('.form__opencategoty img')
const byeCategoriesBtn = document.querySelectorAll('.cartbody__btn')







//поведение шапки
window.addEventListener('scroll', toggleHeaderPosition, {passive: true})
function toggleHeaderPosition(e) {
    if(window.pageYOffset > 100) header.classList.add('fixed')
    else header.classList.remove('fixed')
}




//поведение label при фокусе на input в обратном вызове
if(labelFormCallReverse.length > 0 && inputsFormCallReverse.length > 0){
    for (let i = 0; i < inputsFormCallReverse.length; i++) {
        const input = inputsFormCallReverse[i];
        input.addEventListener('focus', (e) => labelFormCallReverse[i].classList.add('up'))
    }
}
//Открытие и скрытие спойлера
if(spoileTitles.length > 0 && spoilerDescriptions.length > 0) {
    for (let i = 0; i < spoileTitles.length; i++) {
        const title = spoileTitles[i];
        title.addEventListener('click', (e) => {
            spoilerDescriptions[i].classList.toggle('active')
            title.classList.toggle('noactive')
            title.classList.toggle('active')
        })  
    }
}
//Открытие обратного вызова
if(callOpens.length > 0){
    for (let i = 0; i < callOpens.length; i++) {
        const callOpen = callOpens[i];
        callOpen.addEventListener('click', openCallModal)
    }
}
//Открытие правильной категории при клике в большой форме
if(categoryColumns.length > 0 && categoryResults.length > 0) {
    for (let index = 0; index < categoryColumns.length; index++) {
        const column = categoryColumns[index];
        column.addEventListener('click', (e) => {
            categoryColumns.forEach(item => item.classList.remove('active'))
            column.classList.add('active')
            categoryResults.forEach(item => item.classList.remove('active'))
            categoryResults[index].classList.add('active')
        })     
    }
}
//Открытие доп input type number в большой форме где это нужно
if(inputsCheckbox.length > 0 && spanInputHelper.length > 0) {
    let filterArrayCheckBox = inputsCheckbox
    if(inputsCheckbox.length !== spanInputHelper.length) {
        filterArrayCheckBox = Array.from(inputsCheckbox).filter((item, i) => i > 1)
    }
    for (let i = 0; i < filterArrayCheckBox.length; i++) {
        const ckeckbox = filterArrayCheckBox[i];
        ckeckbox.addEventListener('input' , (e) => {
            spanInputHelper[i].classList.toggle('visible')
        }) 
    }
} 
//Логика поведения доп input type number в большой форме
if(inputsNumber.length > 0) {
    for (let i = 0; i < inputsNumber.length; i++) {
        const inputNumber = inputsNumber[i];
        let maxValue = inputNumber.getAttribute('max')
        inputNumber.addEventListener('input', (e) => {
            if(inputNumber.value < 0) inputNumber.value = 0
            if(inputNumber.value > +maxValue) inputNumber.value = +maxValue
        }) 
    }
}
//Прокрутка к форме на страницах категорий товара
if(byeCategoriesBtn.length > 0) {
    for (let i = 0; i < byeCategoriesBtn.length; i++) {
        const btnFormSlide = byeCategoriesBtn[i];
        btnFormSlide.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector('.fullscrenn__window.formcategoties').scrollIntoView({
                block: "center",
                inline: "nearest",
                behavior: "smooth"
            })
        })       
    }
}







//Логика поведения клика вне указанных областей
document.addEventListener('click',  (e) => {
    if(!headerMenu.classList.contains('close') && !e.target.closest('.header__menu') && !e.target.closest('.header')){
        headerMenu.classList.add('close');
    }
    if(!callWindow.classList.contains('close') && !e.target.closest('.call__body') && !e.target.closest('.header__call') && !e.target.closest('.callreverse')){
        callWindow.classList.add('close')
        body.style.overflow = 'auto';
        labelFormCallReverse.forEach(label => label.classList.contains('up') ? label.classList.remove('up') : false);
    }
})


//События на тот или иной элемент и ниже их функции
btnOpenHeaderMenu.addEventListener('click', openHeaderMenu)
headerMenuClose.addEventListener('click', closeHeaderMenu)
callClose.addEventListener('click', closeCallModal)
if(toggleBtnOpenCategoryBlock) {
    toggleBtnOpenCategoryBlock.addEventListener('click', togglecategoryBlock)
}

function closeHeaderMenu() {
    headerMenu.classList.add('close')
}
function openHeaderMenu(){
    headerMenu.classList.remove('close')
}
function closeCallModal(e) {
    e.preventDefault()
    labelFormCallReverse.forEach(label => label.classList.contains('up') ? label.classList.remove('up') : false);
    callWindow.classList.add('close')
    body.style.overflow = 'auto';
}
function openCallModal(e) {
    e.preventDefault()
    callWindow.classList.remove('close')
    closeHeaderMenu()
    body.style.overflow = 'hidden';
}
function togglecategoryBlock(e) {
    categoryBlock.classList.toggle('hide')
    document.querySelector('.fullscrenn__window.third').classList.toggle('center')
    rotateImgBtnOpenCategory.classList.toggle('rotate')
}




//Логика отправки форм в телеграм
$(document).ready(function() {
        $(".call__form").submit(function() { 
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "call.php", 
                data: th.serialize()
            }).done(function() {
                callForm.reset()
                callThenks.classList.add('active')
                setTimeout(() => {
                            callWindow.classList.add('close')
                            body.style.overflow = 'auto';
                            labelFormCallReverse.forEach(label => label.classList.contains('up') ? label.classList.remove('up') : false);
                            callThenks.classList.remove('active');
                        }, 3000)
            });
            return false;
        });
});
$(document).ready(function() {
    $(formBig).submit(function() { 
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "telegram.php", 
            data: th.serialize()
        }).done(function() {
            formBig.reset()
            document.querySelector('.call__thenksbigform').classList.add('active')
            spanInputHelper.forEach(span => {
                if(span.classList.contains('visible')) span.classList.remove('visible')
            })
            setTimeout(() => {
                document.querySelector('.call__thenksbigform').classList.remove('active');
            }, 4000)
        });
        return false;
    });
});







//Прокрутка с первого блока на большую форму и каталог
if(btnCatalog) {
    btnCatalog.addEventListener('click', (e) => {
        e.preventDefault()
        fullscrenSecond.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
        })
    })
}
if(callBtnFirstBlock) {
    callBtnFirstBlock.addEventListener('click', (e) => {
        e.preventDefault()
        formBig.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        })
    })
}
if(cartridgeSlide) {
    cartridgeSlide.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.fullscrenn__window_cartbody').scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
        })
    })
}





// Анимация на странице
const animItems = document.querySelectorAll('.anim__items');
if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll, {passive: true})
    function animOnScroll () {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offSet(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;  
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active') ;
            } else {
                //Если у элемента есть этот класс то при возврате к нему повторно анимироваться он не будет
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active') 
                }
            }
        }
    }
    //Функция которая точно отслеживает скролл
    function offSet(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {  top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    //Запускаем функции анимации с задержкой чтобы все успело прогрузится
    setTimeout(()=> {
        animOnScroll ()
    }, 1000)
}


//Cлайдеры
if(document.querySelector('.slider')) {
    $(document).ready(function() {
        $('.slider').slick({
            arrows: true,  //Стрелким включены
            slidesToShow: 1,  //сколько слайдеров показано за раз 
            slidesToScroll: 1,  //Количество слайдов которое пролистывается при скроле
            speed: 400, //Скорость пролистывания слайдов
            easing: 'easy',  //Тип анимации при смене слайдов
            infinite: true, //Будет ли слайдер бесконечный
            initialSlide: 0, //Стартовыый слайдер
            autoplay: true,  //Будет ли он автоматически листаться
            autoplaySpeed: 3000, //Скорость автоматического листания
            pauseOnFocus: true, //пауза автопроигрывания при нажатии 
            pauseOnHover: true, //пауза автопроигрывания при наведении 
            draggable: true, //Можно свайпать на компе
            swipe: true, //Можно свайпать на телефоне
            touchThreshold: 5, //Какое растояние нужно просвайпить для смены слайда
            touchMove: true, //Нельзя тягать с места на место при false
            waitForAnimate: false, //Включает быстрое перелистывание при быстром нажатии на стрелки и точки
            centerMode: false, //Включает центрирование слайда, можно использовать вместе с opacity
            variableWidth: false, //размеры слайдов не регулируются, авто-адаптивность, можно использовать с centerMode
            rows: 1,  //Количество рядов слайдера по вертикали
            slidesPerRow: 1, //Количество рядов по горизонтали
            fade: true, //Слайды не листаются а заменяются, слайд-шоу
            asNavFor: ".slidermin", //Связывание 2 слайдеров, нужно указать для 2 слайдеров
            mobileFirst: false, //Меняет в предудыщем пункте max-width на min-width
            // appendArrows: $('.dotsandarrows'),  //Перемещение стрелок в другой div с классом dotsandarrows
            // appendDots: $('.dotsandarrows'),   //Перемещение точек в другой div с классом dotsandarrows
        });
        $('.slidermin').slick({ 
            arrows: false,
            dots: false,
            adaptiveHeight: true,  
            slidesToShow: 3,  
            slidesToScroll: 1,
            speed: 400,
            autoplaySpeed: 3000, //Скорость автоматического листания
            easing: 'easy', 
            initialSlide: 0,
            centerMode: true,
            pauseOnFocus: true, //пауза автопроигрывания при нажатии 
            pauseOnHover: true, //пауза автопроигрывания при наведении
            asNavFor: ".slider", //Связывание 2 слайдеров, нужно указать для 2 слайдеров
        });   
    })
}


