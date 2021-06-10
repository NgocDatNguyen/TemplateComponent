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
        htmlboxHomeFocus += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des +'</span></a>';
    });

    $('#nav-box-home-focus').html(htmlboxHomeFocus);

    //Box List Focus

    var boxListFocus = [
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

    $('#nav-box-list-focus').html(htmlboxListFocus);

    //Box Category

    var boxCategory = [
        {
            'name': 'Box Collum 3Item + Related',
            'des': 'VOV Category',
            'url': 'boxcategory1.html'
        },
        {
            'name': 'Box 1L4R 1Focus',
            'des': 'VOV Category',
            'url': 'boxcategory2.html'
        },
        {
            'name': 'Box List News Right',
            'des': 'VOV Category',
            'url': 'boxcategory3.html'
        },
        {
            'name': 'Box 8Item',
            'des': 'VOV Category',
            'url': 'boxcategory4.html'
        },
        {
            'name': 'Box 8Item',
            'des': 'VOV Category 2',
            'url': 'boxcategory5.html'
        },
        {
            'name': 'Box Slide',
            'des': 'VOV Category Slide',
            'url': 'boxcategory6.html'
        },
        {
            'name': 'Box 1L4R 1Focus',
            'des': 'VOV Category List',
            'url': 'boxcategory7.html'
        },
        {
            'name': 'Box 2L3R 1Focus',
            'des': 'VOV Category List',
            'url': 'boxcategory8.html'
        },
        {
            'name': 'Box List News Right',
            'des': 'VOV Category',
            'url': 'boxcategory9.html'
        },
        {
            'name': 'Box 1L4R 1Focus',
            'des': 'VOV Category',
            'url': 'boxcategory10.html'
        },
        {
            'name': 'Box Slide',
            'des': 'VOV Category Slide',
            'url': 'boxcategory11.html'
        }
    ];

    let htmlboxCategory = ''
    $.each(boxCategory, function (index, value) {
        htmlboxCategory += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });

    $('#nav-box-category').html(htmlboxCategory);

    //Box Stream

    var boxStream = [
        {
            'name': 'Box stream collum',
            'des': 'VOV Stream',
            'url': 'boxstream1.html'
        },
        {
            'name': 'Box stream row',
            'des': 'VOV Stream',
            'url': 'boxstream2.html'
        }
    ];

    let htmlboxStream = ''
    $.each(boxStream, function (index, value) {
        htmlboxStream += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });

    $('#nav-box-stream').html(htmlboxStream);

    //Box Stream Video

    var boxStreamVideo = [
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

    $('#nav-box-stream-video').html(htmlboxStreamVideo);

    //Box Detail

    var boxDetail = [
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

    $('#nav-box-detail').html(htmlboxDetail);

    //Box Breadcrumb

    var boxBreadcrumb = [
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

    $('#nav-box-breadcrumb').html(htmlboxBreadcrumb);
});