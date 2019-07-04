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
		<title>Wellness Java WebApp | Step 3</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>
	</head>
	<body style="background-image: none;" class="pb	pb--big" data-page="step-3">
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
				<div style="background-image: url(img/head-img-2.jpg)" class="o-section-head__image"></div>
				<div class="o-section-head__block-title m-block-title">
					<div class="m-block-title__icon-title a-icon-title js-icon-title">
						<div class="a-icon-title__circles">
							<div class="a-icon-title__circle a-icon-title__circle--back js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--middle js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--front"></div>
						</div>
						<div class="a-icon-title__content">
							<svg class="a-icon a-icon-title__icon">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-meat"></use>
							</svg>
						</div>
					</div>
					<div class="m-block-title__text">meat</div>
				</div>
			</div>
			<div class="o-section-step">
				<div class="o-section-parallax js-section-parallax">
					<img src="img/parallax-img-4.png" class="o-section-parallax__item o-section-parallax__item--image-4 js-parallax-style-1" style="transform: translate3d(6.76025px, 10.7043px, 0px);">
					<img src="img/parallax-img-3.png" class="o-section-parallax__item o-section-parallax__item--image-3 js-parallax-style-2" style="transform: translate3d(2.7041px, 14.2724px, 0px);">
				</div>
				<div class="container">
					<div class="o-section-step__form">
						<div data-href="/4" class="m-form-checkboxes js-form-checkboxes dietMove
							js-on-products-number" data-pixel-event="Products">
							<div class="m-form-checkboxes__info hl">PLEASE SELECT WHICH MEAT YOU WOULD LIKE TO BE INCLUDED</div>
							<div class="m-form-checkboxes__items row">
								<form action="step4.jsp" method="post" name="form4">
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1936" name="meat[]" value="chicken" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="869.1936" data-pixel-event="Products" data-pixel-key="chicken" data-value="1">
											<label for="product1936" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-chicken"></use>
													</svg>
													<div class="a-checkbox-button__text">chicken</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1935" name="meat[]" value="pork" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="869.1935" data-pixel-event="Products" data-pixel-key="pork" data-value="1">
											<label for="product1935" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-pork"></use>
													</svg>
													<div class="a-checkbox-button__text">pork</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1934" name="meat[]" value="beef" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="869.1934" data-pixel-event="Products" data-pixel-key="beef" data-value="1">
											<label for="product1934" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-beef"></use>
													</svg>
													<div class="a-checkbox-button__text">beef</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1933" name="meat[]" value="fish" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="869.1933" data-pixel-event="Products" data-pixel-key="fish" data-value="1">
											<label for="product1933" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-fish"></use>
													</svg>
													<div class="a-checkbox-button__text">fish</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="product1932" name="meat[]" value="bacon" class="a-checkbox-button__input number-of-checked" type="checkbox" data-key="869.1932" data-pixel-event="Products" data-pixel-key="bacon" data-value="1">
											<label for="product1932" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-bacon"></use>
													</svg>
													<div class="a-checkbox-button__text">bacon</div>
												</div>
											</label>
										</div>
									</div>
									<div class="m-form-checkboxes__item col-xs-6 col-sm-4">
										<div class="m-form-checkboxes__checkbox-button a-checkbox-button">
											<input id="noMeat" name="meat[]" value="no_meat" class="a-checkbox-button__input" type="checkbox">
											<label for="noMeat" class="a-checkbox-button__label">
												<div class="a-checkbox-button__check">
													<div class="a-checkbox-button__unit"><span></span><span></span>
													</div>
												</div>
												<div class="a-checkbox-button__content">
													<svg class="a-icon a-checkbox-button__icon">
														<use xlink:href="img/sprite.svg#icon-no-meat"></use>
													</svg>
													<div class="a-checkbox-button__text">NO MEAT</div>
												</div>
											</label>
										</div>
									</div>
								</form>
							</div>
							<div class="m-form-checkboxes__button a-button--with-gradient a-button--big a-button--with-icon a-button--bordered a-button">
								<button type="submit" class="a-button__link" onclick="window.location.href='step4.jsp'">
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
					<div data-step="3" class="m-progress-bar js-progress-bar
						">
						<div style="background-image: url('img/icon-progress-bar.svg')" class="m-progress-bar__percentage">
							<div class="m-progress-bar__percent"><span class="js-progress-percent">25</span><span>%</span></div>
							<div class="m-progress-bar__percent-text"></div>
						</div>
						<div class="m-progress-bar__content">
							<div class="m-progress-bar__button a-button--with-icon a-button--icon-first a-button--bordered a-button">
								<a href="step2.jsp" class="a-button__link">
									<div class="a-button__text">Back</div>
									<svg class="a-icon a-button__icon">
										<use xlink:href="img/sprite.svg#icon-back"></use>
									</svg>
								</a>
							</div>
							<div class="m-progress-bar__indicator">
								<div class="m-progress-bar__indicator-inner">
									<div class="m-progress-bar__line">
										<div class="m-progress-bar__line-inner js-progress-line" style="width: 178px;"></div>
									</div>
									<div class="m-progress-bar__dots js-progress-dots cursor-pointer">
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap; transition: none 0s ease 0s;">
											<span>Gender</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--previous" style="white-space: nowrap;">
											<span>physical activity</span>
										</div>
										<div class="m-progress-bar__dot m-progress-bar__dot--active" style="white-space: nowrap;">
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
							<div class="o-modal-step__text">The products that you choose to be Excluded will not be found in your personalized meal plan. We recommend you to exclude only the food that you are allergic to, should not eat due to a medical condition or a dietary restriction, or foods that you absolutely hate. The more products you include, the more diverse and effective your diet will be.</div>
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
