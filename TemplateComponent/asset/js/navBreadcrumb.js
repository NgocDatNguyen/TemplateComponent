$(document).ready(function () {

    //Box Breadcrumb

    var boxBreadcrumb = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
        {
            'name': 'Box Breadcrumb',
            'des': 'VOV Breadcrumb',
            'url': 'boxbreadcrumb1.html'
        },
    ];

    let htmlboxBreadcrumb = ''
    $.each(boxBreadcrumb, function (index, value) {
        htmlboxBreadcrumb += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });


    $('#nav-main').html(htmlboxBreadcrumb);


});