function formatDate(date) {
  var sec = date.getSeconds()
  var min = date.getMinutes()
  var hour = date.getHours()
  return hour + ':' + min + ':' + sec
}

$('#pagelet_ego_pane').remove();

(function(){
    var francais = $("div[data-fte='1']:contains('Sponsorisé')")
    var anglais = $("div[data-fte='1']:contains('Sponsored')")
    var n = francais.length + anglais.length
    francais.remove()
    anglais.remove()
    console.log(formatDate(new Date()) + ' => ' + n + ' éléments supprimés')
    setTimeout(arguments.callee, 10000)
})()
