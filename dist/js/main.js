/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_firstform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/firstform */ \"./modules/firstform.js\");\n/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/questions */ \"./modules/questions.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 december 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_firstform__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_questions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    slider: '.portfolio-content',\r\n    slide: '.portfolio-item',\r\n    slideActive: 'portfolio-item-active',\r\n    dotsParam: '.portfolio-dots',\r\n    dotActive: 'dot-active'\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n    formId: 'form1',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: 'form2' });\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: 'form3' });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.querySelector('#total')\r\n    const calcItems = document.querySelectorAll('input.calc-item');\r\n\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0\r\n        let calcCountValue = 1\r\n        let calcDayValue = 1\r\n\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 500,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    total.textContent = Math.floor(progress * totalValue)\r\n                }\r\n            })\r\n        } else {\r\n            totalValue = 0\r\n        }\r\n\r\n        total.textContent = totalValue\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc()\r\n        }\r\n    })\r\n\r\n\r\n\r\n    calcItems.forEach((item) => {\r\n        item.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^\\d]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n        })\r\n    })\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/firstform.js":
/*!******************************!*\
  !*** ./modules/firstform.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firstForm = () => {\r\n    const firstFormName = document.querySelector('#form1-name')\r\n    const firstFormPhone = document.querySelector('#form1-phone')\r\n    const firstFormMail = document.querySelector('#form1-email')\r\n\r\n\r\n\r\n\r\n    firstFormName.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {\r\n            return g1 + g2.toUpperCase();\r\n        });\r\n    })\r\n\r\n    firstFormPhone.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d()-]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n\r\n    firstFormMail.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\w@\\-_.!~*']/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstForm);\n\n//# sourceURL=webpack:///./modules/firstform.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const scrollBtn = document.querySelector('a[href=\"#service-block\"]>img');\r\n\r\n\r\n    const handleMenu = () => {\r\n        menu.style.display = 'flex'\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    // обязательное\r\n    // menuBtn.addEventListener('click', handleMenu);\r\n    // menu.addEventListener('click', (e) => {\r\n    //     if (e.target.classList.contains('close-btn')) {\r\n    //         handleMenu();\r\n    //     } else if (e.target.matches('ul>li>a')) {\r\n    //         handleMenu();\r\n    //         e.preventDefault();\r\n    //         const blockID = e.target.getAttribute('href');\r\n    //         document.querySelector('' + blockID).scrollIntoView({\r\n    //             behavior: 'smooth',\r\n    //             block: 'start'\r\n    //         })\r\n    //     }\r\n    // })\r\n    // обязательное\r\n\r\n\r\n    // доп задание\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu')) {\r\n            handleMenu()\r\n        } else if (e.target.matches('ul>li>a')) {\r\n            handleMenu();\r\n            e.preventDefault();\r\n            const blockID = e.target.getAttribute('href');\r\n            document.querySelector('' + blockID).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            })\r\n        } else if (menu.classList.contains('active-menu')) {\r\n            if (!e.target.closest('menu') || e.target.classList.contains('close-btn')) {\r\n                handleMenu()\r\n            }\r\n        }\r\n    })\r\n    // доп задание\r\n\r\n\r\n\r\n\r\n    scrollBtn.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        const scrollLink = document.querySelector('a[href=\"#service-block\"]');\r\n        const blockID = scrollLink.getAttribute('href');\r\n        document.querySelector('' + blockID).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const getModal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const modalFormName = getModal.querySelector('#form3-name')\r\n    const modalFormPhone = getModal.querySelector('#form3-phone')\r\n    const modalFormMail = getModal.querySelector('#form3-email')\r\n\r\n\r\n\r\n    modalFormName.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {\r\n            return g1 + g2.toUpperCase();\r\n        })\r\n    })\r\n\r\n    modalFormPhone.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d()-]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n\r\n    modalFormMail.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\w@\\-_.!~*']/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n\r\n\r\n\r\n    getModal.style.display = 'block'\r\n    getModal.style.transform = 'translateY(-100%)'\r\n\r\n    buttons.forEach((button) => {\r\n        button.addEventListener('click', () => {\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 700,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    getModal.style.transform = `translateY(${(progress - 1) * 100 + '%'})`;\r\n                }\r\n            })\r\n        })\r\n    })\r\n\r\n\r\n    getModal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            getModal.style.display = 'block'\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 700,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    getModal.style.transform = `translateY(${(progress) * (-100) + '%'})`;\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n\r\n    window.addEventListener('DOMContentLoaded', () => {\r\n        const clientWidth = document.documentElement.clientWidth;\r\n        const getModal = document.querySelector('.popup')\r\n        const buttons = document.querySelectorAll('.popup-btn')\r\n\r\n\r\n        if (clientWidth > 767) {\r\n            getModal.style.display = 'block'\r\n            getModal.style.transform = 'translateY(-100%)'\r\n\r\n            buttons.forEach((button) => {\r\n                button.addEventListener('click', () => {\r\n                    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 700,\r\n                        timing(timeFraction) {\r\n                            return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            getModal.style.transform = `translateY(${(progress - 1) * 100 + '%'})`;\r\n                        }\r\n                    })\r\n                })\r\n            })\r\n\r\n            getModal.addEventListener('click', (e) => {\r\n                if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n                    getModal.style.display = 'block'\r\n                    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 700,\r\n                        timing(timeFraction) {\r\n                            return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            getModal.style.transform = `translateY(${(progress) * (-100) + '%'})`;\r\n                        }\r\n                    })\r\n                }\r\n            })\r\n        } if (clientWidth < 768) {\r\n            getModal.style.display = 'none';\r\n\r\n            buttons.forEach((button) => {\r\n                button.addEventListener('click', () => {\r\n                    getModal.style.display = 'block'\r\n                    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                        duration: 700,\r\n                        timing(timeFraction) {\r\n                            return timeFraction;\r\n                        },\r\n                        draw(progress) {\r\n                            getModal.style.transform = `translateY(${(progress) * 0 + '%'})`;\r\n                        }\r\n                    })\r\n                })\r\n            })\r\n\r\n            getModal.addEventListener('click', (e) => {\r\n                if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n                    getModal.style.display = 'none';\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/questions.js":
/*!******************************!*\
  !*** ./modules/questions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst questions = () => {\r\n    const questionsFormName = document.querySelector('#form2-name')\r\n    const questionsFormPhone = document.querySelector('#form2-phone')\r\n    const questionsFormMail = document.querySelector('#form2-email')\r\n    const questionsFormMessage = document.querySelector('#form2-message')\r\n\r\n\r\n\r\n\r\n    questionsFormName.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {\r\n            return g1 + g2.toUpperCase();\r\n        });;\r\n    })\r\n\r\n    questionsFormPhone.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\d()-]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n\r\n    questionsFormMail.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^\\w@\\-_.!~*']/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n\r\n    questionsFormMessage.addEventListener('blur', (e) => {\r\n        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\\ \\ +/gi, ' ').replace(/\\-\\-+/gi, '-').replace(/^\\s/g, '').replace(/\\s$/g, '');\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questions);\n\n//# sourceURL=webpack:///./modules/questions.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId)\r\n    const nameInputs = form.querySelectorAll('input[name=user_name]')\r\n    const mailInputs = form.querySelectorAll('input[name=user_email]')\r\n    const phoneInputs = form.querySelectorAll('input[name=user_phone]')\r\n    const statusBlock = document.createElement('div')\r\n    statusBlock.style.color = 'white'\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с Вами свяжется!'\r\n\r\n    const validate = (name, phone) => {\r\n        let success = true\r\n\r\n\r\n        name.forEach(input => {\r\n            if (input.value.length < 2) {\r\n                success = false\r\n                alert('Имя должно содержать минимум 2 символа!')\r\n                statusBlock.textContent = errorText\r\n            }\r\n        })\r\n        phone.forEach(input => {\r\n            if (input.value.length < 11) {\r\n                success = false\r\n                alert('Номер телефона должен содержать минимум 11 цифр!')\r\n                statusBlock.textContent = errorText\r\n            }\r\n        })\r\n\r\n        if (success == true) {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    statusBlock.textContent = `Загрузка ${Math.floor(progress * 100)}%`\r\n                }\r\n            })\r\n        }\r\n\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n\r\n\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n\r\n            console.log(element);\r\n\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value\r\n            }\r\n        })\r\n\r\n\r\n\r\n        if (validate(nameInputs, phoneInputs)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n        } else {\r\n            alert('Данные не валидны!!!')\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место')\r\n        }\r\n\r\n\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault()\r\n\r\n            submitForm()\r\n        })\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({\r\n    slider, slide, dotsParam, slideActive = 'slide-active', dotActive = 'dot-active'\r\n}) => {\r\n\r\n    const sliderBlock = document.querySelector(slider);\r\n    const slides = document.querySelectorAll(slide);\r\n    const dotsList = document.querySelector(dotsParam);\r\n\r\n    const timeInterval = 2000\r\n\r\n    let currentSlide = 0;\r\n    let interval\r\n\r\n    if (!sliderBlock || !slides.length) {\r\n        console.error('Параметр слайдера или слайдов передан неверно')\r\n        return;\r\n    }\r\n\r\n\r\n    for (let i = 0; i < slides.length; i++) {\r\n        const dot = document.createElement('li');\r\n        dot.classList.add('dot');\r\n        dotsList.append(dot);\r\n    }\r\n\r\n\r\n    const dots = document.querySelectorAll('.dot');\r\n    dots[0].classList.toggle(dotActive)\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, slideActive)\r\n        prevSlide(dots, currentSlide, dotActive)\r\n        currentSlide++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, slideActive)\r\n        nextSlide(dots, currentSlide, dotActive)\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, slideActive)\r\n        prevSlide(dots, currentSlide, dotActive)\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, slideActive)\r\n        nextSlide(dots, currentSlide, dotActive)\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide()\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval)\r\n        }\r\n    }, true)\r\n\r\n    startSlide(timeInterval)\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            timerHours.textContent = getTime.hours;\r\n            timerMinutes.textContent = getTime.minutes;\r\n            timerSeconds.textContent = getTime.seconds;\r\n            if (getTime.hours < 10) {\r\n                timerHours.textContent = '0' + getTime.hours;\r\n            } if (getTime.minutes < 10) {\r\n                timerMinutes.textContent = '0' + getTime.minutes;\r\n            } if (getTime.seconds < 10) {\r\n                timerSeconds.textContent = '0' + getTime.seconds;\r\n            }\r\n        } else {\r\n            clearInterval(idInterval);\r\n        }\r\n    }\r\n    idInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;