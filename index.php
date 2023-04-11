
<?php
include("connect.php");
error_reporting(0);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ALLEN INSTITUTE</title>
</head>
<link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
 

<body>
    <header class="header">
        <!-- Left box for logo -->
        <div class="left">
            <img src="images.png" alt="">
            <div>Allen Institute</div>
        </div>
        <!-- Mid box for navbar -->
        <div class="mid">
            <ul class="navbar">
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        <!-- Right box for buttons -->
        <div class="right">
            <button class="btn">Call Us Now</button>
            <button class="btn">Email Us</button>
        </div>
    </header>
    <div class="container">
        <h1>Join the best Institute of Delhi now</h1>
        <form action="connect.php" method="post">
            <div class="form-group">
                <input type="text"  placeholder="Enter your Name" name="fname" required>
            </div>
            <div class="form-group">
                <input type="text"  placeholder="Enter your Age" name="age" required>
            </div>
            <div class="form-group">
                <input type="text" placeholder="Enter your Course" name="course" required>
            </div>
            <div class="form-group">
                <input type="text" placeholder="Enter your Locality" name="locality" required>
            </div>
            <div class="form-group">
                <input type="text"  placeholder="Enter your Email Id" name="emailid" required  >
            </div>
            <div class="form-group">
                <input type="text"  placeholder="Enter your Phone Number" name="number" required>
            </div>
            
            <button class="btn">Submit</button>
            </div>
            <!-- <button class="btn" >Submit </button> -->
        </form>
    </div>
</body>

</html>

<?php
if ($_POST['submit']){
    $fname= $_POST['fname'];
    $age= $_POST['age'];
    $cor= $_POST['course'];
    $loc= $_POST['locality'];
    $eid= $_POST['email'];
    $ph= $_POST['phone'];
    $query="INSERT INTO STUDENTDETAILS values ('$fnam','$age','$cor','$loc','$eid','$ph')";
    $data=mysqli_query($conn,$query);
    if ($data)
{
echo "";
}
else{
    echo " failed data inserted into databases";
}
}







// $nam=$_GET['fname'];
// $ag=$_GET['age'];
// $gen=$_GET['gender'];
// $loc=$_GET['locality'];
// $eid=$_GET['emailid'];
// $num=$_GET['number'];


// // echo "nam";


// $query="INSERT INTO STUDENTS values ('$nam','$ag','$gen','$loc','$eid','$num')";
// $data= mysqli_query($conn,$query);
// if ($data)
// {
// echo "data inserted into databases";
// }
// else{
//     echo " failed data inserted into databases";
// }
?>