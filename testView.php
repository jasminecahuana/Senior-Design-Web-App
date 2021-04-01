<?php 
    Include 'db_connection.php';
    $con = OpenCon();

    $sql = "SELECT * FROM iidts_prod.disease_hepatitis_a_age_t Limit 7;";
    
    $result = mysqli_query($con, $sql);
    while($row = mysqli_fetch_assoc($result)) {
        echo $row;
    }
    
    mysqli_close($con);

?>