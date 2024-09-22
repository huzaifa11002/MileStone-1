var newCont = document.getElementById('extra');
var btn = document.getElementById('objmore');
btn.addEventListener('click', function () {
    newCont.style.display = newCont.style.display === 'none' ? 'block' : 'none';
    btn.textContent = newCont.style.display === 'none' ? 'See More' : 'See Less';
});
