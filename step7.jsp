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
		<title>Wellness Java WebApp | Step 7</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>
	</head>
	<body style="background-image: none;" class="pb	pb--big" data-page="step-8">
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
				<div style="background-image: url(img/head-img-6.jpg)" class="o-section-head__image"></div>
				<div class="o-section-head__block-title m-block-title">
					<div class="m-block-title__icon-title a-icon-title js-icon-title">
						<div class="a-icon-title__circles">
							<div class="a-icon-title__circle a-icon-title__circle--back js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--middle js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--front"></div>
						</div>
						<div class="a-icon-title__content">
							<svg class="a-icon a-icon-title__icon">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-true"></use>
							</svg>
						</div>
					</div>
					<div class="m-block-title__text">WHICH OF THE FOLLOWING IS TRUE FOR YOU</div>
				</div>
			</div>
			<div class="o-section-step">
				<div class="o-section-parallax js-section-parallax">
					<img src="img/parallax-img-12.png" class="o-section-parallax__item o-section-parallax__item--image-14 js-parallax-style-1" style="transform: matrix(1, 0, 0, 1, 5.375, -8.6);">
					<img src="img/parallax-img-11.png" class="o-section-parallax__item o-section-parallax__item--image-13 js-parallax-style-2" style="transform: matrix(1, 0, 0, 1, 2.15, -11.4667);">
				</div>
				<div class="container">
					<div class="o-section-step__form">
						<div data-href="/10" class="m-form-checkboxes--list m-form-checkboxes js-form-checkboxes dietMove" data-pixel-event="User Profile">
							<div class="m-form-checkboxes__info hl">It is possible to select multiple answers:</div>
							<div class="m-form-checkboxes__items row">
								<form action="step8.jsp" method="post" name="form4" id="form4">
									<div class="col-xs-12">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button--without-icon a-checkbox-button">
											<input type="checkbox" id="checkbox-395" name="true[]" data-key="865.395" class="a-checkbox-button__input" data-pixel-event="User Profile" data-pixel-key="habit-1" value="ENOUGH_SlEEP">
											<label for="checkbox-395" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit">
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-check-chk"></use>
														</svg>
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-close-chk"></use>
														</svg>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<div class="a-checkbox-button__text">I DO NOT GET ENOUGH SLEEP</div>
												</div>
											</label>
										</div>
									</div>
									<div class="col-xs-12">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button--without-icon a-checkbox-button">
											<input type="checkbox" id="checkbox-394" name="true[]" data-key="865.394" class="a-checkbox-button__input" data-pixel-event="User Profile" data-pixel-key="habit-2" value="late_night">
											<label for="checkbox-394" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit">
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-check-chk"></use>
														</svg>
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-close-chk"></use>
														</svg>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<div class="a-checkbox-button__text">I EAT LATE AT NIGHT</div>
												</div>
											</label>
										</div>
									</div>
									<div class="col-xs-12">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button--without-icon a-checkbox-button">
											<input type="checkbox" id="checkbox-393" name="true[]" data-key="865.393" class="a-checkbox-button__input" data-pixel-event="User Profile" data-pixel-key="habit-3" value="SALT">
											<label for="checkbox-393" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit">
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-check-chk"></use>
														</svg>
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-close-chk"></use>
														</svg>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<div class="a-checkbox-button__text">I CONSUME A LOT OF SALT</div>
												</div>
											</label>
										</div>
									</div>
									<div class="col-xs-12">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button--without-icon a-checkbox-button">
											<input type="checkbox" id="checkbox-392" name="true[]" data-key="865.392" class="a-checkbox-button__input" data-pixel-event="User Profile" data-pixel-key="habit-4" value="SWEETS">
											<label for="checkbox-392" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit">
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-check-chk"></use>
														</svg>
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-close-chk"></use>
														</svg>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<div class="a-checkbox-button__text">I CANNOT GIVE UP EATING SWEETS</div>
												</div>
											</label>
										</div>
									</div>
									<div class="col-xs-12">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button--without-icon a-checkbox-button">
											<input type="checkbox" id="checkbox-391" name="true[]" data-key="865.391" class="a-checkbox-button__input" data-pixel-event="User Profile" data-pixel-key="habit-5" value="soft_drink">
											<label for="checkbox-391" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit">
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-check-chk"></use>
														</svg>
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-close-chk"></use>
														</svg>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<div class="a-checkbox-button__text">I LOVE SOFT DRINKS</div>
												</div>
											</label>
										</div>
									</div>
									<div class="col-xs-12 clearAll">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button--without-icon a-checkbox-button">
											<input type="checkbox" checked="" id="checkbox-6" name="true[]" data-key="865.0" value="none" class="a-checkbox-button__input" data-pixel-event="User Profile" data-pixel-key="no-habits">
											<label for="checkbox-6" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit">
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-check-chk"></use>
														</svg>
														<svg class="a-icon a-checkbox-button__unit-icon">
															<use xlink:href="img/sprite.svg#icon-close-chk"></use>
														</svg>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<div class="a-checkbox-button__text">None of the above</div>
												</div>
											</label>
										</div>
									</div>
								</form>
							</div>
							<div class="m-form-checkboxes__button a-button--with-gradient a-button--big a-button--with-icon a-button--bordered a-button">
								<button type="submit" class="a-button__link" form="form4">
									<div class="a-button__text">Continue</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-next"></use>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="o-section-step__progress-bar">
					<div data-step="7" class="m-progress-bar js-progress-bar
						">
						<div style="background-image: url('https://assets.appsforfit.com/assets/img/svg/progress-percentage-bg.svg')" class="m-progress-bar__percentage">
							<div class="m-progress-bar__percent"><span class="js-progress-percent">75</span><span>%</span></div>
							<div class="m-progress-bar__percent-text"></div>
						</div>
						<div class="m-progress-bar__content">
							<div class="m-progress-bar__button a-button--with-icon a-button--icon-first a-button--bordered a-button">
								<a href="step6.jsp" class="a-button__link">
									<div class="a-button__text">Back</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-back"></use>
									</svg>
								</a>
							</div>
							<div class="m-progress-bar__indicator">
								<div class="m-progress-bar__indicator-inner">
									<div class="m-progress-bar__line">
										<div class="m-progress-bar__line-inner js-progress-line" style="width: 513px;"></div>
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
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap;">
											<span>everyday</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--active" style="white-space: nowrap;">
											<span>bad habits</span>
										</div>
										<div class="m-progress-bar__dot
											" style="white-space: nowrap;">
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
							<div class="o-modal-step__text">To be sure you'll achieve your goal, it is necessary to take your harmful habits into consideration. This should help you follow your diet.</div>
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
