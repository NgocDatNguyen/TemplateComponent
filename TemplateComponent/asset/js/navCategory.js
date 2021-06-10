$(document).ready(function () {

    //Box Breadcrumb
    var boxCategory = [
        {
            'name': 'Home',
            'des': 'Home',
            'url': '../home.html'
        },
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

    $('#nav-main').html(htmlboxCategory);
});