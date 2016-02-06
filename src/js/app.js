var apiUrl = 'https://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';

$(document).ready(function() {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0
  var yyyy = today.getFullYear();

  var month_words = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  var full_date = month_words[mm-1] + ' ' + dd + ', ' + yyyy;

  $('#currdate').html(full_date);

  $.getJSON(apiUrl, {
        country: 'united-states',
        start: '1972/3/7',
        end: yyyy + '/' + mm + '/' + dd,
        amount: 6000000,
        format: true
    }).done(function (data) {
        $('#newcost').html(data);
    });

});