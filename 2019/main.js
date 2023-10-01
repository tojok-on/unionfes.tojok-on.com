(function() {
  $(document).ready(function() {
    var anchors = [
      "title",
      "band1",
      "band2",
      "band3",
      "band4",
      "band5",
      "band6",
      "band7",
      "band8",
      "band9",
      "about",
      "access",
      "price",
      "tshirt"
    ];
    $("#container").fullpage({
        anchors: anchors,
        menu: "#menu",
        continuousVertical: !0,
        scrollingSpeed: 700
    })
  })
}).call(this);
