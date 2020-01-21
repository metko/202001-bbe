<?php
header("Access-Control-Allow-Origin: *");

if (isset($_POST['name']) &&
isset($_POST['object']) &&
isset($_POST['email']) &&
isset($_POST['message'])) {

  $to = 'thomas.moiluiavon@gmail.com';
    $subject = $_POST['object'];
    $from = $_POST['email'];
    
    // To send HTML mail, the Content-type header must be set
    $headers = 'MIME-Version: 1.0'."\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";

    // Create email headers
    $headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n".
    'X-Mailer: PHP/'.phpversion();

    // Compose a simple HTML email message
    $message = '<html><body>';
    $message .= '<h1>Un message en provenance de :<strong>'.$_POST['name'].'</strong></h1>';
    $message .= '<p>'.$_POST['message'].'</p>';
    $message .= '</body></html>';
       if (mail($to, $subject, $message, $headers)) {
          $response = [
           'statut' => 'success',
           'message' => 'Message bien envoyé',
        ];
        mail("lilocrea.reunion@gmail.com", $subject, $message, $headers);
        echo json_encode($response);

        exit();
      } else {
          $response = [
           'statut' => 'error',
           'message' => 'Une erreur est survenu, merci de réesayer ulterieureement'
        ];
        echo json_encode($response);

        exit();
      }   

    } else {
   
        $response = [
          'statut' => 'error',
          'message' => 'Error message'
        ];
        echo json_encode($response);
        exit();
        
    }


?>
