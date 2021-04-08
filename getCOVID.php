<?php 
    Include 'db_connection.php';
    $con = OpenCon();
    $q = $_REQUEST["dataset"];

    if ($q == "COVID-19"){
        $sql = "SELECT state, covid_19_deaths FROM iidts_prod.disease_covid19_cdc_api_t where age_group='All Ages' and sex='All Sexes' and data_as_of='2021-03-10' LIMIT 54;";
            
    }else{
        echo("error");
    }
    switch($q){
        case "COVID-19":
            $sql = "SELECT state, covid_19_deaths FROM iidts_prod.disease_covid19_cdc_api_t where age_group='All Ages' and sex='All Sexes' and data_as_of='2021-03-10' LIMIT 54;";
            break;
        case "Anaplasmosis":
            $sql = "SELECT * FROM iidts_prod.disease_anaplasmosis_state_t limit 51;";
        default:
            echo("Error")
    }
    $result = mysqli_query($con, $sql);

    $rows = array();
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }

    echo json_encode($rows);
    mysqli_close($con);

?>