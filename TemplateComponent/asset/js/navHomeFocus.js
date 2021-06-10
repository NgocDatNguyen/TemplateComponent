$(document).ready(function () {

    //Box Home Focus
    var boxHomeFocus = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
        {
            'name': 'Box 1T4B 1Focus',
            'des': 'DNTT Focus Home',
            'url': 'homefocus1.html'
        },
        {
            'name': 'Box List Collum',
            'des': 'DNTT nổi bật',
            'url': 'homefocus2.html'
        },
        {
            'name': 'Box 1T4B 1Focus',
            'des': 'VOV Focus Home',
            'url': 'homefocus3.html'
        },
        {
            'name': 'Box List Collum',
            'des': 'VOV nổi bật',
            'url': 'homefocus4.html'
        }
    ];

    let htmlboxHomeFocus = ''
    $.each(boxHomeFocus, function (index, value) {
        htmlboxHomeFocus += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });

    $('#nav-main').html(htmlboxHomeFocus);


});