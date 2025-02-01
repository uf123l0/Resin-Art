window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('.About-content');
    const aboutOffsetTop = aboutSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > aboutOffsetTop) {
        aboutSection.classList.add('visible');
    }
});
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}