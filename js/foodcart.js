var cart = [];
var total_cost = 0;

$(document).ready(function() {
	
	$('.menu-item .add-to-cart').click(function(event) {
		event.preventDefault();
		// var cost = $('#chickensandwich h3').html();
		menu_item = $(this).parent().parent();
		console.log(menu_item.data('price'))
		console.log(menu_item.attr('id'))

		total_cost = Math.ceil((total_cost + menu_item.data('price'))* 100) / 100;
		cart_display = menu_item.children('h2').text() + "\t $ "+menu_item.data('price');
		$('#cart').html($('#cart').html() + '<li class="list-group-item">' + cart_display +'</li>')

		$('#cost').text("$ "+total_cost)
	});

	$('#paypage').ready(function() {
		$('#cartname').html($('#cartname').html() + $('h1').html())
	})
})

