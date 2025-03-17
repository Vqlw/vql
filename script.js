document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.querySelector('.profile-pic');

    profilePic.addEventListener('mouseover', () => {
        profilePic.style.transform = 'scale(1.1) rotate(3deg)';
        profilePic.style.filter = 'brightness(1.3)';
    });

    profilePic.addEventListener('mouseout', () => {
        profilePic.style.transform = 'scale(1)';
        profilePic.style.filter = 'brightness(1)';
    });
});
