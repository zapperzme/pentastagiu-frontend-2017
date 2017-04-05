//Tema3 - jQuery

jQuery(document).ready(function() {
	
	//1
	jQuery("#accept").click(function() {
		jQuery("#submitbtn").removeAttr('disabled');
    });
   
    //2
	var maxLength = 100;
    jQuery('textarea').keyup(function() {
      var length = jQuery(this).val().length;
      jQuery("#caractere-ramase").html(maxLength - length); 
    });
	
	//3
	var colors = { 
        "color1": "Red", 
        "color2": "Green", 
        'color3': "Blue" 
    }; 

    jQuery("#dropdown").append(function() {
        return jQuery("<select>");
    });
      

    jQuery.each(colors, function(key, value) {
        return jQuery("#dropdown select")
            .append(jQuery('<option>', { value : key }).text(value)); 
        });
    });
	
	
	//4
	jQuery('.sub').each(function() {
		jQuery(this).replaceWith("<h1>" + jQuery(this).html() + "</h1>");
	});	
	
	
	//5
    jQuery('button').click(function() {
        jQuery("#tinta").submit(function() {
            alert("Submit was called for " + jQuery(this).attr('name')  + "!");
        });
    }); 	
	
	
	//6
	jQuery("#alt-buton").click(function() {
        jQuery("#tinta button").attr('disabled','disabled');
        jQuery("#tinta").submit(function() {
            alert("Submit was called for " + jQuery(this).attr('name')  + "!");
        });
    });
});