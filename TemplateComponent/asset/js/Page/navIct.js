$(document).ready(function () {

    //Box Home Focus
    var boxHomeFocus = [
        {
            'name': 'Box 1T4B 1Focus',
            'des': 'VOV Focus Home',
            'url': 'homefocus1.html'
        },
        {
            'name': 'Box List Collum',
            'des': 'VOV nổi bật',
            'url': 'homefocus2.html'
        }
    ];

    let htmlboxHomeFocus = ''
    $.each(boxHomeFocus, function (index, value) {
        htmlboxHomeFocus += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });

    $('#nav-box-home-focus').html(htmlboxHomeFocus);

    
});