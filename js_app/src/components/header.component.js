//2 - импортируем сюда родительский Component из component.js

import {Component} from '../core/component';

export class HeaderComponent extends Component { //HeaderComponent наследует от родителя/Component
    constructor(id) {
        super(id) //вызов конструктора родителя - Component, и через это - приватной переменной this.$el (из файла component.js)
    }

    init() {
        const btn = this.$el.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this)); //bind привязка контекста
    }
}

function buttonHandler() { //приватная функция/переменная, доступна только в этом файле
    this.$el.classList.add('hide');
}