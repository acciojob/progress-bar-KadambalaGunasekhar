//your JS code here. If required.
 const circles = document.querySelectorAll(".circle");

        const prev = document.getElementById("prev");
        const next = document.getElementById("next");

        const progress = document.getElementById("progress");

        let currentStep = 1;

        next.addEventListener("click", function() {

            currentStep++;

            updateProgress();

        });

        prev.addEventListener("click", function() {

            currentStep--;

            updateProgress();

        });

        function updateProgress() {

            // Activate circles based on current step

            circles.forEach((circle, index) => {

                if (index < currentStep) {
                    circle.classList.add("active");
                } 
                else {
                    circle.classList.remove("active");
                }

            });

            // Update progress line

            progress.style.width =
                ((currentStep - 1) / (circles.length - 1)) * 100 + "%";

            // Disable and enable buttons

            prev.disabled = currentStep === 1;

            next.disabled = currentStep === circles.length;

        }