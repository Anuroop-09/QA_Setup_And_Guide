// Loader handling with minimum delay + fade-out
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.classList.add("hidden");
    }, 200); // minimum visible time = 0.4s
});


document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        // skip anchors that open in new tab or same page (#hash)
        if (link.target === "_blank" || link.href.includes("#")) return;

        document.getElementById("loader").classList.remove("hidden");
    });
});