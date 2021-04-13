<?php 
    Include 'db_connection.php';
    $con = OpenCon();
    $q = $_REQUEST["dataset"];

    // Most of these SQL statements are state data, however, if there wasnt state data then resorted to race.ethincity data OR if the disease only had 1 feature then it should be in this file already
    // Some of the data from specific diseases were omitted as it didn't fit on the table 
    switch($q){
        case "COVID-StateDeaths":
            $sql = "SELECT state, covid_19_deaths, total_deaths, pneumonia_deaths, pneumonia_and_covid_19_deaths, influenza_deaths, pneumonia_influenza_or_covid FROM iidts_prod.disease_covid19_cdc_api_t where age_group='All Ages' and sex='All Sexes' and data_as_of='2021-03-10' LIMIT 54;;";
            break;
        case "COVID-AgeGenderDeaths":
            $sql = "SELECT sex, age_group, covid_19_deaths, total_deaths, pneumonia_deaths, pneumonia_and_covid_19_deaths, influenza_deaths, pneumonia_influenza_or_covid FROM iidts_prod.disease_covid19_cdc_api_t where state='United States' and data_as_of='2021-03-10' limit 51;";
            break;
        case "Anaplasmosis-MonthOfOnset":
            $sql = "SELECT * FROM iidts_prod.disease_anaplasmosis_monthofonset_t limit 48;";
            break;
        case "Anaplasmosis-State":
            $sql = "SELECT State, `Cases per Million (2000-2018)` FROM iidts_prod.disease_anaplasmosis_state_t limit 153;";
            break;
        case "Anaplasmosis-Year":
            $sql = "SELECT * FROM iidts_prod.disease_anaplasmosis_year_t limit 57;";
            break;
        case "Babesiosis":
            $sql = "SELECT State, `2011 (Cases)`,`2012 (Cases)`,`2013 (Cases)`,`2014 (Cases)`,`2015 (Cases)`,`2016 (Cases)`,`2017 (Cases)`,`2018 (Cases)` FROM iidts_prod.disease_babesiosis_state_t limit 303;";
            break;
        case "Botulism-Cause":
            $sql = "SELECT * FROM iidts_prod.disease_botulism_cause_t limit 21;";
            break;
        case "Botulism-Transmission":
            $sql = "SELECT * FROM iidts_prod.disease_botulism_transmission_t limit 12;";
            break;
        case "Brucellosis-State":
            $sql = "SELECT * FROM iidts_prod.disease_brucellosis_state_t limit 81;";
            break;
        case "Brucellosis-Year":
            $sql = "SELECT * FROM iidts_prod.disease_brucellosis_year_t limit 54;";
            break;
        case "Campylobacteriosis":
            $sql = "SELECT * FROM iidts_prod.disease_campylobacteriosis_foodcat_t limit 24;";
            break;    
        case "Candida-Auris":
            $sql = "SELECT * FROM iidts_prod.disease_candida_auris_state_t limit 63;";
            break; 
        case "Chancroid":
            $sql = "SELECT * FROM iidts_prod.disease_chancroid_state_t limit 150;";
            break;  
        case "Chlamydia-Age":
            $sql = "SELECT * FROM iidts_prod.disease_chlamydia_age_t limit 39;";
            break;
        case "Chlamydia-AgeGenderRace":
            $sql = "SELECT * FROM iidts_prod.disease_chlamydia_race_t limit 24;";
            break;  
        case "Chlamydia-State":
            $sql = "SELECT * FROM iidts_prod.disease_chlamydia_state_t limit 150;";
            break;
        case "Chlamydia-StateFemale":
            $sql = "SELECT * FROM iidts_prod.disease_chlamydia_statefemale_t limit 150;";
            break;
        case "Chlamydia-StateMale":
            $sql = "SELECT * FROM iidts_prod.disease_chlamydia_statemale_t limit 150;";
            break;  
        case "Coccidioidomycosis":
            $sql = "SELECT * FROM iidts_prod.disease_coccidioidomycosis_state_t limit 63;";
            break;
        case "Congenital Syphilis-BirthRegion":
            $sql = "SELECT * FROM iidts_prod.disease_congen_syphilis_regionofbirth_t limit 12;";
            break;
        case "Congenital Syphilis-InfantVitals":
            $sql = "SELECT * FROM iidts_prod.disease_congen_syphilis_infantvitals_t limit 12;";
            break;
        case "Congenital Syphilis-Race":
            $sql = "SELECT * FROM iidts_prod.disease_congen_syphilis_raceofmom_t limit 21;";
            break;
        case "Cryptosporidiosis-Age":
            $sql = "SELECT * FROM iidts_prod.disease_cryptosporidiosis_age_t limit 57;";
            break;
        case "Cryptosporidiosis-Gender":
            $sql = "SELECT * FROM iidts_prod.disease_cryptosporidiosis_gender_t limit 9;";
            break;
        case "Cryptosporidiosis-Race":
            $sql = "SELECT * FROM iidts_prod.disease_cryptosporidiosis_race_t limit 21;";
            break;
        case "Cryptosporidiosis-State":
            $sql = "SELECT * FROM iidts_prod.disease_cryptosporidiosis_state_t limit 150;";
            break;
        case "Dengue-StateLocalTrans":
            $sql = "SELECT * FROM iidts_prod.disease_dengue_statelocaltrans_t limit 147;";
            break;
        case "Dengue-StateTravelTrans":
            $sql = "SELECT * FROM iidts_prod.disease_dengue_statetraveltrans_t limit 150;";
            break;
        case "Ehrlichiosis-MonthOfOnset":
            $sql = "SELECT * FROM iidts_prod.disease_ehrlichiosis_monthofonset_t limit 36;";
            break;
        case "Ehrlichiosis-State":
            $sql = "SELECT * FROM iidts_prod.disease_ehrlichiosis_state_t limit 153;";
            break;
        case "Ehrlichiosis-Year":
            $sql = "SELECT * FROM iidts_prod.disease_ehrlichiosis_year_t limit 57;";
            break;
        case "Giardiasis-State":
            $sql = "SELECT * FROM iidts_prod.disease_giardisis_state_t limit 132;";
            break;
        case "Giardiasis-Year":
            $sql = "SELECT * FROM iidts_prod.disease_giardisis_year_t limit 72;";
            break;
        case "Gonorrhea-Age":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_age_t limit 42;";
            break;
        case "Gonorrhea-AgeGenderRace":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_race_t limit 24;";
            break;
        case "Gonorrhea-State":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_state_t limit 150;";
            break;
        case "Gonorrhea-StateFemale":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_female_t limit 150;";
            break;
        case "Gonorrhea-StateMale":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_male_t limit 153;";
            break;
        case "Haemophilus Influenzae-Age":
            $sql = "SELECT * FROM iidts_prod.disease_haemophilus_influenzae_age_t limit 11;";
            break;
        case "Haemophilus Influenzae-Race":
            $sql = "SELECT * FROM iidts_prod.disease_haemophilus_influenzae_race_t limit 12;";
            break;
        case "Hantavirus Infection":
            $sql = "SELECT * FROM iidts_prod.disease_hantavirus_state_t limit 150;";
            break;
        case "Hepatitis A-Age":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_age_t limit 21;";
            break;
        case "Hepatitis A-Gender":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_gender_t limit 6;";
            break;
        case "Hepatitis A-Race":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_race_t limit 15;";
            break;
        case "Hepatitis A-State":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_state_t limit 153;";
            break;
        case "Hepatitis A-Year":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_year_t limit 15;";
            break;
        case "Hepatitis B-Age":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_age_t limit 18;";
            break;
        case "Hepatitis B-Gender":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_gender_t limit 6;";
            break;
        case "Hepatitis B-Race":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_race_t limit 15;";
            break;
        case "Hepatitis B-State":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_state_t limit 150;";
            break;
        case "Hepatitis B-Year":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_year_t limit 15;";
            break;
        case "Hepatitis C-Age":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_c_age_t limit 18;";
            break;
        case "Hepatitis C-Gender":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_c_gender_t limit 6;";
            break;
        case "Hepatitis C-Race":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_c_race_t limit 15;";
            break;
        case "Hepatitis C-Year":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_c_year_t limit 15;";
            break;
        case "HIV-Age":
            $sql = "SELECT * FROM iidts_prod.disease_hiv_age_t limit 15;";
            break;
        case "HIV-Gender":
            $sql = "SELECT * FROM iidts_prod.disease_hiv_gender_t limit 6;";
            break;
        case "HIV-Race":
            $sql = "SELECT * FROM iidts_prod.disease_hiv_race_t limit 18;";
            break;
        case "Legionellosis-Age":
            $sql = "SELECT * FROM iidts_prod.disease_legionellosis_age_t limit 33;";
            break;
        case "Legionellosis-Gender":
            $sql = "SELECT * FROM iidts_prod.disease_legionellosis_gender_t limit 9;";
            break;
        case "Legionellosis-State":
            $sql = "SELECT * FROM iidts_prod.disease_legionellosis_state_t limit 150;";
            break;
        case "Legionellosis-Race":
            $sql = "SELECT * FROM iidts_prod.disease_legionellosis_race_t limit 18;";
            break;
        case "Lyme Disease-AgeGender":
            $sql = "SELECT * FROM iidts_prod.disease_lyme_age_gender_t limit 57;";
            break;
        case "Lyme Disease-MonthOfOnset":
            $sql = "SELECT * FROM iidts_prod.disease_lyme_monthofonset_t limit 36;";
            break;
        case "Lyme Disease-State":
            $sql = "SELECT * FROM iidts_prod.disease_lyme_state_t limit 150;";
            break;
        case "Lyme Disease-Year":
            $sql = "SELECT * FROM iidts_prod.disease_lyme_year_t limit 30;";
            break;
        case "Measles":
            $sql = "SELECT * FROM iidts_prod.disease_measles_year_t limit 30;";
            break;
        case "Meningococcal Disease":
            $sql = "SELECT * FROM iidts_prod.disease_meningococcal_age_t limit 24;";
            break;
        case "Mumps":
            $sql = "SELECT * FROM iidts_prod.disease_mumps_year_t limit 60;";
            break;
        case "Novel Influenza A Virus-State":
            $sql = "SELECT * FROM iidts_prod.disease_influenza_a_state_t limit 150;";
            break;
        case "Novel Influenza A Virus-Type":
            $sql = "SELECT * FROM iidts_prod.disease_influenza_a_type_t limit 12;";
            break;
        case "Pertussis-Age":
            $sql = "SELECT * FROM iidts_prod.disease_pertussis_age_t limit 24;";
            break;
        case "Pertussis-State":
            $sql = "SELECT * FROM iidts_prod.disease_pertussis_state_t limit 150;";
            break;
        case "Plague":
            $sql = "SELECT * FROM iidts_prod.disease_plague_year_t limit 57;";
            break;
        case "Pneumococcal Disease":
            $sql = "SELECT * FROM iidts_prod.disease_invasive_pneumococcal_age_t limit 30;";
            break;
        case "Q Fever-Age":
            $sql = "SELECT * FROM iidts_prod.disease_qfever_age_t limit 45;";
            break;
        case "Q Fever-MonthOfOnset":
            $sql = "SELECT * FROM iidts_prod.disease_qfever_monthofonset_t limit 36;";
            break;
        case "Rabies (Human)":
            $sql = "SELECT * FROM iidts_prod.disease_rabies_casechar_t limit 75;";
            break;
        case "Spotted Fever-Age":
            $sql = "SELECT * FROM iidts_prod.disease_spotted_fever_rickettsiosis_age_t limit 45;";
            break;
        case "Spotted Fever-MonthOfOnset":
            $sql = "SELECT * FROM iidts_prod.disease_spotted_fever_rickettsiosis_monthofonset_t limit 36;";
            break;
        case "Spotted Fever-State":
            $sql = "SELECT * FROM iidts_prod.disease_spotted_fever_rickettsiosis_state_t limit 150;";
            break;
        case "Spotted Fever-Year":
            $sql = "SELECT * FROM iidts_prod.disease_spotted_fever_rickettsiosis_year_t limit 57;";
            break;
        case "Syphilis-Age":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_age_t limit 39;";
            break;
        case "Syphilis-AgeGenderRace":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_race_t limit 24;";
            break;
        case "Syphilis-State":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_state_t limit 150;";
            break;
        case "Syphilis-StateFemale":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_statefemale_t limit 150;";
            break;
        case "Syphilis-StateMale":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_statemale_t limit 150;";
            break;
        case "Trichinellosis-Age":
            $sql = "SELECT * FROM iidts_prod.disease_trichinellosis_age_t limit 27;";
            break;
        case "Trichinellosis-State":
            $sql = "SELECT * FROM iidts_prod.disease_trichinellosis_state_t limit 150;";
            break;
        case "Trichinellosis-SuspectMeat":
            $sql = "SELECT * FROM iidts_prod.disease_trichinellosis_suspectmeat_t limit 30;";
            break;
        case "Tuberculosis-Age":
            $sql = "SELECT * FROM iidts_prod.disease_tuberculosis_age_t limit 81;";
            break;
        case "Tuberculosis-AgeGender":
            $sql = "SELECT * FROM iidts_prod.disease_tuberculosis_age_gender_t limit 21;";
            break;
        case "Tuberculosis-Race":
            $sql = "SELECT * FROM iidts_prod.disease_tuberculosis_race_t limit 81;";
            break;
        case "Tularemia-AgeGender":
            $sql = "SELECT * FROM iidts_prod.disease_tularemia_age_gender_t limit 57;";
            break;
        case "Tularemia-State":
            $sql = "SELECT * FROM iidts_prod.disease_tularemia_state_t limit 150;";
            break;
        case "Vibrosis":
            $sql = "SELECT * FROM iidts_prod.disease_vibriosis_species_t limit 48;";
            break;
        case "Zika Virus":
            $sql = "SELECT * FROM iidts_prod.disease_zika_state_t limit 150;";
            break;    
        default:
            echo("error");
    }
    $result = mysqli_query($con, $sql);

    $rows = array();
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }

    echo json_encode($rows);
    mysqli_close($con);

?>