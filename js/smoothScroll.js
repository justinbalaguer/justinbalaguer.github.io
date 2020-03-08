$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
            if (this.hash == "#home") {
                $('#home_icon').removeClass('text-white');
                $('#projects_icon').removeClass('text-white');
                $('#about_icon').removeClass('text-white');
                $('#contact_icon').removeClass('text-white');

                $('#projects_icon').addClass('text-white');
                $('#about_icon').addClass('text-white');
                $('#contact_icon').addClass('text-white');
            } else if (this.hash == "#projects") {
                $('#projects_icon').removeClass('text-white');
                $('#home_icon').removeClass('text-white');
                $('#about_icon').removeClass('text-white');
                $('#contact_icon').removeClass('text-white');

                $('#home_icon').addClass('text-white');
                $('#about_icon').addClass('text-white');
                $('#contact_icon').addClass('text-white');
            } else if (this.hash == "#about") {
                $('#about_icon').removeClass('text-white');
                $('#home_icon').removeClass('text-white');
                $('#projects_icon').removeClass('text-white');
                $('#contact_icon').removeClass('text-white');

                $('#home_icon').addClass('text-white');
                $('#projects_icon').addClass('text-white');
                $('#contact_icon').addClass('text-white');
            } else if (this.hash == "#contact") {
                $('#contact_icon').removeClass('text-white');
                $('#home_icon').removeClass('text-white');
                $('#projects_icon').removeClass('text-white');
                $('#about_icon').removeClass('text-white');

                $('#home_icon').addClass('text-white');
                $('#projects_icon').addClass('text-white');
                $('#about_icon').addClass('text-white');
            }
        }
    });
});