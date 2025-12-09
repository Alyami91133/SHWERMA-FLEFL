const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    gsap.to(nav, {
      width: "80%",
      backgroundColor: "#fafafae7",
      border: "solid 1px #333333",
      duration: 0.5,
      ease: "power3.out"
    });
  } else {
    gsap.to(nav, {
      width: "100%",
      backgroundColor: "#cfcfcfff",
      border: "solid 1px #cfcfcf",
      duration: 0.5,
      ease: "power3.out"
    });
  }
});

// وظيفة البحث
const searchInput = document.getElementById('searchInput');
const menuItems = document.querySelectorAll('.menu-item');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  
  menuItems.forEach(item => {
    const itemName = item.querySelector('.item-name').textContent.toLowerCase();
    const category = item.closest('.menu-category');
    
    if (itemName.includes(searchTerm)) {
      item.style.display = 'flex';
      category.classList.remove('hidden');
    } else {
      item.style.display = 'none';
    }
  });
  
  // إخفاء الأقسام الفارغة
  document.querySelectorAll('.menu-category').forEach(category => {
    const visibleItems = Array.from(category.querySelectorAll('.menu-item'))
      .filter(item => item.style.display !== 'none');
    
    if (visibleItems.length === 0 && searchTerm !== '') {
      category.style.display = 'none';
    } else {
      category.style.display = 'block';
    }
  });
});

// أزرار عرض/إخفاء الأقسام
const expandAllBtn = document.getElementById('expandAll');
const collapseAllBtn = document.getElementById('collapseAll');
const categories = document.querySelectorAll('.menu-category');

expandAllBtn.addEventListener('click', () => {
  categories.forEach(category => {
    category.classList.remove('hidden');
  });
});

collapseAllBtn.addEventListener('click', () => {
  categories.forEach(category => {
    category.classList.add('hidden');
  });
});

// Toggle للأقسام الفردية
categories.forEach(category => {
  const header = category.querySelector('.category-header');
  
  header.addEventListener('click', () => {
    category.classList.toggle('hidden');
  });
});


  const heroContent = document.querySelector('.hero-content');
  const menuSection = document.querySelector('#menu');

  heroContent.addEventListener('click', () => {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  });

