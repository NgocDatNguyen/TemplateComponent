$(document).ready(function () {

    //Box Breadcrumb
    var boxListFocus = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
        {
            'name': 'Box 1T2B 1Focus',
            'des': 'VOV Focus List',
            'url': 'listfocus1.html'
        }
    ];

    let htmlboxListFocus = ''
    $.each(boxListFocus, function (index, value) {
        htmlboxListFocus += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });
   

    $('#nav-main').html(htmlboxListFocus);
});