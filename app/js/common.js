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

	$("#hourly_switcher").on("click", function () {
		$(".widget__input-group").removeClass("active");
		$(".return_trip_switcher-block").toggleClass("active");
		if ($(this).prop("checked")) {
			$(".hourly_trip").addClass("active");
			$("#return_trip_switcher").prop("checked", false);
		} else {
			$(".return_trip-first-row").addClass("active");
			if ($("#return_trip_switcher").prop("checked")) {
				$(".return_trip").addClass("active");
			}
		}
	});

	$("#return_trip_switcher").on("click", function () {
		if ($(this).prop("checked")) {
			$(".return_trip").addClass("active");
		} else {
			$(".return_trip").removeClass("active");
		}
	});

	$(".select-time").selectric({
		maxHeight: 170,
	});

	// Link to plugin https://fengyuanchen.github.io/datepicker/

	$('[data-toggle="datepicker"]').datepicker({
		format: "mm-dd-yyyy",
		autoHide: "true",
		startDate: new Date(),
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
