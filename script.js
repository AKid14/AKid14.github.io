document.addEventListener('DOMContentLoaded', () => {
  const placesBtn = document.getElementById('placesBtn');
  const thingsBtn = document.getElementById('thingsBtn');
  const subBar = document.getElementById('subBar');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const main = document.getElementById("main");

  document.querySelectorAll(".place-card img").forEach((img) => {
    img.addEventListener("click", function () {
        let pageMap = {
            "Mayadevi temple.jpg": "https://akid14.github.io/info/mayadevi temple.html",
            "Asoka Pillar.jpg": "https://akid14.github.io/info/ashoka pillar.html",
            "World Peace Pagoda.jpg": "https://akid14.github.io/info/world peace pagoda.html",
            "East Monastic Zone.jpg": "https://akid14.github.io/info/lumbini monastic site.html"
        };
        let imageName = this.getAttribute("src").split("/").pop();
        window.location.href = pageMap[imageName];
    });
  });



  let subBarVisible = false;

  main.addEventListener('click', () => {
      window.location.href = "https://akid14.github.io";
  });
  

  placesBtn.addEventListener('click', () => {
    subBarVisible = !subBarVisible;
    subBar.style.display = subBarVisible ? 'block' : 'none';
  });

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  thingsBtn.addEventListener('click', () => {
    subBarVisible = false;
    subBar.style.display = 'none';
  });
 
});