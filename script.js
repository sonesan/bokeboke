const images = [
    "1.png", "2.png", "3.png", "4.png", "5.png",
    "6.png", "7.png", "8.png", "9.png", "10.png"
];

function displayRandomImages() {
    const shuffled = images.sort(() => 0.5 - Math.random());
    const selectedImages = shuffled.slice(0, 5);
    const container = document.getElementById("image-container");
    container.innerHTML = "";
    
    selectedImages.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.style.animation = `fadeIn 0.5s ease-in ${index * 0.3}s forwards`; // 1枚ずつ遅延をつける
        container.appendChild(img);
    });
}

// 初回表示
document.getElementById("random-button").addEventListener("click", displayRandomImages);
displayRandomImages();