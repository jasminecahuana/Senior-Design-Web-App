//updateCovid is meant to check if the website is able to connect to the database and will display covid data straight from the database. In the HTML, you'll need to uncomment  <div class="connection"></div> located at the bottom of the file. this function will get modified/deleted eventually. 
// updateCovid()
// function updateCovid() {
//   $.ajax({
//     url: "getCovid.php",
//     success: function (result) {
//       stateCOVIDData = result;
//       $('.connection').html(result);
//     }
//   });
// }

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