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
		<title>Wellness Java WebApp | Step 9</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>
	</head>
	<body style="background-image: none;" data-page="steps-finish">
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
				<div style="background-image: url(img/head-img-8.jpg)" class="o-section-head__image"></div>
				<div class="o-section-head__block-title m-block-title">
					<div class="m-block-title__icon-title a-icon-title js-icon-title">
						<div class="a-icon-title__circles">
							<div class="a-icon-title__circle a-icon-title__circle--back js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--middle js-icon-title-circle"></div>
							<div class="a-icon-title__circle a-icon-title__circle--front"></div>
						</div>
						<div class="a-icon-title__content">
							<svg class="a-icon a-icon-title__icon">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-procesing"></use>
							</svg>
						</div>
					</div>
					<div class="m-block-title__text">PROCESSING MEAL PLAN</div>
				</div>
			</div>
			<div class="o-section-step">
				<div class="container">
					<div class="o-section-step__form">
						<div data-href="/final" data-key="873" data-value="873" data-autoredirect="false" class="m-form-processing" id="processing">
							<div class="m-form-processing__block-processing m-block-processing js-block-processing">
								<div class="m-block-processing__circle">
									<div class="m-block-processing__bg"></div>
									<div class="m-block-processing__svg-wrap">
										<svg class="m-block-processing__svg" viewBox="-10 -10 220 220">
											<g fill="none" stroke-width="3" transform="translate(100,100)">
												<path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)"></path>
												<path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)"></path>
												<path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)"></path>
												<path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)"></path>
												<path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)"></path>
												<path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)"></path>
											</g>
										</svg>
										<svg class="m-block-processing__svg" viewBox="-10 -10 220 220">
											<path class="js-processing-path" d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" style="stroke-dashoffset: 629px;"></path>
										</svg>
									</div>
									<svg width="0" height="0">
										<defs>
											<linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
												<stop stop-color="#728ded"></stop>
												<stop offset="100%" stop-color="#728ded"></stop>
											</linearGradient>
											<linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
												<stop stop-color="#728ded"></stop>
												<stop offset="100%" stop-color="#5af7e6"></stop>
											</linearGradient>
											<linearGradient id="cl3" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
												<stop stop-color="#5af7e6"></stop>
												<stop offset="100%" stop-color="#5af7e6"></stop>
											</linearGradient>
											<linearGradient id="cl4" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
												<stop stop-color="#5af7e6"></stop>
												<stop offset="100%" stop-color="#5af7e6"></stop>
											</linearGradient>
											<linearGradient id="cl5" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
												<stop stop-color="#5af7e6"></stop>
												<stop offset="100%" stop-color="#728ded"></stop>
											</linearGradient>
											<linearGradient id="cl6" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
												<stop stop-color="#728ded"></stop>
												<stop offset="100%" stop-color="#728ded"></stop>
											</linearGradient>
										</defs>
									</svg>
									<div class="m-block-processing__percentage"><span class="js-processing-percentage">100</span><span>%</span></div>
								</div>
								<div class="m-block-processing__status">
									<div class="m-block-processing__items js-processing-slider" style="transform: matrix(1, 0, 0, 1, -1440, 0);">
										<div class="m-block-processing__item invisible">
											<div class="m-block-processing__text">Processing entered data...</div>
										</div>
										<div class="m-block-processing__item invisible">
											<div class="m-block-processing__text">Calculating the dietary profile...</div>
										</div>
										<div class="m-block-processing__item small">
											<div class="m-block-processing__text">Calculating the amount of food...</div>
										</div>
										<div class="m-block-processing__item">
											<div class="m-block-processing__text">Selection of suitable recipes...</div>
										</div>
										<div class="m-block-processing__item active">
											<div class="m-block-processing__text">Your personalized meal plan is ready!</div>
										</div>
									</div>
								</div>
								<script>
									window.checkboxPluginState = '';
									window.checkboxPluginView = '';
									
									window.fbMessengerPlugins = window.fbMessengerPlugins || {
									    init: function() {
									        FB.init({
									            appId: "1678638095724206",
									            xfbml: true,
									            version: "v3.0"
									        });
									        FB.Event.subscribe('messenger_checkbox', function(e) {
									            if (e.event == 'rendered') {
									                window.checkboxPluginView = 'rendered';
									            } else if (e.event == 'checkbox') {
									                window.checkboxPluginState = e.state;
									            } else if (e.event == 'not_you') {
									
									            } else if (e.event == 'hidden') {
									                window.checkboxPluginView = 'hidden';
									            }
									        });
									    },
									    callable: []
									};
									window.fbMessengerPlugins.callable.push(function() {
									    var ruuid, fbPluginElements = document.querySelectorAll(".fb-messenger-checkbox[page_id='252083358672826']");
									    if (fbPluginElements) {
									        for (i = 0; i < fbPluginElements.length; i++) {
									            ruuid = 'cf_' + (new Array(16).join().replace(/(.|$)/g, function() {
									                return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"]();
									            }));
									            fbPluginElements[i].setAttribute('user_ref', ruuid);
									            fbPluginElements[i].setAttribute('origin', window.location.href);
									            window.confirmOptIn = function() {
									                FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, {
									                    app_id: "1678638095724206",
									                    page_id: "252083358672826",
									                    ref: getAnswers().data.uuid,
									                    user_ref: ruuid
									                });
									            };
									        }
									    }
									});
									window.fbAsyncInit = window.fbAsyncInit || function() {
									    window.fbMessengerPlugins.callable.forEach(function(item) {
									        item();
									    });
									    window.fbMessengerPlugins.init();
									};
									setTimeout(function() {
									    (function(d, s, id) {
									        var js, fjs = d.getElementsByTagName(s)[0];
									        if (d.getElementById(id)) {
									            return;
									        }
									        js = d.createElement(s);
									        js.id = id;
									        js.src = "../connect.facebook.net/en_US/sdk.js";
									        fjs.parentNode.insertBefore(js, fjs);
									    }(document, 'script', 'facebook-jssdk'));
									}, 0);
								</script>
								<div class="fb-messenger-checkbox" page_id="252083358672826" messenger_app_id="1678638095724206" skin="dark" allow_login="false" size="xlarge" center_align="true">
								</div>
								<div class="m-form-checkboxes__button a-button--with-gradient a-button--big a-button--with-icon a-button--bordered a-button">
									<a href="step10.jsp">
										<button id="messenger-checkbox-confirmation" type="submit" class="a-button__link">
											<div class="a-button__text">Continue</div>
											<svg class="a-icon a-button__icon">
												<use xlink:href="img/sprite.svg#icon-next"></use>
											</svg>
										</button>
									</a>
								</div>
							</div>
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
		<div id="generateDiet"></div>
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
