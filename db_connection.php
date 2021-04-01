<?php
    function OpenCon(){

        $con=mysqli_init(); mysqli_ssl_set($con, NULL, NULL, NULL, NULL, NULL); mysqli_real_connect($con, "iidts-prod.mysql.database.azure.com", "iidts_admin@iidts-prod", "diseasetracker_2021!", "iidts_prod", 3306);

        if (!$con) {
            die("Connection failed: " . mysqli_connect_error());
            echo 'Not connected';
        }
        return $con;
    }

    function CloseCon($con){
        $con->close();
    } 
?>