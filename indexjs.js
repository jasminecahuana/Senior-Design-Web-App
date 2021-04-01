updateCovid()

//was playing around with lines 4-22, will delete after some testing
function testWebsite() {
  const tableRef = useRef(null);
  const wrapperRef = document.getElementById("covid-table");
  
  useEffect(() => {
    const grid = new Grid({
      from: tableRef.current,
    }).render(wrapperRef.current);
  });

  $.ajax({
    url: "getCovid.php",
    success: function (result) {
      return (
        result
      );
    }
  });
}

function updateCovid() {
  $.ajax({
    url: "getCovid.php",
    success: function (result) {
      stateCOVIDData = result;
      $('.connection').html(result);
    }
  });
}

// for tiny-cards container-fluid section
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})