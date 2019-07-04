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
		<title>Wellness Java WebApp | Dashboard</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
		<link rel="stylesheet" href="css/style.css">
		<script src="js/script.js"></script>
	</head>
	<body style="background-image: none;" data-page="main">
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
		<script>
			if (!Object.keys(getAnswers()).length) {
			    window.location.href = window.getHost();
			}
		</script>
		<div class="main-content">
			<div class="o-section-intro-dash" style="background-image: url(img/bg.jpg)">
				<div class="container">
					<div class="o-section-intro__content">
						<div class="o-section-intro__jumbotron">
							<div class="o-section-intro__block-jumbotron m-block-jumbotron text-center" style="padding: 15px;">
								<div class="m-block-jumbotron__button a-button--with-gradient a-button--gigant a-button--with-icon a-button">
									<a href="" class="a-button__link" id="get-keto-diet">
									<span class="a-button__text">UPDATE DIET</span>
									</a>
								</div>
							</div>							
						</div>						
					</div>
				</div>
				<div class="o-section-parallax--responsive o-section-parallax js-section-parallax">
					<img src="img/parallax-img-14.png" class="o-section-parallax__item o-section-parallax__item--image-23 js-parallax-style-1" style="transform: matrix(1, 0, 0, 1, 23.675, -4.75);">
					<img src="img/parallax-img-15.png" class="o-section-parallax__item o-section-parallax__item--image-24 js-parallax-style-4" style="transform: matrix(1, 0, 0, 1, 15.7833, -1.9);">
					<img src="img/parallax-img-16.png" class="o-section-parallax__item o-section-parallax__item--image-25 js-parallax-style-3" style="transform: matrix(1, 0, 0, 1, 5.91875, -4.75);">
					<img src="img/parallax-img-17.png" class="o-section-parallax__item o-section-parallax__item--image-26 js-parallax-style-5" style="transform: matrix(1, 0, 0, 1, 31.5667, -3.16667);">
				</div>
			</div>			
			<div class="o-section-dashboard">
				<div class="container">
					<h2 class="o-section-summary__text-title a-text-title">
						<div>YOUR PROFILE</div>
					</h2>
					<div class="o-section-summary__content">
						<div class="o-section-summary__item-summary m-item-summary">
							<div class="m-item-summary__buttons">
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="../www.w3.org/1999/xlink.html" xlink:href="img/sprite.svg#icon-help"></use>
										</svg>
									</a>
								</div>
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button--icon-min a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink.html" xlink:href="img/sprite.svg#icon-close"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="m-item-summary__help js-help">
								<p>Body Mass Index (BMI) is an established measure utilized by physicians and health experts to determine weight status (i.e. underweight, overweight or within a healthy weight range).</p>
							</div>
							<div class="m-item-summary__content">
								<div class="m-item-summary__head">
									<div class="m-item-summary__title">BMI</div>
									<div class="m-item-summary__subtitle">Your BMI </div>
								</div>
								<div class="m-item-summary__middle">
									<div style="color: #3bf0a8" class="m-item-summary__graph-1-value js-item-color">
										<div id="bmi" data-percent="20" class="m-item-summary__graph-1-integer js-bmi-item-color">22.67</div>
										<div id="bmi-sup" class="m-item-summary__graph-1-decimal js-bmi-item-color"></div>
									</div>
									<!--?xml version="1.0" encoding="UTF-8"?-->
									<svg id="graph-bmi" class="m-item-summary__graph-1" viewBox="0 0 560 302" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink.html">
										
										<title>Group 3</title>
										<desc>Created with Sketch.</desc>
										<defs>
											<rect id="path-1" x="0" y="0" width="560" height="560" rx="20"></rect>
											<linearGradient x1="45.8601369%" y1="170.848376%" x2="44.6298024%" y2="16.9029444%" id="linearGradient-3">
												<stop stop-color="#FFFFFF" stop-opacity="0.112375453" offset="13.8711735%"></stop>
												<stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
											</linearGradient>
											<linearGradient x1="50%" y1="26.9500636%" x2="50%" y2="70.342105%" id="linearGradient-4">
												<stop stop-color="#00ADEE" offset="0%"></stop>
												<stop stop-color="#00ADEE" offset="9.23947704%"></stop>
												<stop stop-color="#05659E" offset="33.8129783%"></stop>
												<stop stop-color="#3A9864" offset="44.4774394%"></stop>
												<stop stop-color="#81C22F" offset="54.8011001%"></stop>
												<stop stop-color="#F3AE04" offset="70.0613839%"></stop>
												<stop stop-color="#C21300" offset="89.6982621%"></stop>
												<stop stop-color="#C21300" offset="100%"></stop>
											</linearGradient>
										</defs>
										<g id="Results-★" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g id="Results-Woman-DFHD" transform="translate(-365.000000, -2090.000000)">
												<g id="Boxes" transform="translate(212.000000, 1646.000000)">
													<g id="1" transform="translate(153.000000, 242.000000)">
														<g id="Group-3">
															<g id="Group-2">
																<mask id="mask-2" fill="white">
																	<use xlink:href="#path-1"></use>
																</mask>
																<g id="Rectangle-9-Copy-2" opacity="0.900000036"></g>
																<path d="M-4.10351562,562.949219 C29.7135119,488.957261 123.081007,440.465074 275.99897,417.472656 C428.916933,394.480239 525.411417,342.885187 565.482422,262.6875 L565.482422,194 L-4.10351562,194 L-4.10351562,562.949219 Z" id="Path-2-Copy" fill="url(#linearGradient-3)" transform="translate(280.689453, 378.474609) scale(-1, -1) translate(-280.689453, -378.474609) "></path>
																<path d="M-4.10351562,494.261719 C29.7135119,420.269761 123.081007,371.777574 275.99897,348.785156 C428.916933,325.792739 525.411417,274.197687 565.482422,194" id="colored" stroke="url(#linearGradient-4)" stroke-width="2" transform="translate(280.689453, 344.130859) scale(-1, -1) translate(-280.689453, -344.130859) "></path>
															</g>
															<circle id="Oval-2" class="circle js-bmi-item-color" stroke="#151226" stroke-width="6" fill="#3BF0A8" cx="0" cy="0" r="13"></circle>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div class="m-item-summary__bottom">
									<div>Your BMI:</div>
									<div id="bmi-text-1" style="color: #3bf0a8" class="js-bmi-item-color hidden-bmi">Seriously low weight</div>
									<div id="bmi-text-2" style="color: #3bf0a8" class="js-bmi-item-color hidden-bmi">Underweight</div>
									<div id="bmi-text-3" style="color: #3bf0a8" class="js-bmi-item-color">Normal</div>
									<div id="bmi-text-4" style="color: #3bf0a8" class="js-bmi-item-color hidden-bmi">Overweight</div>
									<div id="bmi-text-5" style="color: #3bf0a8" class="js-bmi-item-color hidden-bmi">Obesity type  |</div>
									<div id="bmi-text-6" style="color: #3bf0a8" class="js-bmi-item-color hidden-bmi">Obesity type  ||</div>
									<div id="bmi-text-7" style="color: #3bf0a8" class="js-bmi-item-color hidden-bmi">Obesity type  |||</div>
								</div>
							</div>
						</div>
						<div class="o-section-summary__item-summary m-item-summary">
							<div class="m-item-summary__buttons">
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="../www.w3.org/1999/xlink.html" xlink:href="img/sprite.svg#icon-help"></use>
										</svg>
									</a>
								</div>
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button--icon-min a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="../www.w3.org/1999/xlink.html" xlink:href="img/sprite.svg#icon-close"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="m-item-summary__help js-help">
								<p>The metabolic age is an indicator for the age of your body. If it is higher than your actual age, your metabolism is slower than it should be. In this case you need to go on a calorie-restricting meal plan and increase your level of physical activity in order to increase your physiological processes. If your metabolic age is lower or equal to your actual age, your body feels well and you should keep up the good work.</p>
							</div>
							<div class="m-item-summary__content">
								<div class="m-item-summary__head">
									<div class="m-item-summary__title">Metabolic Age</div>
								</div>
								<div class="m-item-summary__middle">
									<div id="graph-2" data-years="67" class="m-item-summary__graph-2-items js-graph-2-items">
										<div class="m-item-summary__graph-2-item js-graph-2-item m-item-summary__graph-2-item--active">
											<!--?xml version="1.0" encoding="UTF-8"?-->
											<svg class="m-item-summary__graph-2" viewBox="0 0 146 209" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="../www.w3.org/1999/xlink.html" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
												<defs></defs>
												<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<g class="stroke stroke-1" transform="translate(1.000000, 1.000000)" stroke="#676283" stroke-width="2" fill="#1F1D2F">
														<g id="Page-1">
															<path d="M73.5,29 C65.4732143,29 59,22.5409091 59,14.5 C59,6.45909091 65.4732143,0 73.5,0 C81.5267857,0 88,6.45909091 88,14.5 C88,22.5409091 81.5267857,29 73.5,29 Z" id="Stroke-1"></path>
															<path d="M141.502404,17.0878885 L134.772509,23.7050352 L94.9209776,62.878544 L94.9209776,116.080404 L94.9209776,116.34509 L94.9209776,123.888637 L94.9209776,196.544908 C94.9209776,202.367997 90.56634,207 85.2879915,207 C80.0096429,207 75.6550054,202.367997 75.6550054,196.544908 L75.6550054,125.609095 L73.8075834,125.609095 L71.3003678,125.609095 L71.3003678,196.544908 C71.3003678,202.367997 66.9457302,207 61.6673817,207 C56.3890331,207 52.0343956,202.367997 52.0343956,196.544908 L52.0343956,125.609095 L52.0343956,105.889998 L52.0343956,66.0547744 L9.27977227,23.7050352 L2.54987786,17.0878885 C-0.617131269,14.044001 -0.881048697,9.14731241 2.02204301,6.10342491 C4.793176,3.19188034 9.67564841,3.32422328 12.8426575,6.36811078 L30.2612078,23.4403494 L52.1663543,45.0122478 L52.1663543,44.7475619 L52.5622304,44.7475619 C55.3333634,38.6597869 61.2715055,34.1601271 68.3972761,33.7630983 L70.1127394,33.7630983 L76.9745925,33.7630983 L78.6900558,33.7630983 C85.1560328,34.1601271 90.8302575,37.8657293 93.7333492,43.1594467 L113.659115,23.4403494 L131.077665,6.36811078 C134.244674,3.32422328 139.127147,3.19188034 142.030238,6.10342491 C144.801371,9.14731241 144.669413,14.044001 141.502404,17.0878885 Z" id="Stroke-3"></path>
														</g>
													</g>
												</g>
											</svg>
										</div>
										<div class="m-item-summary__graph-2-item js-graph-2-item">
											<!--?xml version="1.0" encoding="UTF-8"?-->
											<svg class="m-item-summary__graph-2" viewBox="0 0 81 209" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="../www.w3.org/1999/xlink.html" style="opacity: 0.5; transform: matrix(0.7, 0, 0, 0.7, 0, -30);">
												<defs></defs>
												<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<g class="stroke stroke-2" transform="translate(-32.000000, 1.000000)" stroke="#676283" stroke-width="2" fill="#1F1D2F">
														<g id="Page-1" transform="translate(33.000000, 0.000000)">
															<path d="M39.5,29 C31.4732143,29 25,22.5409091 25,14.5 C25,6.45909091 31.4732143,0 39.5,0 C47.5267857,0 54,6.45909091 54,14.5 C54,22.5409091 47.5267857,29 39.5,29 Z" id="Stroke-1"></path>
															<path d="M71.2831126,121.657492 C67.2284768,121.657492 63.9586093,118.107034 63.9586093,113.636086 L63.9586093,58.0122324 L60.4271523,58.0122324 L60.4271523,116.66055 L60.4271523,116.923547 L60.4271523,124.41896 L60.4271523,196.611621 C60.4271523,202.397554 56.1109272,207 50.8791391,207 C45.647351,207 41.3311258,202.397554 41.3311258,196.611621 L41.3311258,126.12844 L39.5,126.12844 L37.1456954,126.12844 L37.1456954,196.611621 C37.1456954,202.397554 32.8294702,207 27.5976821,207 C22.365894,207 18.0496689,202.397554 18.0496689,196.611621 L18.0496689,126.12844 L18.0496689,106.535168 L18.0496689,58.1437309 L14.6490066,58.1437309 L14.6490066,104.299694 L14.6490066,113.767584 C14.6490066,118.107034 11.3791391,121.788991 7.32450331,121.788991 C3.26986755,121.788991 0,118.238532 0,113.767584 L0,89.440367 L0,52.3577982 C0,51.7003058 0.130794702,51.0428135 0.261589404,50.5168196 C1.56953642,42.1009174 8.63245033,35.5259939 17.3956954,35 L19.0960265,35 L59.9039735,35 L61.6043046,35 C70.3675497,35.5259939 77.4304636,42.1009174 78.7384106,50.5168196 C78.8692053,51.1743119 79,51.7003058 79,52.3577982 L79,113.636086 C78.7384106,118.107034 75.3377483,121.657492 71.2831126,121.657492 Z" id="Stroke-3"></path>
														</g>
													</g>
												</g>
											</svg>
										</div>
										<div class="m-item-summary__graph-2-item js-graph-2-item">
											<!--?xml version="1.0" encoding="UTF-8"?-->
											<svg class="m-item-summary__graph-2" viewBox="0 0 86 207" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="../www.w3.org/1999/xlink.html" style="opacity: 0.2; transform: matrix(0.5, 0, 0, 0.5, 0, -50);">
												<defs></defs>
												<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<g class="stroke stroke-3" transform="translate(-30.000000, 0.000000)" stroke="#676283" stroke-width="2" fill="#1F1D2F">
														<g id="Page-1" transform="translate(31.000000, 1.000000)">
															<path d="M40,29 C31.6964286,29 25,22.5409091 25,14.5 C25,6.45909091 31.6964286,0 40,0 C48.3035714,0 55,6.45909091 55,14.5 C55,22.5409091 48.3035714,29 40,29 Z" id="Stroke-1"></path>
															<path d="M44.00861,76.0641711 L39.6863358,80.8976318 L35.3640616,76.0641711 L39.1624238,42.8831169 L40.3412259,42.8831169 L44.00861,76.0641711 Z M39.6863358,35.4369748 C41.2580719,35.4369748 42.436874,36.7433155 42.436874,38.1802903 C42.436874,39.7478992 41.1270939,40.9236058 39.6863358,40.9236058 C38.1145998,40.9236058 36.9357977,39.6172651 36.9357977,38.1802903 C36.8048197,36.6126814 38.1145998,35.4369748 39.6863358,35.4369748 Z M78.8487596,49.4148205 C77.5389796,41.0542399 70.4661672,34.5225363 61.6906408,34 L59.9879268,34 L19.1227889,34 L17.4200748,34 C8.6445484,34.5225363 1.57173607,41.0542399 0.261956012,49.4148205 C0.130978006,50.0679908 0,50.5905271 0,51.2436975 L0,88.0825057 L0,112.249809 C0,116.560733 3.27445015,120.218487 7.33476834,120.218487 C11.3950865,120.218487 14.6695367,116.691367 14.6695367,112.249809 L14.6695367,102.844156 L14.6695367,56.9915966 L18.0749648,56.9915966 L18.0749648,105.195569 L18.0749648,124.660046 L18.0749648,194.679908 C18.0749648,200.427807 22.397239,205 27.6363593,205 C32.8754795,205 37.1977537,200.427807 37.1977537,194.679908 L37.1977537,124.529412 L39.6863358,124.529412 L41.5200279,124.529412 L41.5200279,194.549274 C41.5200279,200.297173 45.8423021,204.869366 51.0814223,204.869366 C56.3205426,204.869366 60.6428168,200.297173 60.6428168,194.549274 L60.6428168,122.831169 L60.6428168,115.385027 L60.6428168,115.123759 L60.6428168,56.8609626 L64.179223,56.8609626 L64.179223,112.119175 C64.179223,116.430099 67.4536731,120.087853 71.5139913,120.087853 C75.5743095,120.087853 78.8487596,116.560733 78.8487596,112.119175 L78.8487596,51.2436975 C79.1107156,50.5905271 78.9797376,49.9373568 78.8487596,49.4148205 Z" id="Stroke-3"></path>
															<path d="M70,127 L70,124.290323 C70,123.645161 70.4705882,123 71.1764706,123 L72.8235294,123 C73.4117647,123 74,123.516129 74,124.290323 L74,127 L70,127 Z" id="Stroke-5"></path>
															<path d="M81.5135135,175.869688 L78.8108108,174.827195 L76.1081081,175.869688 L74.7567568,175.869688 L72.0540541,174.827195 L69.3513514,175.869688 L68,175.869688 L68,134.169972 C68.2702703,131.824363 70.2972973,130 72.8648649,130 C75.4324324,130 77.4594595,131.824363 77.7297297,134.300283 L83,176 L81.5135135,176 L81.5135135,175.869688 Z" id="Stroke-7"></path>
														</g>
													</g>
												</g>
											</svg>
										</div>
										<div class="m-item-summary__graph-2-item js-graph-2-item">
											<!--?xml version="1.0" encoding="UTF-8"?-->
											<svg class="m-item-summary__graph-2" viewBox="0 0 102 195" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="../www.w3.org/1999/xlink.html" style="transform: matrix(0, 0, 0, 0, 0, 0);">
												<defs></defs>
												<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<g class="stroke stroke-4" transform="translate(-21.000000, -13.000000)" stroke="#676283" stroke-width="2" fill="#1F1D2F">
														<g id="Page-1" transform="translate(22.000000, 14.000000)">
															<path d="M41,28 C33.293578,28 27,21.7196262 27,14 C27,6.28037383 33.293578,0 41,0 C48.706422,0 55,6.28037383 55,14 C55,21.7196262 48.706422,28 41,28 Z" id="Stroke-1"></path>
															<path d="M98.18,193 C97.14,193 96.36,192.216995 96.36,191.172989 L96.36,113.525038 C96.36,111.567527 94.93,110.654021 93.5,110.654021 C92.07,110.654021 90.64,111.698027 90.64,113.525038 L90.64,114.047041 C90.64,114.960546 89.86,115.743551 88.82,115.743551 C87.78,115.743551 87,114.960546 87,114.047041 L87,113.394537 C87,109.218513 90.25,107 93.5,107 C96.75,107.130501 100,109.218513 100,113.394537 L100,191.30349 C100,192.216995 99.22,193 98.18,193 Z" id="Stroke-3"></path>
															<path d="M96.9484464,103.617363 C93.8084158,106.649518 88.5750313,106.385852 85.0424968,102.958199 L66.0714783,84.3697749 L66.0714783,54.3118971 L63.1931169,54.3118971 L63.1931169,182.189711 C63.1931169,188.122186 58.7447401,193 53.2496865,193 C47.7546328,193 43.3062561,188.122186 43.3062561,182.189711 L43.3062561,116.800643 L40.6895639,116.800643 L38.7270447,116.800643 L38.7270447,151.209003 L38.7270447,182.189711 C38.7270447,188.122186 34.278668,193 28.7836143,193 C23.2885607,193 18.8401839,188.122186 18.8401839,182.189711 L18.8401839,107.176849 L18.8401839,106.913183 L18.8401839,54.4437299 L15.9618225,54.4437299 L15.9618225,81.6012862 L15.9618225,102.562701 C15.9618225,107.308682 12.429288,111.263666 7.98091124,111.263666 C3.53253448,111.263666 0,107.440514 0,102.562701 L0,76.3279743 L0,47.85209 C0,47.192926 0.130834611,46.5337621 0.261669221,45.8745981 C1.57001533,36.9099678 8.89675352,29.9228296 18.0551763,29 L18.7093493,29 L29.9611258,29 C31.4003065,33.6141479 35.7178487,37.0418006 40.6895639,37.0418006 C45.7921137,37.0418006 50.1096558,33.6141479 51.4180019,29 L62.9314477,29 L64.1089592,29 C72.6132088,30.0546624 79.285774,36.5144695 80.4632855,44.8199357 C80.5941201,45.4790997 80.7249547,46.1382637 80.7249547,46.7974277 L80.7249547,77.1189711 L95.9017695,92.0160772 C99.6959732,95.3118971 99.9576424,100.453376 96.9484464,103.617363 Z" id="Stroke-5"></path>
														</g>
													</g>
												</g>
											</svg>
										</div>
									</div>
								</div>
								<div class="m-item-summary__bottom">
									<div>Your Metabolic Age:</div>
									<div style="color: #AFEF31" class="js-item-color-graph-2">
										<span id="metabolic-age">22 age</span>
									</div>
								</div>
							</div>
						</div>
						<script>
							document.getElementById('graph-2').setAttribute('data-years', getAnswersData('metabolic_age'));
						</script>
						<div class="o-section-summary__item-summary m-item-summary">
							<div class="m-item-summary__buttons">
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-help"></use>
										</svg>
									</a>
								</div>
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button--icon-min a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-close"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="m-item-summary__help js-help">
								<p>Calories are within a recommended range of +/-100 as it is practically impossible to track them exactly.         
									While following a calorie-restricted meal plan, the calories you consume must not fall below this value. Your daily calories are calculated based on your target weight, your current measurements, your physical activity and your lifestyle.
								</p>
							</div>
							<div class="m-item-summary__content">
								<div class="m-item-summary__head">
									<div class="m-item-summary__title">Calories</div>
								</div>
								<div class="m-item-summary__middle">
									<!--?xml version="1.0" encoding="UTF-8"?-->
									<svg class="m-item-summary__graph-3" width="288px" height="162px" viewBox="0 0 288 162" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<defs>
											<radialGradient cx="50%" cy="88.1608583%" fx="50%" fy="88.1608583%" r="95.4496814%" gradientTransform="translate(0.500000,0.881609),scale(0.662222,1.000000),rotate(-93.186016),translate(-0.500000,-0.881609)" id="radialGradient-1">
												<stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
												<stop stop-color="#FFFFFF" stop-opacity="0" offset="76.1896091%"></stop>
												<stop stop-color="#FFFFFF" stop-opacity="0.112375453" offset="100%"></stop>
											</radialGradient>
											<linearGradient x1="-2.06612668%" y1="98.8081952%" x2="97.2721884%" y2="2.64074039%" id="linearGradient-2">
												<stop stop-color="#FFCA3E" offset="0%"></stop>
												<stop stop-color="#FF7E22" offset="100%"></stop>
											</linearGradient>
										</defs>
										<g id="Results-★" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g id="Mealplan-Woman-MOBILE" transform="translate(-72.000000, -2440.000000)">
												<g id="Boxes" transform="translate(20.000000, 1452.000000)">
													<g id="3" transform="translate(0.000000, 886.000000)">
														<g id="Group-4" transform="translate(44.000000, 106.000000)">
															<g id="Group-3" transform="translate(33.000000, 0.000000)">
																<path d="M218.866335,149 C222.841269,137.506072 225,125.166742 225,112.324001 C225,50.2891681 174.632034,0 112.5,0 C50.3679656,0 0,50.2891681 0,112.324001 C0,125.010422 2.1065,137.205614 5.98932687,148.57992" id="Oval-3" fill="url(#radialGradient-1)"></path>
																<path d="M223.294558,132 C224.41543,125.633705 225,119.082781 225,112.395451 C225,50.3211573 174.632034,0 112.5,0 C50.3679656,0 0,50.3211573 0,112.395451 C0,118.806699 0.537299006,125.092571 1.56936426,131.210573" id="Oval-3-Copy-2" stroke="#3E3A54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M131,1.46295178 C125.032538,0.500446662 118.90792,0 112.665,0 C84.5182985,0 58.7763611,10.1727238 39,27" id="Oval-3-Copy-3" stroke="url(#linearGradient-2)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path>
															</g>
															<text id="2218---2314-kcal" font-size="30" font-weight="300">
																<tspan x="67.9091797" y="96.4642857" fill="#FFC93E">
																	2080.875                                                        
																</tspan>
																<tspan x="224.09082" y="96.4642857" font-size="36" fill="#FF9B2B"></tspan>
																<tspan x="124.830078" y="135.464286" font-size="24" fill="#FFA430">Calories</tspan>
															</text>
															<text id="0-kcal" opacity="0.5" font-size="18" font-weight="300" fill="#FFFFFF">
																<tspan x="7.64013672" y="157">
																	0 Calories
																</tspan>
															</text>
															<text id="5000-kcal" opacity="0.5" font-size="18" font-weight="300" fill="#FFFFFF">
																<tspan x="219.705078" y="157">
																	5000 Calories
																</tspan>
															</text>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div class="m-item-summary__bottom">
									<span>Recommended Calories:</span><br>
									<span class="normal graph-3-span graph-3-span--1">
										<script>document.write(getAnswersData('calories_from'));</script> 
									</span>
									<span class="normal graph-3-span graph-3-span--2">2080.875 </span>
									<span class="normal graph-3-span graph-3-span--3">
										<script>document.write(getAnswersData('calories_to'));</script> 
									</span>
									<span class="normal graph-3-span graph-3-span--4">Calories</span>
								</div>
							</div>
						</div>
						<div class="o-section-summary__item-summary m-item-summary">
							<div class="m-item-summary__buttons">
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-help"></use>
										</svg>
									</a>
								</div>
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button--icon-min a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-close"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="m-item-summary__help js-help">
								<p>It may look excessive to you but it has been scientifically proven that water consumption should be this quantity.</p>
							</div>
							<div class="m-item-summary__content">
								<div class="m-item-summary__head">
									<div class="m-item-summary__title">Water</div>
								</div>
								<div class="m-item-summary__middle">
									<!--?xml version="1.0" encoding="UTF-8"?-->
									<svg class="m-item-summary__graph-4" width="189px" height="232px" viewBox="0 0 189 232" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<defs>
											<linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
												<stop stop-color="#33F5E0" offset="0%"></stop>
												<stop stop-color="#5172E8" offset="100%"></stop>
											</linearGradient>
											<path d="M143.66866,94.6634816 L134.711538,206.505495 L17.2884615,206.505495 L8.41874429,95.7548456 C24.2403287,84.8071136 37.4134443,84.7108118 47.9380912,95.4659402 C63.7250615,111.598633 89.7845836,79.5859375 104.738585,94.9851141 C114.707919,105.251232 127.684611,105.144021 143.66866,94.6634816 Z" id="path-2"></path>
										</defs>
										<g id="Results-★" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g id="Results-Woman-DFHD" transform="translate(-1197.000000, -2687.000000)">
												<g id="Boxes" transform="translate(212.000000, 1646.000000)">
													<g id="4" transform="translate(783.000000, 872.000000)">
														<g id="water" transform="translate(202.000000, 169.000000)">
															<text id="5-L" opacity="0.5" font-size="18" font-weight="300" fill="#FFFFFF">
																<tspan x="165.082031" y="38">5 L</tspan>
															</text>
															<text id="0-L" opacity="0.5" font-size="18" font-weight="300" fill="#FFFFFF">
																<tspan x="165.082031" y="208">0 L</tspan>
															</text>
															<path d="M150.166711,1 L1.83328913,1 L18.2115761,205.505495 L133.788424,205.505495 L150.166711,1 Z" id="Rectangle-3" stroke="#3E3A54" stroke-width="2"></path>
															<g id="Rectangle-3-Copy">
																<use fill="#1F1D2F" fill-rule="evenodd" xlink:href="#path-2"></use>
																<path stroke="url(#linearGradient-1)" stroke-width="2" d="M30,205 Z M30,205.505495 M9.46175511,96.2519154 Z M142.511495,96.5859226 C143.076498,96.2368514 143.645,95.8747901 144.216988,95.4997452 Z M142.511495,96.5859226 L133.788424,205.505495 L18.2115761,205.505495 L9.46175511,96.2519154 C24.6977781,85.8847895 37.1774972,85.8994802 47.2233676,96.1653473 C50.9764925,100.000663 55.4750146,101.490681 60.8754524,101.078895 C65.0016062,100.764274 68.9770061,99.5650228 75.8026717,96.9060414 C76.2154638,96.7452356 76.596213,96.5961754 77.2543905,96.3379829 C84.9546825,93.3172811 88.1688403,92.2615105 92.0015183,91.8124008 C96.9336894,91.2344535 100.808065,92.3730027 104.021185,95.6817752 C114.001907,105.95962 126.925515,106.215278 142.511495,96.5859226 Z"></path>
															</g>
															<text id="2.7L" font-size="50" font-weight="300" fill="#37B4FF">
																<tspan x="37.4179688" y="176">
																	<script>document.write(toDecimal(getAnswersData('recommended_water')));</script>
																</tspan>
																<tspan x="65.776367" y="176" font-size="30">3 L</tspan>
															</text>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div class="m-item-summary__bottom">
									<span>Recommended Water: </span>
									<span style="color: #37b4ff" class="normal">
										<script>document.write(toDecimal(getAnswersData('recommended_water')));</script>
										L
									</span>
								</div>
							</div>
						</div>
						<div class="o-section-summary__item-summary m-item-summary">
							<div class="m-item-summary__buttons">
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-help"></use>
										</svg>
									</a>
								</div>
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button--icon-min a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-close"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="m-item-summary__help js-help">
								<p>This is the weight that other people of the same height and at the same age consider perfect.</p>
							</div>
							<div class="m-item-summary__content">
								<div class="m-item-summary__head">
									<div class="m-item-summary__title">Ideal Weight</div>
								</div>
								<div class="m-item-summary__middle">
									<!--?xml version="1.0" encoding="UTF-8"?-->
									<svg class="m-item-summary__graph-5" width="237px" height="242px" viewBox="0 0 237 242" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<defs>
											<linearGradient x1="100%" y1="1603.90625%" x2="0%" y2="1603.90625%" id="linearGradient-1">
												<stop stop-color="#91EF31" offset="0%"></stop>
												<stop stop-color="#CEEF31" offset="100%"></stop>
											</linearGradient>
										</defs>
										<g id="Results-★" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g id="Results-Woman-DFHD" transform="translate(-527.000000, -3306.000000)">
												<g id="Boxes" transform="translate(212.000000, 1646.000000)">
													<g id="5" transform="translate(153.000000, 1502.000000)">
														<g id="weight" transform="translate(163.000000, 159.000000)">
															<path d="M194.498817,31 L214.90552,31 C220.506591,31 225.902029,33.3885714 229.701358,37.558619 C233.461518,41.6988095 235.370974,47.2721429 234.940123,52.8753333 L222.102701,221.259667 C221.309542,231.769381 212.506459,240 202.07789,240 L32.9294386,240 C22.5008696,240 13.6977865,231.759429 12.8948356,221.239762 L0.0574140886,52.865381 C-0.363645505,47.2721429 1.54581079,41.6888571 5.30597088,37.5486667 C9.1052993,33.3885714 14.4909453,31 20.0920171,31 L40.8428596,31" id="Stroke-3" stroke="#3E3A54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															<path d="M50,68 C50,30.498 80.498,0 118,0 C155.502,0 186,30.498 186,68 L50,68 Z" id="Stroke-1" stroke="#3E3A54" stroke-width="2" fill="#1F1D2F" stroke-linecap="round" stroke-linejoin="round"></path>
															<path d="M114.149457,69.4725882 L114.077467,69.5061575 L101.114749,28.2947591 L123.591773,63.5230751 C124.512023,64.5308411 125.073301,65.8720074 125.073301,67.3442672 C125.073301,70.4748806 122.535438,73.0127442 119.404824,73.0127442 C117.026931,73.0127442 114.991015,71.5485651 114.149457,69.4725882 Z" id="Combined-Shape" stroke="url(#linearGradient-1)" stroke-width="2" fill="#1F1D2F" stroke-linecap="round" stroke-linejoin="round" transform="translate(113.094025, 50.653752) rotate(-6.911288) translate(-113.094025, -50.653752) "></path>
															<path d="M73.0568558,17.095981 C80.9767697,10.1402657 90.5070776,5.00425431 101.001649,2.3396583" id="Stroke-1-Copy" stroke="url(#linearGradient-1)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
															<text id="Weight-range" opacity="0.5" font-family="Roboto-Light, Roboto" font-size="18" font-weight="300" fill="#FFFFFF">
																<tspan x="64.6347656" y="184">Weight Range</tspan>
															</text>
															<text id="112---125" font-family="Roboto-Light, Roboto" font-size="40" font-weight="300" fill="#CEEF31">
																<tspan x="35.046875" y="154">
																	<script>document.write(getAnswersData('ideal_weight_from'));</script>
																	-
																	<script>document.write(getAnswersData('ideal_weight_to'));</script>
																</tspan>
															</text>
														</g>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div class="m-item-summary__bottom">
									<span>Recommended Weight: </span>
									<span style="color: #ceef31;" class="normal">
										From
										<script>document.write(getAnswersData('ideal_weight_from'));</script>
										To
										<script>document.write(getAnswersData('ideal_weight_to'));</script>
										<script>
											var measurements = getAnswers().measurements,
											    measurement = '';
											
											if (measurements) {
											    var measurement = measurements[Object.keys(measurements)[0]].name;
											
											    if (measurement === 'imperial') {
											        document.write("Pounds");
											    } else {
											        document.write("Kilograms");
											    }
											}
										</script>
									</span>
								</div>
							</div>
						</div>
						<div class="o-section-summary__item-summary m-item-summary">
							<div class="m-item-summary__buttons">
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-help"></use>
										</svg>
									</a>
								</div>
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button--icon-min a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-close"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="m-item-summary__help js-help">
								<p>The weight you can achieve for the first 30 days of your 60-DAY Meal Plan without putting your health at risk. The results may vary.</p>
							</div>
							<div class="m-item-summary__content">
								<div class="m-item-summary__head">
									<div class="m-item-summary__title">Achievable Weight</div>
								</div>
								<div class="m-item-summary__middle">
									<div class="m-item-summary__graph-6">
										<div class="m-item-summary__circles">
											<div class="m-item-summary__circle m-item-summary__circle--back js-icon-title-circle"></div>
											<div class="m-item-summary__circle m-item-summary__circle--middle js-icon-title-circle"></div>
											<div class="m-item-summary__circle m-item-summary__circle--front"></div>
										</div>
										<div class="m-item-summary__circles-content">
											<div id="graph-6" data-count="" class="js-graph-6-count"> 54</div>
											<div>
												<script>
													if (measurement === 'imperial') {
													    document.write("Pounds");
													} else {
													    document.write("Kilograms");
													}
												</script>Kilograms
											</div>
										</div>
									</div>
								</div>
								<div class="m-item-summary__bottom">
									<span>Achievable weight for the FIRST 30 DAYS of your 60-DAY Keto Diet: </span>
									<span style="color: #fa30d6;" class="normal">
										54                            <script>
											if (measurement === 'imperial') {
											    document.write("Pounds");
											} else {
											    document.write("Kilograms");
											}
										</script>Kilograms
									</span>
								</div>
							</div>
						</div>
						<script>
							document.getElementById('graph-6').setAttribute('data-count', getAnswersData('achievable_weight'));
						</script>
						<div class="o-section-summary__item-summary m-item-summary">
							<div class="m-item-summary__buttons">
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xlink:href="img/sprite.svg#icon-help"></use>
										</svg>
									</a>
								</div>
								<div class="m-item-summary__button js-help-btn a-button--gray a-button--with-icon a-button--icon-only a-button--icon-min a-button">
									<a href="#" class="a-button__link">
										<div class="a-button__text"></div>
										<svg class="a-icon a-button__icon">
											<use xlink:href="img/sprite.svg#icon-close"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="m-item-summary__help js-help">
								<p>Ketogenic diet is 75% Fats, 20% Protein, 5% Carbs</p>
							</div>
							<div class="m-item-summary__content">
								<div class="m-item-summary__head">
									<div class="m-item-summary__title">Ketogenic Diet</div>
								</div>
								<div class="m-item-summary__middle">
									<svg version="1.1" class="m-item-summary__graph-5" id="ketogenic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 232 232" style="enable-background:new 0 0 232 232;" xml:space="preserve">
										<style type="text/css">
											.st0{fill:none;stroke:#3E3A54;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}
											.ketogenic-hidden{opacity: 0;}
											.js-ketogenic-type {transition: 0.65s ease;}
											.st2{display:inline;}
											.st3{fill:none;}
											.st8{display:inline;fill:url(#Oval-6-Copy_2_);}
											.st9{display:inline;fill:none;stroke:url(#_x31_st-copy-2_1_);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:730.7143,1550;}
											.st10{display:inline;fill:url(#Oval-6-Copy_3_);}
											.st11{display:inline;fill:none;stroke:url(#_x31_st-copy_2_);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:730.7143,1550;}
											.st12{display:inline;fill:url(#Oval-6_1_);}
											.st13{display:inline;fill:none;stroke:url(#fats_3_);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:730.7143,1550;}
										</style>
										<g id="empty">
											<path id="fats_1_" class="st0" d="M5.6,83.9C2.6,94.1,1,105,1,116.2C1,179.6,52.5,231,116,231s115-51.4,115-114.8
												c0-47-28.3-87.3-68.7-105.1"></path>
											<path id="protein_1_" class="st0" d="M156.5,8.3C143.9,3.6,130.3,1,116.1,1C81.6,1,50.6,16.3,29.5,40.6"></path>
											<path id="carbs_2_" class="st0" d="M25.1,46.1c-7.5,9.6-13.5,20.4-17.6,32"></path>
										</g>
										<g id="carbs" transform="translate(165.000000, 175.000000)" class="js-ketogenic-type js-ketogenic-carbs">
											<g id="subtitle-wrap_2_" class="st2">
												<rect x="-124.8" y="-41.4" class="st3" width="208.9" height="20.3"></rect>
												<text id="subtitle_2_" text-anchor="middle" alignment-baseline="central" transform="matrix(1 0 0 1 -50 -25)" class="st4 st5 st6 m-item-summary__graph-5-subtitle" fill="rgba(255, 255, 255, 0.5)"></text>
											</g>
											<g>
												<text style="padding-top: 12px" transform="matrix(1 0 0 1 -50 -65)" fill="#FF670D">5% Carbs</text>
											</g>
											<radialGradient id="Oval-6-Copy_2_" cx="-97.0674" cy="-9.0251" r="1.6321" gradientTransform="matrix(0.5806 -70.1887 -70.1884 -0.5806 -625.9533 -6879.1401)" gradientUnits="userSpaceOnUse">
												<stop offset="0" style="stop-color:#FF3D1A;stop-opacity:0"></stop>
												<stop offset="0.5059" style="stop-color:#FF3D1A;stop-opacity:0"></stop>
												<stop offset="1" style="stop-color:#FF3D1A;stop-opacity:0.1124"></stop>
											</radialGradient>
											<path id="Oval-6-Copy" class="st8" d="M-48.9-59c0.1-0.6-30.2-24-91-70.2c-6.6,7.9-15.1,22.8-17.9,33.1
												C-85.4-70.7-49.1-58.4-48.9-59z"></path>
											<linearGradient id="_x31_st-copy-2_1_" gradientUnits="userSpaceOnUse" x1="-101.7702" y1="-6.9153" x2="-102.7702" y2="-7.9153" gradientTransform="matrix(17.6164 0 0 -32.0238 1652.4612 -351.1338)">
												<stop offset="0" style="stop-color:#FCAE51"></stop>
												<stop offset="1" style="stop-color:#FD0B0B"></stop>
											</linearGradient>
											<path id="_x31_st-copy-2" class="st9" d="M-139.9-128.9c-7.5,9.6-13.5,20.4-17.6,32"></path>
										</g>
										<g id="protein" transform="translate(165.000000, 175.000000)" class="js-ketogenic-type js-ketogenic-protein">
											<g id="subtitle-wrap_3_" class="st2">
												<rect x="-154.8" y="-41.4" class="st3" width="208.9" height="20.3"></rect>
												<text id="subtitle_3_" transform="matrix(1 0 0 1 -50 -25)" class="st4 st5 st6 m-item-summary__graph-5-subtitle" fill="rgba(255, 255, 255, 0.5)"></text>
											</g>
											<g>
												<text fill="#B3FF3E"></text>
											</g>
											<radialGradient id="Oval-6-Copy_3_" cx="-97.7266" cy="-9.436" r="0.9927" gradientTransform="matrix(-3.4798 -114.9473 -114.9473 3.4798 -1473.5591 -11260.4668)" gradientUnits="userSpaceOnUse">
												<stop offset="0" style="stop-color:#86F515;stop-opacity:0"></stop>
												<stop offset="0.5059" style="stop-color:#86F515;stop-opacity:0"></stop>
												<stop offset="1" style="stop-color:#86F515;stop-opacity:0.1124"></stop>
											</radialGradient>
											<path id="Oval-6-Copy_1_" class="st10" d="M-48.9-59c0,0,13.4-35.9,40.3-107.8c-12.6-4.7-26.2-7.2-40.3-7.2
												c-34.5,0-65.5,15.1-86.6,39.1C-77.7-84.3-48.9-59-48.9-59z"></path>
											<linearGradient id="_x31_st-copy_2_" gradientUnits="userSpaceOnUse" x1="-98.6623" y1="-7.2465" x2="-99.3974" y2="-8.3579" gradientTransform="matrix(126.96 0 0 -39.56 12499.5596 -464.04)">
												<stop offset="0" style="stop-color:#D3FF2A"></stop>
												<stop offset="1" style="stop-color:#1FD812"></stop>
											</linearGradient>
											<path id="_x31_st-copy_1_" class="st11" d="M-8.5-166.7c-12.6-4.7-26.1-7.3-40.3-7.3c-34.5,0-65.5,15.3-86.6,39.6"></path>
										</g>
										<g id="fat" transform="translate(165.000000, 175.000000)" class="js-ketogenic-type js-ketogenic-fats">
										</g>
									</svg>
									<p>75% Fats</p>
									<g style="padding-left: 50px;margin-top: 50px">
										<text text-anchor="middle" alignment-baseline="central" transform="matrix(1 0 0 1 -50 -65)" fill="#0DADFF">20% Protein</text>
									</g>
									<radialgradient id="Oval-6_1_" cx="-98.2001" cy="-9.1786" r="0.511" gradienttransform="matrix(1.347518e-14 -220.0664 -220.0663 -1.347518e-14 -2068.9111 -21669.293)" gradientunits="userSpaceOnUse">
										<stop offset="0" style="stop-color:#2CA8FF;stop-opacity:0">
											<stop offset="0.5059" style="stop-color:#2CA8FF;stop-opacity:0">
												<stop offset="1" style="stop-color:#2CA8FF;stop-opacity:0.1124">
												</stop>
											</stop>
										</stop>
									</radialgradient>
									<path id="Oval-6" class="st12" d="M-49,56C14.5,56,66,4.5,66-59c0-46.6-29-87-68.8-105.1C-33.6-94-49-59-49-59
										s-36.8-10.7-110.3-32.1c-2.9,10-4.7,21.2-4.7,32.1C-164,4.5-112.5,56-49,56z">
										<lineargradient id="fats_3_" gradientunits="userSpaceOnUse" x1="-99.1847" y1="-9.5446" x2="-98.3914" y2="-8.9482" gradienttransform="matrix(230 0 0 -219.88 22672 -2076.8)">
											<stop offset="0" style="stop-color:#30B3FD">
												<stop offset="1" style="stop-color:#0B43FD">
												</stop>
											</stop>
										</lineargradient>
										<path id="fats_2_" class="st13" d="M-159.4-91.1c-3,10.3-4.6,21.1-4.6,32.3C-164,4.6-112.5,56-49,56S66,4.6,66-58.8
											c0-47-28.3-87.3-68.7-105.1">
										</path>
									</path>
								</div>
								<div class="m-item-summary__bottom"><span>Percentage content of fat, protein and carbs</span></div>
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
