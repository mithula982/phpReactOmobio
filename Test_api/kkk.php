
<?php

include 'connection.php';
$con = mysqli_connect('localhost', 'root', '', 'exam');

if(mysqli_connect_error()){
    die('Database connection faild' . mysqli_connect_error());
} else {
    //echo "Connection successful.";
}

 
 $json = file_get_contents('php://input');
 
 $obj = json_decode($json,true);
$email = $obj['email'];

$password = $obj['password'];

$Sql_Query = "select * from user where email = '$email' and password = '$password'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
 
 
if(isset($check)){
 
 $SuccessLoginMsg = 'Data Matched';
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 
 
 }
 
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>