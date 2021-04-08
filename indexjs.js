const html = document.documentElement;
const menu = document.getElementById('myMenuId');

// for tiny-cards container-fluid section
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

$(document).ready(function () {
  var links = document.querySelectorAll('[data-disease-link]');
  var dashboards = document.querySelectorAll('[data-disease-dashboard]');

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      dashboards.forEach(function (dashboard) {
        if (dashboard.dataset.diseaseDashboard === link.dataset.diseaseLink) {
          dashboard.style.display = 'block';
        } else {
          dashboard.style.display = 'none';
        }
      })
    })
  })
});

// navigation function to the About Us page
function myFunction() {
  location.replace("AboutUs.html")
}

// open navigation menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

//close navigation menu
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// for navigation menu clicking
$(document).ready(function() {
  $('.click').click(function() {
          $('.nav__right').slideToggle("fast");
  });
});