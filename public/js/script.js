const sideBarList = document.querySelector(".sidebar__list");
const sideBarLinks = document.querySelectorAll(".sidebar__link");

if (sideBarList) {
    sideBarList.addEventListener('click', (e) => {
        sideBarLinks.forEach(item => item.classList.remove("sidebar__link--active"));
        e.target.classList.add("sidebar__link--active");
    });
}



// Formating code snippets to align proper on the view
const preTags = document.querySelectorAll('.content-unit__code');
preTags.forEach(pre => {
    const lines = pre.textContent.split('\n');
    // Remove empty lines at start/end
    while (lines.length && lines[0].trim() === '') lines.shift();
    while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
    // Find minimum indentation (ignoring empty lines)
    const minIndent = Math.min(
    ...lines.filter(line => line.trim() !== '')
            .map(line => line.match(/^ */)[0].length)
    );
    // Remove that indentation from all lines
    const cleaned = lines.map(line => line.slice(minIndent)).join('\n');
    pre.textContent = cleaned;
});