function formatDate(date) {
  var sec = date.getSeconds()
  var min = date.getMinutes()
  var hour = date.getHours()
  return hour + ':' + min + ':' + sec
}

$("#pagelet_ego_pane").remove()

(function(){
    var facebook = $("div[data-fte='1']:not(:has(.timestampContent))")
    var google = $("#tvcap")
    facebook.remove()
    google.remove()
    setTimeout(arguments.callee, 5000)
})()
