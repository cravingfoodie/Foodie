$(document).ready(function(){


$(document).ready(function () {
  const checkoutData = JSON.parse(localStorage.getItem('checkout')) || [];

  if (checkoutData.length === 0) {
    $('#payment-items').html('<p class="text-center">No items to display.</p>');
    return;
  }

  // Jika data adalah 1 objek (single product), jadikan array
  const items = Array.isArray(checkoutData) ? checkoutData : [checkoutData];

  items.forEach(item => {
    const html = `
      <div class="row mb-4 border-bottom pb-3">
        <div class="col-md-4 text-center">
          <img src="${item.image}" alt="${item.name}" style="max-width: 100%; height: auto;">
        </div>
        <div class="col-md-8">
          <h5>${item.name}</h5>
          <p class="text-danger font-weight-bold">Rp.${item.price}</p>
        </div>
      </div>
    `;
    $('#payment-items').append(html);
  });

  // Tampilkan total harga (opsional)
  let total = 0;
  items.forEach(item => total += parseFloat(item.price));
  $('#payment-items').append(`<h4 class="text-right">Total: Rp.${total.toFixed(2)}</h4>`);
});


$(document).ready(function () {
  const checkoutData = JSON.parse(localStorage.getItem('checkout')) || [];
  const items = Array.isArray(checkoutData) ? checkoutData : [checkoutData];

  let total = 0;

  items.forEach(item => {
    total += parseFloat(item.price);
  });

  $('#item-count').text(items.length);
  $('#item-total').text(total.toFixed(2));
  $('#grand-total').text(total.toFixed(2));
});








    $("#button-hidder").click(function(){
        $(this).hide();
        $("#button-hidder-1").show();
    });
    $("#button-hidder-1").click(function(){
        $("#button-hidder").show();
        $(this).hide();
    });
    $(".edit").click(function(){
        $(".hide-for-front").css("display","none");
        $(".show-for-front").css("display","block");
    });
    $(".call-back").click(function(){
        $(".hide-for-front").css("display","block");
        $(".show-for-front").css("display","none");
    });
    $("#button-hidder").click(function(){
        $("#collapseTwo,#payment-option").collapse("hide");
    });
    $("#phone-pe-hidder").click(function(){
        $("#debit,#net-banking,#cash").collapse("hide");
    })
    $("#debit-hidder").click(function(){
        $("#phonepe,#net-banking,#cash").collapse("hide");
    })
    $("#net-banking-hidder").click(function(){
        $("#phonepe,#cash,#debit").collapse("hide");
    })
    $("#cash-hidder").click(function(){
        $("#phonepe,#net-banking,#debit").collapse("hide");
    })

    $(".menu-bar").click(function(){
        $(".side-bar").css({"width":"30%","display":"block"});
    });
    $(".menu-bar-1").click(function(){
        $(".side-bar").css({"width":"40%","display":"block"});
    });
    $(".menu-bar-2").click(function(){
        $(".side-bar").css({"width":"60%","display":"block"});
    });
    $(".close").click(function(){
        $(".side-bar").css("width","0%");
    });
    $(window). scroll(function(){
        var scroll = $(window). scrollTop();
        if (scroll > 0) {
        $("#top-containt"). css("background" , "#FD941E");
        }
        else{
        $("#top-containt"). css("background" , "#FD941E");}})
    $('.parallax-window').parallax({imageSrc: 'desktop-1.jpg'});

})
