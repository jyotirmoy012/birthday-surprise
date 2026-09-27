document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // GET ALL SCREENS
    // =========================================

    const screens = document.querySelectorAll(".screen");

    function showScreen(screenId) {

        screens.forEach(function (screen) {
            screen.classList.remove("active");
        });

        const targetScreen = document.getElementById(screenId);

        if (targetScreen) {
            targetScreen.classList.add("active");
        }
    }


    // =========================================
    // BUTTONS
    // =========================================

    const startBtn = document.getElementById("start-btn");
    const introBtn = document.getElementById("intro-btn");

    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    const revealBtn = document.getElementById("reveal-btn");
    const memoryBtn = document.getElementById("memory-btn");

    const finalBtn = document.getElementById("final-btn");

    const questionResponse =
        document.getElementById("question-response");


    // =========================================
    // START
    // =========================================

    if (startBtn) {

        startBtn.addEventListener("click", function () {

            showScreen("intro-screen");

        });

    }


    // =========================================
    // INTRO
    // =========================================

    if (introBtn) {

        introBtn.addEventListener("click", function () {

            showScreen("question-screen");

        });

    }


    // =========================================
    // YES BUTTON
    // =========================================

    if (yesBtn) {

        yesBtn.addEventListener("click", function () {

            // Show response
            if (questionResponse) {

                questionResponse.textContent =
                    "Yesss! That's the answer I was hoping for. 👀💗";

            }

            // Disable button after clicking
            yesBtn.disabled = true;

            yesBtn.style.opacity = "0.7";

            // Go to suspense screen
            setTimeout(function () {

                showScreen("suspense-screen");

            }, 1200);

        });

    }


    // =========================================
    // NO BUTTON
    // =========================================

    function moveNoButton() {

        if (!noBtn) return;

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX =
            window.innerWidth - buttonWidth - 20;

        const maxY =
            window.innerHeight - buttonHeight - 20;

        const randomX =
            Math.max(10, Math.random() * maxX);

        const randomY =
            Math.max(10, Math.random() * maxY);

        noBtn.style.position = "fixed";

        noBtn.style.left = randomX + "px";

        noBtn.style.top = randomY + "px";

        noBtn.style.zIndex = "9999";

        if (questionResponse) {

            questionResponse.textContent =
                "Nice try! 😭 You can't choose NO.";

        }

    }


    if (noBtn) {

        // Desktop
        noBtn.addEventListener(
            "mouseenter",
            moveNoButton
        );


        // Mobile
        noBtn.addEventListener(
            "touchstart",
            function (event) {

                event.preventDefault();

                moveNoButton();

            },
            { passive: false }
        );


        // If somehow clicked
        noBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                moveNoButton();

            }
        );

    }


    // =========================================
    // REVEAL BIRTHDAY
    // =========================================

    if (revealBtn) {

        revealBtn.addEventListener("click", function () {

            showScreen("birthday-screen");

            startConfetti();

        });

    }


    // =========================================
    // MEMORIES
    // =========================================

    if (memoryBtn) {

        memoryBtn.addEventListener("click", function () {

            showScreen("memories-screen");

        });

    }


    // =========================================
    // FINAL MESSAGE
    // =========================================

    if (finalBtn) {

        finalBtn.addEventListener("click", function () {

            showScreen("final-screen");

            startConfetti();

        });

    }


    // =========================================
    // CONFETTI
    // =========================================

    function startConfetti() {

        const symbols = [
            "💗",
            "✨",
            "🎉",
            "💕",
            "🎂",
            "🌸"
        ];

        for (let i = 0; i < 70; i++) {

            const confetti =
                document.createElement("div");

            confetti.textContent =
                symbols[
                    Math.floor(
                        Math.random() * symbols.length
                    )
                ];

            confetti.style.position = "fixed";

            confetti.style.top = "-30px";

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.fontSize =
                (12 + Math.random() * 18) + "px";

            confetti.style.zIndex = "10000";

            confetti.style.pointerEvents = "none";

            confetti.style.animation =
                "birthdayConfetti " +
                (2 + Math.random() * 3) +
                "s linear forwards";

            document.body.appendChild(confetti);

            setTimeout(function () {

                confetti.remove();

            }, 5500);

        }

    }


    // =========================================
    // CONFETTI ANIMATION
    // =========================================

    const style = document.createElement("style");

    style.textContent = `
        @keyframes birthdayConfetti {

            0% {
                transform:
                    translateY(-30px)
                    rotate(0deg);
                opacity: 1;
            }

            100% {
                transform:
                    translateY(110vh)
                    rotate(720deg);
                opacity: 0;
            }

        }
    `;

    document.head.appendChild(style);

});