//
document.getElementsByClassName("body").onload = TotalItem();

//minus

$(".minus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
  $this = $(this).parent();
  sumitem($this);
  TotalItem();
});

//plus

$(".plus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
  $this = $(this).parent();
  sumitem($this);
  TotalItem();
});

$(".like-btn").on("click", function () {
  $(this).toggleClass("is-active");
});

//delete

$(".delete-btn").on("click", function () {
  $(this).parent().parent().remove();

  TotalItem();
});

//sum item

// $('.plus-btn').on('click',
function sumitem(a) {
  var $this = a;

  var uprice = parseInt($this.siblings(".uprice").text().substring(1));

  var input = $this.closest("div").find("input");
  var value = parseInt(input.val());

  //  var price = $this.siblings(".price");
  price = value * uprice;

  // $this.siblings(".price").val()=price
  $this.siblings(".price").text(price);
}

//sum items

function TotalItem() {
  var arr = document.getElementsByName("name");

  var scale = document.getElementsByName("uprice");

  var all = document.getElementsByName("price");

  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value != "" && scale[i].getAttribute("value") != "") {
      tot += parseInt(arr[i].value) * parseInt(scale[i].getAttribute("value"));
      all[i].innerHTML =
        "$" + parseInt(arr[i].value) * parseInt(scale[i].getAttribute("value"));
    }
  }
  document.getElementById("total-price").innerHTML = "$" + tot;
}
