function formatDate(date) {
  var sec = date.getSeconds()
  var min = date.getMinutes()
  var hour = date.getHours()
  return hour + ':' + min + ':' + sec
}

$(".ego_column:contains('Sponsorisé'), .ego_column:contains('Sponsored'), .ego_column:contains('Pages suggérées'), .ego_column:contains('Suggested')").remove();

(function(){
    var francais = $("div[data-fte='1']:contains('Sponsorisé'), div[data-fte='1']:contains('Commandité')")
    var anglais = $("div[data-fte='1']:contains('Sponsored')")
    var n = francais.length + anglais.length
    francais.remove()
    anglais.remove()
    console.log(formatDate(new Date()) + ' => ' + n + ' éléments supprimés')
    setTimeout(arguments.callee, 5000)
})()
