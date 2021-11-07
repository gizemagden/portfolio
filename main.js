// Function to scroll the content of header item
function scrollToSection(e) {
  const section = document.getElementById(`${e.target.id}_`);
  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

// Add event listener to list elements
const headerItems = document.querySelectorAll(".header__list__item");
headerItems.forEach(item => {
  item.addEventListener("click", scrollToSection, false);
});
