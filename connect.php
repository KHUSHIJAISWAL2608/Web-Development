<?php
$servername="localhost";
$username="root";
$password="";
$dbname="assignment";

$conn = mysqli_connect($servername,$username,$password,$dbname);
if($conn)
{
    echo "";
}
    else{
        echo "Connection Failed ".mysqli_connect_error();
    }
?>