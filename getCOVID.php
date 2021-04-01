
<?php 
    Include 'db_connection.php';
    $con = OpenCon();

    $sql = "SELECT state, covid_19_deaths FROM iidts_prod.disease_covid19_cdc_api_t where age_group='All Ages' and sex='All Sexes' and data_as_of='2021-03-10' LIMIT 54;";
    
    $result = mysqli_query($con, $sql);
    echo '<table ref={tableRef}>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>';
    while($row = mysqli_fetch_assoc($result)) {
        
        echo "<tr><td>". $row["state"]. "</td><td>" . $row["covid_19_deaths"]."</tr></td>";
    }
    echo '</tbody>
    </table>
    ';
    mysqli_close($con);

?>