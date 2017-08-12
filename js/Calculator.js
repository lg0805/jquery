$(function(){

	$('.errorMessage').hide();

	$('#calculator').submit(function(){

		var quantity, price, tax, total;

		if ($('#quantity').val() > 0) {

			quantity = $('#quantity').val();
			$('#quantityP').removeClass('error');
			$('#quantityError').hide();

		} else {

			$('#quantityP').addClass('error');
			$('#quantityError').show();
		};

		if ($('#price').val() > 0) {

			price = $('#price').val();
			$('#priceP').removeClass('error');
			$('#priceError').hide();
		} else {

			$('#priceP').addClass('error');
			$('#priceError').show();

		};

		if($('#tax').val() > 0){

			tax = $('#tax').val();
			$('#taxP').removeClass('error');
			$('#taxError').hide();

		} else {

			$('#taxP').addClass('error');
			$('#taxError').show();
		}

		if(quantity && price && tax){

			total = quantity * price;
			total += total * (tax/100);

			$('#results').html("The total is <b>$" + total + ".</b>");
		}

		// $('#submit').attr('disabled', 'disabled');
		return false;
	})

	
})
