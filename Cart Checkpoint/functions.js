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

  TotalItem();
});

$(".like-btn").on("click", function () {
  $(this).toggleClass("is-active");
});

//delete

$(".delete-btn").on("click", function () {
  console.log("I'm heeeeeeeeeere");
  $(this).parent().parent().remove();

  TotalItem();
});

//sum item

// $('.btn-primary').on('click', function(e) {
//     e.preventDefault();

//     var $this = $(this);

//     var price = $(this).siblings(".uprice");
//     console.log($(this).siblings(".uprice").previousSibling.innerHTML)

//     var input = $this.closest('div').find('input');
//     var value = parseInt(input.val());
//     console.log(value)

//     var p = $(this).siblings(".price");
//     x=value
//     console.log(p.val())

// });

//sum items

function TotalItem() {
    
  var arr = document.getElementsByName("name");

  var scale = document.getElementsByName("uprice");

  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value != ""&&scale[i].getAttribute("value")!= "") {
      tot += parseInt(arr[i].value) * parseInt(scale[i].getAttribute("value"));
    }
  }
   document.getElementById("total-price").innerHTML = tot + "$";
  console.log(document.getElementById("total-price").innerHTML);
}
