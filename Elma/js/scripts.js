window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    let intViewportWidth = window.innerWidth;
    if (
        document.body.scrollTop > 30 ||
        (document.documentElement.scrollTop > 30) && (intViewportWidth > 991)
    ) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (
		document.body.scrollTop < 30 ||
		(document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}