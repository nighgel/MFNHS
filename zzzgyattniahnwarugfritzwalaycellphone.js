document.addEventListener("DOMContentLoaded", function() {
    const programTitles = document.querySelectorAll(".program h3");

    programTitles.forEach(title => {
        title.addEventListener("mouseover", function() {
            const info = this.nextElementSibling;
            if (info) {
                info.style.display = "block";
                info.style.opacity = 0;
                setTimeout(() => {
                    info.style.opacity = 1;
                    info.style.transition = "opacity 0.5s";
                }, 10);

                const program = this.parentElement;
                program.style.marginBottom = "100px";
            }
        });

        title.addEventListener("mouseout", function() {
            const info = this.nextElementSibling;
            if (info) {
                setTimeout(() => {
                    info.style.opacity = 0;
                    info.style.display = "none";
                }, 500);

                const program = this.parentElement;
                program.style.marginBottom = "0";
            }
        });

        const info = title.nextElementSibling;
        if (info) {
            info.addEventListener("mouseover", function() {
                this.style.opacity = 1;
                this.style.display = "block";
                clearTimeout(this.timeoutId);
            });

            info.addEventListener("mouseout", function() {
                this.style.opacity = 0;
                this.timeoutId = setTimeout(() => {
                    this.style.display = "none";
                }, 500);

                const program = this.parentElement;
                program.style.marginBottom = "0";
            });
        }
    });
});


<script>
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    });
</script>