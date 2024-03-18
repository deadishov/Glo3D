const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const scrollBtn = document.querySelector('a[href="#service-block"]>img');


    const handleMenu = () => {
        menu.style.display = 'flex'
        menu.classList.toggle('active-menu');
    };

    // обязательное
    // menuBtn.addEventListener('click', handleMenu);
    // menu.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('close-btn')) {
    //         handleMenu();
    //     } else if (e.target.matches('ul>li>a')) {
    //         handleMenu();
    //         e.preventDefault();
    //         const blockID = e.target.getAttribute('href');
    //         document.querySelector('' + blockID).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //     }
    // })
    // обязательное


    // доп задание
    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu()
        } else if (e.target.matches('ul>li>a')) {
            handleMenu();
            e.preventDefault();
            const blockID = e.target.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        } else if (menu.classList.contains('active-menu')) {
            if (!e.target.closest('menu') || e.target.classList.contains('close-btn')) {
                handleMenu()
            }
        }
    })
    // доп задание




    scrollBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const scrollLink = document.querySelector('a[href="#service-block"]');
        const blockID = scrollLink.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


};

export default menu;