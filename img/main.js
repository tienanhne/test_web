//// scroll header
window.addEventListener('scroll' , () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
const nav = document.querySelector('.main_ul');
var toggle = document.getElementById('toggle')
        toggle.onclick = function(){
            toggle.classList.toggle('open')
            nav.classList.toggle('show')
        }


// const openNav = document.querySelector('#btn-cart');
// openNav.addEventListener('click', () => {
//     nav.classList.toggle('show')
// })
