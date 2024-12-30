// 留言板功能
let messages = [];

function addMessage(event) {
    event.preventDefault();
    const nameInput = document.getElementById('visitorName');
    const contentInput = document.getElementById('messageContent');
    
    if (nameInput.value.trim() && contentInput.value.trim()) {
        const newMessage = {
            name: nameInput.value.trim(),
            content: contentInput.value.trim(),
            date: new Date().toLocaleString('zh-CN')
        };
        
        messages.unshift(newMessage);  // 将新消息添加到开头
        renderMessages();
        
        // 清空输入框
        nameInput.value = '';
        contentInput.value = '';
    }
}

function renderMessages() {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = messages.map(msg => `
        <div class="message-card">
            <div class="message-header">
                <span class="visitor-name">${msg.name}</span>
                <span class="message-date">${msg.date}</span>
            </div>
            <div class="message-content">${msg.content}</div>
        </div>
    `).join('');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保 Bootstrap 已加载
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap is not loaded!');
        return;
    }

    // 初始化轮播图
    const carouselElement = document.getElementById('imageCarousel');
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,    // 2秒切换一次
            wrap: true,        // 循环播放
            keyboard: true,    // 键盘控制
            pause: 'hover',    // 鼠标悬停时暂停
            touch: true        // 支持触摸滑动
        });

        // 添加键盘控制
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                carousel.prev();
            } else if (e.key === 'ArrowRight') {
                carousel.next();
            }
        });
    } else {
        console.error('Carousel element not found!');
    }

    // 返回顶部按钮功能
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 导航栏滚动行为
    const navbar = document.querySelector('.navbar');
}); 