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
		<title>Wellness Java WebApp | Step 4</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>
	</head>
	<body style="background-image: none;" class="pb	pb--big" data-page="step-4">
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
				<div style="background-image: url(img/head-img-3.jpg)" class="o-section-head__image"></div>
				<div class="o-section-head__block-title m-block-title">
					<div class="m-block-title__icon-title a-icon-title js-icon-title">
						<div class="a-icon-title__circles">
							<div class="a-icon-title__circle a-icon-title__circle--back js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--middle js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--front"></div>
						</div>
						<div class="a-icon-title__content">
							<svg class="a-icon a-icon-title__icon">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-veggies"></use>
							</svg>
						</div>
					</div>
					<div class="m-block-title__text">veggies</div>
				</div>
			</div>
			<div class="o-section-step">
				<div class="o-section-parallax js-section-parallax">
					<img src="img/parallax-img-6.png" class="o-section-parallax__item o-section-parallax__item--image-6 js-parallax-style-1" style="transform: matrix(1, 0, 0, 1, 14.675, 0.6);">
					<img src="img/parallax-img-5.png" class="o-section-parallax__item o-section-parallax__item--image-5 js-parallax-style-2" style="transform: matrix(1, 0, 0, 1, 5.87, 0.8);">
				</div>
				<div class="container">
					<div class="o-section-step__form">
						<div data-href="/6" class="m-form-checkboxes js-form-checkboxes dietMove
							js-on-products-number" data-pixel-event="Products">
							<div class="m-form-checkboxes__info hl">PLEASE SELECT WHICH VEGGIES YOU WOULD LIKE TO BE INCLUDED</div>
							<div class="m-form-checkboxes__items row">
								<form action="step5.jsp" method="post" name="form4" id="form4">
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1931" name="veggies[]" value="broccoli" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="868.1931" data-pixel-event="Products" data-pixel-key="broccoli" data-value="1">
											<label for="product1931" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-broccoli"></use>
													</svg>
													<div class="a-checkbox-button__text">broccoli</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1930" name="veggies[]" value="mushrooms" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="868.1930" data-pixel-event="Products" data-pixel-key="mushrooms" data-value="1">
											<label for="product1930" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-mushrooms"></use>
													</svg>
													<div class="a-checkbox-button__text">mushrooms</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1929" name="veggies[]" value="zucchini" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="868.1929" data-pixel-event="Products" data-pixel-key="zucchini" data-value="1">
											<label for="product1929" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-zucchini"></use>
													</svg>
													<div class="a-checkbox-button__text">zucchini</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1928" name="veggies[]" value="cauliflower" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="868.1928" data-pixel-event="Products" data-pixel-key="cauliflower" data-value="1">
											<label for="product1928" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-cauliflower"></use>
													</svg>
													<div class="a-checkbox-button__text">cauliflower</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1927" name="veggies[]" value="asparagus" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="868.1927" data-pixel-event="Products" data-pixel-key="asparagus" data-value="1">
											<label for="product1927" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-aspargus"></use>
													</svg>
													<div class="a-checkbox-button__text">asparagus</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1926" name="veggies[]" value="avocado" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="868.1926" data-pixel-event="Products" data-pixel-key="avocado" data-value="1">
											<label for="product1926" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-avocado"></use>
													</svg>
													<div class="a-checkbox-button__text">avocado</div>
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
							<div data-modal="2" class="o-modal js-modal products-modal">
								<div class="o-modal__wrapper">
									<div class="o-modal__content js-modal-content">
										<div style="background-image: url('img/icon-progress-mask.svg')" class="o-modal-step">
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
											<div class="o-modal-step__text">
												<div id="warningModalIsEnabled" class="hidden">1</div>
												<div class="modal-content">
													<p id="nothing-select">You haven't select any product. Please select few products in order to get a complete
														and diversified meal plan. If you don't want to select any product please continue.
													</p>
												</div>
												<div class="align-button-bottom-left m-form-checkboxes__button a-button--with-gradient a-button--big
													a-button--with-icon a-button--bordered a-button js-modal-close">
													<button id="select-more" type="submit" class="a-button__link">
														<div class="a-button__text">Select more</div>
													</button>
												</div>
												<div class="align-button-bottom-right m-form-checkboxes__button a-button--with-gradient
													a-button--big a-button--with-icon a-button--bordered a-button">
													<button id="continue" type="submit" class="a-button__link">
														<div class="a-button__text">Continue</div>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="o-section-step__progress-bar">
					<div data-step="4" class="m-progress-bar js-progress-bar
						">
						<div style="background-image: url('img/icon-progress-bar.svg')" class="m-progress-bar__percentage">
							<div class="m-progress-bar__percent"><span class="js-progress-percent">37</span><span>%</span></div>
							<div class="m-progress-bar__percent-text"></div>
						</div>
						<div class="m-progress-bar__content">
							<div class="m-progress-bar__button a-button--with-icon a-button--icon-first a-button--bordered a-button">
								<a href="step3.jsp" class="a-button__link">
									<div class="a-button__text">Back</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-back"></use>
									</svg>
								</a>
							</div>
							<div class="m-progress-bar__indicator">
								<div class="m-progress-bar__indicator-inner">
									<div class="m-progress-bar__line">
										<div class="m-progress-bar__line-inner js-progress-line" style="width: 261px;"></div>
									</div>
									<div class="m-progress-bar__dots js-progress-dots cursor-pointer">
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>Gender</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>physical activity</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap;">
											<span>Meat</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--active" style="white-space: nowrap;">
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
						<div style="background-image: url('img/icon-progress-mask.svg')" class="o-modal-step">
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
							<div class="o-modal-step__text">The vegetables you have designated as "INCLUDE" may also be included, so that your diet is well-balanced. To completely exclude a product, click on the "EXCLUDE" column.</div>
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
			    window.loadScript('js/fingerprint2.min.js', function () {
			
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
