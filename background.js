function formatDate(date) {
  var sec = date.getSeconds()
  var min = date.getMinutes()
  var hour = date.getHours()
  return hour + ':' + min + ':' + sec
}

// facebook
$("#pagelet_ego_pane").remove()

// amazon
$("#sx-top-slot").remove()
$(".s-result-item:contains('Sponsorisé')").remove()
$(".s-result-item:contains('Sponsored')").remove()
$(".s-result-item:contains('Best Sellers from popular brands')").remove()
$(".s-result-item:contains('Top Rated from Our Brands')").remove()
$(".s-result-item:contains('Expert Recommendations')").remove()
$(".s-result-item:contains('Video buying guides')").remove()
$(".s-result-item:contains('Amazon\\'s')").remove()

// google
$("#tads").remove()
$("#tvcaps").remove()
$("#rhs").remove()

(function(){
    var facebook_fr = $("div[data-fte='1']:contains('SpSonsSoriSséS')")
    var facebook_en = $("div[data-fte='1']:contains('SpSonSsoSredS')")

    facebook_fr.remove()
    facebook_en.remove()
    setTimeout(arguments.callee, 5000)
})()
