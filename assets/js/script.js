document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.querySelector(".spinner-wrapper");
    var preloaderDuration = 1000;
    setTimeout(function () {
        preloader.style.display = "none";
    }, preloaderDuration);
});