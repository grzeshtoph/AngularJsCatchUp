<!DOCTYPE html>

<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Welcome Page</title>
		<link href="../../css/bootstrap.min.css" rel="stylesheet">
		<script src="../../js/angular.min.js"></script>
		<script src="../../js/jquery-2.2.2.min.js"></script>
		<script src="../../js/bootstrap.min.js"></script>
		<script src="../../js/app/app.js"></script>
		<script src="../../js/app/welcomeController.js"></script>
	</head>

	<body ng-app="AngularJsCatchUp" ng-controller="WelcomeCtrl">
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">AngularJs Catch Up</a>
				</div>
			</div>
		</nav>

		<div class="jumbotron">
			<div class="container">
				<h1>${message}</h1>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					{{name}}
				</div>
			</div>
		</div>
	</body>

</html>
