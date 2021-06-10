$(document).ready(function () {

    //Box Breadcrumb

    var boxStreamVideo = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
        {
            'name': 'Box stream collum',
            'des': 'VOV Stream video',
            'url': 'boxstreamvideo1.html'
        },
    ];

    let htmlboxStreamVideo = ''
    $.each(boxStreamVideo, function (index, value) {
        htmlboxStreamVideo += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });


    $('#nav-main').html(htmlboxStreamVideo);


});