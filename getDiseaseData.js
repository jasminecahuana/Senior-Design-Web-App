$(document).ready(function() {
    var links = document.querySelectorAll('[data-disease-link]');
    var dashboards = document.querySelectorAll('[data-disease-dashboard]');

    // initial table for covid-19/homepage
    var table = $('#COVID-StateDeaths').DataTable( {
      destroy: true,
      ajax: {
        url: "getSQLQuery.php",
        data:{
          dataset: "COVID-StateDeaths",
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

    var table = $('#COVID-AgeGenderDeaths').DataTable( {
        destroy: true,
        ajax: {
        url: "getSQLQuery.php",
        data:{
            dataset: "COVID-AgeGenderDeaths",
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
                case "COVID-Homepage":
                    table = $('#COVID-AgeGenderDeaths').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "COVID-AgeGenderDeaths",
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
                    })
                    secondTable = $('#COVID-StateDeaths').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "COVID-StateDeaths",
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
                    break;
                case "COVID-AgeGenderDeaths":
                    table = $('#COVID-AgeGenderDeaths').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "COVID-AgeGenderDeaths",
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
                case "COVID-StateDeaths":
                    table = $('#COVID-StateDeaths').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "COVID-StateDeaths",
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
                    break;
                case "Anaplasmosis-MonthOfOnset":
                    table = $('#Anaplasmosis-MonthOfOnset').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Anaplasmosis-MonthOfOnset",
                        },
                        dataSrc: ''
                        },
                        columns:[
                        {data: 'Month of Onset'},
                        {data: 'Cases (2000-2018)'}      
                        ]
                    });  
                    break; 
                case "Anaplasmosis-State":
                   table = $('#Anaplasmosis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Anaplasmosis-State",
                        },
                        dataSrc: ''
                        },
                        columns:[
                        {data: 'State'},
                        {data: 'Cases per Million (2000-2018)'}      
                        ]
                    });  
                    break;     
                case "Anaplasmosis-Year":    
                    table = $('#Anaplasmosis-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Anaplasmosis-Year",
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
                        url: "getSQLQuery.php",
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
                case "Botulism-Cause":
                    table = $('#Botulism-Cause').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Botulism-Cause",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Month'},
                            {data: 'State'},
                            {data: 'Confirmed or Suspected Food'},
                            {data: 'Toxin Type'},
                            {data: 'Cases'},
                        ]
                    }); 
                    break;
                case "Botulism-Transmission":
                    table = $('#Botulism-Transmission').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Botulism-Transmission",
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
                case "Brucellosis-State":
                    table = $('#Brucellosis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Brucellosis-State",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases (2010)'}
                        ]
                    });
                    break;
                case "Brucellosis-Year": 
                    table = $('#Brucellosis-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Brucellosis-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                        {data: 'Year'},
                        {data: 'Cases'}      
                        ]
                    }); 
                    break;
                case "Campylobacteriosis":
                    table = $('#Campylobacteriosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
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
                case "Candida-Auris":
                    table = $('#Candida-Auris').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Candida-Auris",
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
                        url: "getSQLQuery.php",
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
                case "Chlamydia-Age":
                    table = $('#Chlamydia-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Chlamydia-Age",
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
                case "Chlamydia-AgeGenderRace":
                        table = $('#Chlamydia-AgeGenderRace').DataTable( {
                            destroy: true,
                            ajax: {
                            url: "getSQLQuery.php",
                            data:{
                                dataset: "Chlamydia-AgeGenderRace",
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
                                {data: 'Male 2018 Cases(Native Hawaiians/Other Pacific Islanders)'},
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
                        break;
                case "Chlamydia-State":
                    table = $('#Chlamydia-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Chlamydia-State",
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
                    break;
                case "Chlamydia-StateFemale":
                    table = $('#Chlamydia-StateFemale').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Chlamydia-StateFemale",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Female Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Female Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Female Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Female Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Female Cases)'},
                            {data: '2018 (Rate per 100K population)'}
                        ]
                    }); 
                    break;
                case "Chlamydia-StateMale":
                    table = $('#Chlamydia-StateMale').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Chlamydia-StateMale",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Male Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Male Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Male Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Male Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Male Cases)'},
                            {data: '2018 (Rate per 100K population)'}
                        ]
                    }); 
                    break;
                case "Coccidioidomycosis":
                    table = $('#Coccidioidomycosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
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
                case "Congenital Syphilis-BirthRegion":
                    table = $('#Congenital-Syphilis-BirthRegion').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Congenital Syphilis-BirthRegion",
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
                    break;
                case "Congenital Syphilis-InfantVitals":
                    table = $('#Congenital-Syphilis-InfantVitals').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Congenital Syphilis-InfantVitals",
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
                case "Congenital Syphilis-Race":
                    table = $('#Congenital-Syphilis-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Congenital Syphilis-Race",
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
                    break;
                case "Cryptosporidiosis-Age":    
                    table = $('#Cryptosporidiosis-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Cryptosporidiosis-Age",
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
                case "Cryptosporidiosis-Gender":    
                    table = $('#Cryptosporidiosis-Gender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Cryptosporidiosis-Gender",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Gender'},
                            {data: 'Cases (2018)'}
                        ]
                    }); 
                    break;
                case "Cryptosporidiosis-Race":
                    table = $('#Cryptosporidiosis-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Cryptosporidiosis-Race",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Race'},
                            {data: 'Cases (2018)'}
                        ]
                    }); 
                    break; 
                case "Cryptosporidiosis-State":
                    table = $('#Cryptosporidiosis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Cryptosporidiosis-State",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases (2018)'},
                            {data: 'Rate per 100K population (2018)'}
                        ]
                    });
                    break;
                case "Dengue-StateLocalTrans":
                    table = $('#Dengue-StateLocalTrans').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Dengue-StateLocalTrans",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2017 Locally-transmitted Cases (N=0)'},
                            {data: '2017 Rate (%)'},
                            {data: '2018 Locally-transmitted Cases (N=3)'},
                            {data: '2018 Rate (%)'},
                            {data: '2019 Locally-transmitted Cases (N=20)'},
                            {data: '2019 Rate (%)'},
                            {data: '2020 Locally-transmitted Cases (N=77)'},
                            {data: '2020 Rate (%)'}
                        ]
                    }); 
                    break; 
                case "Dengue-StateTravelTrans":
                    table = $('#Dengue-StateTravelTrans').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Dengue-StateTravelTrans",
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
                case "Ehrlichiosis-MonthOfOnset":
                    table = $('#Ehrlichiosis-MonthOfOnset').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Ehrlichiosis-MonthOfOnset",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Month of Onset'},
                            {data: 'Cases'}
                        ]
                    }); 
                    break;
                case "Ehrlichiosis-State":
                    table = $('#Ehrlichiosis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Ehrlichiosis-State",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases per Million (2000-2018)'}
                        ]
                    }); 
                    break;
                case "Ehrlichiosis-Year":
                    table = $('#Ehrlichiosis-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Ehrlichiosis-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'}
                        ]
                    }); 
                    break; 
                case "Giardiasis-State":
                    table = $('#Giardiasis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Giardiasis-State",
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
                    break;
                case "Giardiasis-Year":
                    table = $('#Giardiasis-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Giardiasis-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'}
                        ]
                    }); 
                    break; 
                case "Gonorrhea-Age":          
                    table = $('#Gonorrhea-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Gonorrhea-Age",
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
                case "Gonorrhea-AgeGenderRace":    
                    table = $('#Gonorrhea-AgeGenderRace').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Gonorrhea-AgeGenderRace",
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
                    break;
                case "Gonorrhea-State":
                    table = $('#Gonorrhea-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Gonorrhea-State",
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
                case "Gonorrhea-StateFemale":
                    table = $('#Gonorrhea-StateFemale').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Gonorrhea-StateFemale",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Female Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Female Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Female Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Female Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Female Cases)'},
                            {data: '2018 (Rate per 100K population)'}
                        ]
                    }); 
                    break;
                case "Gonorrhea-StateMale":
                    table = $('#Gonorrhea-StateMale').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Gonorrhea-StateMale",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Male Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Male Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Male Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Male Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Male Cases)'},
                            {data: '2018 (Rate per 100K population)'}
                        ]
                    }); 
                    break;
                case "Haemophilus Influenzae-Age":
                    table = $('#Haemophilus-Influenzae-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Haemophilus Influenzae-Age",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age'},
                            {data: 'Serotype b Cases'},
                            {data: 'Serotype b (Rate per 100K population)'},
                            {data: 'Serotype Non-b Cases'},
                            {data: 'Serotype Non-b (Rate per 100K population)'},
                            {data: 'Serotype Non-Type Cases'},
                            {data: 'Serotype Non-Type (Rate per 100K population)'},
                            {data: 'Serotype Unknown Cases'},
                            {data: 'Serotype Unknown (Rate per 100K population)'}
                        ]
                    }); 
                    break; 
                case "Haemophilus Influenzae-Race":
                    table = $('#Haemophilus-Influenzae-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Haemophilus Influenzae-Race",
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
                    table = $('#Hantavirus-Infection').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
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
                case "Hepatitis A-Age":       
                    table = $('#Hepatitis-A-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis A-Age",
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
                case "Hepatitis A-Gender":       
                    table = $('#Hepatitis-A-Gender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis A-Gender",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Gender'},
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
                case "Hepatitis A-Race":       
                    table = $('#Hepatitis-A-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis A-Race",
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
                    break;
                case "Hepatitis A-State":
                    table = $('#Hepatitis-A-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis A-State",
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
                    break;
                case "Hepatitis A-Year":  
                    table = $('#Hepatitis-A-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis A-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'},
                            {data: 'Rate per 100K population'}
                        ]
                    }); 
                    break;
                case "Hepatitis B-Age":     
                    table = $('#Hepatitis-B-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis B-Age",
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
                case "Hepatitis B-Gender":
                    table = $('#Hepatitis-B-Gender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis B-Gender",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Gender'},
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
                case "Hepatitis B-Race":
                    table = $('#Hepatitis-B-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis B-Race",
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
                    break;
                case "Hepatitis B-State":
                    table = $('#Hepatitis-B-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis B-State",
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
                    break;
                case "Hepatitis B-Year":
                    table = $('#Hepatitis-B-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis B-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'},
                            {data: 'Rate per 100K population'}
                        ]
                    }); 
                    break;
                case "Hepatitis C-Age":    
                    table = $('#Hepatitis-C-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis C-Age",
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
                case "Hepatitis C-Gender":
                    table = $('#Hepatitis-C-Gender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis C-Gender",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Gender'},
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
                case "Hepatitis C-Race":
                    table = $('#Hepatitis-C-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis C-Race",
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
                    break;
                case "Hepatitis C-Year":   
                    table = $('#Hepatitis-C-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Hepatitis C-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'},
                            {data: 'Rate per 100K population'}
                        ]
                    }); 
                    break; 
                case "HIV-Age":    
                    table = $('#HIV-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "HIV-Age",
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
                case "HIV-Gender":    
                    table = $('#HIV-Gender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "HIV-Gender",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Gender'},
                            {data: '2014 (Estimated Cases)'},
                            {data: '2015 (Estimated Cases)'},
                            {data: '2016 (Estimated Cases)'},
                            {data: '2017 (Estimated Cases)'},
                            {data: '2018 (Estimated Cases)'}
                        ]
                    }); 
                    break; 
                case "HIV-Race":
                    table = $('#HIV-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "HIV-Race",
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
                    break;
                case "Novel Influenza A Virus-State":
                    table = $('#Novel-Influenza-A-Virus-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Novel Influenza A Virus-State",
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
                case "Novel Influenza A Virus-Type":
                    table = $('#Novel-Influenza-A-Virus-Type').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Novel Influenza A Virus-Type",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Virus Type'},
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
                case "Legionellosis-Age":     
                    table = $('#Legionellosis-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Legionellosis-Age",
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
                case "Legionellosis-Gender":
                    table = $('#Legionellosis-Gender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Legionellosis-Gender",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Gender'},
                            {data: '2014 (Cases)'},
                            {data: '2015 (Cases)'},
                            {data: '2016 (Cases)'},
                            {data: '2017 (Cases)'}
                        ]
                    }); 
                    break;
                case "Legionellosis-Race":    
                    table = $('#Legionellosis-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Legionellosis-Race",
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
                    break;
                case "Legionellosis-State":
                    table = $('#Legionellosis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Legionellosis-State",
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
                    break;
                case "Lyme Disease-AgeGender":     
                    table = $('#Lyme-Disease-AgeGender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Lyme Disease-AgeGender",
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
                case "Lyme Disease-MonthOfOnset":
                    table = $('#Lyme-Disease-MonthOfOnset').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Lyme Disease-MonthOfOnset",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Month of Onset'},
                            {data: 'Cases (2008-2018)'}
                        ]
                    }); 
                    break;
                case "Lyme Disease-State":
                    table = $('#Lyme-Disease-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Lyme Disease-State",
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
                    break;
                case "Lyme Disease-Year":    
                    table = $('#Lyme-Disease-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Lyme Disease-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'},
                            {data: 'Rate per 100K population'}
                        ]
                    }); 
                    break;
                case "Measles":
                    table = $('#Measles').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
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
                        url: "getSQLQuery.php",
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
                        url: "getSQLQuery.php",
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
                case "Pertussis-Age":
                    table = $('#Pertussis-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Pertussis-Age",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age'},
                            {data: '2018 (Cases)'},
                            {data: '2018 (Rate (%) per 100K population)'},
                            {data: '2018 (% Hospitalized by age)'}
                        ]
                    }); 
                    break; 
                case "Pertussis-State":
                    table = $('#Pertussis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Pertussis-State",
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
                        url: "getSQLQuery.php",
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
                case "Pneumococcal Disease":
                    table = $('#Pneumococcal-Disease').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
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
                case "Q Fever-Age":
                    table = $('#Q-Fever-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Q Fever-Age",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age'},
                            {data: 'Cases per Million (2000-2017)'}
                        ]
                    }); 
                    break; 
                case "Q Fever-MonthOfOnset":
                    table = $('#Q-Fever-MonthOfOnset').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Q Fever-MonthOfOnset",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Month of Onset'},
                            {data: 'Q Fever Cases (2000-2017)'}
                        ]
                    }); 
                    break; 
                case "Rabies-(Human)":
                    console.log("Rabies (Human): Unsure of what should be displayed. Data appears to be cases of rabies. Possibly best to showcase with tableau.");
                    // table = $('#Rabies-(Human)').DataTable( {
                    //     destroy: true,
                    //     ajax: {
                    //     url: "getSQLQuery.php",
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
                case "Spotted Fever-Age":
                    table = $('#Spotted-Fever-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Spotted Fever-Age",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age (years)'},
                            {data: 'Cases per Million (2000-2018)'}
                        ]
                    }); 
                    break; 
                case "Spotted Fever-MonthOfOnset":
                    table = $('#Spotted-Fever-MonthOfOnset').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Spotted Fever-MonthOfOnset",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Month of Onset'},
                            {data: 'Cases (2000-2018)'}
                        ]
                    }); 
                    break; 
                case "Spotted Fever-State":
                    table = $('#Spotted-Fever-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Spotted Fever-State",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: 'Cases per Million (2018)'}
                        ]
                    }); 
                    break;
                case "Spotted Fever-Year":    
                    table = $('#Spotted-Fever-Year').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Spotted Fever-Year",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Year'},
                            {data: 'Cases'}
                        ]
                    }); 
                    break; 
                case "Syphilis-Age":
                    table = $('#Syphilis-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Syphilis-Age",
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
                case "Syphilis-AgeGenderRace":
                    table = $('#Syphilis-AgeGenderRace').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Syphilis-AgeGenderRace",
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
                    break;
                case "Syphilis-State":
                    table = $('#Syphilis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Syphilis-State",
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
                    break;
                case "Syphilis-StateFemale":
                    table = $('#Syphilis-StateFemale').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Syphilis-StateFemale",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Female Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Female Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Female Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Female Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Female Cases)'},
                            {data: '2018 (Rate per 100K population)'}
                        ]
                    }); 
                    break;
                case "Syphilis-StateMale":
                    table = $('#Syphilis-StateMale').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Syphilis-StateMale",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'State'},
                            {data: '2014 (Male Cases)'},
                            {data: '2014 (Rate per 100K population)'},
                            {data: '2015 (Male Cases)'},
                            {data: '2015 (Rate per 100K population)'},
                            {data: '2016 (Male Cases)'},
                            {data: '2016 (Rate per 100K population)'},
                            {data: '2017 (Male Cases)'},
                            {data: '2017 (Rate per 100K population)'},
                            {data: '2018 (Male Cases)'},
                            {data: '2018 (Rate per 100K population)'}
                        ]
                    }); 
                    break;
                case "Trichinellosis-State":
                    table = $('#Trichinellosis-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Trichinellosis-State",
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
                    break;
                case "Trichinellosis-SuspectMeat":
                    table = $('#Trichinellosis-SuspectMeat').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Trichinellosis-SuspectMeat",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Suspect Meat'},
                            {data: 'Suspect Meat_2'},
                            {data: 'Total (Cases)'},
                            {data: '2011 (Cases)'},
                            {data: '2012 (Cases)'},
                            {data: '2013 (Cases)'},
                            {data: '2014 (Cases)'},
                            {data: '2015 (Cases)'}
                        ]
                    });
                    break;
                case "Trichinellosis-Age": 
                    table = $('#Trichinellosis-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Trichinellosis-Age",
                        },
                        dataSrc: ''
                        },
                        columns:[
                            {data: 'Age (Years)'},
                            {data: 'Cases (2011-2015)'}
                        ]
                    }); 
                    break; 
                case "Tuberculosis-Age":   
                    table = $('#Tuberculosis-Age').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Tuberculosis-Age",
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
                    break;
                case "Tuberculosis-AgeGender":
                    table = $('#Tuberculosis-AgeGender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Tuberculosis-AgeGender",
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
                case "Tuberculosis-Race":
                    table = $('#Tuberculosis-Race').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Tuberculosis-Race",
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
                    break;
                case "Tularemia-AgeGender":   
                    table = $('#Tularemia-AgeGender').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Tularemia-AgeGender",
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
                case "Tularemia-State":
                    table = $('#Tularemia-State').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
                        data:{
                            dataset: "Tularemia-State",
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
                    break;
                case "Vibrosis":
                    table = $('#Vibrosis').DataTable( {
                        destroy: true,
                        ajax: {
                        url: "getSQLQuery.php",
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
                        url: "getSQLQuery.php",
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