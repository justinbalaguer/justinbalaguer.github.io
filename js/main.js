let scrollpos = window.scrollY;
const header = document.querySelector("#navigation");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("shadow");
const remove_class_on_scroll = () => header.classList.remove("shadow");

const idle_nav_pad = () => header.classList.add("idle-nav-pad");
const new_nav_pad = () => header.classList.add("new-nav-pad");
const idle_nav_pad_rv = () => header.classList.remove("idle-nav-pad");
const new_nav_pad_rv = () => header.classList.remove("new-nav-pad");

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { 
        add_class_on_scroll();
        new_nav_pad();
        idle_nav_pad_rv();
    } else { 
        remove_class_on_scroll();
        idle_nav_pad();
        new_nav_pad_rv();
    }
});