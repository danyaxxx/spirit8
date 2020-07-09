'use strict';

const HTML = document.documentElement;
const BODY = document.body;
let headNav = document.getElementById('nav');
let headNavToggle = document.getElementById('nav__toggler');

document.addEventListener('DOMContentLoaded', function() {
    headNavToggle.checked = false;
    NavigationActive();
}, false);

document.addEventListener('scroll', function() {
    if (HTML.clientWidth > 980 || BODY.clientWidth > 980) {
        NavigationActive();
    }
}, false);

function NavigationActive() {
    if (HTML.scrollTop > 49 || BODY.scrollTop > 49) {
        if (!headNav.classList.contains('scroll')) {
            headNav.classList.add('scroll');
        }
    } else {
        if (headNav.classList.contains('scroll')) {
            headNav.classList.remove('scroll');
        }
    }
}

document.querySelector('.nav-items').addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-item__link')) {
        headNavToggle.checked = false;
    }
});

let team_slider = TDC('#team-slider', {
    items: 4,
    nav: false,
    loop: true,
    dots: true,
    responsive: {
        0: {
            items:1
        },
        600: {
            items:3
        },
        1000: {
            items:4
        }
    }
});

let clients_slider = TDC('#clients-slider', {
    items: 5,
    nav: false,
    loop: true,
    dots: true,
    responsive: {
        0: {
            items:1
        },
        600: {
            items:3
        },
        1000: {
            items:5
        }
    }
});

let work_fl = document.getElementById('filter');
let work_items = document.querySelectorAll("#portfolio .portfolio-item");

work_fl.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.classList.contains('portfolio_fl-item')) {
        let category = e.target.dataset.filter;
        if (category === "") {
            for (var i = 0; i < work_items.length; i++) {
                work_items[i].style.display = 'block';
            }
        } else if (category) {
            for (var i = 0; i < work_items.length; i++) {
                let fl_tags = work_items[i].dataset.tags.split(" ");
                if (fl_tags) {
                    if (fl_tags.length > 1) {
                        for (var j = 0; j < fl_tags.length; j++) {
                            if (fl_tags[j] === category) {
                                work_items[i].style.display = 'block';
                            } else {
                                work_items[i].style.display = 'none';
                            }
                        }
                    } else {
                        if (fl_tags[0] === category) {
                                work_items[i].style.display = 'block';
                            } else {
                                work_items[i].style.display = 'none';
                            }
                    }
                }
            }
        }
    }
});
