const menuCheckbox = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const body = document.body;


menuCheckbox.addEventListener('change', function() {
  if (menuCheckbox.checked) {
    sidebar.classList.add('active'); 
    body.classList.add('sidebar-active'); 
  } else {
    sidebar.classList.remove('active'); 
    body.classList.remove('sidebar-active'); 
  }
});