$(document).ready(function () {

    //Box Breadcrumb
    var boxSubRight = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
        {
            'name': 'Box List News Right',
            'des': 'VOV Sub Right',
            'url': 'boxright1.html'
        },
        {
            'name': 'Box List Video Right',
            'des': 'VOV Sub Right',
            'url': 'boxright2.html'
        },
        {
            'name': 'Box List Right',
            'des': 'ICT Sub Right',
            'url': 'boxright3.html'
        },
        {
            'name': 'Box List Right',
            'des': 'ICT Sub Right',
            'url': 'boxright4.html'
        },
    ];
    let htmlboxRight = ''
    $.each(boxSubRight, function (index, value) {
        htmlboxRight += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });


    $('#nav-main').html(htmlboxRight);
});