document.addEventListener('DOMContentLoaded', () => {
    
    // ===== 1. 手機版漢堡選單控制 =====
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenu && navLinks) {
        // 點擊漢堡按鈕開關選單
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // 點擊選單內的連結後自動收合選單
        const links = navLinks.querySelectorAll('li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // ===== 2. 滾動出現動畫 =====
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

    // ===== 3. 點擊 Modal 外部關閉 Modal =====
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

// ===== 開啟 Modal =====
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return; // 防呆機制
    
    modal.style.display = 'block';
    // 利用一點點延遲來觸發 CSS 轉場效果
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    // 鎖定背景滾動
    document.body.classList.add('modal-open');
}

// ===== 關閉 Modal =====
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return; // 防呆機制
    
    modal.classList.remove('show');
    // 等待動畫結束後隱藏
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    // 恢復背景滾動
    document.body.classList.remove('modal-open');
}

// ===== 切換 Modal 放大/全螢幕 =====
function toggleExpand(button) {
    const modalContent = button.closest('.modal-content');
    modalContent.classList.toggle('fullscreen');
    
    const icon = button.querySelector('i');
    if (modalContent.classList.contains('fullscreen')) {
        // 切換為縮小圖示 (FontAwesome 6)
        icon.className = 'fa-solid fa-down-left-and-up-right-to-center';
    } else {
        // 切換回放大圖示 (FontAwesome 6)
        icon.className = 'fa-solid fa-up-right-and-down-left-from-center';
    }
}
// 打開圖片放大視窗
function openLightbox(imgElement) {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imgElement.src; // 抓取被點擊圖片的來源網址
    lightbox.classList.add('show');
}

// 關閉圖片放大視窗
function closeLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    lightbox.classList.remove('show');
}
