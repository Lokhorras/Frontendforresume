$(function() {
    var mixer = mixitup('.directions__list');
    
    $('.directions__filter-btn').on('click', function() {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active'); // <- Добавлена кавычка
        $(this).addClass('directions__filter-btn--active');
    });
});