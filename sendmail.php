<?php
$to = 'testmail@mail.com';

// from 
$myFurniture = array( 
	// step1
	'type' => $_GET['type'],
	// step2
	'dimensions' => trim($_GET['flength']) ."in x ". trim($_GET['fheight']) ."in",
	// step3
	'material' => $_GET['material'],
	// step4
	'name' => $_GET['name'],
	'address' => $_GET['address'],
	'email' => $_GET['email']
	);

// the message
$msg = "My Furniture Specs:" . "\n\n" .
		"Name: " . $myFurniture['name'] . "\n" .
		"Address: " . $myFurniture['address'] . "\n" .
		"Email: " . $myFurniture['email'] . "\n" .

		"Furniture Type: " . $myFurniture['type'] . "\n" .
		"Dimensions: " . $myFurniture['dimensions'] . "\n" .
		"Material: " . $myFurniture['material'] . "\n";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
$status = mail($to,"My Furniture",$msg);

if($status == 1){
	echo '<h1>Mail Sent</h1>';
}else{
	echo '<h1>Email not sent</h1>';
}

	
?>
