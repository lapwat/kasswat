$('#pagelet_ego_pane').remove();
// $('#rightCol').empty();
(function(){
    var francais = $("div[data-fte='1']:contains('Sponsorisé')")
    var anglais = $("div[data-fte='1']:contains('Sponsored')")
    var n = francais.length + anglais.length
    francais.remove()
    anglais.remove()

    console.log(formatDate(new Date()) + ' : ' + n + ' éléments supprimés')

    setTimeout(arguments.callee, 10000);
})();

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var sec = date.getSeconds();
  var min = date.getMinutes();
  var hour = date.getHours();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ' ' + min + ' ' + sec;
}
