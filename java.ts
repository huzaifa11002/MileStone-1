    const newCont = document.getElementById('extra') as HTMLElement;
    const btn = document.getElementById('objmore') as HTMLButtonElement;

    btn.addEventListener('click', () => {
        newCont.style.display = newCont.style.display === 'none' ? 'block' : 'none';
        btn.textContent = newCont.style.display === 'none' ? 'See More' : 'See Less';
    });