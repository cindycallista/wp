<?php

$firstname = $_POST["rfn"];
$lastname = $_POST["rln"];
$phone = $_POST["rnumber"];
$bday = date('Y-m-d', strtotime($_POST["rbday"]));
$gender = $_POST["rgender"];
$address = $_POST["raddress"];
$country = $_POST["rcountry"];
$postcode = $_POST["rcode"];
$email = $_POST["remail"];
$password = $_POST["rpassword"];

$conn = new mysqli('localhost', 'root', '', 'loginform');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO register (firstname, lastname, phone, bday, gender, address, country, postcode, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssissssiss", $firstname, $lastname, $phone, $bday, $gender, $address, $country, $postcode, $email, $password);
    if ($stmt->execute()) {
        echo "Account created";
    } else {
        echo "Error: " . $stmt->error;
    }
}


?>