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

// On dropdown click, close all other open dropdowns
$(document).ready(function () {
  $(".dropdown-btn").next().addClass("collapsed").slideUp();

  $(".dropdown-btn").on('click', function (event) {
      event.preventDefault();
      if ($(this).next()[0].classList.contains("expanded")) {
          $(this).next().removeClass("expanded");
          $(this).next().addClass("collapsed");
          console.log("active")
          $(this).next().slideUp(); 
      } else {
          $(".expanded").slideUp().addClass("collapsed").removeClass("expanded");
          $(this).next().removeClass("collapsed");
          $(this).next().addClass("expanded");
          console.log("not active")
          $(this).next().slideDown();
      }

  });
});