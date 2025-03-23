// script.js
// ฟังก์ชันเปิด modal
function openModalVideo(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoSource = document.getElementById('videoSource');
    const video = document.getElementById('modalVideo');

    // ตั้งค่า URL ของวิดีโอ
    videoSource.src = videoUrl;
    video.load(); // โหลดวิดีโอใหม่
    video.play(); // เล่นวิดีโออัตโนมัติ

    // แสดง modal
    modal.style.display = 'flex';

    // เพิ่ม event listener สำหรับปิด modal ด้วยการกด Esc
    document.addEventListener('keydown', handleEsc);
}

// ฟังก์ชันปิด modal
function closeModalVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');

    // หยุดวิดีโอ
    video.pause();
    video.currentTime = 0; // รีเซ็ตวิดีโอ

    // ซ่อน modal
    modal.style.display = 'none';

    // ลบ event listener สำหรับ Esc
    document.removeEventListener('keydown', handleEsc);
}

// ฟังก์ชันปิด modal ด้วยปุ่ม Esc
function handleEsc(event) {
    if (event.key === 'Escape') {
        closeModalVideo();
    }
}

// ปิด modal เมื่อคลิกนอก modal
document.getElementById('videoModal').addEventListener('click', function (event) {
    if (event.target === this) {
        closeModalVideo();
    }
});