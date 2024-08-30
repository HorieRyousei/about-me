
document.addEventListener('DOMContentLoaded', () => {
    console.log('自己紹介サイトへようこそ！');
});
function toggleMenu() {
     var menu = document.getElementById("slide-menu");
     menu.classList.toggle("active");
}



document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    // Intersection Observer を設定
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                container.classList.add('animate');
                observer.unobserve(container); // アニメーションが再生されたら監視を停止
            }
        });
    }, {
        threshold: 0.5 // 50% が画面に入ったときにアニメーションを開始
    });

    // コンテナ要素を監視
    observer.observe(container);
});


