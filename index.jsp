<!DOCTYPE html>

<%@ include file="includes/connection.jsp" %>

<%

if(session.getAttribute("accessLevel") == "1"){
		redirectURL = "dashboard.jsp";
		response.sendRedirect(redirectURL);
}

%>

<html>
	<head>
		<title>Wellness Java WebApp | Home</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>				
	</head>
	<body style="background-image: none;" class="pb" data-page="start">
		<div class="o-header">
			<div class="container">
				<div class="o-header__content">
					<div class="o-header__left">
						<a href="index.jsp" class="o-header__logo a-logo">							
							<img src="img/logo.png" style="width: 50%;">
						</a>
					</div>
					<div class="o-header__right">
						<div class="o-header__online-bar m-online-bar" style="margin-top: 0;">
							<a href="login.jsp">
								<img src="img/icon-login.svg" height="54"`>
								
								<div class="m-online-bar__text text-center domain-ssl" style="margin-left: 0;">
									Login
								</div>
							</a>
							<a href="register.jsp">
								<svg class="a-icon a-logo__icon">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-user"></use>
								</svg>
								<div class="m-online-bar__text text-center domain-ssl" style="margin-left: 0;">
									Register
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>		
		<div class="main-content">
			<div style="background-image: url(img/head-img-1.jpg)" class="o-section-home section-first">
				<div class="container">

					<h3 class="o-section-home__text-title text-title-main text-center">WELLNESS IS YOUR PERSONAL DIET GUIDE</h3>
					<h2 class="o-section-home__text-title text-title-main a-text-title text-center">GET YOUR DIET PLAN NOW</h2>
					<div class="o-section-intro__block-jumbotron m-block-jumbotron text-center" style="padding: 15px;">
						<div class="m-block-jumbotron__button a-button--with-gradient a-button--gigant a-button--with-icon a-button">
							<a href="register.jsp" class="a-button__link" id="get-keto-diet">
							<span class="a-button__text">REGISTER</span>
							</a>
						</div>
					</div>	
				</div>
			</div>
		</div>		
		<script>
			if (window.getFingerprint().length === 0) {
			    window.loadScript('js/fingerprint.js', function () {
			
			        var options = {
			            excludes: {
			                userAgent: true,
			                language: true,
			                colorDepth: true,
			                timezone: true,
			                doNotTrack: true,
			                canvas: true,
			                webgl: true,
			                touchSupport: true,
			                enumerateDevices: true,
			                fonts: true,
			                plugins: true,
			                audio: true,
			            }
			        }
			
			        if (window.requestIdleCallback) {
			            requestIdleCallback(function () {
			                Fingerprint2.get(options, function (components) {
			                    window.setFingerprint(components);
			                });
			            });
			        } else {
			            setTimeout(function () {
			                Fingerprint2.get(options, function (components) {
			                    window.setFingerprint(components);
			                });
			            }, 500);
			        }
			    });
			}
		</script>
	</body>
</html>
