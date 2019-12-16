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
