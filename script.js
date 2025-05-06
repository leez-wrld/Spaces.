// Sample furniture product data
const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "living",
    price: 899.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Leather Armchair",
    category: "living",
    price: 499.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Coffee Table",
    category: "living",
    price: 299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Dining Table Set",
    category: "dining",
    price: 1299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Bar Stools (Set of 2)",
    category: "dining",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "China Cabinet",
    category: "dining",
    price: 799.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "King Size Bed",
    category: "bedroom",
    price: 1099.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Dresser with Mirror",
    category: "bedroom",
    price: 649.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 9,
    name: "Nightstand",
    category: "bedroom",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 10,
    name: "Executive Desk",
    category: "office",
    price: 549.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 11,
    name: "Ergonomic Office Chair",
    category: "office",
    price: 349.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 12,
    name: "Bookshelf",
    category: "office",
    price: 279.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 13,
    name: "Sectional Sofa",
    category: "living",
    price: 1499.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 14,
    name: "TV Stand",
    category: "living",
    price: 329.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 15,
    name: "Buffet Cabinet",
    category: "dining",
    price: 699.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 16,
    name: "Queen Size Bed",
    category: "bedroom",
    price: 899.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 17,
    name: "Wardrobe",
    category: "bedroom",
    price: 749.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 18,
    name: "Filing Cabinet",
    category: "office",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const bedroomProducts = [
  {
    id: 19,
    name: "Platform Bed Frame",
    category: "bedroom",
    price: 499.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 20,
    name: "Memory Foam Mattress",
    category: "bedroom",
    price: 799.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 21,
    name: "Bedside Table Lamp",
    category: "bedroom",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 22,
    name: "Vanity Dressing Table",
    category: "bedroom",
    price: 349.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 23,
    name: "Storage Ottoman",
    category: "bedroom",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 24,
    name: "Accent Chair",
    category: "bedroom",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

// Additional office products
const officeProducts = [
  {
    id: 25,
    name: "L-Shaped Desk",
    category: "office",
    price: 399.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 26,
    name: "Adjustable Standing Desk",
    category: "office",
    price: 649.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 27,
    name: "Desk Organizer Set",
    category: "office",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 28,
    name: "Task Lamp",
    category: "office",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 29,
    name: "File Cabinet",
    category: "office",
    price: 189.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 30,
    name: "Conference Table",
    category: "office",
    price: 899.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];
products.push(...bedroomProducts, ...officeProducts);

// Additional posters with different shapes and designs
const posters = [
  {
    id: 1,
    name: "Abstract Geometric",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=200",
    shape: "portrait",
    style: "modern",
  },
  {
    id: 2,
    name: "Botanical Print",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=300",
    shape: "landscape",
    style: "natural",
  },
  {
    id: 3,
    name: "Minimalist Circle",
    price: 29.99,
    image: "/placeholder.svg?height=250&width=250",
    shape: "square",
    style: "minimalist",
  },
  {
    id: 4,
    name: "Vintage Map",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=300",
    shape: "landscape",
    style: "vintage",
  },
  {
    id: 5,
    name: "Watercolor Sunset",
    price: 44.99,
    image: "/placeholder.svg?height=300&width=200",
    shape: "portrait",
    style: "artistic",
  },
  {
    id: 6,
    name: "Typography Art",
    price: 34.99,
    image: "/placeholder.svg?height=250&width=250",
    shape: "square",
    style: "typography",
  },
];


// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "The quality of the furniture exceeded my expectations. The attention to detail is remarkable.",
    author: "Sarah Johnson",
    rating: 5,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    text: "The sofa I purchased is not only beautiful but incredibly comfortable. Worth every penny.",
    author: "Michael Chen",
    rating: 5,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    text: "Excellent customer service and the delivery was prompt. The dining set looks stunning in my home.",
    author: "Emily Mahlangu",
    rating: 4.5,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    text: "I've bought furniture from many stores, but Spaces offers the best quality-to-price ratio by far.",
    author: "David Okoye",
    rating: 5,
    image: "/placeholder.svg?height=50&width=50",
  },
];

// Currency conversion rates (relative to USD)
const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  ZAR: 18.5,
};

// Currency symbols
const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  ZAR: "R",
};

// DOM Elements
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const sortBy = document.getElementById("sort-by");
const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.getElementById("close-checkout");
const checkoutForm = document.getElementById("checkout-form");
const overlay = document.getElementById("overlay");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("theme-toggle");
const testimonialSlider = document.getElementById("testimonial-slider");
const prevTestimonial = document.getElementById("prev-testimonial");
const nextTestimonial = document.getElementById("next-testimonial");
const currencySelect = document.getElementById("currency-select");
const navItems = document.querySelectorAll(".nav-links a");

// Cart array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Current theme
let currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

// Current testimonial index
let currentTestimonialIndex = 0;

// Current currency
let currentCurrency = localStorage.getItem("currency") || "USD";
if (currencySelect) currencySelect.value = currentCurrency;

// Initialize the page
function init() {
  // Render products by category
  renderProductsByCategory();
  
  // Render posters
  renderPosters();
  
  updateCartCount();
  renderTestimonials();
  updateCurrencyDisplay();

  // Set data-base-value attributes for currency displays if not already set
  document.querySelectorAll(".currency-display").forEach((el) => {
    if (!el.getAttribute("data-base-value")) {
      // Extract the numeric value from the text content
      const value = Number.parseFloat(el.textContent.replace(/[^0-9.]/g, ""));
      if (!isNaN(value)) {
        el.setAttribute("data-base-value", value);
      }
    }
  });

  // Event listeners
  if (categoryFilter) categoryFilter.addEventListener("change", filterProducts);
  if (priceFilter) priceFilter.addEventListener("change", filterProducts);
  if (sortBy) sortBy.addEventListener("change", filterProducts);

  if (cartIcon) cartIcon.addEventListener("click", toggleCart);
  if (closeCart) closeCart.addEventListener("click", toggleCart);

  if (checkoutBtn) checkoutBtn.addEventListener("click", toggleCheckout);
  if (closeCheckout) closeCheckout.addEventListener("click", toggleCheckout);
  if (overlay) overlay.addEventListener("click", closeAllModals);

  if (checkoutForm) checkoutForm.addEventListener("submit", processOrder);

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", toggleMobileMenu);

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  if (prevTestimonial) prevTestimonial.addEventListener("click", () => changeTestimonial(-1));
  if (nextTestimonial) nextTestimonial.addEventListener("click", () => changeTestimonial(1));

  if (currencySelect) currencySelect.addEventListener("change", changeCurrency);

  // Parallax effect on scroll
  window.addEventListener("scroll", handleParallax);

  // Close modals on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
/*// Handle navbar animation on scroll
  window.addEventListener("scroll", handleScroll)

  // Handle scroll-based navigation highlighting
  window.addEventListener("scroll", updateActiveNavOnScroll)

  // Initialize brand animation positions
  initBrandAnimation()


// Initialize brand animation positions and elements
let heroBrandRect, navBrandRect, heroLogoRect, navLogoRect
let animationTriggered = false
let animationComplete = false
let lastScrollPosition = 0

function initBrandAnimation() {
  // Get the elements we need to animate
  const heroBrand = document.getElementById("hero-brand")
  const navBrand = document.getElementById("nav-logo")
  const heroLogo = heroBrand ? heroBrand.querySelector(".logo-dot") : null
  const navLogo = navBrand ? navBrand.querySelector(".logo-dot") : null

  // Create a clone of the hero brand for animation
  if (heroBrand && navBrand) {
    // Store initial positions and dimensions
    window.addEventListener("load", () => {
      updateBrandPositions()

      // Create a clone for animation if it doesn't exist
      if (!document.getElementById("animated-brand")) {
        const animatedBrand = heroBrand.cloneNode(true)
        animatedBrand.id = "animated-brand"
        animatedBrand.style.position = "fixed"
        animatedBrand.style.zIndex = "1001"
        animatedBrand.style.pointerEvents = "none"
        animatedBrand.style.opacity = "0"
        document.body.appendChild(animatedBrand)
      }
    })

    // Update positions on window resize
    window.addEventListener("resize", () => {
      updateBrandPositions()
      // Reset animation state on resize
      animationTriggered = false
      animationComplete = false
    })
  }
}

// Update brand position measurements
function updateBrandPositions() {
  const heroBrand = document.getElementById("hero-brand")
  const navBrand = document.getElementById("nav-logo")
  const heroLogo = heroBrand ? heroBrand.querySelector(".logo-dot") : null
  const navLogo = navBrand ? navBrand.querySelector(".logo-dot") : null

  if (heroBrand && navBrand) {
    heroBrandRect = heroBrand.getBoundingClientRect()
    navBrandRect = navBrand.getBoundingClientRect()

    if (heroLogo && navLogo) {
      heroLogoRect = heroLogo.getBoundingClientRect()
      navLogoRect = navLogo.getBoundingClientRect()
    }
  }
}

// Handle navbar and brand animation on scroll
function handleScroll() {
  const navbar = document.querySelector(".transparent-nav")
  const heroSection = document.querySelector(".fullscreen-hero")
  const heroBrand = document.getElementById("hero-brand")
  const navBrand = document.getElementById("nav-logo")
  const animatedBrand = document.getElementById("animated-brand")

  if (!heroBrand || !navBrand || !animatedBrand || !heroSection) return

  const scrollPosition = window.pageYOffset
  const heroHeight = heroSection.offsetHeight
  const scrollThreshold = heroHeight * 0.2 // Start transition at 20% of hero height

  // Update positions if needed
  if (!heroBrandRect || !navBrandRect) {
    updateBrandPositions()
  }

  // Determine scroll direction
  const scrollingDown = scrollPosition > lastScrollPosition
  lastScrollPosition = scrollPosition

  // Always ensure nav logo is hidden when navbar is transparent
  if (!navbar.classList.contains("scrolled")) {
    navBrand.style.opacity = 0
  }

  // Check if we've scrolled past the threshold
  if (scrollPosition > scrollThreshold) {
    // Add scrolled class to navbar
    navbar.classList.add("scrolled")

    // If we're scrolling down and animation hasn't been triggered yet
    if (scrollingDown && !animationTriggered && !animationComplete) {
      animationTriggered = true

      // Make the hero brand invisible
      heroBrand.style.opacity = 0
      navBrand.style.opacity = 0

      // Show the animated brand
      animatedBrand.style.opacity = 1

      // Set initial position (hero position)
      animatedBrand.style.left = `${heroBrandRect.left}px`
      animatedBrand.style.top = `${heroBrandRect.top}px`
      animatedBrand.style.width = `${heroBrandRect.width}px`
      animatedBrand.style.height = `${heroBrandRect.height}px`
      animatedBrand.style.fontSize = "5rem"

      // Get colors for transition
      const heroTextColor = getComputedStyle(heroBrand).color
      const navTextColor = getComputedStyle(navBrand).color
      animatedBrand.style.color = heroTextColor

      // Handle logo dot if present
      const animatedLogo = animatedBrand.querySelector(".logo-dot")
      if (animatedLogo && heroLogoRect && navLogoRect) {
        animatedLogo.style.width = "12px"
        animatedLogo.style.height = "12px"
      }

      // Add transition class for smooth animation
      animatedBrand.classList.add("brand-animating")

      // Animate to nav position - this will play out over 2 seconds regardless of scroll
      setTimeout(() => {
        animatedBrand.style.left = `${navBrandRect.left}px`
        animatedBrand.style.top = `${navBrandRect.top}px`
        animatedBrand.style.width = `${navBrandRect.width}px`
        animatedBrand.style.height = `${navBrandRect.height}px`
        animatedBrand.style.fontSize = "1.8rem"
        animatedBrand.style.color = navTextColor

        if (animatedLogo) {
          animatedLogo.style.width = "6px"
          animatedLogo.style.height = "6px"
        }
      }, 50) // Small delay to ensure the transition starts properly

      // Mark animation as complete after transition duration
      setTimeout(() => {
        animationComplete = true
        animatedBrand.style.opacity = 0
        // Only show the nav brand if we're still scrolled down
        if (navbar.classList.contains("scrolled")) {
          navBrand.style.opacity = 1
        }
        animatedBrand.classList.remove("brand-animating")
      }, 2100) // Slightly longer than the CSS transition duration
    }
    // If animation is complete, just show the nav brand
    else if (animationComplete) {
      heroBrand.style.opacity = 0
      navBrand.style.opacity = 1
      animatedBrand.style.opacity = 0
    }
  } else {
    // Reset when scrolling back to top
    navbar.classList.remove("scrolled")
    heroBrand.style.opacity = 1
    navBrand.style.opacity = 0
    animatedBrand.style.opacity = 0

    // Reset animation states when scrolled back to top
    if (scrollPosition < heroHeight * 0.1) {
      animationTriggered = false
      animationComplete = false
    }
  }
}

*/
  let heroBrandRect, navBrandRect, heroLogoRect, navLogoRect;
    let animationTriggered = false;
    let animationComplete = false;
    
    let lastScrollPosition = 0; 
    function getAbsolutePosition(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
    width: rect.width,
    height: rect.height
  };
}

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", initBrandAnimation);
    window.addEventListener("resize", () => {
      updateBrandPositions();
      animationTriggered = false;
      animationComplete = false;
    });

    function initBrandAnimation() {
      updateBrandPositions();

      const heroBrand = document.getElementById("hero-brand");
      if (!document.getElementById("animated-brand") && heroBrand) {
        const animatedBrand = heroBrand.cloneNode(true);
        animatedBrand.id = "animated-brand";
        animatedBrand.style.position = "fixed";
        animatedBrand.style.zIndex = "1001";
        animatedBrand.style.pointerEvents = "none";
        animatedBrand.style.opacity = "0";
        document.body.appendChild(animatedBrand);
      }
    }

    function updateBrandPositions() {
  const heroBrand = document.getElementById("hero-brand");
  const navBrand = document.getElementById("nav-logo");

  if (heroBrand && navBrand) {
    heroBrandRect = heroBrand.getBoundingClientRect();
    navBrandRect = navBrand.getBoundingClientRect();

    const heroLogo = heroBrand.querySelector(".logo-dot");
    const navLogo = navBrand.querySelector(".logo-dot");
    heroLogoRect = heroLogo?.getBoundingClientRect();
    navLogoRect = navLogo?.getBoundingClientRect();
  }
}



    function handleScroll() {
      const navbar = document.querySelector(".transparent-nav");
      const heroSection = document.querySelector(".fullscreen-hero");
      const heroBrand = document.getElementById("hero-brand");
      const navBrand = document.getElementById("nav-logo");
      const animatedBrand = document.getElementById("animated-brand");

      if (!heroBrand || !navBrand || !animatedBrand || !heroSection) return;

      const scrollPosition = window.pageYOffset;
      const heroHeight = heroSection.offsetHeight;
      const scrollThreshold = heroHeight * 0.2;

      const scrollingDown = scrollPosition > lastScrollPosition;
      lastScrollPosition = scrollPosition;

      if (!navbar.classList.contains("scrolled")) {
        navBrand.style.opacity = 0;
      }

      if (scrollPosition > scrollThreshold) {
        navbar.classList.add("scrolled");

        if (scrollingDown && !animationTriggered && !animationComplete) {
          animationTriggered = true;

          heroBrand.style.opacity = 0;
          navBrand.style.opacity = 0;
          animatedBrand.style.opacity = 1;

          animatedBrand.style.left = `${heroBrandRect.left}px`;
          animatedBrand.style.top = `${heroBrandRect.top}px`;
          animatedBrand.style.width = `${heroBrandRect.width}px`;
          animatedBrand.style.height = `${heroBrandRect.height}px`;
          animatedBrand.style.fontSize = "5rem";
          animatedBrand.style.color = getComputedStyle(heroBrand).color;

          const animatedLogo = animatedBrand.querySelector(".logo-dot");
          if (animatedLogo && heroLogoRect && navLogoRect) {
            animatedLogo.style.width = "12px";
            animatedLogo.style.height = "12px";
          }

          animatedBrand.classList.add("brand-animating");

          setTimeout(() => {
            animatedBrand.style.left = `${navBrandRect.left}px`;
            animatedBrand.style.top = `${navBrandRect.top}px`;
            animatedBrand.style.width = `${navBrandRect.width}px`;
            animatedBrand.style.height = `${navBrandRect.height}px`;
            animatedBrand.style.fontSize = "1.8rem";
            animatedBrand.style.color = getComputedStyle(navBrand).color;

            if (animatedLogo) {
              animatedLogo.style.width = "6px";
              animatedLogo.style.height = "6px";
            }
          }, 50);

          setTimeout(() => {
            animationComplete = true;
            animatedBrand.style.opacity = 0;
            if (navbar.classList.contains("scrolled")) {
              navBrand.style.opacity = 1;
            }
            animatedBrand.classList.remove("brand-animating");
          }, 2100);
        } else if (animationComplete) {
          heroBrand.style.opacity = 0;
          navBrand.style.opacity = 1;
          animatedBrand.style.opacity = 0;
        }
      } else {
        navbar.classList.remove("scrolled");
        heroBrand.style.opacity = 1;
        navBrand.style.opacity = 0;
        animatedBrand.style.opacity = 0;

        if (scrollPosition < heroHeight * 0.1) {
          animationTriggered = false;
          animationComplete = false;
        }
      }
    }

  // Close mobile menu when clicking on a link
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Render products by category
function renderProductsByCategory() {
  const categories = ["living", "dining", "bedroom", "office"];
  
  categories.forEach(category => {
    const containerElement = document.getElementById(`${category}-room-products`);
    if (!containerElement) return;
    
    const categoryProducts = products.filter(product => product.category === category);
    
    containerElement.innerHTML = categoryProducts.map(product => `
      <div class="product-card neu-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-category">${product.category}</p>
          <p class="product-price">${formatPrice(product.price)}</p>
          <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `).join('');
  });
  
  
  // Add event listeners to the "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", addToCart);
  });
}

// Render posters
function renderPosters() {
  const postersContainer = document.getElementById('posters-products');
  if (!postersContainer) return;
  
  postersContainer.innerHTML = posters.map(poster => {
    let heightClass = 'h-48'; // Default height
    
    if (poster.shape === 'portrait') {
      heightClass = 'h-64';
    } else if (poster.shape === 'landscape') {
      heightClass = 'h-40';
    } else if (poster.shape === 'square') {
      heightClass = 'h-52';
    }
    
    return `
      <div class="product-card neu-card">
        <div class="product-image ${heightClass}">
          <img src="${poster.image}" alt="${poster.name}">
        </div>
        <div class="product-info">
          <h3 class="product-title">${poster.name}</h3>
          <p class="product-category">${poster.style}</p>
          <p class="product-price">${formatPrice(poster.price)}</p>
          <button class="btn add-to-cart" data-id="poster-${poster.id}">Add to Cart</button>
        </div>
      </div>
    `;
  }).join('');
  
  // Add event listeners to the "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", addToCart);
  });
}

// Handle navbar and brand animation on scroll
function handleScroll() {
  const navbar = document.querySelector(".transparent-nav");
  const heroSection = document.querySelector(".fullscreen-hero");
  const navBrand = document.getElementById("nav-logo");

  if (!navbar) return;

  const scrollPosition = window.pageYOffset;
  
  if (scrollPosition > 50) {
    navbar.classList.add("scrolled");
    if (navBrand) navBrand.style.opacity = 1;
    if (navBrand) navBrand.style.visibility = "visible";
  } else {
    navbar.classList.remove("scrolled");
    if (navBrand) navBrand.style.opacity = 0;
    if (navBrand) navBrand.style.visibility = "hidden";
  }
}

// Update active navigation item based on scroll position
function updateActiveNavOnScroll() {
  // Get current scroll position
  const scrollPosition = window.scrollY + 100; // Adding offset to account for navbar height

  // Get all sections that have an ID that matches a nav link
  const sections = document.querySelectorAll("section[id]");

  // Check if we're at the top of the page (home section)
  if (scrollPosition < 200) {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    const homeLink =
      document.querySelector('.nav-links a[href="#"]') || document.querySelector('.nav-links a[href="#home"]');
    if (homeLink) {
      homeLink.classList.add("active");
    }
    return;
  }

  // Find the section that is currently in view
  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150; // Offset to trigger earlier
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = sectionId;
    }
  });

  // Update active class on nav items
  if (currentSection) {
    navItems.forEach((item) => {
      item.classList.remove("active");

      // Check if the href attribute ends with the current section ID
      const href = item.getAttribute("href");
      if (href === `#${currentSection}`) {
        item.classList.add("active");
      }
    });
  }
}

// Change currency
function changeCurrency(e) {
  currentCurrency = e.target.value;
  localStorage.setItem("currency", currentCurrency);
  updateCurrencyDisplay();
  renderProductsByCategory();
  renderPosters();
  updateCart();
}

// Format price according to selected currency
function formatPrice(price) {
  const convertedPrice = price * currencyRates[currentCurrency];
  return `${currencySymbols[currentCurrency]}${convertedPrice.toFixed(2)}`;
}

// Update all currency displays
function updateCurrencyDisplay() {
  const currencyDisplays = document.querySelectorAll(".currency-display");
  currencyDisplays.forEach((display) => {
    const baseValue = display.getAttribute("data-base-value") || 500;
    display.textContent = formatPrice(baseValue);
  });
}

// Handle parallax effect
function handleParallax() {
  const parallaxElements = document.querySelectorAll(".parallax-bg");

  parallaxElements.forEach((element) => {
    const scrollPosition = window.pageYOffset;
    const elementPosition = element.parentElement.offsetTop;
    const distance = scrollPosition - elementPosition;

    if (distance > -window.innerHeight && distance < window.innerHeight) {
      element.style.transform = `translateY(${distance * 0.3}px)`;
    }
  });
}

// Toggle theme
function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}

// Render testimonials
function renderTestimonials() {
  if (!testimonialSlider) return;
  
  testimonialSlider.innerHTML = "";

  testimonials.forEach((testimonial, index) => {
    const slide = document.createElement("div");
    slide.className = `testimonial-slide neu-card ${index === currentTestimonialIndex ? "active" : "hidden"}`;

    const stars = Array(5)
      .fill(0)
      .map((_, i) => {
        if (i < Math.floor(testimonial.rating)) {
          return '<i class="fas fa-star"></i>';
        } else if (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0) {
          return '<i class="fas fa-star-half-alt"></i>';
        } else {
          return '<i class="far fa-star"></i>';
        }
      })
      .join("");

    slide.innerHTML = `
      <div class="testimonial-content">
        <p>"${testimonial.text}"</p>
        <div class="testimonial-author">
          <img src="${testimonial.image}" alt="${testimonial.author}">
          <div>
            <h4>${testimonial.author}</h4>
            <div class="rating">
              ${stars}
            </div>
          </div>
        </div>
      </div>
    `;

    testimonialSlider.appendChild(slide);
  });

  updateTestimonialDisplay();
}

// Change testimonial
function changeTestimonial(direction) {
  currentTestimonialIndex = (currentTestimonialIndex + direction + testimonials.length) % testimonials.length;
  updateTestimonialDisplay();
}

// Update testimonial display
function updateTestimonialDisplay() {
  const slides = testimonialSlider.querySelectorAll(".testimonial-slide");

  slides.forEach((slide, index) => {
    if (index === currentTestimonialIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Get filtered products based on current filters
function getFilteredProducts() {
  const category = categoryFilter.value;
  const price = priceFilter.value;
  const sort = sortBy.value;

  let filteredProducts = [...products];

  // Filter by category
  if (category !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category === category);
  }

  // Filter by price
  if (price !== "all") {
    // Convert price ranges to the base currency (USD)
    if (price === "0-500") {
      filteredProducts = filteredProducts.filter((product) => product.price <= 500);
    } else if (price === "500-1000") {
      filteredProducts = filteredProducts.filter((product) => product.price > 500 && product.price <= 1000);
    } else if (price === "1000+") {
      filteredProducts = filteredProducts.filter((product) => product.price > 1000);
    }
  }

  // Sort products
  if (sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filteredProducts;
}

// Filter and sort products
function filterProducts() {
  renderProductsByCategory();
}

// Add product to cart
function addToCart(e) {
  const productId = e.target.dataset.id;
  let product;
  
  if (productId.startsWith('poster-')) {
    const posterId = parseInt(productId.replace('poster-', ''));
    product = posters.find(p => p.id === posterId);
  } else {
    const id = Number.parseInt(productId);
    product = products.find(p => p.id === id);
  }

  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCart();
  updateCartCount();
  saveCart();

  // Show cart after adding item
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
}

// Update cart display
function updateCart() {
  if (!cartItems) return;
  
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <p class="cart-item-price">${formatPrice(item.price * item.quantity)}</p>
        <div class="cart-item-quantity">
          <button class="quantity-btn decrease" data-id="${item.id}">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn increase" data-id="${item.id}">+</button>
        </div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });

  // Add event listeners to quantity buttons and remove buttons
  document.querySelectorAll(".decrease").forEach((button) => {
    button.addEventListener("click", decreaseQuantity);
  });

  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", increaseQuantity);
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", removeItem);
  });

  // Update total price
  updateTotalPrice();
}

// Update cart count
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  if (!cartCount) return;
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Update total price
function updateTotalPrice() {
  if (!cartTotalPrice) return;
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalPrice.textContent = formatPrice(total);
}

// Increase item quantity
function increaseQuantity(e) {
  const productId = e.target.dataset.id;
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += 1;
    updateCart();
    updateCartCount();
    saveCart();
  }
}

// Decrease item quantity
function decreaseQuantity(e) {
  const productId = e.target.dataset.id;
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      removeItem(e);
    } else {
      updateCart();
      updateCartCount();
      saveCart();
    }
  }
}

// Remove item from cart
function removeItem(e) {
  const productId = e.target.dataset.id;
  cart = cart.filter((item) => item.id !== productId);

  updateCart();
  updateCartCount();
  saveCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Toggle cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  // Close checkout if cart is opened
  if (cartSidebar.classList.contains("active")) {
    checkoutModal.classList.remove("active");
  }
}

// Toggle checkout modal
function toggleCheckout() {
  checkoutModal.classList.toggle("active");
  overlay.classList.toggle("active");

  // Close cart if checkout is opened
  if (checkoutModal.classList.contains("active")) {
    cartSidebar.classList.remove("active");
  }
}

// Close all modals
function closeAllModals() {
  cartSidebar.classList.remove("active");
  checkoutModal.classList.remove("active");
  overlay.classList.remove("active");
  navLinks.classList.remove("active");
}

// Toggle mobile menu
function toggleMobileMenu() {
  navLinks.classList.toggle("active");
}

// Process order
function processOrder(e) {
  e.preventDefault();

  // Simulate order processing
  const orderProcessing = document.createElement("div");
  orderProcessing.className = "order-processing";
  orderProcessing.innerHTML = `
    <div class="spinner"></div>
    <p>Processing your order...</p>
  `;

  checkoutModal.querySelector(".checkout-content").innerHTML = "";
  checkoutModal.querySelector(".checkout-content").appendChild(orderProcessing);

  // Simulate API call
  setTimeout(() => {
    checkoutModal.querySelector(".checkout-content").innerHTML = `
      <div class="order-success">
        <i class="fas fa-check-circle"></i>
        <h3>Order Successful!</h3>
        <p>Thank you for your purchase. Your order has been placed successfully.</p>
        <button class="btn close-success">Continue Shopping</button>
      </div>
    `;

    // Clear cart
    cart = [];
    updateCart();
    updateCartCount();
    saveCart();

    // Add event listener to close button
    document.querySelector(".close-success").addEventListener("click", () => {
      closeAllModals();
    });
  }, 2000);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", init);
// JavaScript for filter toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterToggle = document.getElementById('filter-toggle');
  const filterContent = document.getElementById('filter-content');
  const closeFilter = document.getElementById('close-filter');
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'filter-overlay';
  document.body.appendChild(overlay);
  
  // Toggle filter on mobile
  filterToggle.addEventListener('click', function() {
    filterToggle.classList.toggle('active');
    filterContent.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = filterContent.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close filter
  closeFilter.addEventListener('click', function() {
    filterToggle.classList.remove('active');
    filterContent.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close filter when clicking on overlay
  overlay.addEventListener('click', function() {
    filterToggle.classList.remove('active');
    filterContent.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close filter on window resize if it goes above mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && filterContent.classList.contains('active')) {
      filterToggle.classList.remove('active');
      filterContent.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
