
let currentImageId = 1;

document.querySelectorAll(".link a").forEach((link) => {
    link.addEventListener("mouseenter", function () {
        const targetImageId = parseInt(this.getAttribute("data-image"));

        let rotationValue = targetImageId > currentImageId ? 360 : -360;
        const pill = document.querySelector(".pill");
        const images = document.querySelectorAll(".pill img");

        gsap.to(pill, {
            rotate: rotationValue,
            duration: 0.4,
            onComplete: () => {
                gsap.set(pill, {
                    rotation: 0
                });
            }
        });

        gsap.set(images, {
            xIndex: 0,
            opacity: 0,
            delay: 0.25
        });

        gsap.set(`.pill img[data-id='${targetImageId}']`, {
            zIndex: 10,
            opacity: 1,
            delay: 0.25
        });

        currentImageId = targetImageId;
    });
});
























