function cloak() {
    var title = document.getElementById("title").value;
    var website = document.getElementById("icon").value;
    if (!title || !website) {
      alert("Please fill out all fields before cloaking.");
      return;
    }
    document.querySelector("form").reset();
    var newWindow = window.open("about:blank");
    newWindow.document.title = title;
    var iconUrl = "https://www.google.com/s2/favicons?sz=32&domain=" + website;
    var linkTag = document.createElement("link");
    linkTag.setAttribute("rel", "icon");
    linkTag.setAttribute("type", "image/x-icon");
    linkTag.setAttribute("href", iconUrl);
    newWindow.document.head.appendChild(linkTag);
    var iframe = newWindow.document.createElement("iframe");
    var originalUrl = window.location.href;
    var newUrl = originalUrl + "/index.html";
    iframe.src = newUrl;
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    newWindow.document.body.appendChild(iframe);
  }
  function preset1() {
    document.getElementById("title").value = "Classes";
    document.getElementById("icon").value = "https://ssl.gstatic.com/classroom/ic_product_classroom_32.png";
  }

  function preset2() {
    document.getElementById("title").value = "Dashboard";
    document.getElementById("icon").value = "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico";
  }

  function preset3() {
    document.getElementById("title").value = "Infinite Campus";
    document.getElementById("icon").value = "https://campus.tvusd.k12.ca.us/campus/nav-wrapper/favicon.ico";
  }

  function preset4() {
    document.getElementById("title").value = "Clever | Portal";
    document.getElementById("icon").value = "https://assets.clever.com/launchpad/d0a3cd891/favicon.ico?1";
  }

  function preset5() {
    document.getElementById("title").value = "Desmos Classroom Activities";
    document.getElementById("icon").value = "https://uploads.desmos.com/fingerprinted/static/classroom-assets/img/student/favicon-450881478525dad90cee9f937b93639c4042aedf-a.ico";
  }

  function preset6() {
    document.getElementById("title").value = "Google Docs";
    document.getElementById("icon").value = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
  }

  function preset7() {
    document.getElementById("title").value = "DeltaMath";
    document.getElementById("icon").value = "https://www.deltamath.com/app/images/flav3.png";
  }

  function preset8() {
    document.getElementById("title").value = "Google";
    document.getElementById("icon").value = "https://google.com/favicon.ico";
  }

  function preset9() {
    document.getElementById("title").value = "- Grammarly";
    document.getElementById("icon").value = "https://denali-static.grammarly.com/files/524adc79be04712e3a336059c2959e2e/favicon.ico";
  }

  function preset10() {
    document.getElementById("title").value = "Reading To Do, i-Ready";
    document.getElementById("icon").value = "https://login.i-ready.com/favicon.ico";
  }
  const settingsToggle = document.getElementById('settings-toggle');
  const settings = document.getElementById('settings');
  settingsToggle.addEventListener('click', () => {
    settings.classList.toggle('show');
  });

const moreToggle = document.getElementById('more-toggle');
const moreSettings = document.getElementById('more-settings');

moreToggle.addEventListener('click', () => {
  moreSettings.classList.toggle('show');
});

// Get the dropdown element and the div elements
const dropdown = document.getElementById('particles');
const divElements = Array.from(document.querySelectorAll('.prt'));

// Particle.js configuration options for each particle type
const particleOptions = {
  shapes: {
    // Configure particle.js options for 'shapes' option
    // Example configuration: particles.js shape configuration
    particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 50, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 7 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true

  },
  stars: {
    // Configure particle.js options for 'stars' option
    // Example configuration: particles.js stars configuration
  particles: {
    number: { value: 570, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 6, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
  },
  bubbles: {
    // Configure particle.js options for 'bubbles' option
    // Example configuration: particles.js bubbles configuration
    particles: {
    number: { value: 9, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000" },
      polygon: { nb_sides: 6 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 160,
      random: false,
      anim: { enable: true, speed: 16, size_min: 40, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
  },
  snow: {
    // Configure particle.js options for 'snow' option
    // Example configuration: particles.js snow configuration
    particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true

  }
};

// Variable to store the Particle.js instance
let particleInstance = null;

// Function to initialize Particle.js with the given configuration options
function initializeParticles(option) {
  // Hide all div elements
  divElements.forEach(divElement => {
    divElement.classList.add('visibility');
  });

  // Show the selected div element
  const selectedDiv = document.getElementById(option);
  selectedDiv.classList.remove('visibility');

  // Destroy the existing Particle.js instance if it exists
  if (particleInstance) {
    particleInstance.destroy();
  }

  // Create Particle.js instance with the appropriate configuration
  if (option !== 'none') {
    particleInstance = particlesJS(option, particleOptions[option]);
  }
}

// Add event listener to the dropdown
dropdown.addEventListener('change', function() {
  const selectedOption = dropdown.value;
  initializeParticles(selectedOption);
});

// Initialize visibility based on default option
const defaultOption = dropdown.value;
initializeParticles(defaultOption);

