$(document).ready(function () {

    //Box Home Focus
    var boxHeader = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },

        {
            'name': 'Box Header - Preview',
            'des': 'Box stream',
            'url': 'boxheader-preview.html'
        },
        
        {
            'name': 'Box Header 1 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'boxheader1.html'
        },

        {
            'name': 'Box Header 3 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'boxheader3.html'
        },

        {
            'name': 'Box Header 5 - (VnNews)',
            'des': 'Box stream',
            'url': 'boxheader5.html'
        },
    ];

    let htmlboxHeader = ''
    $.each(boxHeader, function (index, value) {
        htmlboxHeader += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });

    $('#nav-main').html(htmlboxHeader);

});