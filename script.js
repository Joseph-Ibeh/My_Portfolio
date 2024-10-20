//welcome page typing text
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to my page";
  let index = 0;

  function type() {
    document.getElementById("typing-text").textContent = text.substring(
      0,
      index + 1
    );
    index = (index + 1) % text.length; 
    setTimeout(type, 200); 
  }

  type();
});


// Nav  link

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a"); 

  const setActiveLink = () => {
    const currentPath = window.location.pathname.split("/").pop(); 
    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
     
      if (linkPath === currentPath) {
        link.classList.add("active"); 
      } else {
        link.classList.remove("active"); 
      }
    });
  };

  setActiveLink(); 

  navLinks.forEach((link) => {
    link.addEventListener("click", setActiveLink); 
  });
});


//Read more project display
function toggleReadMore(projectId) {
  const projectDetails = document.getElementById(projectId);
  if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
    projectDetails.style.display = "block";
  } else {
    projectDetails.style.display = "none";
  }
}
