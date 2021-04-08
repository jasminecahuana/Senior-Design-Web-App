<?php 
    Include 'db_connection.php';
    $con = OpenCon();
    $q = $_REQUEST["dataset"];

    // Most of these SQL statements are state data, however, if there wasnt state data then resorted to race.ethincity data OR if the disease only had 1 feature then it should be in this file already
    // Some of the data from specific diseases were omitted as it didn't fit on the table 
    switch($q){
        case "Congenital Syphilis":
            $sql = "SELECT * FROM iidts_prod.disease_congen_syphilis_infantvitals_t limit 4;";
            break;
        case "Cryptosporidiosis":
            $sql = "SELECT * FROM iidts_prod.disease_cryptosporidiosis_age_t limit 19;";
            break;
        case "Gonorrhea":
            $sql = "SELECT * FROM iidts_prod.disease_gonorrhea_age_t limit 14;";
            break;
        case "Hepatitis A":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_age_t limit 7;";
            break;
        case "Hepatitis B":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_b_age_t limit 6;";
            break;
        case "Hepatitis C":
            $sql = "SELECT * FROM iidts_prod.disease_hepatitis_c_age_t limit 6;";
            break;
        case "Legionellosis":
            $sql = "SELECT * FROM iidts_prod.disease_legionellosis_age_t limit 11;";
            break;
        case "Lyme Disease":
            $sql = "SELECT * FROM iidts_prod.disease_lyme_age_gender_t limit 19;";
            break;
        case "Spotted Fever":
            $sql = "SELECT * FROM iidts_prod.disease_spotted_fever_rickettsiosis_age_t limit 15;";
            break;
        case "Syphilis":
            $sql = "SELECT * FROM iidts_prod.disease_syphilis_age_t limit 13;";
            break;
        case "Tuberculosis":
            $sql = "SELECT * FROM iidts_prod.disease_tuberculosis_age_gender_t limit 7;";
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