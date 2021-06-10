$(document).ready(function () {

    //Box Breadcrumb
    var boxStream = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
        {
            'name': 'Box stream collum',
            'des': 'VOV Stream',
            'url': 'boxstream1.html'
        },
        {
            'name': 'Box stream row',
            'des': 'VOV Stream',
            'url': 'boxstream2.html'
        },
        {
            'name': 'Box stream collum',
            'des': 'ITC Stream',
            'url': 'boxstream3.html'
        }
    ];
    let htmlboxStream = ''
    $.each(boxStream, function (index, value) {
        htmlboxStream += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });


    $('#nav-main').html(htmlboxStream);
});