//this javascript file controls the side navigation bar, and how it displays on mobile screens

var menu = document.getElementById('menu');
var sideBar = document.getElementById('sidebar-wrapper');
let sideBarToggle = document.getElementById('sidebarToggle').addEventListener('click', function(){
    sideBar.classList.toggle('closed');
    if(sideBar.classList.contains('closed')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active')
    }
    
})
