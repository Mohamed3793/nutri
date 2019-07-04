<!DOCTYPE html>

<%@ include file="includes/connection.jsp" %>

<%

if(session.getAttribute("accessLevel") == "0"){
		redirectURL = "index.jsp";
		response.sendRedirect(redirectURL);
}

%>

<html>
	<head>
		<title>Wellness Java WebApp | Step 1</title>
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
							<a href="#">
								<a href="processLogout.jsp"><img src="img/icon-logout.svg" width="120"></a>
								<div class="m-online-bar__text text-center domain-ssl" style="margin-left: 0;">
									<%= session.getAttribute("userName") %>
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
					<div class="o-section-home__select-gender m-select-gender js-select-gender">
						<form action="step2.jsp" method="post" name="male_form">
							<div class="m-select-gender__button-gender js-select-gender-button a-button-gender--man a-button-gender js-button-gender bodyClass dietAnswer">
								<div class="a-button-gender__background">
									<div class="a-button-gender__circle a-button-gender__circle--1 js-button-circle" style="opacity: 0.297241; transform: translate3d(0px, 0px, 0px) scale(0.999448, 0.999448);"></div>
									<div class="a-button-gender__circle a-button-gender__circle--2 js-button-circle" style="opacity: 0.0851445; transform: translate3d(0px, 0px, 0px) scale(0.985144, 0.985144);"></div>
								</div>
								<div class="a-button-gender__content" onclick="document.forms['male_form'].submit();">
									<div class="a-button-gender__circle a-button-gender__circle--3 js-button-circle-main" style="opacity: 0.9;"></div>
									
									<svg class="a-icon a-button-gender__icon">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-man"></use>
									</svg>
									<div class="a-button-gender__text">Male</div>
								</div>
							</div>
							<input type="hidden" name="gender" value="11">
						</form>
						<div class="m-select-gender__text">or</div>
						<form action="step2.jsp" method="post" name="female_form">
							<div class="m-select-gender__button-gender js-select-gender-button  a-button-gender js-button-gender bodyClass dietAnswer" data-key="871" data-value="157" data-body-class-value="woman-theme" data-pixel-event="User Profile" data-pixel-key="female" data-pixel-value="1">
								<div class="a-button-gender__background">
									<div class="a-button-gender__circle a-button-gender__circle--1 js-button-circle" style="opacity: 0.112387; transform: translate3d(0px, 0px, 0px) scale(0.962477, 0.962477);"></div>
									<div class="a-button-gender__circle a-button-gender__circle--2 js-button-circle" style="opacity: 0.0501342; transform: translate3d(0px, 0px, 0px) scale(0.950134, 0.950134);"></div>
								</div>
								<div class="a-button-gender__content" onclick="document.forms['female_form'].submit();">
									<div class="a-button-gender__circle a-button-gender__circle--3 js-button-circle-main" style="opacity: 0.9;"></div>
									<svg class="a-icon a-button-gender__icon">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-woman"></use>
									</svg>
									<div class="a-button-gender__text">Female</div>
								</div>
							</div>
							<input type="hidden" name="gender" value="22">
						</form>
					</div>
				</div>
				<div data-step="1" class="m-progress-bar js-progress-bar
					o-section-home__progress-bar m-progress-bar--without-percentage">
					<div style="background-image: url('img/icon-progress-bar.svg')" class="m-progress-bar__percentage">
						<div class="m-progress-bar__percent"><span class="js-progress-percent">0</span><span>%</span></div>
						<div class="m-progress-bar__percent-text"></div>
					</div>
					<div class="m-progress-bar__content">
						<div class="m-progress-bar__indicator">
							<div class="m-progress-bar__indicator-inner">
								<div class="m-progress-bar__line">
									<div class="m-progress-bar__line-inner js-progress-line" style="width: 0px;"></div>
								</div>
								<div class="m-progress-bar__dots js-progress-dots cursor-pointer">
									<div class="m-progress-bar__dot m-progress-bar__dot--active" style="white-space: nowrap;">
										<span>Gender</span>
									</div>
									<div class="m-progress-bar__dot
										" style="white-space: nowrap;">
										<span>physical activity</span>
									</div>
									<div class="m-progress-bar__dot
										" style="white-space: nowrap;">
										<span>Meat</span>
									</div>
									<div class="m-progress-bar__dot
										" style="white-space: nowrap;">
										<span>veggies</span>
									</div>
									<div class="m-progress-bar__dot
										" style="white-space: nowrap;">
										<span>products</span>
									</div>
									<div class="m-progress-bar__dot
										" style="white-space: nowrap;">
										<span>everyday</span>
									</div>
									<div class="m-progress-bar__dot
										" style="white-space: nowrap;">
										<span>bad habits</span>
									</div>
									<div class="m-progress-bar__dot
										" style="white-space: nowrap;">
										<span>Measurements</span>
									</div>
								</div>
							</div>
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
