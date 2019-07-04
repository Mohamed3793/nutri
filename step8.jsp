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
		<title>Wellness Java WebApp | Step 8</title>
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
			<div class="o-section-head">
				<div style="background-image: url(img/head-img-7.jpg)" class="o-section-head__image"></div>
				<div class="o-section-head__block-title m-block-title">
					<div class="m-block-title__icon-title a-icon-title js-icon-title">
						<div class="a-icon-title__circles">
							<div class="a-icon-title__circle a-icon-title__circle--back js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--middle js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--front"></div>
						</div>
						<div class="a-icon-title__content">
							<svg class="a-icon a-icon-title__icon">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-measurments"></use>
							</svg>
						</div>
					</div>
					<div class="m-block-title__text">MEASUREMENTS</div>
				</div>
			</div>
			<div class="o-section-step">
				<div class="o-section-parallax js-section-parallax">
					<img src="img/parallax-img-12.png" class="o-section-parallax__item o-section-parallax__item--image-18 js-parallax-style-1" style="transform: matrix(1, 0, 0, 1, 9.425, -37.9);">
					<img src="img/parallax-img-13.png" class="o-section-parallax__item o-section-parallax__item--image-17 js-parallax-style-2" style="transform: matrix(1, 0, 0, 1, 3.77, -50.5333);">
				</div>
				<div class="container">
					<div class="o-section-step__form">
						<form action="step9.jsp" id="metric-form" class="m-form-measurments js-measurments-form dietMove measurements" data-pixel-event="User Profile" method="post" novalidate="novalidate">
							<div class="custom-tabs-2 m-radio-group m-radio-group__radio uppercase">
								<a href="#tab-content-2" data-measurements="imperial" class="js-custom-tab measurements-tab-size">
								<span>imperial</span>
								</a>
								<a href="#tab-content-1" data-measurements="metric" class="js-custom-tab measurements-tab-size custom-tabs__tab--active">
								<span>metric</span>
								</a>
							</div>
							<div class="m-form-measurments__content">
								<div id="tab-content-1" class="row" style="">
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" pattern="[0-9]*" placeholder="Age" name="mage" class="a-input__input js-input" data-key="864.708" data-measuring_in="age" data-measurement="metric" min="14" max="99" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Age</label>
											<div class="a-input__unit">age</div>
											<img src="img/measurments-1-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-1-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-1-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-1-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" pattern="[0-9]*" placeholder="Height (CM)" name="mheight" class="a-input__input js-input" data-key="864.709" data-measuring_in="cm" data-measurement="metric" min="135" max="255" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Height (CM)</label>
											<div class="a-input__unit">cm</div>
											<img src="img/measurments-2-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-2-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-2-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-2-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" pattern="[0-9]*" placeholder="Weight (KG)" name="mweight" class="a-input__input js-input" data-key="864.710" data-measuring_in="kg" data-measurement="metric" min="40" max="180" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Weight (KG)</label>
											<div class="a-input__unit">kg</div>
											<img src="img/measurments-3-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-3-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-3-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-3-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" pattern="[0-9]*" placeholder="Target weight (KG)" name="mweight_target" class="a-input__input js-input" data-key="864.711" data-measuring_in="kg" data-measurement="metric" min="40" max="180" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Target weight (KG)</label>
											<div class="a-input__unit">kg</div>
											<img src="img/measurments-4-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-4-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-4-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-4-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
								</div>
								<div id="tab-content-2" class="row hidden" style="display: none;">
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" inputmode="numeric" pattern="[0-9]*" placeholder="Age" name="iage" class="a-input__input js-input" data-key="864.707" data-measuring_in="age" data-measurement="imperial" min="14" max="99" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Age</label>
											<div class="a-input__unit">age</div>
											<img src="img/measurments-1-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-1-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-1-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-1-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
									<div class="field-row  col-xs-6 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" inputmode="numeric" pattern="[0-9]*" placeholder="ft" name="iheightft" class="a-input__input js-input" data-key="864.706" data-measuring_in="ft" data-measurement="imperial" min="4" max="8" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">ft</label>
											<div class="a-input__unit">ft</div>
											<img src="img/measurments-2-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-2-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-2-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-2-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
									<div class="field-row  col-xs-6 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" inputmode="numeric" pattern="[0-9]*" placeholder="inch" name="iheight_inch" class="a-input__input js-input" data-key="864.705" data-measuring_in="inch" data-measurement="imperial" min="0" max="11">
											<span class="a-input__bar"></span>
											<label class="a-input__label">inch</label>
											<div class="a-input__unit">inch</div>
											<img src="img/measurments-2-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-2-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-2-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-2-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" inputmode="numeric" pattern="[0-9]*" placeholder="Weight (lb)" name="iweight_lb" class="a-input__input js-input" data-key="864.704" data-measuring_in="lb" data-measurement="imperial" min="90" max="400" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Weight (lb)</label>
											<div class="a-input__unit">lb</div>
											<img src="img/measurments-3-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-3-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-3-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-3-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
									<div class="field-row  col-xs-12 ">
										<div class="a-input--centered a-input--opacity-label a-input">
											<input type="number" inputmode="numeric" pattern="[0-9]*" placeholder="Target weight (lb)" name="iweight_target_lb" class="a-input__input js-input" data-key="864.703" data-measuring_in="lb" data-measurement="imperial" min="90" max="400" required="">
											<span class="a-input__bar"></span>
											<label class="a-input__label">Target weight (lb)</label>
											<div class="a-input__unit">lb</div>
											<img src="img/measurments-4-1.svg" class="a-icon a-input__icon a-input__icon--base">
											<img src="img/measurments-4-2.svg" class="a-icon a-input__icon a-input__icon--focused">
											<img src="img/measurments-4-3.svg" class="a-icon a-input__icon a-input__icon--wrong">
											<img data-src="img/measurments-4-4.svg" class="a-icon a-input__icon a-input__icon--good">
										</div>
									</div>
								</div>
							</div>
							<div class="m-form-measurments__button a-button--with-gradient a-button--big a-button--with-icon a-button--bordered a-button">
								<button type="submit" class="a-button__link" form="metric-form">
									<div class="a-button__text">Continue</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-next"></use>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
				<div class="o-section-step__progress-bar">
					<div data-step="8" class="m-progress-bar js-progress-bar
						">
						<div style="background-image: url('https://assets.appsforfit.com/assets/img/svg/progress-percentage-bg.svg')" class="m-progress-bar__percentage">
							<div class="m-progress-bar__percent"><span class="js-progress-percent">87</span><span>%</span></div>
							<div class="m-progress-bar__percent-text"></div>
						</div>
						<div class="m-progress-bar__content">
							<div class="m-progress-bar__button a-button--with-icon a-button--icon-first a-button--bordered a-button">
								<a href="step7.jsp" class="a-button__link">
									<div class="a-button__text">Back</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-back"></use>
									</svg>
								</a>
							</div>
							<div class="m-progress-bar__indicator">
								<div class="m-progress-bar__indicator-inner">
									<div class="m-progress-bar__line">
										<div class="m-progress-bar__line-inner js-progress-line" style="width: 596px;"></div>
									</div>
									<div class="m-progress-bar__dots js-progress-dots cursor-pointer">
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>Gender</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>physical activity</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>Meat</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>veggies</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>products</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>everyday</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap;">
											<span>bad habits</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--active" style="white-space: nowrap;">
											<span>Measurements</span>
										</div>
									</div>
								</div>
							</div>
							<div class="m-progress-bar__button a-button--with-icon a-button--bordered a-button" data-modal-trigger="1">
								<a href="#" class="a-button__link">
									<div class="a-button__text">Help</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-help"></use>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div data-modal="1" class="o-modal js-modal ">
				<div class="o-modal__wrapper">
					<div class="o-modal__content js-modal-content">
						<div style="background-image: url('https://assets.appsforfit.com/assets/img/svg/progress-modal-mask.svg')" class="o-modal-step">
							<a href="#" class="o-modal-step__button-close js-modal-close a-button-close">
								<div class="a-button-close__hover"></div>
								<svg class="a-icon a-button-close__icon">
									<use xlink:href="img/sprite.svg#icon-close"></use>
								</svg>
							</a>
							<div class="o-modal-step__icon-circle a-icon-circle">
								<svg class="a-icon a-icon-circle__icon">
									<use xlink:href="img/sprite.svg#icon-help"></use>
								</svg>
							</div>
							<div class="o-modal-step__text">This meal program is individual and takes your body measurements into consideration.</div>
						</div>
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
