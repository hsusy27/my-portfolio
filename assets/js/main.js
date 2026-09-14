document.addEventListener('DOMContentLoaded', () => {
    // 滾動出現動畫
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 點擊 Modal 外部關閉 Modal
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.classList.remove('show');
                setTimeout(() => modal.style.display = 'none', 300); // 等待淡出動畫
            });
            document.body.classList.remove('modal-open');
        }
    });
});

// 開啟 Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    // 利用一點點延遲來觸發 CSS 轉場效果
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    // 鎖定背景滾動
    document.body.classList.add('modal-open');
}

// 關閉 Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    // 等待動畫結束後隱藏
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    // 恢復背景滾動
    document.body.classList.remove('modal-open');
}
