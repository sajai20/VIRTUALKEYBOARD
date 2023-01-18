'use strict'

let keyEl = document.querySelectorAll('.key');
let space_keyEl = document.querySelector('.space_key');
let caps_keyEl = document.querySelector('.caps_lock');
let shift_leftEl = document.querySelector('.shift_key_left');
let shidt_rightel = document.querySelector('.shift_key_right');
let textEl = document.querySelector('.text');
let backspaceEl = document.querySelector('.backspace_key');
let tabEl = document.querySelector('.tab');
let text = '';

let caps = false;


function display() {
    textEl.value = text;
}

function remove_effect(key) {
    setTimeout(() => {
        key.classList.remove('remove');
    }, 500)
}
keyEl.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.innerText !== 'backspace' && key.innerText !== 'tab' && key.innerText !== 'caps lock') {
            if (caps == true)
                text += key.innerText;
            else
                text += key.innerText.toLowerCase();
            key.classList.add('remove');
            remove_effect(key);
            display();
        }
    })
})

tabEl.addEventListener('click', () => {
    text += "    ";
    tabEl.classList.add('remove');
    remove_effect(tabEl);
    display();
})

space_keyEl.addEventListener('click', () => {
    text += " ";
    space_keyEl.classList.add('remove');
    remove_effect(space_keyEl);
    display();
})

backspaceEl.addEventListener('click', () => {
    let len = text.length;
    text = text.substring(0, len - 1);
    backspaceEl.classList.add('remove');
    remove_effect(backspaceEl);
    display();
})

caps_keyEl.addEventListener('click', () => {
    if (caps == false) {
        caps_keyEl.classList.add('active');
        caps = true;
    }
    else {
        caps = false;
        caps_keyEl.classList.remove('active');
    }
})

