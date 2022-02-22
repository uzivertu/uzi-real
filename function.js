
//при помощи js вычисляем координаты курсора в момент клика, и задаем размеры
//блоку круга который мы создали, чтоб он позицонировал в момент клика внутри кнопки
//где он в момент клика увеличивается до определенного размера в течении определенного времени а после чего изчезает
//
var buttons = document.getElementsByClassName('click'), // ловим клик мыши при помощи этого метода (гет) с классом обмануть
    forEach = Array.prototype.forEach; //ссылка на метод при помощи которого будем обращаться к свойству кнопки

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement); // ловим клик
});

function addElement(e) {
    var addDiv  = document.createElement('div'), // при клике создается див
        mValue  = Math.max(this.clientWidth, this.clientHeight), // координаты курсора в данный момент
        rect    = this.getBoundingClientRect();
        sDiv    = addDiv.style,
        px      = 'px';

    sDiv.width  = sDiv.height = mValue + px; // макс значение блока в кнопке
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);

}
