$(document).ready(function () {

    //Box Breadcrumb

    var boxDetail = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
        {
            'name': 'Box Detail News',
            'des': 'VOV Detail',
            'url': 'boxdetail1.html'
        },
    ];

    let htmlboxDetail = ''
    $.each(boxDetail, function (index, value) {
        htmlboxDetail += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });


    $('#nav-main').html(htmlboxDetail);


});