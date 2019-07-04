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
		<title>Wellness Java WebApp | Login</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>
	</head>
	<body style="background-image: none;" class="pb	pb--big" data-page="step-10">
		<div class="o-header">
			<div class="container">
				<div class="o-header__content">
					<div class="o-header__left">
						<a href="index.jsp" class="o-header__logo a-logo">							
							<img src="img/logo.png" style="width: 50%;">
						</a>
					</div>
					
				</div>
			</div>
		</div>
		<div class="main-content">
			<div class="o-section-head">
				<div style="background-image: url(img/bg.jpg)" class="o-section-head__image"></div>
				<div class="m-block-title__text" style="z-index: 100;">Login Area</div>				
			</div>
			<div class="o-section-step">				
				<div class="container">
					<div class="o-section-step__form">
						<form action="processLogin.jsp" id="login-form" class="m-form-measurments js-measurments-form dietMove measurements" data-pixel-event="User Profile" method="post" novalidate="novalidate">
							<div class="custom-tabs-2 m-radio-group m-radio-group__radio uppercase">
								<div class="js-custom-tab measurements-tab-size">
								<span>Enter Login Info</span>
								</div>
								<span><%= session.getAttribute("status") %></span>
								<% session.setAttribute("status",""); %>
							</div>
							<div class="m-form-measurments__content">
								<div id="tab-content-1" class="row" style="">									
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="email" placeholder="Email" name="email" class="a-input__input js-input" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Email Address</label>
											<div class="a-input__unit">email</div>
										</div>
									</div>
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="password" pattern="[0-9]*" placeholder="Password" name="pass" class="a-input__input js-input" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Password</label>
											<div class="a-input__unit">code</div>
										</div>
									</div>									
								</div>								
							</div>
							<div class="m-form-measurments__button a-button--with-gradient a-button--big a-button--with-icon a-button--bordered a-button">
								<button type="submit" class="a-button__link" form="login-form">
									<div class="a-button__text">Login</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-next"></use>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<svg visibility="inherit" class="mask" height="0" width="100%">
			<defs>
				<clipPath id="svgPath">
					<path d="M1,0v215.8c0,0,177.8,121.3,576.2,129.1c398.4,7.8,768.6-169.6,1118.1-145.2s380.3,145.4,850.6,145.3V0H1z" id="path-1"></path>
				</clipPath>
			</defs>
		</svg>
		<svg visibility="inherit" class="mask" height="0" width="100%">
			<defs>
				<clipPath id="svgPathMobile">
					<path d="M1,140.210938 C87.3398438,196.308594 203.36159,186.937145 316.909461,134.355438 C354.078821,117.143064 388.761324,103.80857 421.425775,94.6731585 C421.111328,37.453125 421,0 421,0 L1,0 C1,0 0.607755223,86.3177211 1,140.210938 Z" id="path-1"></path>
				</clipPath>
			</defs>
		</svg>
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
