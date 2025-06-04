$(document).ready(function () {
  // --- Tampilkan data checkout ---
  const checkoutData = JSON.parse(localStorage.getItem('checkout')) || [];
  const items = Array.isArray(checkoutData) ? checkoutData : [checkoutData];

  if (items.length === 0) {
    $('#payment-items').html('<p class="text-center">No items to display.</p>');
    return;
  }

  let total = 0;
  items.forEach(item => {
    total += parseFloat(item.price);
    const html = `
      <div class="row mb-4 border-bottom pb-3">
        <div class="col-md-4 text-center">
          <img src="${item.image}" alt="${item.name}" style="max-width: 100%; height: auto;">
        </div>
        <div class="col-md-8">
          <h5>${item.name}</h5>
          <p class="text-danger font-weight-bold">${item.price}</p>
        </div>
      </div>
    `;
    $('#payment-items').append(html);
  });

  // --- Delivery Charge Mapping (berbasis Sukolilo) ---
  const districtChargeMap = {
    "Sukolilo": 0,
    "Mulyorejo": 3,
    "Gubeng": 4,
    "Rungkut": 4,
    "Tambaksari": 5,
    "Tegalsari": 6,
    "Dukuh Pakis": 7,
    "Sawahan": 7,
    "Wonokromo": 8,
    "Karang Pilang": 10
  };

  let deliveryCharge = 0;

  // Tampilkan total awal
  $('#item-count').text(items.length);
  $('#item-total').text(total.toFixed(3));
  $('#grand-total').text((total + deliveryCharge).toFixed(3));

  // Event: Ketika user memilih kecamatan
  $('#district-select').on('change', function () {
    const selectedDistrict = $(this).val();
    deliveryCharge = districtChargeMap[selectedDistrict] || 0;

    $('#delivery-charge-amount').text(deliveryCharge.toFixed(3));
    $('#grand-total').text((total + deliveryCharge).toFixed(3));
  });

  // Event: Tombol Save and Deliver Here
  $('#save-address-btn').on('click', function () {
    const name = $('input[placeholder="NAME"]').val();
    const phone = $('input[placeholder="10-digit mobile number"]').val();
    const district = $('#district-select').val();
    const address = $('input[placeholder="Address (Area and  Street)"]').val();

    if (!name || !phone || !district || !address) {
      alert('Silakan lengkapi semua data alamat.');
      return;
    }

    const userAddress = { name, phone, district, address };
    localStorage.setItem('userAddress', JSON.stringify(userAddress));

    // Tampilkan kembali tampilan non-edit
    $('.hide-for-front').css("display", "block");
    $('.show-for-front').css("display", "none");

    // Update alamat ditampilkan
    $('p:contains("user address")').text(`${address}, ${district}`);
  });

  // Event lainnya
  $("#button-hidder").click(function () {
    $(this).hide();
    $("#button-hidder-1").show();
    $("#collapseTwo,#payment-option").collapse("hide");
  });

  $("#button-hidder-1").click(function () {
    $("#button-hidder").show();
    $(this).hide();
  });

  $(".edit").click(function () {
    $(".hide-for-front").css("display", "none");
    $(".show-for-front").css("display", "block");
  });

  $(".call-back").click(function () {
    $(".hide-for-front").css("display", "block");
    $(".show-for-front").css("display", "none");
  });

  $("#phone-pe-hidder").click(function () {
    $("#debit,#net-banking,#cash").collapse("hide");
  });

  $("#debit-hidder").click(function () {
    $("#phonepe,#net-banking,#cash").collapse("hide");
  });

  $("#net-banking-hidder").click(function () {
    $("#phonepe,#cash,#debit").collapse("hide");
  });

  $("#cash-hidder").click(function () {
    $("#phonepe,#net-banking,#debit").collapse("hide");
  });

  $(".menu-bar").click(function () {
    $(".side-bar").css({ "width": "30%", "display": "block" });
  });

  $(".menu-bar-1").click(function () {
    $(".side-bar").css({ "width": "40%", "display": "block" });
  });

  $(".menu-bar-2").click(function () {
    $(".side-bar").css({ "width": "60%", "display": "block" });
  });

  $(".close").click(function () {
    $(".side-bar").css("width", "0%");
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("#top-containt").css("background", "#FD941E");
    } else {
      $("#top-containt").css("background", "#FD941E");
    }
  });

  $('.parallax-window').parallax({ imageSrc: 'desktop-1.jpg' });
});
