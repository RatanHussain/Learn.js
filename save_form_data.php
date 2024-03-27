<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $gender = $_POST["gender"];
    $terms = isset($_POST["terms"]) ? "Accepted" : "Not Accepted";
    $department = $_POST["dep"];

    $data = "Name: $name\nEmail: $email\nGender: $gender\nTerms: $terms\nDepartment: $department\n\n";

    // Specify the path to your data folder and the file where you want to save the data
    $file = __DIR__ . "/form_data.txt";

    // Append the data to the file
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    // Redirect to a thank you page or wherever you want after saving the data
    header("Location: thank_you_page.html");
    exit();
}
?>