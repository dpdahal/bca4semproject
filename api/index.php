<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once "connection.php";


$server =$_SERVER['REQUEST_METHOD'];



function getUser(){
   if(!empty($_REQUEST['id'])){
    $id=$_REQUEST['id'];
    $sql = "SELECT * FROM users WHERE id = $id";
    $result = mysqli_query($GLOBALS['conn'], $sql);
    $user = mysqli_fetch_assoc($result);
    echo json_encode($user);
   }else{
    $sql = "SELECT * FROM users";
    $result = mysqli_query($GLOBALS['conn'], $sql);
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($users);
   }
}
if ($server == "GET"){
    getUser();
}else if($server == "POST"){
    $data = json_decode(file_get_contents('php://input'), true);
    $name =$data['name'];
    $email = $data['email'];
    $address = $data['address'];
    $sql = "INSERT INTO users (name, email, address) VALUES ('$name', '$email', '$address')";
    if (mysqli_query($conn, $sql)){
        echo "User added successfully";
    }else{
        echo "Error: data not added";
    }
}else if($server=="DELETE"){
    $id=$_REQUEST['id'];    
    $sql = "DELETE FROM users WHERE id = $id";
    if (mysqli_query($conn, $sql)){
        echo "User deleted successfully";
    }else{
        echo "Error: data not deleted";
    }
   
}else if($server=="PUT"){
    $myEntireBody = file_get_contents('php://input');
    $myBody = json_decode($myEntireBody);
    $id = $myBody->id;
    $name = $myBody->name;
    $address = $myBody->address;
    $sql="UPDATE users SET name='$name', address='$address' WHERE id=$id";
    if (mysqli_query($conn, $sql)){
        echo "User updated successfully";
    }else{
        echo "Error: data not updated";
    }

}else{
    echo "Invalid request";
}


