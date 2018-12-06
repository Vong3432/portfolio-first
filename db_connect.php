<?php
$conn = mysqli_connect("localhost","root","");

$db_selected = mysqli_select_db($conn,"company");
if(!$db_selected)
{
	$sql = "CREATE DATABASE company";    
	if ($conn->query($sql) === TRUE) {
		    echo "Database created successfully";
	} 
}

$sql = "CREATE TABLE branch_staff(
		staff_name VARCHAR(50) PRIMARY KEY,
		staff_password VARCHAR(50),
		staff_email VARCHAR(60)
)";

if ($conn ->query($sql) === TRUE)
{
	echo "Table created";
}

?>