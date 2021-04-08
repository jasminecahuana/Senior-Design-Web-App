<?php 
    Include 'db_connection.php';
    $con = OpenCon();
    $q = $_REQUEST["dataset"];

    // Most of these SQL statements are state data, however, if there wasnt state data then resorted to race.ethincity data OR if the disease only had 1 feature then it should be in this file already
    // Some of the data from specific diseases were omitted as it didn't fit on the table 
    switch($q){
        case "COVID-19":
            $sql = "SELECT state, covid_19_deaths FROM iidts_prod.disease_covid19_cdc_api_t where age_group='All Ages' and sex='All Sexes' and data_as_of='2021-03-10' LIMIT 54;";
            break;
        case "Anaplasmosis":
            $sql = "SELECT State, `Cases per Million (2000-2018)` FROM iidts_prod.disease_anaplasmosis_state_t limit 51;";
            break;
        case "Babesiosis":
            $sql = "SELECT State, `2011 (Cases)`,`2012 (Cases)`,`2013 (Cases)`,`2014 (Cases)`,`2015 (Cases)`,`2016 (Cases)`,`2017 (Cases)`,`2018 (Cases)` FROM iidts_prod.disease_babesiosis_state_t limit 50;";
            break;
        case "Botulism":
            $sql = "SELECT * FROM iidts_prod.disease_botulism_transmission_t limit 4;";
            break;
        case "Brucellosis":
            $sql = "SELECT * FROM iidts_prod.disease_brucellosis_state_t limit 27;";
            break;
        case "Campylobacteriosis":
            $sql = "SELECT * FROM iidts_prod.disease_campylobacteriosis_foodcat_t limit 8;";
            break;    
        case "Candida Auris":
            $sql = "SELECT * FROM iidts_prod.disease_candida_auris_state_t limit 21;";
            break;   
        case "Chancroid":
            $sql = "SELECT * FROM iidts_prod.disease_chancroid_state_t limit 50;";
            break;  
        case "Chlamydia":
            $sql = "SELECT * FROM iidts_prod.disease_chlamydia_state_t limit 50;";
            break;  
        case "Coccidioidomycosis":
            $sql = "SELECT * FROM iidts_prod.disease_coccidioidomycosis_state_t limit 21;";
            break;
        case "Congenital Syphilis":
            $sql = "SELECT * FROM iidts_prod.disease_congen_syphilis_raceofmom_t limit 7;";
            break;
        case "Cryptosporidiosis":
            $sql = "SELECT * FROM iidts_prod.disease_cryptosporidiosis_state_t limit 50;";
            break;
        case "Dengue":
            $sql = "SELECT * FROM iidts_prod.disease_dengue_statetraveltrans_t limit 50;";
            break;
        case "Ehrlichiosis":
            $sql = "SELECT * FROM iidts_prod.disease_ehrlichiosis_state_t limit 51;";
            break;
        case "Giardiasis":
            $sql = "SELECT * FROM iidts_prod.disease_giardisis_state_t limit 44;";
            break;
        case "Gonorrhea":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_state_t limit 50;";
            break;
        case "Haemophilus Influenzae":
            $sql = "SELECT * FROM iidts_prod.disease_haemophilus_influenzae_race_t limit 4;";
            break;
        case "Hantavirus Infection":
            $sql = "SELECT * FROM iidts_prod.disease_hantavirus_state_t limit 50;";
            break;
        case "Hepatitis A":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_state_t limit 51;";
            break;
        case "Hepatitis B":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_state_t limit 50;";
            break;
        case "Hepatitis C":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_c_race_t limit 5;";
            break;
        case "HIV":
            $sql = "SELECT * FROM iidts_prod.disease_hiv_race_t limit 6;";
            break;
        case "Novel Influenza A Virus":
            $sql = "SELECT * FROM iidts_prod.disease_influenza_a_state_t limit 50;";
            break;
        case "Pneumococcal Disease":
            $sql = "SELECT * FROM iidts_prod.disease_invasive_pneumococcal_age_t limit 10;";
            break;
        case "Legionellosis":
            $sql = "SELECT * FROM iidts_prod.disease_legionellosis_state_t limit 50;";
            break;
        case "Lyme Disease":
            $sql = "SELECT * FROM iidts_prod.disease_lyme_state_t limit 50;";
            break;
        case "Measles":
            $sql = "SELECT * FROM iidts_prod.disease_measles_year_t limit 10;";
            break;
        case "Meningococcal Disease":
            $sql = "SELECT * FROM iidts_prod.disease_meningococcal_age_t limit 8;";
            break;
        case "Mumps":
            $sql = "SELECT * FROM iidts_prod.disease_mumps_year_t limit 20;";
            break;
        case "Pertussis":
            $sql = "SELECT * FROM iidts_prod.disease_pertussis_state_t limit 50;";
            break;
        case "Plague":
            $sql = "SELECT * FROM iidts_prod.disease_plague_year_t limit 19;";
            break;
        case "Q Fever":
            $sql = "SELECT * FROM iidts_prod.disease_qfever_age_t limit 15;";
            break;
        case "Rabies (Human)":
            // Will need to edit with correct SQL query
            $sql = "SELECT * FROM iidts_prod.disease_tularemia_age_gender_t limit 19;";
            break;
        case "Spotted Fever":
            $sql = "SELECT * FROM iidts_prod.disease_spotted_fever_rickettsiosis_state_t limit 50;";
            break;
        case "Syphilis":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_state_t limit 50;";
            break;
        case "Trichinellosis":
            $sql = "SELECT * FROM iidts_prod.disease_trichinellosis_state_t limit 50;";
            break;
        case "Tuberculosis":
            $sql = "SELECT * FROM iidts_prod.disease_tuberculosis_race_t limit 27;";
            break;
        case "Tularemia":
            $sql = "SELECT * FROM iidts_prod.disease_tularemia_state_t limit 50;";
            break;
        case "Vibrosis":
            $sql = "SELECT * FROM iidts_prod.disease_vibriosis_species_t limit 16;";
            break;
        case "Zika Virus":
            $sql = "SELECT * FROM iidts_prod.disease_zika_state_t limit 50;";
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