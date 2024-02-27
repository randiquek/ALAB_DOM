import "./styles.css";

var menuLinks = [
    { text: 'about', href: '/about' },
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
      ]},
      {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
      ]},
      {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
      ]},
  ];

const mainEl = document.getElementById("main");
const mainBgColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg');
mainEl.style.setProperty('--main-bg', mainBgColor);
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
const topMenuBg = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');
topMenuEl.style.backgroundColor = topMenuBg;
topMenuEl.classList.add("flex-around");

menuLinks.forEach(link => {
    const htmlLinkEl = document.createElement("a");
    htmlLinkEl.href = link.href;
    htmlLinkEl.textContent = link.text;
    topMenuEl = appendChild(htmlLinkEl);
})

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
const subMenuBg = getComputedStyle(document.documentElement).getPropertyValue("--sub-menu-bg");
subMenuEl.style.backgroundColor = subMenuBg;
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function(event) {
    event.preventDefault();

    if (event.target.tagName !== "A") {
      return;
    }

    event.target.classList.toggle("active");
    topMenuLinks.forEach(link => {
        if (link !== event.target) {
          link.classList.remove("active");
        }
      });
    
    console.log(event.target.textContent);

    if (!event.target.classList.contains("active")) {
        subMenuEl.style.top = "100%";
      } else {
        subMenuEl.style.top = "0";
      }
  });

   
    subMenuEl.addEventListener("click", function(event) {
    event.preventDefault();
    
    if (event.target.tagName !== "A") {
      return;
    }
    
    console.log(event.target.textContent);

    function buildSubMenu(subLinks) {
    
        subMenuEl.innerHTML = '';
        subLinks.forEach(link => {
        
          const subLinkElement = document.createElement("a");
          subLinkElement.href = link.href;
          subLinkElement.textContent = link.text;
          subMenuEl.appendChild(subLinkElement);
        });
      }
  });

  
  