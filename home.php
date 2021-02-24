<?php
  // To make sure we don't need to create the header section of the website on multiple pages, we instead create the header HTML markup in a separate file which we then attach to the top of every HTML page on our website. 
  // In this way if we need to make a small change to our header we just need to do it in one place. This is a VERY cool feature in PHP!
  require "header.php";
  require "navbar.php";
?>
<script src="includes/clock.inc.js" defer></script>

<div class="pagewrapper">
	<div class="contentarea">
		
		<div class="clock-box">
			<div class="clock">HH : MM : SS</div>
			<div class="date">DD - MM - YYYY</div>
		</div>
		
	</div>
</div>
<?php
  require "footer.php";
?>