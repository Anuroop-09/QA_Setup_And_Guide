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



// const sideBarList = document.querySelector(".sidebar__list");
// const sideBarLinks = document.querySelectorAll(".sidebar__link");

// // Function to handle activation of the correct sidebar link based on the hash
// function setActiveLink() {
//     const currentHash = window.location.hash; // Get the current hash from the URL

//     sideBarLinks.forEach(item => {
//         // Remove the active class from all items
//         item.classList.remove("sidebar__link--active");

//         // Check if the href attribute of the link matches the current hash
//         if (item.getAttribute("href") === currentHash) {
//             item.classList.add("sidebar__link--active"); // Add active class to matching item
//         }
//     });
// }

// // Set the active link when the page loads or when the hash changes
// window.addEventListener("load", setActiveLink);
// window.addEventListener('hashchange', setActiveLink);

// // Add event listener to sidebar list for handling clicks on the links
// if (sideBarList) {
//     sideBarList.addEventListener('click', (e) => {
//         const clickedLink = e.target.closest(".sidebar__link"); // Ensure the clicked element is a link
        
//         if (clickedLink) {
//             sideBarLinks.forEach(item => item.classList.remove("sidebar__link--active"));
//             clickedLink.classList.add("sidebar__link--active");
//         }
//     });
// }
