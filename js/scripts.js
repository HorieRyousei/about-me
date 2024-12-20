
document.addEventListener('DOMContentLoaded', () => {
    console.log('自己紹介サイトへようこそ！');
});
function toggleMenu() {
     var menu = document.getElementById("slide-menu");
     menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初回ロード時のチェック
});
