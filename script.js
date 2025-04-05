document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const main = document.getElementById('main');
  const sideMenu = document.getElementById('sideMenu');

  let subBarVisible = false;

  main.addEventListener('click', () => {
    window.location.href = "https://akid14.github.io";
  });

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });
  
  const asoka1 = document.getElementById("asoka1");
  const mayadevi1 = document.getElementById("mayadevi1");
  const wpp1 = document.getElementById("wpp1");
  const lms1 = document.getElementById("lms1");
  
  asoka1.addEventListener('click', () => {
    window.location.href = "https://akid14.github.io/info/ashoka%20pillar.html";
  });
  mayadevi1.addEventListener('click', () => {
    window.location.href = "https://akid14.github.io/info/mayadevi%20temple.html";
  });
  wpp1.addEventListener('click', () => {
    window.location.href = "https://akid14.github.io/info/world%20peace%20pagoda.html";
  });
  lms1.addEventListener('click', () => {
    window.location.href = "https://akid14.github.io/info/lumbini%20monastic%20site.html";
  });

  const slider = document.querySelector('.slider');

  if (slider) {
    const asoka = document.getElementById("asoka");
    const mayadevi = document.getElementById("mayadevi");
    const wpp = document.getElementById("wpp");
    const lms = document.getElementById("lms");

    // Prevent clicking on non-active items
    const updateActiveItem = () => {
      const items = slider.querySelectorAll('.item');
      items.forEach((item, index) => {
        if (index === active) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    asoka.addEventListener('click', () => {
      if (active === 0) {
        window.location.href = "https://akid14.github.io/info/ashoka%20pillar.html";
      }
    });
    mayadevi.addEventListener('click', () => {
      if (active === 1) {
        window.location.href = "https://akid14.github.io/info/mayadevi%20temple.html";
      }
    });
    wpp.addEventListener('click', () => {
      if (active === 2) {
        window.location.href = "https://akid14.github.io/info/world%20peace%20pagoda.html";
      }
    });
    lms.addEventListener('click', () => {
      if (active === 3) {
        window.location.href = "https://akid14.github.io/info/lumbini%20monastic%20site.html";
      }
    });

    let items = slider.querySelectorAll('.item');
    let active = 0;
    let startX = 0;
    let endX = 0;
    let isSwiping = false;
    let nextButton = null;
    let prevButton = null;
    
    const moveLeft = () => {
      active = active - 1 >= 0 ? active - 1 : items.length - 1;
      loadShow();
    }
    
    const moveRight = () => {
      active = active + 1 < items.length ? active + 1 : 0;
      loadShow();
    }
    
function loadShow() {
  items.forEach((item, index) => {
    item.style.transform = 'scale(0.8) translateX(0)';
    item.style.zIndex = 0;
    item.style.filter = 'blur(2px)';
    item.style.opacity = 0;
  });

  items[active].style.transform = 'scale(1) translateX(0)';
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;

  let prevIndex = (active - 1 + items.length) % items.length;
  items[prevIndex].style.transform = 'translateX(-100%) scale(0.8)';
  items[prevIndex].style.zIndex = 0;
  items[prevIndex].style.opacity = 0.6;

  if (prevButton) {
    prevButton.removeEventListener('click', moveLeft);
  }
  if (prevButton) {
    prevButton.removeEventListener('click', moveRight);
  }
  
  prevButton = null;
  prevButton = items[prevIndex];
  prevButton.addEventListener('click', moveLeft);

  let nextIndex = (active + 1) % items.length;
  items[nextIndex].style.transform = 'translateX(100%) scale(0.8)';
  items[nextIndex].style.zIndex = 0;
  items[nextIndex].style.opacity = 0.6;

  if (nextButton) {
    nextButton.removeEventListener('click', moveRight);
  }
  if (nextButton) {
    nextButton.removeEventListener('click', moveLeft);
  }
  
  nextButton = null;
  nextButton = items[nextIndex];
  nextButton.addEventListener('click', moveRight);
  
  updateActiveItem();
}

    loadShow();

    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isSwiping = false;
    });

    slider.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
      isSwiping = true;
    });

    slider.addEventListener('touchend', () => {
      if (!isSwiping) return;

      const deltaX = endX - startX;
      const threshold = 25;

      if (deltaX > threshold) {
        active = active - 1 >= 0 ? active - 1 : items.length - 1;
        loadShow();
      } else if (deltaX < -threshold) {
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
      }

      startX = 0;
      endX = 0;
      isSwiping = false;
    });

  }
});