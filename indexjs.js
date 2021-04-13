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

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
$(function () {

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
  }
});

// On dropdown click, close all other open dropdowns
$(document).ready(function () {
  $(".dropdown-btn").next().addClass("collapsed").slideUp();

  $(".sidenav").on('click', '.dropdown-btn', function (event) {
      event.preventDefault();
      var currentClass = $(this).next().prop('class');
      if (currentClass == "active") {
          $(this).next().removeClass("expanded");
          $(this).next().addClass("collapsed");
          $(this).next().slideUp(); 
      } else {
          $(".expanded").slideUp().addClass("collapsed").removeClass("expanded");
          $(this).next().removeClass("collapsed");
          $(this).next().addClass("expanded");
          $(this).next().slideDown();
      }

  });
});