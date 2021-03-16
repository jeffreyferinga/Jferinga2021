$('#currentDay').text(moment().format('LLL'));


$('.btn').on('click', function(){

    let textarea = $(this).siblings('textarea');

    let time = $(this).parent().attr('id');

    localStorage.setItem(time. textarea.val());

});

$('textarea').each(function () {

let currentArea = $(this);

let time = currentArea.parent().attr('id');

let currentHour = moment().hours();

console.log(time, currentHour)
if (time < currentHour) {
    currentArea.addClass('past')
    currentArea.removeClass('present')
    currentArea.removeClass('future')

} else if (time > currentHour) {
    currentArea.addClass('future')
    currentArea.removeClass('present')
    currentArea.removeClass('past')
} else {
    currentArea.addClass('present')
    currentArea.removeClass('past')
    currentArea.removeClass('future')
}
});
