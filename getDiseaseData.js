$(document).ready(function() {
    var links = document.querySelectorAll('[data-disease-link]');
    var dashboards = document.querySelectorAll('[data-disease-dashboard]');

    // initial table for covid-19/homepage
    var table = $('#covid').DataTable( {
      destroy: true,
      ajax: {
        url: "getSQLQueryStateAndOthers.php",
        data:{
          dataset: "COVID-19",
        },
        dataSrc: ''
      },
      columns:[
        {data: 'state'},
        {data: 'covid_19_deaths'},
        {data: 'total_deaths'},
        {data: 'pneumonia_deaths'},
        {data: 'pneumonia_and_covid_19_deaths'},
        {data: 'influenza_deaths'},
        {data: 'pneumonia_influenza_or_covid'} 
      ]
    });

    var secondTable = $('#covidSecond').DataTable( {
        destroy: true,
        ajax: {
        url: "getSQLQueryYearRaceOthers.php",
        data:{
            dataset: "COVID-19",
        },
        dataSrc: ''
        },
        columns:[
            {data: 'sex'},
            {data: 'age_group'},
            {data: 'covid_19_deaths'},
            {data: 'total_deaths'},
            {data: 'pneumonia_deaths'},
            {data: 'pneumonia_and_covid_19_deaths'},
            {data: 'influenza_deaths'},
            {data: 'pneumonia_influenza_or_covid'}    
        ]
    });

    // creating each table with its corresponding column names and dataset value
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            switch(link.dataset.diseaseLink){
                case "COVID-19":
                    table = $('#covid').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "COVID-19",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'state'},
                            {data: 'covid_19_deaths'},
                            {data: 'total_deaths'},
                            {data: 'pneumonia_deaths'},
                            {data: 'pneumonia_and_covid_19_deaths'},
                            {data: 'influenza_deaths'},
                            {data: 'pneumonia_influenza_or_covid'}    
                        ]
                    });
                    secondTable = $('#covidSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "COVID-19",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'sex'},
                            {data: 'age_group'},
                            {data: 'covid_19_deaths'},
                            {data: 'total_deaths'},
                            {data: 'pneumonia_deaths'},
                            {data: 'pneumonia_and_covid_19_deaths'},
                            {data: 'influenza_deaths'},
                            {data: 'pneumonia_influenza_or_covid'}    
                        ]
                    });
                    break;
                case "Anaplasmosis":
                   table = $('#Anaplasmosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Anaplasmosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                        {data: 'State'},
                        {data: 'Cases per Million (2000-2018)'}      
                        ]
                    }); 
                    secondTable = $('#AnaplasmosisSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "Anaplasmosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                        {data: 'Year'},
                        {data: 'Cases (2000 - 2018)'}      
                        ]
                    }); 
                    break;
                case "Babesiosis":
                    table = $('#Babesiosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Babesiosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                        {data: 'State'},
                        {data: '2011 (Cases)'},
                        {data: '2012 (Cases)'},
                        {data: '2013 (Cases)'},
                        {data: '2014 (Cases)'},
                        {data: '2015 (Cases)'},
                        {data: '2016 (Cases)'},
                        {data: '2017 (Cases)'},
                        {data: '2018 (Cases)'} 
                        ]
                    }); 
                    break;
                case "Botulism":
                    table = $('#Botulism').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Botulism",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Transmission Category'},
                            {data: 'Cases'},
                            {data: 'Age Range'},
                            {data: 'Median Age'},
                            {data: 'Deaths'},
                            {data: 'Male'},
                            {data: 'Female'}
                        ]
                    }); 
                    break;
                case "Brucellosis":
                    table = $('#Brucellosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Brucellosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases (2010)'}
                        ]
                    }); 
                    secondTable = $('#BrucellosisSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "Brucellosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                        {data: 'Year'},
                        {data: 'Cases'}      
                        ]
                    }); 
                    break;
                    break;     
                case "Campylobacteriosis":
                    table = $('#Campylobacteriosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Campylobacteriosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Food Category'},
                            {data: 'Outbreaks (2010-2017)'}
                        ]
                    }); 
                    break;    
                case "Candida Auris":
                    table = $('#Candida').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Candida Auris",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases (as of 2020)'}
                        ]
                    }); 
                    break;  
                case "Chancroid":
                    table = $('#Chancroid').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Chancroid",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Cases)'},
                            {data: '2015 (Cases)'},
                            {data: '2016 (Cases)'},
                            {data: '2017 (Cases)'},
                            {data: '2018 (Cases)'}
                        ]
                    }); 
                    break;  
                case "Chlamydia":
                    table = $('#Chlamydia').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Chlamydia",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Cases)'},
                            {data: '2018 (Rate per 100K population)'}
                        ]
                    }); 
                    secondTable = $('#ChlamydiaSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "Chlamydia",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age'},
                            {data: '2014 (Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Cases)'},
                            {data: '2018 (Rate per 100K population)'}    
                        ]
                    }); 
                    break;  
                case "Coccidioidomycosis":
                    table = $('#Coccidioidomycosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Coccidioidomycosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Arizona'},
                            {data: 'California'},
                            {data: 'Nevada, New Mexico, and Utah'},
                            {data: 'Other states'},
                            {data: 'Total'}
                        ]
                    }); 
                    break;  
                case "Congenital Syphilis":
                    table = $('#Congenital').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Congenital Syphilis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Race/Ethnicity of Mother'},
                            {data: '2008 (Cases)'},
                            {data: '2009 (Cases)'},
                            {data: '2010 (Cases)'},
                            {data: '2011 (Cases)'},
                            {data: '2012 (Cases)'},
                            {data: '2013 (Cases)'},
                            {data: '2014 (Cases)'}
                        ]
                    }); 
                    secondTable = $('#CongenitalSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "Congenital Syphilis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Region of Birth of Infant'},
                            {data: '2008 (Cases)'},
                            {data: '2009 (Cases)'},
                            {data: '2010 (Cases)'},
                            {data: '2011 (Cases)'},
                            {data: '2012 (Cases)'},
                            {data: '2013 (Cases)'},
                            {data: '2014 (Cases)'}
                        ]
                    }); 
                    thirdTable = $('#CongenitalThird').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryAgeAgeGenderOthers.php",
                        data:{
                            dataset: "Congenital Syphilis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Vital Status of Infant'},
                            {data: '2008 (Cases)'},
                            {data: '2009 (Cases)'},
                            {data: '2010 (Cases)'},
                            {data: '2011 (Cases)'},
                            {data: '2012 (Cases)'},
                            {data: '2013 (Cases)'},
                            {data: '2014 (Cases)'}
                        ]
                    }); 
                    break;  
                case "Cryptosporidiosis":
                    table = $('#Cryptosporidiosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Cryptosporidiosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases (2018)'},
                            {data: 'Rate per 100K population (2018)'}
                        ]
                    }); 
                    secondTable = $('#CryptosporidiosisSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "Cryptosporidiosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Race'},
                            {data: 'Cases (2018)'}
                        ]
                    }); 
                    thirdTable = $('#CryptosporidiosisThird').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryAgeAgeGenderOthers.php",
                        data:{
                            dataset: "Cryptosporidiosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age (Years)'},
                            {data: 'Cases (2018)'},
                            {data: 'Rate per 100K population (2018)'}
                        ]
                    }); 
                    break;  
                case "Dengue":
                    table = $('#Dengue').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Dengue",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2017 Travel-Associated Cases(N=451)'},
                            {data: '2017 Rate (%)'},
                            {data: '2018 Travel-Associated Cases(N=478)'},
                            {data: '2018 Rate (%)'},
                            {data: '2019 Travel-Associated Cases(N=1,183)'},
                            {data: '2019 Rate (%)'},
                            {data: '2020 Travel-Associated Cases (N=218)'},
                            {data: '2020 Rate (%)'}
                        ]
                    }); 
                    break; 
                case "Ehrlichiosis":
                    table = $('#Ehrlichiosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Ehrlichiosis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases per Million (2000-2018)'}
                        ]
                    }); 
                    case "Ehrlichiosis":
                        secondTable = $('#EhrlichiosisSecond').DataTable( {
                            destroy: true,
                            ajax: {
                            url: "getSQLQueryYearRaceOthers.php",
                            data:{
                                dataset: "Ehrlichiosis",
                            },
                            dataSrc: ''
                            },
                            columns:[
                                {data: 'Year'},
                                {data: 'Cases'}
                            ]
                        }); 
                    break; 
                case "Giardiasis":
                    table = $('#Giardiasis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Giardiasis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases'},
                            {data: 'Rate (%)'},
                            {data: 'Number of Outbreak-Associated Cases'}
                        ]
                    }); 
                    secondTable = $('#GiardiasisSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "Giardiasis",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'}
                        ]
                    }); 
                    break; 
                case "Gonorrhea":
                    table = $('#Gonorrhea').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Gonorrhea",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Cases)'},
                            {data: '2015 (Cases)'},
                            {data: '2016 (Cases)'},
                            {data: '2017 (Cases)'},
                            {data: '2018 (Cases)'}
                        ]
                    }); 
                    secondTable = $('#GonorrheaSecond').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryYearRaceOthers.php",
                        data:{
                            dataset: "Gonorrhea",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age (Years)'},
                            {data: 'Total 2018 Cases (American Indian/Alaska Native)'},
                            {data: 'Male 2018 Cases (American Indian/Alaska Native)'},
                            {data: 'Female 2018 Cases (American Indian/Alaska Native)'},
                            {data: 'Total 2018 Cases (Asians)'},
                            {data: 'Male 2018 Cases (Asians)'},
                            {data: 'Female 2018 Cases (Asians)'},
                            {data: 'Total 2018 Cases (Blacks)'},
                            {data: 'Male 2018 Cases (Blacks)'},
                            {data: 'Female 2018 Cases (Blacks)'},
                            {data: 'Total 2018 Cases (Native Hawaiians/Other Pacific Islanders)'},
                            {data: 'Male 2018 Cases (Native Hawaiians/Other Pacific Islanders)'},
                            {data: 'Female 2018 Cases (Native Hawaiians/Other Pacific Islanders)'},
                            {data: 'Total 2018 Cases (Whites)'},
                            {data: 'Male 2018 Cases (Whites)'},
                            {data: 'Female 2018 Cases (Whites)'},
                            {data: 'Total 2018 Cases (Multirace)'},
                            {data: 'Male 2018 Cases (Multirace)'},
                            {data: 'Female 2018 Cases (Multirace)'},
                            {data: 'Total 2018 Cases (Hispanics)'},
                            {data: 'Male 2018 Cases (Hispanics)'},
                            {data: 'Female 2018 Cases (Hispanics)'}
                        ]
                    }); 
                    thirdTable = $('#GonorrheaThird').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryAgeAgeGenderOthers.php",
                        data:{
                            dataset: "Gonorrhea",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age'},
                            {data: '2014 (Cases)'},
                            {data: '2015 (Cases)'},
                            {data: '2016 (Cases)'},
                            {data: '2017 (Cases)'},
                            {data: '2018 (Cases)'}
                        ]
                    }); 
                    break; 
                case "Haemophilus Influenzae":
                table = $('#Haemophilus').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Haemophilus Influenzae",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Race'},
                        {data: 'Cases'},
                        {data: 'Rate per 100K population'}
                    ]
                }); 
                break; 
            case "Hantavirus Infection":
                table = $('#Hantavirus').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Hantavirus Infection",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: 'Cases (1993-2017)'}
                    ]
                }); 
                break; 
            case "Hepatitis A":
                table = $('#Hepatitis-A').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Hepatitis A",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                secondTable = $('#Hepatitis-ASecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Hepatitis A",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'},
                        {data: 'Rate per 100K population'}
                    ]
                }); 
                table = $('#Hepatitis-AThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Hepatitis A",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                break; 
            case "Hepatitis B":
                table = $('#Hepatitis-B').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Hepatitis B",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                secondTable = $('#Hepatitis-BSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Hepatitis B",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'},
                        {data: 'Rate per 100K population'}
                    ]
                }); 
                thirdTable = $('#Hepatitis-BThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Hepatitis B",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                break; 
            case "Hepatitis C":
                table = $('#Hepatitis-C').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Hepatitis C",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Race/Ethnicity'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                secondTable = $('#Hepatitis-CSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Hepatitis C",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'},
                        {data: 'Rate per 100K population'}
                    ]
                }); 
                thirdTable = $('#Hepatitis-CThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Hepatitis C",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                break; 
            case "HIV":
                table = $('#HIV').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "HIV",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Race'},
                        {data: '2014 (Estimated Cases)'},
                        {data: '2015 (Estimated Cases)'},
                        {data: '2016 (Estimated Cases)'},
                        {data: '2017 (Estimated Cases)'},
                        {data: '2018 (Estimated Cases)'}
                    ]
                }); 
                secondTable = $('#HIVSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "HIV",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age (Years)'},
                        {data: '2014 (Estimated Cases)'},
                        {data: '2015 (Estimated Cases)'},
                        {data: '2016 (Estimated Cases)'},
                        {data: '2017 (Estimated Cases)'},
                        {data: '2018 (Estimated Cases)'}
                    ]
                }); 
                break; 
                case "Novel Influenza A Virus":
                    table = $('#Novel-Influenza-A-Virus').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQueryStateAndOthers.php",
                        data:{
                            dataset: "Novel Influenza A Virus",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2011 (Cases)'},
                            {data: '2012 (Cases)'},
                            {data: '2013 (Cases)'},
                            {data: '2014 (Cases)'},
                            {data: '2015 (Cases)'},
                            {data: '2016 (Cases)'},
                            {data: '2017 (Cases)'},
                            {data: '2018 (Cases)'},
                            {data: '2019 (Cases)'},
                            {data: '2020 (Cases)'}
                        ]
                    }); 
                break; 
            case "Pneumococcal Disease":
                table = $('#Pneumococcal-Disease').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Pneumococcal Disease",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age (Years)'},
                        {data: 'Cases (2016)'},
                        {data: 'Rate (per 100K population)'}
                    ]
                }); 
                break; 
            case "Legionellosis":
                table = $('#Legionellosis').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Legionellosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2014 (Cases)'},
                        {data: '2015 (Cases)'},
                        {data: '2016 (Cases)'},
                        {data: '2017 (Cases)'}
                    ]
                }); 
                secondTable = $('#LegionellosisSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Legionellosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Race'},
                        {data: '2014 (Cases)'},
                        {data: '2015 (Cases)'},
                        {data: '2016 (Cases)'},
                        {data: '2017 (Cases)'}
                    ]
                }); 
                thirdTable = $('#LegionellosisThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Legionellosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: '2014 (Cases)'},
                        {data: '2015 (Cases)'},
                        {data: '2016 (Cases)'},
                        {data: '2017 (Cases)'}
                    ]
                }); 
                break; 
            case "Lyme Disease":
                table = $('#Lyme').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Lyme Disease",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2009 (Cases)'},
                        {data: '2010 (Cases)'},
                        {data: '2011 (Cases)'},
                        {data: '2012 (Cases)'},
                        {data: '2013 (Cases)'},
                        {data: '2014 (Cases)'},
                        {data: '2015 (Cases)'},
                        {data: '2016 (Cases)'},
                        {data: '2017 (Cases)'},
                        {data: '2018 (Cases)'}
                    ]
                }); 
                secondTable = $('#LymeSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Lyme Disease",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'},
                        {data: 'Rate per 100K population'}
                    ]
                }); 
                thirdTable = $('#LymeThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Lyme Disease",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: 'Male Cases (2001-2018)'},
                        {data: 'Female Cases (2001-2018)'},
                        {data: 'Total Cases (2001-2018)'}
                    ]
                }); 
                break; 
            case "Measles":
                table = $('#Measles').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Measles",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'}
                    ]
                }); 
                break; 
            case "Meningococcal Disease":
                table = $('#Meningococcal-Disease').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Meningococcal Disease",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: '2015 (Cases)'},
                        {data: '2016 (Cases)'},
                        {data: '2017 (Cases)'},
                        {data: '2018 (Cases)'}
                    ]
                }); 
                break; 
            case "Mumps":
                table = $('#Mumps').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Mumps",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'}
                    ]
                }); 
                break; 
            case "Mumps":
                table = $('#Mumps').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Mumps",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'}
                    ]
                }); 
                break; 
            case "Pertussis":
                table = $('#Pertussis').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Pertussis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                break; 
            case "Plague":
                table = $('#Plague').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Plague",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'},
                        {data: 'Deaths'}
                    ]
                }); 
                break; 
            case "Q Fever":
                table = $('#Q-Fever').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Q Fever",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: 'Cases per Million (2000-2017)'}
                    ]
                }); 
                break; 
            case "Rabies (Human)":
                console.log("Rabies (Human): Unsure of what should be displayed. Data appears to be cases of rabies. Possibly best to showcase with tableau.");
                // table = $('#Rabies-(Human)').DataTable( {
                //     destroy: true,
                //     ajax: {
                //     url: "getSQLQueryStateAndOthers.php",
                //     data:{
                //         dataset: "Rabies (Human)",
                //     },
                //     dataSrc: ''
                //     },
                //     columns:[
                //         {data: 'Age (Years)'},
                //         {data: 'Total Cases (2001-2018)'},
                //         {data: 'Male Cases (2001-2018)'},
                //         {data: 'Female Cases (2001-2018)'}
                //     ]
                // }); 
                break; 
            case "Spotted Fever":
                table = $('#Spotted-Fever').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Spotted Fever",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: 'Cases per Million (2018)'}
                    ]
                }); 
                secondTable = $('#Spotted-FeverSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Spotted Fever",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Cases'}
                    ]
                }); 
                table = $('#Spotted-FeverThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Spotted Fever",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age (years)'},
                        {data: 'Cases per Million (2000-2018)'}
                    ]
                }); 
                break; 
            case "Syphilis":
                table = $('#Syphilis').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Syphilis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                secondTable = $('#SyphilisSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Syphilis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age (Years)'},
                        {data: 'Total 2018 Cases (American Indians/Alaska Natives)'},
                        {data: 'Male 2018 Cases (American Indians/Alaska Natives)'},
                        {data: 'Female 2018 Cases (American Indians/Alaska Natives)'},
                        {data: 'Total 2018 Cases (Asians)'},
                        {data: 'Male 2018 Cases (Asians)'},
                        {data: 'Female 2018 Cases (Asians)'},
                        {data: 'Total 2018 Cases (Blacks)'},
                        {data: 'Male 2018 Cases (Blacks)'},
                        {data: 'Female 2018 Cases (Blacks)'},
                        {data: 'Total 2018 Cases (Native Hawaiians/Other Pacific Islanders)'},
                        {data: 'Male 2018 Cases (Native Hawaiians/Other Pacific Islanders)'},
                        {data: 'Female 2018 Cases (Native Hawaiians/Other Pacific Islanders)'},
                        {data: 'Total 2018 Cases (Whites)'},
                        {data: 'Male 2018 Cases (Whites)'},
                        {data: 'Female 2018 Cases (Whites)'},
                        {data: 'Total 2018 Cases (Multirace)'},
                        {data: 'Male 2018 Cases (Multirace)'},
                        {data: 'Female 2018 Cases (Multirace)'},
                        {data: 'Total 2018 Cases (Hispanics)'},
                        {data: 'Male 2018 Cases (Hispanics)'},
                        {data: 'Female 2018 Cases (Hispanics)'}
                    ]
                }); 
                thirdTable = $('#SyphilisThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Syphilis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'},
                        {data: '2016 (Cases)'},
                        {data: '2016 (Rate per 100K population)'},
                        {data: '2017 (Cases)'},
                        {data: '2017 (Rate per 100K population)'},
                        {data: '2018 (Cases)'},
                        {data: '2018 (Rate per 100K population)'}
                    ]
                }); 
                break; 
            case "Trichinellosis":
                table = $('#Trichinellosis').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Trichinellosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2011 (Cases)'},
                        {data: '2011 (Rate per 100K population)'},
                        {data: '2012 (Cases)'},
                        {data: '2012 (Rate per 100K population)'},
                        {data: '2013 (Cases)'},
                        {data: '2013 (Rate per 100K population)'},
                        {data: '2014 (Cases)'},
                        {data: '2014 (Rate per 100K population)'},
                        {data: '2015 (Cases)'},
                        {data: '2015 (Rate per 100K population)'}
                    ]
                }); 
                secondTable = $('#TrichinellosisSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Trichinellosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age (Years)'},
                        {data: 'Cases (2011-2015)'}
                    ]
                }); 
                break; 
            case "Tuberculosis":
                table = $('#Tuberculosis').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Tuberculosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Total Cases'},
                        {data: 'American Indian/Alaska Native'},
                        {data: 'Asian'},
                        {data: 'Black/African American'},
                        {data: 'Native Hawaiian/Other Pacific Islander'},
                        {data: 'White'},
                        {data: 'Multiple Race'},
                        {data: 'Hispanic/Latino'},
                        {data: 'Unknown'}
                    ]
                }); 
                secondTable = $('#TuberculosisSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Tuberculosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Year'},
                        {data: 'Total Cases'},
                        {data: '0-4 Years (Age)'},
                        {data: '5-14 Years (Age)'},
                        {data: '15-24 Years (Age)'},
                        {data: '25-44 Years (Age)'},
                        {data: '45-64 Years (Age)'},
                        {data: '65+ Years (Age)'},
                        {data: 'Unknown (Age)'}
                    ]
                }); 
                thirdTable = $('#TuberculosisThird').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryAgeAgeGenderOthers.php",
                    data:{
                        dataset: "Tuberculosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age (Years)'},
                        {data: 'Total Cases (2019)'},
                        {data: 'Male Cases (2019)'},
                        {data: 'Female Cases (2019)'}
                    ]
                }); 
                break; 
            case "Tularemia":
                table = $('#Tularemia').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Tularemia",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'State'},
                        {data: '2008 (Cases)'},
                        {data: '2009 (Cases)'},
                        {data: '2010 (Cases)'},
                        {data: '2011 (Cases)'},
                        {data: '2012 (Cases)'},
                        {data: '2013 (Cases)'},
                        {data: '2014 (Cases)'},
                        {data: '2015 (Cases)'},
                        {data: '2016 (Cases)'},
                        {data: '2017 (Cases)'},
                        {data: '2018 (Cases)'}
                    ]
                }); 
                secondTable = $('#TularemiaSecond').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryYearRaceOthers.php",
                    data:{
                        dataset: "Tularemia",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Age (Years)'},
                        {data: 'Total Cases (2001-2018)'},
                        {data: 'Male Cases (2001-2018)'},
                        {data: 'Female Cases (2001-2018)'}
                    ]
                }); 
                break; 
            case "Vibrosis":
                table = $('#Vibrosis').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Vibrosis",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'Genus and Species of Vibrionaceae'},
                        {data: '2010 (Cases)'},
                        {data: '2011 (Cases)'},
                        {data: '2012 (Cases)'},
                        {data: '2013 (Cases)'},
                        {data: '2014 (Cases)'}
                    ]
                }); 
                break; 
            case "Zika Virus":
                table = $('#Zika-Virus').DataTable( {
                    destroy: true,
                    ajax: {
                    url: "getSQLQueryStateAndOthers.php",
                    data:{
                        dataset: "Zika Virus",
                    },
                    dataSrc: ''
                    },
                    columns:[
                        {data: 'States'},
                        {data: '2016 (Symptomatic Cases)'},
                        {data: '2016 (Presumptive Viremic Blood Donors)'},
                        {data: '2017 (Symptomatic Cases)'},
                        {data: '2017 (Presumptive Viremic Blood Donors)'},
                        {data: '2018 (Symptomatic Cases)'},
                        {data: '2018 (Presumptive Viremic Blood Donors)'},
                        {data: '2019 (Symptomatic Cases)'},
                        {data: '2019 (Presumptive Viremic Blood Donors)'},
                        {data: '2020 (Symptomatic Cases)'},
                        {data: '2020 (Presumptive Viremic Blood Donors)'}
                    ]
                }); 
                break; 
            }

        })
      })
  });