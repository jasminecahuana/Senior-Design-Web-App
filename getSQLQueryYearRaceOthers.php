<?php 
    Include 'db_connection.php';
    $con = OpenCon();
    $q = $_REQUEST["dataset"];

    // Most of these SQL statements are state data, however, if there wasnt state data then resorted to race.ethincity data OR if the disease only had 1 feature then it should be in this file already
    // Some of the data from specific diseases were omitted as it didn't fit on the table 
    switch($q){
        case "COVID-19":
            $sql = "SELECT sex, age_group, covid_19_deaths, total_deaths, pneumonia_deaths, pneumonia_and_covid_19_deaths, influenza_deaths, pneumonia_influenza_or_covid FROM iidts_prod.disease_covid19_cdc_api_t where state='United States' and data_as_of='2021-03-10' limit 51;";
            break;
        case "Anaplasmosis":
            $sql = "SELECT * FROM iidts_prod.disease_anaplasmosis_year_t limit 19;";
            break;
        case "Botulism":
            $sql = "SELECT * FROM iidts_prod.disease_botulism_transmission_t limit 4;";
            break;
        case "Brucellosis":
            $sql = "SELECT * FROM iidts_prod.disease_brucellosis_year_t limit 18;";
            break; 
        case "Chlamydia":
            $sql = "SELECT * FROM iidts_prod.disease_chlamydia_age_t limit 13;";
            break;  
        case "Congenital Syphilis":
            $sql = "SELECT * FROM iidts_prod.disease_congen_syphilis_regionofbirth_t limit 4;";
            break;
        case "Cryptosporidiosis":
            $sql = "SELECT * FROM iidts_prod.disease_cryptosporidiosis_race_t limit 7;";
            break;
        case "Ehrlichiosis":
            $sql = "SELECT * FROM iidts_prod.disease_ehrlichiosis_year_t limit 19;";
            break;
        case "Giardiasis":
            $sql = "SELECT * FROM iidts_prod.disease_giardisis_year_t limit 24;";
            break;
        case "Gonorrhea":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_race_t limit 12;";
            break;
        case "Hepatitis A":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_year_t limit 5;";
            break;
        case "Hepatitis B":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_year_t limit 5;";
            break;
        case "Hepatitis C":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_c_year_t limit 5;";
            break;
        case "HIV":
            $sql = "SELECT * FROM iidts_prod.disease_hiv_age_t limit 5;";
            break;
        case "Influenza A Virus":
            // Will need to edit with correct SQL query
            $sql = "SELECT * FROM iidts_prod.disease_hiv_race_t limit 6;";
            break;
        case "Legionellosis":
            $sql = "SELECT * FROM iidts_prod.disease_legionellosis_race_t limit 6;";
            break;
        case "Lyme Disease":
            $sql = "SELECT * FROM iidts_prod.disease_lyme_year_t limit 20;";
            break;
        case "Pertussis":
            $sql = "SELECT * FROM iidts_prod.disease_pertussis_state_t limit 50;";
            break;
        case "Q Fever":
            $sql = "SELECT * FROM iidts_prod.disease_qfever_age_t limit 15;";
            break;
        case "Rabies (Human)":
            // Will need to edit with correct SQL query
            $sql = "SELECT * FROM iidts_prod.disease_tularemia_age_gender_t limit 19;";
            break;
        case "Spotted Fever":
            $sql = "SELECT * FROM iidts_prod.disease_spotted_fever_rickettsiosis_year_t limit 19;";
            break;
        case "Syphilis":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_race_t limit 12;";
            break;
        case "Trichinellosis":
            $sql = "SELECT * FROM iidts_prod.disease_trichinellosis_age_t limit 9;";
            break;
        case "Tuberculosis":
            $sql = "SELECT * FROM iidts_prod.disease_tuberculosis_age_t limit 27;";
            break;
        case "Tularemia":
            $sql = "SELECT * FROM iidts_prod.disease_tularemia_age_gender_t limit 19;";
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