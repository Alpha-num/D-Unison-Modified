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

//controls the modal
var confirmBtn = document.getElementById('confirmBtn');
var firstModal = new bootstrap.Modal(document.getElementById('firstModal'));
var secondModal = new bootstrap.Modal(document.getElementById('secondModal'));

confirmBtn.addEventListener('click', function() {
    // Hide the first modal
    firstModal.hide();
    // Show the second modal
    secondModal.show();
  });