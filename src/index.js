

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import firstForm from './modules/firstform';
import questions from './modules/questions';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';


timer('31 december 2022');
menu();
modal();
calc(100);
firstForm();
questions();
tabs();
slider({
    slider: '.portfolio-content',
    slide: '.portfolio-item',
    slideActive: 'portfolio-item-active',
    dotsParam: '.portfolio-dots',
    dotActive: 'dot-active'
});
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });