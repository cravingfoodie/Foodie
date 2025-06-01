$(document).ready(function(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    $('#cart-items').html('<p class="text-center">Cart is empty.</p>');
  } else {
    cart.forEach(item => {
      const html = `
        <div class="row mb-4 border-bottom pb-3">
          <div class="col-md-4 text-center">
            <img src="${item.image}" alt="${item.name}" style="max-width: 100%; height: auto;">
          </div>
          <div class="col-md-8">
            <h5>${item.name}</h5>
            <p class="text-danger font-weight-bold">Rp.${item.price}</p>
            <p><a href="#" class="remove-item text-danger">Remove</a></p>
          </div>
        </div>
      `;
      $('#cart-items').append(html);
    });
  }


// cart.forEach((item, index) => {
//   const html = `
//     <div class="row mb-4 border-bottom pb-3 cart-item" data-index="${index}">
//       <div class="col-md-4 text-center">
//         <img src="${item.image}" alt="${item.name}" style="max-width: 100%; height: auto;">
//       </div>
//       <div class="col-md-8">
//         <h5>${item.name}</h5>
//         <p class="text-danger font-weight-bold">$${item.price}</p>
//         <p><a href="#" class="remove-item text-danger" data-index="${index}">Remove</a></p>
//       </div>
//     </div>
//   `;
//   $('#cart-items').append(html);
// });


$('#buy-now-from-cart').click(function () {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length > 0) {
    localStorage.setItem('checkout', JSON.stringify(cart)); // simpan semua cart ke checkout
  }
});




$(document).on('click', '.remove-item', function (e) {
  e.preventDefault();
  const index = $(this).data('index');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Hapus item dari array
  cart.splice(index, 1);

  // Simpan kembali cart ke localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Reload halaman untuk update tampilan
  location.reload();
});

$(this).closest('.cart-item').remove();







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
});


  





