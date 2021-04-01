// updateWebsite()

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
      // $('.connection').html(result);
    }
  });
  // return (
  //   <>
    
  //     <table ref={tableRef}>
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Email</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>John</td>
  //           <td>john@example.com</td>
  //         </tr>
  //         <tr>
  //           <td>Mike</td>
  //           <td><b>mike@example.com</b></td>
  //         </tr>
  //       </tbody>
  //     </table>
  //     <div ref={wrapperRef} />
  //   </>
  // );
}
// var stateCOVIDData;
// var grid = new gridjs.Grid({
//   columns: [],
//   sort: true,
//   search:true,
//   pagination: {
//     limit: 10
//   },
//   data: [
//   ],
//   style: {
//     table: {
//       border: '3px solid #ccc'
//     },
//     th: {
//       'background-color': 'rgba(0, 0, 0, 0.1)',
//       color: '#000',
//       'border-bottom': '3px solid #ccc',
//       'text-align': 'center'
//     },
//     td: {
//       'text-align': 'center'
//     }
//   }
// }).render(document.getElementById("covid-table"));

function updateWebsite() {
  $.ajax({
    url: "getCovid.php",
    success: function (result) {
      stateCOVIDData = result;
      $('.connection').html(result);
    }
  });
}
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// function generateTable() {
//   new gridjs.Grid().updateConfig({
//     columns: ["Age", "Hepatitis_A Cases 2014", "Hepatitis_A Cases 2015", "Hepatitis_A Cases 2017", "Hepatitis_A Cases 2018", "hepatitis_b Cases 2014", "hepatitis_b Cases 2015", "hepatitis_b Cases 2016", "hepatitis_b Cases 2017", "hepatitis_b Cases 2018", "Hepatitis_C Cases 2014", "Hepatitis_C Cases 2015", "Hepatitis_C Cases 2016", "Hepatitis_C Cases 2017", "Hepatitis_C Cases 2018"],
//     sort: true,
//     data: [
//       ['60+', '304', '353', '409', '509', '987', '272', '312', '342', '395', '450', '70', '77', '141', '185', '295'],
//       ['50-59', '182', '205', '297', '554', '1509', '504', '615', '655', '700', '675', '166', '240', '264', '332', '366'],
//       ['40-49', '139', '164', '333', '621', '2658', '818', '961', '906', '1028', '1052', '282', '337', '452', '441', '494'],
//       ['30-39', '207', '233', '391', '893', '4268', '888', '1094', '1000', '998', '868', '643', '682', '868', '937', '1070'],
//       ['20-29', '246', '287', '392', '659', '2763', '282', '348', '286', '271', '249', '918', '999', '1135', '1189', '1310']
//     ]
//   }).render(document.getElementById("NND-table"));
// }

// function premadeTable(table) {
  
// }

// function dropdownFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
//   window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
// }

// function chooseTable(type) {
//   console.log("here")
//   if (type == 0) {
//     premadeTable(0);
//   } else if (type == 1) {
//     premadeTable(1);
//   } else if (type == 2) {
//     premadeTable(2);
//   } else if (type == 3) {
//     premadeTable(3);
//   } else if (type == 4) {
//     premadeTable(4);
//   } else {
//     console.log("choosetable fail")
//   }
// }