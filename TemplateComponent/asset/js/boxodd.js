$(document).ready(function () {

    //Box Home Focus
    var boxHomeFocus = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },

        {
            'name': 'Box-Preview',
            'des': 'Box stream',
            'url': 'box-preview.html'
        },
        
        {
            'name': 'Box 1 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box1.html'
        },

        {
            'name': 'Box 3 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box3.html'
        },

        {
            'name': 'Box 5 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box5.html'
        },

        {
            'name': 'Box 7 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box7.html'
        },

        {
            'name': 'Box 9 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box9.html'
        },

        {
            'name': 'Box 11 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box11.html'
        },

        {
            'name': 'Box 13 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box13.html'
        },

        {
            'name': 'Box 15 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box15.html'
        },

        {
            'name': 'Box 17 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box17.html'
        },

        {
            'name': 'Box 19 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box19.html'
        },

        {
            'name': 'Box 21 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box21.html'
        },

        {
            'name': 'Box 23 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box23.html'
        },

        {
            'name': 'Box 25 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box25.html'
        },

        {
            'name': 'Box 27 - (Sức khỏe - Đời sống)',
            'des': 'Box stream',
            'url': 'box27.html'
        },


        {
            'name': 'Box 29 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'box29.html'
        },

        {
            'name': 'Box 31 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'box31.html'
        },

        {
            'name': 'Box 33 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'box33.html'
        },

        {
            'name': 'Box 35 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'box35.html'
        },

        {
            'name': 'Box 37 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'box37.html'
        },

        {
            'name': 'Box 39 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'box39.html'
        },

        {
            'name': 'Box 41 - (Hoa Đất Việt)',
            'des': 'Box stream',
            'url': 'box41.html'
        },

        {
            'name': 'Box 43 - (VnNews)',
            'des': 'Box stream',
            'url': 'box43.html'
        },

        {
            'name': 'Box 45 - (VnNews)',
            'des': 'Box stream',
            'url': 'box45.html'
        },

        {
            'name': 'Box 47 - (VnNews)',
            'des': 'Box stream',
            'url': 'box47.html'
        },

        {
            'name': 'Box 49 - (VnNews)',
            'des': 'Box stream',
            'url': 'box49.html'
        },

        {
            'name': 'Box 51 - (VnNews)',
            'des': 'Box stream',
            'url': 'box51.html'
        },

        {
            'name': 'Box 53 - (VnNews)',
            'des': 'Box stream',
            'url': 'box53.html'
        },

        {
            'name': 'Box 55 - (VnNews)',
            'des': 'Box stream',
            'url': 'box55.html'
        },

        {
            'name': 'Box 57 - (VnNews)',
            'des': 'Box stream',
            'url': 'box57.html'
        },

        {
            'name': 'Box 59 - (VnNews)',
            'des': 'Box stream',
            'url': 'box59.html'
        },

    ];

    let htmlboxHomeFocus = ''
    $.each(boxHomeFocus, function (index, value) {
        htmlboxHomeFocus += '<a href="' + value.url + '" class="link">' + value.name + '<span class="des">' + value.des + '</span></a>';
    });

    $('#nav-main').html(htmlboxHomeFocus);

});