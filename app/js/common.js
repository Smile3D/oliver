import $ from "jquery";
window.jQuery = $;
window.$ = $;
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

document.addEventListener("DOMContentLoaded", () => {
	if (window.innerWidth < 1024) {
		$(".choose-lang").on("click", function () {
			$(".lang").toggleClass("open-drop-down-menu");

			$(document).on("click", function (event) {
				if (!$(event.target).closest(".lang").length) {
					$(".lang").removeClass("open-drop-down-menu");
				}
			});
		});
	}

	// Link to plugin https://fengyuanchen.github.io/datepicker/

	$('[data-toggle="datepicker"]').datepicker({
		format: "mm-dd-yyyy",
		autoHide: "true",
	});

	// Link to plugin https://timepicker.co/

	$(".timepicker").timepicker({
		timeFormat: "hh:mm p",
		interval: 5,
		minTime: "00:00",
		maxTime: "23:59",
		defaultTime: "00:00",
		startTime: "00:00",
		dynamic: false,
		dropdown: true,
		scrollbar: true,
	});
});
