<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>the Fronion - Error</title>
<link href="styles-fronion.css" rel="stylesheet" type="text/css">
<link href="styles-form.css" rel="stylesheet" type="text/css">
</head>

<body>
<div id="contentWrapper">
  <div id="header"><img src="img/fronion-logo-top.png" width="309" height="82"></div>
  <div id="mainContent">
    <h1>Please fix the following errors:</h1>
<ul>
	  <?php 
        foreach($errors as $value) {
            echo '<li>';
			echo $value;
            echo '</li>';
        }
      ?>
  	</ul>
    <p>&nbsp;</p>
    <p><a href="enews.html"></a></p>
<p>&nbsp;</p>
  </div>
  <div id="sidebar">
    <h1>Sign Up For Our Enews!</h1>
    <p>Each month we will send a witty newsletter to your inbox telling you the latest Fronion news!</p>
    <p>You Email is completely confidential and will never be shared with anyone. Ever. Remember you can unsubscribe anytime you want, but we guarantee that the newsletter is so great you'll never want to.</p>
    <p>Thanks!</p>
  </div>
  <div id="footer">Copyright The Fronion - All Rights Reserved
    <div id="footerLeftCorner"></div>
    <div id="footerRightCorner"></div>
  </div>
</div>
</body>
</html>