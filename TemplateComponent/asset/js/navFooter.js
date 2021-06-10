$(document).ready(function () {

    //Box Home Focus
    var boxFooter = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },

        {
            'name': 'Box Footer - Preview',
            'des': 'Box stream',
            'url': 'boxfooter-preview.html'
        },
        
        {
            'name': 'Box Footer 1 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'boxfooter1.html'
        },

        {
            'name': 'Box Footer 3 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'boxfooter3.html'
        },

        {
            'name': 'Box Footer 5 - (VnNews)',
            'des': 'Box stream',
            'url': 'boxfooter5.html'
        }
    ];

    let htmlboxFooter = ''
    $.each(boxFooter, function (index, value) {
        htmlboxFooter += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });

    $('#nav-main').html(htmlboxFooter);

});