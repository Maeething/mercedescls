const backButton = document.getElementById('backbutton');

backButton.addEventListener('mouseover', () => {
    backButton.style.transition = 'opacity 0.3s ease-in-out'; 
    backButton.style.opacity = '0.5'; 

    setTimeout(() => {
        backButton.src = 'whiteback.png'; 
        backButton.style.opacity = '1'; 
    }, 150); 
});

backButton.addEventListener('mouseout', () => {
    backButton.style.transition = 'opacity 0.3s ease-in-out';
    backButton.style.opacity = '0.5';

    setTimeout(() => {
        backButton.src = 'greyback.png';
        backButton.style.opacity = '1';
    }, 150);
});
