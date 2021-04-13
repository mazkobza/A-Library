const btn = document.querySelectorAll('.mainBtn');
btn.forEach(function(button){
    button.addEventListener('mouseenter', godzilla);
    button.addEventListener('mouseleave', gipsydanger);
})
window.addEventListener('load', removeList)


// const btn2 = document.querySelector('.btn2');
// btn2.addEventListener('mouseenter', godzilla);
// btn2.addEventListener('mouseleave', gipsydanger);

// const btn3 = document.querySelector('.btn3');
// btn3.addEventListener('mouseenter', godzilla);
// btn3.addEventListener('mouseleave', gipsydanger);
function removeList(){
    let list = document.querySelectorAll('.secondaryBtn')
    list.forEach((item) => {
        item.style.display = 'none'
        
    })
};

function godzilla(e){
    e.target.lastElementChild.style.display = 'flex';
};



function gipsydanger(e){
    e.target.lastElementChild.style.display = 'none';
};