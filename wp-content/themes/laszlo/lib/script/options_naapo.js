jQuery(document).ready(function($){ 
	"use strict";
	/* custom css */
	var _default_custom_css = jQuery('#enable_custom_css').val();
	jQuery('#enable_custom_css').change(function(){
		if (jQuery('#enable_custom_css').val() == "on"){
			jQuery('#enable_custom_css').closest('.option').next().next().fadeIn(500);
		} else {
			jQuery('#enable_custom_css').closest('.option').next().next().fadeOut(500);
		} 
	}).trigger('change');
	
	/* new related posts */
	var _default_related_posts_slider = jQuery('#laszlo_related_posts_slider').val();
	jQuery('#laszlo_related_posts_slider').change(function(){
		if (jQuery('#laszlo_related_posts_slider').val() == "on"){
			jQuery('#laszlo_related_posts_slider_nav').closest('.option')
				.add(jQuery('#laszlo_related_posts_slider_controlnav').closest('.option'))
				.add(jQuery('#laszlo_related_posts_slider_autoplay').closest('.option'))
			.fadeIn(500);
		} else {
			jQuery('#laszlo_related_posts_slider_nav').closest('.option')
				.add(jQuery('#laszlo_related_posts_slider_controlnav').closest('.option'))
				.add(jQuery('#laszlo_related_posts_slider_autoplay').closest('.option'))
			.fadeOut(500);
		}
	}).trigger('change');
	
	var _default_show_related_posts = jQuery('#laszlo_show_related_posts').val();
	jQuery('#laszlo_show_related_posts').change(function(){
		if (jQuery('#laszlo_show_related_posts').val() == "on"){
			jQuery(this).closest('.option').nextAll().fadeIn(500);
			jQuery('#laszlo_related_posts_slider').trigger('change');
		} else 
			jQuery(this).closest('.option').nextAll().fadeOut(500);
	}).trigger('change');
	
	/* website loader options */
	var _default_website_loader = jQuery('#laszlo_enable_website_loader').val();
	jQuery('#laszlo_enable_website_loader').change(function(){
		if (jQuery('#laszlo_enable_website_loader').val() == "on"){
			jQuery('.loaders-styles-holder').removeAttr('hidden');
			jQuery('#laszlo_website_loader').closest('.option').add(jQuery('#laszlo_enable_website_loader_percentage').closest('.option')).fadeIn(500);
		} else {
			jQuery('#laszlo_website_loader').closest('.option').add(jQuery('#laszlo_enable_website_loader_percentage').closest('.option')).fadeOut(500);
		}
	}).trigger('change');
	
	/* new global background */
	jQuery('#laszlo_global_bg_type').change(function(){
		switch (jQuery('#laszlo_global_bg_type').val()){
			case "color":
				jQuery('#laszlo_global_bg_type_color').closest('.option').css('display','block');
				jQuery('#laszlo_global_bg_type_image').closest('.option')
					.add(jQuery('#laszlo_global_bg_type_pattern').closest('.option'))
					.add(jQuery('#laszlo_global_bg_type_custom_pattern').closest('.option'))
				.css('display','none');
			break;
			case "image":
				jQuery('#laszlo_global_bg_type_image').closest('.option').css('display','block');
				jQuery('#laszlo_global_bg_type_color').closest('.option')
					.add(jQuery('#laszlo_global_bg_type_pattern').closest('.option'))
					.add(jQuery('#laszlo_global_bg_type_custom_pattern').closest('.option'))
				.css('display','none');
			break;
			case "pattern":
				jQuery('#laszlo_global_bg_type_pattern').closest('.option').css('display','block');
				jQuery('#laszlo_global_bg_type_color').closest('.option')
					.add(jQuery('#laszlo_global_bg_type_image').closest('.option'))
					.add(jQuery('#laszlo_global_bg_type_custom_pattern').closest('.option'))
				.css('display','none');
			break;
			case "custom_pattern":
				jQuery('#laszlo_global_bg_type_custom_pattern').closest('.option').css('display','block');
				jQuery('#laszlo_global_bg_type_color').closest('.option')
					.add(jQuery('#laszlo_global_bg_type_image').closest('.option'))
					.add(jQuery('#laszlo_global_bg_type_pattern').closest('.option'))
				.css('display','none');
			break;
		}	
	}).trigger('change');
	
	jQuery('#laszlo_body_type').closest('.option')
		.nextUntil( jQuery('#laszlo_layout_grid_lines_enable').parent().prev() )
		.not( jQuery('#laszlo_global_bg_type_color').closest('.option') )
	.fadeOut(500);
	jQuery('#laszlo_body_type').change(function(){
		if (jQuery(this).val() == 'body_boxed'){
			jQuery('#laszlo_body_type').closest('.option')
				.nextUntil( jQuery('#laszlo_layout_grid_lines_enable').parent().prev() )
				.not( jQuery('#laszlo_global_bg_type_color').closest('.option') )
			.fadeIn(500);
			jQuery('#laszlo_global_bg_type').trigger('change');
		} else {
			jQuery('#laszlo_global_bg_type').val('color').trigger('change');
			jQuery('#laszlo_body_type').closest('.option')
				.nextUntil( jQuery('#laszlo_layout_grid_lines_enable').parent().prev() )
				.not( jQuery('#laszlo_global_bg_type_color').closest('.option') )
			.fadeOut(500);
		}
	}).trigger('change');
	/* ENDOF new global background */
	
	/* 2020 layout grid lines */
	var _default_layout_grid_lines_enable = jQuery('#laszlo_layout_grid_lines_enable').val();
	jQuery('#laszlo_layout_grid_lines_enable').change(function(){
		if (jQuery(this).val() == 'on'){
			jQuery('#laszlo_layout_grid_lines_color').closest('.option')
				.add(jQuery('#laszlo_layout_grid_lines_opacity').closest('.option'))
			.fadeIn(500);
		} else {
			jQuery('#laszlo_layout_grid_lines_color').closest('.option')
				.add(jQuery('#laszlo_layout_grid_lines_opacity').closest('.option'))
			.fadeOut(500);
		}
	}).trigger('change');
	
	/* Gradient buttons */
	var _default_laszlo_gradient_button_enable = jQuery('#laszlo_gradient_button_enable').val();
	jQuery('#laszlo_gradient_button_enable').change(function(){
		if (jQuery(this).val() == 'on'){
			jQuery('#laszlo_gradient_button_enable_color1').closest('.option')
				.add(jQuery('#laszlo_gradient_button_enable_number_colors').closest('.option'))
				.add(jQuery('#laszlo_gradient_button_enable_color2').closest('.option'))
				.add(jQuery('#laszlo_gradient_button_enable_color3').closest('.option'))
				.add(jQuery('#laszlo_gradient_button_enable_color4').closest('.option'))
			.fadeIn(500);
		} else {
			jQuery('#laszlo_gradient_button_enable_color1').closest('.option')
				.add(jQuery('#laszlo_gradient_button_enable_number_colors').closest('.option'))
				.add(jQuery('#laszlo_gradient_button_enable_color2').closest('.option'))
				.add(jQuery('#laszlo_gradient_button_enable_color3').closest('.option'))
				.add(jQuery('#laszlo_gradient_button_enable_color4').closest('.option'))
			.fadeOut(500);
		}
	}).trigger('change');
	
	
	/* footer custom text editor */
	var submiter = jQuery('.textarea_wysiwyg_container input#submit');
		submiter.css('display','none');
	jQuery(document).on('click','input.save-button',function(){ jQuery('#laszlo_footer_custom_text_editor-tmce').trigger('click'); submiter.trigger('click'); });
		
	/* headers and menus */
	if (jQuery('.laszlo_fixed_menu').html() == 'on' && jQuery('.laszlo_header_shrink_effect').html() == 'on' && jQuery('.laszlo_header_after_scroll').html() == 'on'){
		jQuery('#laszlo_logo_after_scroll_size').closest('.option').prev().nextAll().addBack().css('display','block');
		jQuery('#laszlo_logo_font').closest('.option').nextUntil(jQuery('#laszlo_logo_margin_top').closest('.option')).addBack()
			.add(jQuery('#laszlo_logo_after_scroll_size').closest('.option').nextUntil(jQuery('#laszlo_logo_after_scroll_margin_top').closest('.option')).addBack())
			.css('display','none');
	} else {
		jQuery('#laszlo_logo_after_scroll_size').closest('.option').prev().nextAll().addBack().css('display','none');
		if (jQuery('.laszlo_header_after_scroll').html() == 'on'){

		} else {
			jQuery('#laszlo_headerbg_after_scroll_type_light').closest('.option').prev().nextAll().addBack().css('display','none');
			jQuery('#laszlo_headerbg_after_scroll_type_dark').closest('.option').prev().nextAll().addBack().css('display','none');

		}
	}
	
	/* logo type */
/* 	if (jQuery('.laszlo_logo_type.hidden').html() != 'text') */ jQuery('#laszlo_logo_font').closest('.option').nextUntil(jQuery('#laszlo_logo_margin_top').closest('.option')).addBack()
		.add(jQuery('#laszlo_logo_after_scroll_size').closest('.option').nextUntil(jQuery('#laszlo_logo_after_scroll_margin_top').closest('.option')).addBack())
		.css('display','none');
	
	if (jQuery('.laszlo_header_after_scroll').html() == 'on'){
		//menu
		if (jQuery('.laszlo_header_shrink_effect').html() == 'off'){
			jQuery('#laszlo_menu_after_scroll_font_size').closest('.option')
				.add(jQuery('#laszlo_menu_after_scroll_margin_top').closest('.option'))
				.add(jQuery('#laszlo_menu_after_scroll_padding_bottom').closest('.option'))
			.css('display','none');
		}
		//background afterscroll options
		jQuery('#laszlo_headerbg_after_scroll_type').change(function(){
			switch (jQuery('#laszlo_headerbg_after_scroll_type').val()){
				case "color":
					jQuery('#laszlo_headerbg_after_scroll_color').closest('.option')
						.add(jQuery('#laszlo_headerbg_after_scroll_opacity').closest('.option'))
					.css('display','block');
					jQuery('#laszlo_headerbg_after_scroll_image').closest('.option')
						.add(jQuery('#laszlo_headerbg_after_scroll_pattern').closest('.option'))
						.add(jQuery('#laszlo_headerbg_after_scroll_custom_pattern').closest('.option'))
					.css('display','none');
				break;
				case "image":
					jQuery('#laszlo_headerbg_after_scroll_image').closest('.option').css('display','block');
					jQuery('#laszlo_headerbg_after_scroll_color').closest('.option')
						.add(jQuery('#laszlo_headerbg_after_scroll_pattern').closest('.option'))
						.add(jQuery('#laszlo_headerbg_after_scroll_custom_pattern').closest('.option'))
						.add(jQuery('#laszlo_headerbg_after_scroll_opacity').closest('.option'))
					.css('display','none');
				break;
				case "pattern":
					jQuery('#laszlo_headerbg_after_scroll_pattern').closest('.option').css('display','block');
					jQuery('#laszlo_headerbg_after_scroll_color').closest('.option')
						.add(jQuery('#laszlo_headerbg_after_scroll_image').closest('.option'))
						.add(jQuery('#laszlo_headerbg_after_scroll_custom_pattern').closest('.option'))
						.add(jQuery('#laszlo_headerbg_after_scroll_opacity').closest('.option'))
					.css('display','none');
				break;
				case "custom_pattern":
					jQuery('#laszlo_headerbg_after_scroll_pattern').closest('.option').css('display','block');
					jQuery('#laszlo_headerbg_after_scroll_color').closest('.option')
						.add(jQuery('#laszlo_headerbg_after_scroll_image').closest('.option'))
						.add(jQuery('#laszlo_headerbg_after_scroll_custom_pattern').closest('.option'))
						.add(jQuery('#laszlo_headerbg_after_scroll_opacity').closest('.option'))
					.css('display','none');
				break;
			}	
		});
		jQuery('#laszlo_headerbg_after_scroll_type').trigger('change');	
	} else {
		// no after scroll neither shrink 
		jQuery('#laszlo_menu_after_scroll_font_size').closest('.option').prev().nextAll().addBack().css('display','none');
	}

	jQuery('#laszlo_social_icons_style_four').closest('.option').next().find('p').appendTo(jQuery('#laszlo_social_icons_style_four').closest('.option'));
	jQuery('#laszlo_social_icons_style_four').closest('.option').next().remove();
	jQuery('#laszlo_social_icons_style_four').siblings('p').css({'clear':'both','float':'left'});

	/*limit portfolio custom permalink*/
	jQuery('#laszlo_portfolio_permalink').attr('maxlength',20);
	jQuery('#laszlo_portfolio_permalink').closest('.option').next().css({
		'margin-top': '-15px',
		'z-index': 81,
		'background': 'white',
		'border-bottom': '1px solid #EDEDED',
		'color':'#999'
	});

	/* header style type */
	jQuery('#laszlo_header_style_type').closest('.option').css('display','none');
	jQuery('#laszlo_header_style_type option').each(function(e){
		if (jQuery(this).is(':selected')){
			jQuery(this).closest('.option').before('<div class="screenshot_container selected"><span class="style-'+parseInt(e,10)+'" /></span></div>');
		} else {
			jQuery(this).closest('.option').before('<div class="screenshot_container"><span class="style-'+parseInt(e,10)+'" /></span></div>');
		}
	});
	jQuery('#laszlo_header_style_type').parents('.sub-navigation-container').on("click", "span", function(){
		var idx = jQuery(this).attr('class').split('le-');
		jQuery('#laszlo_header_style_type').val( jQuery('#laszlo_header_style_type option').eq(idx[1]).val() );
		jQuery(this).parent().addClass('selected').siblings().removeClass('selected');
	});
	/* endof header style type */
	

	var def_sidebars = jQuery('#sidebar_name_list').html();

	jQuery('#tab_navigation-9-customcss textarea').keydown(function(e) {
	    if(e.keyCode === 9) { // tab was pressed
	        // get caret position/selection
	        var start = this.selectionStart;
	        var end = this.selectionEnd;
	
	        var $this = $(this);
	        var value = $this.val();
	
	        $this.val(value.substring(0, start)
	                    + "\t"
	                    + value.substring(end));
	
	        this.selectionStart = this.selectionEnd = start + 1;
	        e.preventDefault();
	    }
	});

	jQuery('#laszlo_export_options_button, #laszlo_export_style_options_button').css('top',0).closest('.option').find('br').remove();

	/*panel options*/
	jQuery('#laszlo_import_options_button').closest('.option').append('<a class="laszlo-button custom-option-button" style="position: relative; float: left; clear: both; margin-top: 20px;" id="laszlo_apply_imported_settings_button" ><span>Apply Settings</span></a>');
	jQuery('#laszlo_import_options_button').siblings('.laszlo-button').on('click',function(){
		var confirm = window.confirm("This will replace all your panel options.\n\rAre you sure?");
		if (confirm==true){
		 	var xmlPath = jQuery('#laszlo_import_options').val();
			jQuery.ajax({
				url: "admin-ajax.php",
				dataType: "json",
				type: 'POST',
				data: {
					xmlPath: xmlPath,
					thepath: window.laszloOptions.homePATH!=""?window.laszloOptions.homePATH:jQuery('#homePATH2').html(),
					action: 'call_naapo_load_settings',
					security: jQuery('#laszlo-theme-options').val()
				},
				error: function () {
				
				},
				success: function (c) {
					window.location = window.location;
				}
			});
		}
	});
	jQuery('#laszlo_reset_options_button').unbind().css({
		'position':'relative',
		'float':'left',
		'display':'inline-block',
		'clear':'both'
	});
	jQuery('#laszlo_reset_options_button').siblings('ul').css('display','none');
	jQuery(document).on('click','#laszlo_reset_options_button',function(e){
		e.stopPropagation();
		e.preventDefault();
		var confirm = window.confirm("Are you sure?");
		if (confirm == true){
		 	var xmlPath = window.laszloOptions.templatepath+"/laszlo_original_panel_options.xml";
			jQuery.ajax({
				url: "admin-ajax.php",
				dataType: "json",
				type: 'POST',
				data: {
					xmlPath: xmlPath,
					thepath: window.laszloOptions.homePATH!=""?window.laszloOptions.homePATH:jQuery('#homePATH2').html(),
					action: 'call_naapo_load_settings',
					naapo_action: 'reset',
					security: jQuery('#laszlo-theme-options').val()
				},
				error: function () {
				
				},
				success: function (c) {
					window.location = window.location;
				}
			});
			jQuery(this).siblings('ul').remove();
		} else {
			return false;
		}
	});
	
	/*panel style options*/
	jQuery('#laszlo_import_style_options_button').closest('.option').append('<a class="laszlo-button custom-option-button" style="position: relative; float: left; clear: both; margin-top: 20px;" id="laszlo_apply_imported_style_settings_button" ><span>Apply Settings</span></a>');
	jQuery('#laszlo_import_style_options_button').siblings('.laszlo-button').on('click',function(){
		var confirm = window.confirm("This will replace all your panel options.\n\rAre you sure?");
		if (confirm==true){
		 	var xmlPath = jQuery('#laszlo_import_style_options').val();
			jQuery.ajax({
				url: "admin-ajax.php",
				dataType: "json",
				type: 'POST',
				data: {
					xmlPath: xmlPath,
					thepath: window.laszloOptions.homePATH!=""?window.laszloOptions.homePATH:jQuery('#homePATH2').html(),
					action: 'call_naapo_load_settings',
					security: jQuery('#laszlo-theme-style-options').val()
				},
				error: function () {
				
				},
				success: function (c) {
					window.location = window.location;
				}
			});
		}
	});
	jQuery('#laszlo_reset_style_options_button').unbind().css({
		'position':'relative',
		'float':'left',
		'display':'inline-block',
		'clear':'both'
	});
	jQuery('#laszlo_reset_style_options_button').siblings('ul').css('display','none');
	jQuery(document).on('click', '#laszlo_reset_style_options_button', function(e){
		e.stopPropagation();
		e.preventDefault();
		var confirm = window.confirm("Are you sure?");
		if (confirm == true){
		 	var xmlStylePath = window.laszloOptions.templatepath+"/laszlo_original_panel_style_options.xml";
			jQuery.ajax({
				url: "admin-ajax.php",
				dataType: "json",
				type: 'POST',
				data: {
					xmlStylePath: xmlStylePath,
					thepath: window.laszloOptions.homePATH!=""?window.laszloOptions.homePATH:jQuery('#homePATH2').html(),
					action: 'call_naapo_load_settings',
					naapo_action: 'reset',
					security: jQuery('#laszlo-theme-style-options').val()
				},
				error: function () {
				
				},
				success: function (c) {
					window.location = window.location;
				}
			});
			jQuery(this).siblings('ul').remove();
		} else {
			return false;
		}
	});
	
	var _default_menu_add_border = jQuery('#laszlo_menu_add_border').val();
	jQuery('#laszlo_menu_add_border').change(function(){
		if (jQuery(this).val() == "on"){
			jQuery('#laszlo_menu_border_color').closest('.option').fadeIn(500);
		} else {
			jQuery('#laszlo_menu_border_color').closest('.option').fadeOut(500);
		}
	}).trigger('change');
	
	var _default_ajax_search = jQuery('#laszlo_enable_ajax_search').val();
	jQuery('#laszlo_enable_ajax_search').change(function(){
		if (jQuery(this).val() == "on"){
			jQuery('#laszlo_search_show_author').closest('.option').prev().nextAll().addBack().fadeIn(500);
		} else jQuery('#laszlo_search_show_author').closest('.option').prev().nextAll().addBack().fadeOut(500);
	}).trigger('change');
	
	var _default_search = jQuery('#laszlo_enable_search').val();
	jQuery('#laszlo_enable_search').change(function(){
		if (jQuery(this).val() == "on" ){
			jQuery(this).closest('.option').nextUntil(jQuery('#laszlo_search_sidebars_available').closest('.option').next()).fadeIn(500);
			jQuery('#laszlo_enable_ajax_search').trigger('change');
		} else jQuery(this).closest('.option').nextAll().fadeOut(500);
	}).trigger('change');
	
	var _default_footer_display_social_icons = jQuery('#laszlo_footer_display_social_icons').val();
	jQuery('#laszlo_footer_display_social_icons').change(function(){
		if (jQuery(this).val() == 'on'){
			jQuery('#laszlo_footer_social_icons_alignment').closest('.option').fadeIn(500);
		} else {
			jQuery('#laszlo_footer_social_icons_alignment').closest('.option').fadeOut(500);
		}
	}).trigger('change');
	
	var _default_footer_display_custom_text = jQuery('#laszlo_footer_display_custom_text').val();
	jQuery('#laszlo_footer_display_custom_text').change(function(){
		if (jQuery(this).val() == 'on'){
			jQuery('#laszlo_footer_custom_text').closest('.option').add(jQuery('#laszlo_footer_custom_text_alignment').closest('.option')).fadeIn(500);
		} else {
			jQuery('#laszlo_footer_custom_text').closest('.option').add(jQuery('#laszlo_footer_custom_text_alignment').closest('.option')).fadeOut(500);
		}
	}).trigger('change');
	
	var _default_footer_display_logo = jQuery('#laszlo_footer_display_logo').val();
	jQuery('#laszlo_footer_display_logo').change(function(){
		if (jQuery(this).val() == 'on'){
			jQuery(this).closest('.option').nextUntil(jQuery('#laszlo_footer_display_social_icons').closest('.option')).css('display','block');
		} else {
			jQuery(this).closest('.option').nextUntil(jQuery('#laszlo_footer_display_social_icons').closest('.option')).css('display','none');
		}
	}).trigger('change');
	


	
	var _default_under_construction = jQuery('#laszlo_enable_under_construction').val();
	if (_default_under_construction === "on"){
		jQuery('#laszlo_under_construction_page').closest('.option').fadeIn(500);
	} else {
		jQuery('#laszlo_under_construction_page').closest('.option').fadeOut(500);
	}
	jQuery('#laszlo_enable_under_construction').change(function(){
		if (_default_under_construction === "on"){
			jQuery('#laszlo_under_construction_page').closest('.option').fadeIn(500);
		} else {
			jQuery('#laszlo_under_construction_page').closest('.option').fadeOut(500);
		}		
	});
	
	var _default_animate_thumbnails = jQuery('#laszlo_animate_thumbnails').val();
	if (_default_animate_thumbnails === "on"){
		jQuery('#laszlo_thumbnails_effect').closest('.option').fadeIn(500);
	} else {
		jQuery('#laszlo_thumbnails_effect').closest('.option').fadeOut(500);
	}
	jQuery('#laszlo_animate_thumbnails').change(function(){
		if (_default_animate_thumbnails === "on"){
			jQuery('#laszlo_thumbnails_effect').closest('.option').fadeIn(500);
		} else {
			jQuery('#laszlo_thumbnails_effect').closest('.option').fadeOut(500);
		}
	});
	
	var _default_body_shadow = jQuery('#laszlo_body_shadow').val();
	if (_default_body_shadow === "on"){
		jQuery('#laszlo_body_shadow').closest('.option').next().fadeIn(500).removeClass('optoff');
	} else {
		jQuery('#laszlo_body_shadow').closest('.option').next().fadeOut(500).addClass('optoff');
	}
	jQuery('#laszlo_body_shadow').change(function(){
		if (_default_body_shadow === "on"){
			jQuery('#laszlo_body_shadow').closest('.option').next().fadeIn(500).removeClass('optoff');
		} else {
			jQuery('#laszlo_body_shadow').closest('.option').next().fadeOut(500).addClass('optoff');
		}
	});
	
	var _default_headerbg_type_light = jQuery('#laszlo_headerbg_type_light').val();
	switch (_default_headerbg_type_light){
		case "color":
			jQuery('#laszlo_headerbg_image_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_color_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_opacity_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_headerbg_image_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_color_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_headerbg_image_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_color_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
		break;
		case "custom_pattern":
			jQuery('#laszlo_headerbg_image_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_color_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);		
		break;
	}
	jQuery('#laszlo_headerbg_type_light').change(function(){
		switch (_default_headerbg_type_light){
			case "color":
				jQuery('#laszlo_headerbg_image_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_color_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_opacity_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_headerbg_image_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_color_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_headerbg_image_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_color_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
			break;
			case "custom_pattern":
				jQuery('#laszlo_headerbg_image_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_color_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_custom_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);		
			break;
		}
	});


	var _default_headerbg_after_scroll_type_light = jQuery('#laszlo_headerbg_after_scroll_type_light').val();
	switch (_default_headerbg_after_scroll_type_light){
		case "color":
			jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
		break;
		case "custom_pattern":
			jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);		
		break;
	}
	jQuery('#laszlo_headerbg_after_scroll_type_light').change(function(){
		switch (_default_headerbg_after_scroll_type_light){
			case "color":
				jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
			break;
			case "custom_pattern":
				jQuery('#laszlo_headerbg_after_scroll_image_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_color_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_light').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_light').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_light').closest('.option').removeClass('optoff').fadeIn(500);		
			break;
		}
	});

	
	var _default_headerbg_type_dark = jQuery('#laszlo_headerbg_type_dark').val();
	switch (_default_headerbg_type_dark){
		case "color":
			jQuery('#laszlo_headerbg_image_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_color_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_opacity_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_headerbg_image_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_color_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_headerbg_image_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_color_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
		break;
		case "custom_pattern":
			jQuery('#laszlo_headerbg_image_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_color_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);		
		break;
	}
	jQuery('#laszlo_headerbg_type_dark').change(function(){
		switch (_default_headerbg_type_dark){
			case "color":
				jQuery('#laszlo_headerbg_image_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_color_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_opacity_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_headerbg_image_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_color_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_headerbg_image_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_color_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
			break;
			case "custom_pattern":
				jQuery('#laszlo_headerbg_image_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_color_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_custom_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);		
			break;
		}
	});
	
	var _default_headerbg_after_scroll_type_dark = jQuery('#laszlo_headerbg_after_scroll_type_dark').val();
	switch (_default_headerbg_after_scroll_type_dark){
		case "color":
			jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
		break;
		case "custom_pattern":
			jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);		
		break;
	}
	jQuery('#laszlo_headerbg_after_scroll_type_dark').change(function(){
		switch (_default_headerbg_after_scroll_type_dark){
			case "color":
				jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
			break;
			case "custom_pattern":
				jQuery('#laszlo_headerbg_after_scroll_image_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_color_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_opacity_dark').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_pattern_dark').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_headerbg_after_scroll_custom_pattern_dark').closest('.option').removeClass('optoff').fadeIn(500);		
			break;
		}
	});
	
	
	var _default_toppanelbg_type = jQuery('#laszlo_toppanelbg_type').val();
	switch (_default_toppanelbg_type){
		case "color":
			jQuery('#laszlo_toppanelbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_toppanelbg_color').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_toppanelbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_toppanelbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_toppanelbg_image').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_toppanelbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_toppanelbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_toppanelbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_toppanelbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_toppanelbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_toppanelbg_pattern').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_toppanelbg_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
		break;
	}
	jQuery('#laszlo_toppanelbg_type').change(function(){
		switch (_default_toppanelbg_type){
			case "color":
				jQuery('#laszlo_toppanelbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_toppanelbg_color').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_toppanelbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_toppanelbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_toppanelbg_image').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_toppanelbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_toppanelbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_toppanelbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_toppanelbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_toppanelbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_toppanelbg_pattern').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_toppanelbg_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
			break;
		}
	});
	
	var _default_sec_footerbg_type = jQuery('#laszlo_sec_footerbg_type').val();
	switch (_default_sec_footerbg_type){
		case "color":
			jQuery('#laszlo_sec_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_color').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_sec_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_sec_footerbg_image').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_sec_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_sec_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_pattern').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
		break;
		case "custom_pattern":
			jQuery('#laszlo_sec_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_pattern').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
		break;
	}
	jQuery('#laszlo_sec_footerbg_type').change(function(){
		switch (_default_sec_footerbg_type){
			case "color":
				jQuery('#laszlo_sec_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_color').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_sec_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_sec_footerbg_image').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_sec_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_sec_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_pattern').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
			break;
			case "custom_pattern":
				jQuery('#laszlo_sec_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_pattern').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_sec_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_sec_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
			break;
		}
	});
	
	
	var _default_footerbg_type = jQuery('#laszlo_footerbg_type').val();
	switch (_default_footerbg_type){
		case "color":
			jQuery('#laszlo_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_color').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_footerbg_image').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_pattern').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeOut(500);
		break;
		case "custom_pattern":
			jQuery('#laszlo_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_pattern').closest('.option').removeClass('optoff').fadeOut(500);
			jQuery('#laszlo_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
		break;
	}
	jQuery('#laszlo_footerbg_type').change(function(){
		switch (_default_footerbg_type){
			case "color":
				jQuery('#laszlo_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_color').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_footerbg_image').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_pattern').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeOut(500);
			break;
			case "custom_pattern":
				jQuery('#laszlo_footerbg_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_color_opacity').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_pattern').closest('.option').removeClass('optoff').fadeOut(500);
				jQuery('#laszlo_footerbg_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
			break;
		}
	});
	
	var _default_twitter_newsletter_type = jQuery('#laszlo_twitter_newsletter_type').val();
	switch (_default_twitter_newsletter_type){
		case "color":
			jQuery('#laszlo_twitter_newsletter_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_twitter_newsletter_color').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_twitter_newsletter_pattern').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_twitter_newsletter_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "image":
			jQuery('#laszlo_twitter_newsletter_image').closest('.option').removeClass('optoff').fadeIn(500);
			jQuery('#laszlo_twitter_newsletter_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_twitter_newsletter_pattern').closest('.option').addClass('optoff').fadeOut(500);	
			jQuery('#laszlo_twitter_newsletter_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
		break;
		case "pattern":
			jQuery('#laszlo_twitter_newsletter_image').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_twitter_newsletter_color').closest('.option').addClass('optoff').fadeOut(500);
			jQuery('#laszlo_twitter_newsletter_pattern').closest('.option').removeClass('optoff').fadeIn(500);		
			jQuery('#laszlo_twitter_newsletter_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
		break;
	}
	jQuery('#laszlo_twitter_newsletter_type').change(function(){
		switch (_default_twitter_newsletter_type){
			case "color":
				jQuery('#laszlo_twitter_newsletter_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_twitter_newsletter_color').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_twitter_newsletter_pattern').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_twitter_newsletter_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "image":
				jQuery('#laszlo_twitter_newsletter_image').closest('.option').removeClass('optoff').fadeIn(500);
				jQuery('#laszlo_twitter_newsletter_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_twitter_newsletter_pattern').closest('.option').addClass('optoff').fadeOut(500);	
				jQuery('#laszlo_twitter_newsletter_custom_pattern').closest('.option').addClass('optoff').fadeOut(500);
			break;
			case "pattern":
				jQuery('#laszlo_twitter_newsletter_image').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_twitter_newsletter_color').closest('.option').addClass('optoff').fadeOut(500);
				jQuery('#laszlo_twitter_newsletter_pattern').closest('.option').removeClass('optoff').fadeIn(500);		
				jQuery('#laszlo_twitter_newsletter_custom_pattern').closest('.option').removeClass('optoff').fadeIn(500);
			break;
		}
	});
	
	//style > body - body layout type
	var _default_body_layout_type = jQuery('#laszlo_body_layout_type').val();
	if (_default_body_layout_type === "full"){
		jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().next().fadeOut(500);
		jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().fadeOut(500);
		jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().fadeOut(500);
		jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().fadeOut(500);
		jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().fadeOut(500);
		jQuery('#laszlo_body_layout_type').closest('.option').next().next().fadeOut(500);
		jQuery('#laszlo_body_layout_type').closest('.option').next().fadeOut(500);
	} else {
		if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().next().hasClass('optoff'))
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().next().fadeIn(500);
		if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().hasClass('optoff'))
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().fadeIn(500);
		if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().hasClass('optoff'))
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().fadeIn(500);
		if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().hasClass('optoff'))
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().fadeIn(500);
		if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().hasClass('optoff'))
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().fadeIn(500);
		if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().hasClass('optoff'))
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().fadeIn(500);
		if (!jQuery('#laszlo_body_layout_type').closest('.option').next().hasClass('optoff'))
			jQuery('#laszlo_body_layout_type').closest('.option').next().fadeIn(500);
	}
	jQuery('#laszlo_body_layout_type').change(function(){
		if (_default_body_layout_type === "full"){
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().next().fadeOut(500);
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().fadeOut(500);
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().fadeOut(500);
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().fadeOut(500);
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().fadeOut(500);
			jQuery('#laszlo_body_layout_type').closest('.option').next().next().fadeOut(500);
			jQuery('#laszlo_body_layout_type').closest('.option').next().fadeOut(500);
		} else {
			if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().next().hasClass('optoff'))
				jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().next().fadeIn(500);
			if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().hasClass('optoff'))
				jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().next().fadeIn(500);
			if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().hasClass('optoff'))
				jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().next().fadeIn(500);
			if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().hasClass('optoff'))
				jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().next().fadeIn(500);
			if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().hasClass('optoff'))
				jQuery('#laszlo_body_layout_type').closest('.option').next().next().next().fadeIn(500);
			if (!jQuery('#laszlo_body_layout_type').closest('.option').next().next().hasClass('optoff'))
				jQuery('#laszlo_body_layout_type').closest('.option').next().next().fadeIn(500);
			if (!jQuery('#laszlo_body_layout_type').closest('.option').next().hasClass('optoff'))
				jQuery('#laszlo_body_layout_type').closest('.option').next().fadeIn(500);
		}
	});
	
	var _default_overlay_type = jQuery('#laszlo_pagetitle_overlay_type').val();
	jQuery('#laszlo_pagetitle_overlay_type').change(function(){
		_default_overlay_type = jQuery('#laszlo_pagetitle_overlay_type').val();
		if (jQuery('#laszlo_pagetitle_overlay_type').val() == "color"){
			jQuery('#laszlo_pagetitle_overlay_color').closest('.option').fadeIn(500);
			jQuery('#laszlo_pagetitle_overlay_pattern').closest('.option').fadeOut(500);
		} else {
			jQuery('#laszlo_pagetitle_overlay_color').closest('.option').fadeOut(500);
			jQuery('#laszlo_pagetitle_overlay_pattern').closest('.option').fadeIn(500);
		}
	}).trigger('change');
	
	var _default_overlay_type_shop = jQuery('#laszlo_pagetitle_overlay_type_shop').val();
	jQuery('#laszlo_pagetitle_overlay_type_shop').change(function(){
		_default_overlay_type_shop = jQuery('#laszlo_pagetitle_overlay_type_shop').val();
		if (jQuery('#laszlo_pagetitle_overlay_type_shop').val() == "color"){
			jQuery('#laszlo_pagetitle_overlay_color_shop').closest('.option').fadeIn(500);
			jQuery('#laszlo_pagetitle_overlay_pattern_shop').closest('.option').fadeOut(500);
		} else {
			jQuery('#laszlo_pagetitle_overlay_color_shop').closest('.option').fadeOut(500);
			jQuery('#laszlo_pagetitle_overlay_pattern_shop').closest('.option').fadeIn(500);
		}
	}).trigger('change');
	
	var _default_overlay_type_single_post = jQuery('#laszlo_pagetitle_overlay_type_single_post').val();
	jQuery('#laszlo_pagetitle_overlay_type_single_post').change(function(){
		_default_overlay_type_single_post = jQuery('#laszlo_pagetitle_overlay_type_single_post').val();
		if (jQuery('#laszlo_pagetitle_overlay_type_single_post').val() == "color"){
			jQuery('#laszlo_pagetitle_overlay_color_single_post').closest('.option').fadeIn(500);
			jQuery('#laszlo_pagetitle_overlay_pattern_single_post').closest('.option').fadeOut(500);
		} else {
			jQuery('#laszlo_pagetitle_overlay_color_single_post').closest('.option').fadeOut(500);
			jQuery('#laszlo_pagetitle_overlay_pattern_single_post').closest('.option').fadeIn(500);
		}
	}).trigger('change');
	
	var _default_overlay_enable = jQuery('#laszlo_pagetitle_image_overlay').val();
	jQuery('#laszlo_pagetitle_image_overlay').change(function(){
		_default_overlay_enable = jQuery('#laszlo_pagetitle_image_overlay').val();
		if (jQuery('#laszlo_pagetitle_image_overlay').val() == "on"){
			jQuery('#laszlo_pagetitle_overlay_opacity').closest('.option').add(jQuery('#laszlo_pagetitle_overlay_type').closest('.option')).fadeIn(500);
			jQuery('#laszlo_pagetitle_overlay_type').change();
		} else {
			jQuery('#laszlo_pagetitle_overlay_type').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity').closest('.option').next()).addBack().fadeOut(500);
		}
	}).trigger('change');
	
	var _default_overlay_enable_shop = jQuery('#laszlo_pagetitle_image_overlay_shop').val();
	jQuery('#laszlo_pagetitle_image_overlay_shop').change(function(){
		_default_overlay_enable_shop = jQuery('#laszlo_pagetitle_image_overlay_shop').val();
		if (jQuery('#laszlo_pagetitle_image_overlay_shop').val() == "on"){
			jQuery('#laszlo_pagetitle_overlay_opacity_shop').closest('.option').add(jQuery('#laszlo_pagetitle_overlay_type_shop').closest('.option')).fadeIn(500);
			jQuery('#laszlo_pagetitle_overlay_type_shop').change();
		} else {
			jQuery('#laszlo_pagetitle_overlay_type_shop').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_shop').closest('.option').next()).addBack().fadeOut(500);
		}
	}).trigger('change');
	
	var _default_overlay_enable_single_post = jQuery('#laszlo_pagetitle_image_overlay_single_post').val();
	jQuery('#laszlo_pagetitle_image_overlay_single_post').change(function(){
		_default_overlay_enable_single_post = jQuery('#laszlo_pagetitle_image_overlay_single_post').val();
		if (jQuery('#laszlo_pagetitle_image_overlay_single_post').val() == "on"){
			jQuery('#laszlo_pagetitle_overlay_opacity_single_post').closest('.option').add(jQuery('#laszlo_pagetitle_overlay_type_single_post').closest('.option')).fadeIn(500);
			jQuery('#laszlo_pagetitle_overlay_type_single_post').change();
		} else {
			jQuery('#laszlo_pagetitle_overlay_type_single_post').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_single_post').closest('.option').next()).addBack().fadeOut(500);
		}
	}).trigger('change');
	
	//style > header - background type
	var _default_header_bkg = jQuery('#laszlo_header_type').val();
	jQuery('#laszlo_header_type').change(function(){
		var _default_header_bkg = jQuery('#laszlo_header_type').val();
		switch (_default_header_bkg){
			case "without": 			
				jQuery('#laszlo_header_type').closest('.option').nextAll().fadeOut(500);
			break;
			case "none": case "border":
				jQuery('#laszlo_header_text_alignment').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs').closest('.option').prev().addBack())
				.fadeIn(500);
				
				
				
				jQuery('#upload-laszlo_header_image').closest('.option')
					.add(jQuery('#laszlo_header_color').closest('.option')).add(jQuery('#laszlo_header_opacity').closest('.option'))
					.add(jQuery('#laszlo_header_pattern').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position').closest('.option') )
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity').closest('.option').next()).addBack().fadeOut();
				
			break;
			case "image":
				jQuery('#laszlo_header_text_alignment').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs').closest('.option').prev().addBack())
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_image').closest('.option')
					.add( jQuery('#laszlo_pagetitle_background_position').closest('.option') ).fadeIn(500);
				
				jQuery('#laszlo_header_color').closest('.option').add(jQuery('#laszlo_header_opacity').closest('.option'))
					.add(jQuery('#laszlo_header_pattern').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern').closest('.option'))
					.add(jQuery('#laszlo_banner_slider').closest('.option'))
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax').closest('.option').add(jQuery('#laszlo_pagetitle_image_overlay').closest('.option')).fadeIn(500);
				jQuery('#laszlo_pagetitle_image_overlay').change();
				
			break;
			case "featured_image":
				jQuery('#laszlo_header_text_alignment').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs').closest('.option').prev().addBack())
				.fadeIn(500);
				
				
				jQuery('#laszlo_pagetitle_background_position').closest('.option').fadeIn(500);
				
				jQuery('#laszlo_header_color').closest('.option').add(jQuery('#laszlo_header_opacity').closest('.option'))
					.add(jQuery('#laszlo_header_pattern').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern').closest('.option'))
					.add(jQuery('#laszlo_banner_slider').closest('.option'))
					.add(jQuery('#upload-laszlo_header_image').closest('.option'))
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax').closest('.option').add(jQuery('#laszlo_pagetitle_image_overlay').closest('.option')).fadeIn(500);
				jQuery('#laszlo_pagetitle_image_overlay').change();
				
			break;
			case "color":
				jQuery('#laszlo_header_text_alignment').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_header_color').closest('.option')
					.add(jQuery('#laszlo_header_opacity').closest('.option'))
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_image').closest('.option')
					.add(jQuery('#laszlo_header_pattern').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern').closest('.option'))
					.add(jQuery('#laszlo_banner_slider').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity').closest('.option').next()).fadeOut();
				
			break;
			case "pattern":
				jQuery('#laszlo_header_text_alignment').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_header_pattern').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image').closest('.option')
					.add(jQuery('#laszlo_header_color').closest('.option')).add(jQuery('#laszlo_header_opacity').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern').closest('.option'))
					.add(jQuery('#laszlo_banner_slider').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity').closest('.option').next()).fadeOut();
				
			break;
			case "custom_pattern":
				jQuery('#laszlo_header_text_alignment').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax').closest('.option'))
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_custom_pattern').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image').closest('.option')
					.add(jQuery('#laszlo_header_color').closest('.option')).add(jQuery('#laszlo_header_opacity').closest('.option'))
					.add(jQuery('#laszlo_header_pattern').closest('.option'))
					.add(jQuery('#laszlo_banner_slider').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity').closest('.option').next()).fadeOut();
				
			break;
			case "banner":
			
				jQuery('#laszlo_header_text_alignment').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_banner_slider').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image').closest('.option')
					.add(jQuery('#laszlo_header_color').closest('.option')).add(jQuery('#laszlo_header_opacity').closest('.option'))
					.add(jQuery('#laszlo_header_pattern').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity').closest('.option').next()).fadeOut();
				
			break;
		}
		if (_default_header_bkg == "border" || _default_header_bkg == "image" || _default_header_bkg == "pattern" || _default_header_bkg == "custom_pattern" || _default_header_bkg == "banner" || _default_header_bkg == "color"){
			jQuery('#laszlo_header_height').closest('.option').fadeIn(500);
			jQuery('#laszlo_header_text_alignment').closest('.option').fadeIn(500);
			jQuery('#laszlo_hide_pagetitle').add(jQuery('#laszlo_hide_sec_pagetitle')).add(jQuery('#laszlo_breadcrumbs')).trigger('change');
		}
	}).trigger('change');
	
	var _default_header_bkg_single_post = jQuery('#laszlo_header_type_single_post').val();
	jQuery('#laszlo_header_type_single_post').change(function(){
		var _default_header_bkg_single_post = jQuery('#laszlo_header_type_single_post').val();
		switch (_default_header_bkg_single_post){
			case "without": 			
				jQuery('#laszlo_header_type_single_post').closest('.option').nextAll().fadeOut(500);
			break;
			case "none": case "border":
				jQuery('#laszlo_header_text_alignment_single_post').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_single_post').closest('.option').prev().addBack())
				.fadeIn(500);
				
				
				
				jQuery('#upload-laszlo_header_image_single_post').closest('.option')
					.add(jQuery('#laszlo_header_color_single_post').closest('.option')).add(jQuery('#laszlo_header_opacity_single_post').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_single_post').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_single_post').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position_single_post').closest('.option') )
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_single_post').closest('.option').next()).addBack().fadeOut();
				
			break;
			case "image":
				jQuery('#laszlo_header_text_alignment_single_post').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_single_post').closest('.option').prev().addBack())
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_single_post').closest('.option')
					.add( jQuery('#laszlo_pagetitle_background_position_single_post').closest('.option') ).fadeIn(500);
				
				jQuery('#laszlo_header_color_single_post').closest('.option').add(jQuery('#laszlo_header_opacity_single_post').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_single_post').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_single_post').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_single_post').closest('.option'))
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option').add(jQuery('#laszlo_pagetitle_image_overlay_single_post').closest('.option')).fadeIn(500);
				jQuery('#laszlo_pagetitle_image_overlay_single_post').change();
				
			break;
			case "featured_image":
				jQuery('#laszlo_header_text_alignment_single_post').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_single_post').closest('.option').prev().addBack())
				.fadeIn(500);
				
				
				jQuery('#laszlo_pagetitle_background_position_single_post').closest('.option').fadeIn(500);
				
				jQuery('#laszlo_header_color_single_post').closest('.option').add(jQuery('#laszlo_header_opacity_single_post').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_single_post').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_single_post').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_single_post').closest('.option'))
					.add(jQuery('#upload-laszlo_header_image_single_post').closest('.option'))
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option').add(jQuery('#laszlo_pagetitle_image_overlay_single_post').closest('.option')).fadeIn(500);
				jQuery('#laszlo_pagetitle_image_overlay_single_post').change();
				
			break;
			case "color":
				jQuery('#laszlo_header_text_alignment_single_post').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_header_color_single_post').closest('.option')
					.add(jQuery('#laszlo_header_opacity_single_post').closest('.option'))
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_single_post').closest('.option')
					.add(jQuery('#laszlo_header_pattern_single_post').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_single_post').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_single_post').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position_single_post').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_single_post').closest('.option').next()).fadeOut();
				
			break;
			case "pattern":
				jQuery('#laszlo_header_text_alignment_single_post').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_header_pattern_single_post').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_single_post').closest('.option')
					.add(jQuery('#laszlo_header_color_single_post').closest('.option')).add(jQuery('#laszlo_header_opacity_single_post').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_single_post').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_single_post').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position_single_post').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_single_post').closest('.option').next()).fadeOut();
				
			break;
			case "custom_pattern":
				jQuery('#laszlo_header_text_alignment_single_post').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option'))
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_custom_pattern_single_post').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_single_post').closest('.option')
					.add(jQuery('#laszlo_header_color_single_post').closest('.option')).add(jQuery('#laszlo_header_opacity_single_post').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_single_post').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_single_post').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position_single_post').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_single_post').closest('.option').next()).fadeOut();
				
			break;
			case "banner":
			
				jQuery('#laszlo_header_text_alignment_single_post').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_single_post').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_banner_slider_single_post').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_single_post').closest('.option')
					.add(jQuery('#laszlo_header_color_single_post').closest('.option')).add(jQuery('#laszlo_header_opacity_single_post').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_single_post').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_single_post').closest('.option'))
					.add( jQuery('#laszlo_pagetitle_background_position_single_post').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_single_post').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_single_post').closest('.option').next()).fadeOut();
				
			break;
		}
		if (_default_header_bkg_single_post == "border" || _default_header_bkg_single_post == "image" || _default_header_bkg_single_post == "pattern" || _default_header_bkg_single_post == "custom_pattern" || _default_header_bkg_single_post == "banner" || _default_header_bkg_single_post == "color" || _default_header_bkg_single_post == "featured_image"){
			jQuery('#laszlo_header_height_single_post').closest('.option').fadeIn(500);
			jQuery('#laszlo_header_text_alignment_single_post').closest('.option').fadeIn(500);
			jQuery('#laszlo_hide_pagetitle_single_post').add(jQuery('#laszlo_hide_sec_pagetitle_single_post')).add(jQuery('#laszlo_breadcrumbs_single_post')).trigger('change');
		}
	}).trigger('change');
	
	
	var _default_header_bkg_shop = jQuery('#laszlo_header_type_shop').val();
	jQuery('#laszlo_header_type_shop').change(function(){
		var _default_header_bkg_shop = jQuery('#laszlo_header_type_shop').val();
		switch (_default_header_bkg_shop){
			case "without": 			
				jQuery('#laszlo_header_type_shop').closest('.option').nextAll().fadeOut(500);
			break;
			case "none": case "border":
				jQuery('#laszlo_header_text_alignment_shop').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_shop').closest('.option').prev().addBack())
				.fadeIn(500);
				
				
				
				jQuery('#upload-laszlo_header_image_shop').closest('.option')
					.add(jQuery('#laszlo_header_color_shop').closest('.option')).add(jQuery('#laszlo_header_opacity_shop').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_shop').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_shop').closest('.option'))
					.add( jQuery('#laszlo_header_background_shop_position').closest('.option') )
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_shop').closest('.option').next()).addBack().fadeOut();
				
			break;
			case "image":
				jQuery('#laszlo_header_text_alignment_shop').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_shop').closest('.option').prev().addBack())
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_shop').closest('.option')
					.add( jQuery('#laszlo_header_background_shop_position').closest('.option') )
				.fadeIn(500);
				
				jQuery('#laszlo_header_color_shop').closest('.option').add(jQuery('#laszlo_header_opacity_shop').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_shop').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_shop').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_shop').closest('.option'))
				.fadeOut(500);
				
				jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option').add(jQuery('#laszlo_pagetitle_image_overlay_shop').closest('.option')).fadeIn(500);
				jQuery('#laszlo_pagetitle_image_overlay_shop').change();
				
			break;
			case "color":
				jQuery('#laszlo_header_text_alignment_shop').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_header_color_shop').closest('.option')
					.add(jQuery('#laszlo_header_opacity_shop').closest('.option'))
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_shop').closest('.option')
					.add(jQuery('#laszlo_header_pattern_shop').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_shop').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_shop').closest('.option'))
					.add( jQuery('#laszlo_header_background_shop_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_shop').closest('.option').next()).fadeOut();
				
			break;
			case "pattern":
				jQuery('#laszlo_header_text_alignment_shop').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_header_pattern_shop').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_shop').closest('.option')
					.add(jQuery('#laszlo_header_color_shop').closest('.option')).add(jQuery('#laszlo_header_opacity_shop').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_shop').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_shop').closest('.option'))
					.add( jQuery('#laszlo_header_background_shop_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_shop').closest('.option').next()).fadeOut();
				
			break;
			case "custom_pattern":
				jQuery('#laszlo_header_text_alignment_shop').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option'))
				.fadeIn(500);
				
				jQuery('#upload-laszlo_header_custom_pattern_shop').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_shop').closest('.option')
					.add(jQuery('#laszlo_header_color_shop').closest('.option')).add(jQuery('#laszlo_header_opacity_shop').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_shop').closest('.option'))
					.add(jQuery('#laszlo_banner_slider_shop').closest('.option'))
					.add( jQuery('#laszlo_header_background_shop_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_shop').closest('.option').next()).fadeOut();
				
			break;
			case "banner":
			
				jQuery('#laszlo_header_text_alignment_shop').closest('.option').prev().addBack()
					.add(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_breadcrumbs_shop').closest('.option').prev().addBack())
					.add(jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option'))
				.fadeIn(500);
				
				jQuery('#laszlo_banner_slider_shop').closest('.option').fadeIn(500);
				
				jQuery('#upload-laszlo_header_image_shop').closest('.option')
					.add(jQuery('#laszlo_header_color_shop').closest('.option')).add(jQuery('#laszlo_header_opacity_shop').closest('.option'))
					.add(jQuery('#laszlo_header_pattern_shop').closest('.option'))
					.add(jQuery('#upload-laszlo_header_custom_pattern_shop').closest('.option'))
					.add( jQuery('#laszlo_header_background_shop_position').closest('.option') )
				.fadeOut(500);
				
							jQuery('#laszlo_pagetitle_image_parallax_shop').closest('.option').nextUntil(jQuery('#laszlo_pagetitle_overlay_opacity_shop').closest('.option').next()).fadeOut();
				
			break;
		}
		if (_default_header_bkg_shop == "border" || _default_header_bkg_shop == "image" || _default_header_bkg_shop == "pattern" || _default_header_bkg_shop == "custom_pattern" || _default_header_bkg_shop == "banner" || _default_header_bkg_shop == "color"){
			jQuery('#laszlo_header_height_shop').closest('.option').fadeIn(500);
			jQuery('#laszlo_header_text_alignment_shop').closest('.option').fadeIn(500);
			jQuery('#laszlo_hide_pagetitle_shop').add(jQuery('#laszlo_hide_sec_pagetitle_shop')).add(jQuery('#laszlo_breadcrumbs_shop')).trigger('change');
		}
	}).trigger('change');
	
	
	var _default_seo_options = jQuery('#laszlo_enable_theme_seo').val();
	if (_default_seo_options === "on"){
		jQuery('#laszlo_enable_theme_seo').closest('.option').siblings().not(jQuery('#laszlo_enable_theme_seo').closest('.option').prev()).fadeIn(500);
	} else {
		jQuery('#laszlo_enable_theme_seo').closest('.option').siblings().not(jQuery('#laszlo_enable_theme_seo').closest('.option').prev()).fadeOut(500);
	}
	jQuery('#laszlo_enable_theme_seo').change(function(e){
		if (_default_seo_options === "on"){
			jQuery('#laszlo_enable_theme_seo').closest('.option').siblings().not(jQuery('#laszlo_enable_theme_seo').closest('.option').prev()).fadeIn(500);
		} else {
			jQuery('#laszlo_enable_theme_seo').closest('.option').siblings().not(jQuery('#laszlo_enable_theme_seo').closest('.option').prev()).fadeOut(500);
		}
	});
	
	//google fonts
	var _default_google_fonts = jQuery('#laszlo_enable_google_fonts').val();
	if (_default_google_fonts === "on"){
		jQuery('#laszlo_enable_google_fonts').closest('.option').next().fadeIn(500);
	} else {
		jQuery('#laszlo_enable_google_fonts').closest('.option').next().fadeOut(500);
	}
	jQuery('#laszlo_enable_google_fonts').change(function(){
		if (_default_google_fonts === "on"){
			jQuery('#laszlo_enable_google_fonts').closest('.option').next().fadeIn(500);
		} else {
			jQuery('#laszlo_enable_google_fonts').closest('.option').next().fadeOut(500);
		}		
	});
	
	//General > Projects > Enlarge pics
	var _default_proj_layout = jQuery('#laszlo_single_layout').val(); 
	if (_default_proj_layout === "fullwidth_slider"){
		jQuery('#laszlo_projects_enlarge_images').parent('.option').fadeOut(500);
	} else {
		jQuery('#laszlo_projects_enlarge_images').parent('.option').fadeIn(500);
	}
	jQuery('#laszlo_single_layout').change(function(e){
		if (_default_proj_layout === "fullwidth_slider"){
			jQuery('#laszlo_projects_enlarge_images').parent('.option').fadeOut(500);
		} else {
			jQuery('#laszlo_projects_enlarge_images').parent('.option').fadeIn(500);
		}
	});
	
	
	// social shares on projects
	var _default_project_single_social = jQuery('#laszlo_project_single_social_shares').val();
	if (_default_project_single_social == "on") jQuery('#laszlo_project_single_socials').closest('.option').fadeIn(500);
	else jQuery('#laszlo_project_single_socials').closest('.option').fadeOut(500);
	jQuery('#laszlo_project_single_social_shares').change(function(){
		if (jQuery(this).val() == "on")
			jQuery('#laszlo_project_single_socials').closest('.option').fadeIn(500);
		else jQuery('#laszlo_project_single_socials').closest('.option').fadeOut(500);
	});
	
	// social shares on posts
	var _default_post_single_social = jQuery('#laszlo_post_single_social_shares').val();
	if (_default_post_single_social == "on") jQuery('#laszlo_post_single_socials').closest('.option').fadeIn(500);
	else jQuery('#laszlo_post_single_socials').closest('.option').fadeOut(500);
	jQuery('#laszlo_post_single_social_shares').change(function(){
		if (jQuery(this).val() == "on")
			jQuery('#laszlo_post_single_socials').closest('.option').fadeIn(500);
		else jQuery('#laszlo_post_single_socials').closest('.option').fadeOut(500);
	});
	
	//General > Projects > Open|Close Cats
	var _default_enable_open_close_categories = jQuery('#laszlo_enable_open_close_categories').val();
	if (_default_enable_open_close_categories === "on"){
		jQuery('#laszlo_categories_initial_state').closest('.option').fadeIn(500).removeClass('optoff');
	} else {
		jQuery('#laszlo_categories_initial_state').closest('.option').fadeOut(500).addClass('optoff');
	}
	jQuery('#laszlo_enable_open_close_categories').change(function(e){
		var _default_enable_open_close_categories = jQuery('#laszlo_enable_open_close_categories').val();
		if (_default_enable_open_close_categories === "on"){
			jQuery('#laszlo_categories_initial_state').closest('.option').fadeIn(500).removeClass('optoff');
		} else {
			jQuery('#laszlo_categories_initial_state').closest('.option').fadeOut(500).addClass('optoff');
		}	
	});
	
	//FOOTER RIGHT CONTENT OPTIONS
	var _default_footer_right = jQuery('#laszlo_footer_right_content').val();
	if (_default_footer_right === "text"){
		jQuery('#laszlo_footer_right_text').parent('.option').fadeIn(500);
	} else {
		jQuery('#laszlo_footer_right_text').parent('.option').fadeOut(500);
	}
	jQuery('#laszlo_footer_right_content').change(function(e){
		if (_default_footer_right === "text"){
			jQuery('#laszlo_footer_right_text').parent('.option').fadeIn(500);
		} else {
			jQuery('#laszlo_footer_right_text').parent('.option').fadeOut(500);
		}	
	});
	
	var tp_cols_default = jQuery('#laszlo_toppanel_number_cols').val();	  
 	if(tp_cols_default == "three"){
 		jQuery("#laszlo_toppanel_columns_order").closest('.option').fadeIn(500);
 		jQuery("#laszlo_toppanel_columns_order_four").closest('.option').fadeOut(500);
 	} else if (tp_cols_default == "four"){
 		jQuery("#laszlo_toppanel_columns_order_four").closest('.option').fadeIn(500);
 		jQuery("#laszlo_toppanel_columns_order").closest('.option').fadeOut(500);
 	} else {
 		jQuery("#laszlo_toppanel_columns_order").closest('.option').fadeOut(500);
 		jQuery("#laszlo_toppanel_columns_order_four").closest('.option').fadeOut(500);
 	}
 	
	jQuery('#laszlo_toppanel_number_cols').change(function(e){
		if(tp_cols_default == "three"){
	 		jQuery("#laszlo_toppanel_columns_order").closest('.option').fadeIn(500);
	 		jQuery("#laszlo_toppanel_columns_order_four").closest('.option').fadeOut(500);
	 	} else if (tp_cols_default == "four"){
	 		jQuery("#laszlo_toppanel_columns_order_four").closest('.option').fadeIn(500);
	 		jQuery("#laszlo_toppanel_columns_order").closest('.option').fadeOut(500);
	 	} else {
	 		jQuery("#laszlo_toppanel_columns_order").closest('.option').fadeOut(500);
	 		jQuery("#laszlo_toppanel_columns_order_four").closest('.option').fadeOut(500);
	 	}
 	});
 	
 	//WIDGETS AREA
	var _default_widgets_area = jQuery('#laszlo_enable_widgets_area').val();
	var indexWidget = parseInt(jQuery('#laszlo_enable_widgets_area').parents('.option').index(),10);
	if (_default_widgets_area === "on"){
		for (var i=1; i<4; i++){
			jQuery('#laszlo_enable_widgets_area').parents('.sub-navigation-container').find('.option:eq('+(indexWidget+i)+')').fadeIn(500);	
		}
		jQuery('#laszlo_toppanel_number_cols').change();
	} else {
		for (var i=1; i<4; i++){
			jQuery('#laszlo_enable_widgets_area').parents('.sub-navigation-container').find('.option:eq('+(indexWidget+i)+')').fadeOut(500);	
		}
	}
	jQuery('#laszlo_enable_widgets_area').change(function(e){
		if (_default_widgets_area === "on"){
			for (var i=1; i<4; i++){
				jQuery('#laszlo_enable_widgets_area').parents('.sub-navigation-container').find('.option:eq('+(indexWidget+i)+')').fadeIn(500);	
			}
			jQuery('#laszlo_toppanel_number_cols').change();
		} else {
			for (var i=1; i<4; i++){
				jQuery('#laszlo_enable_widgets_area').parents('.sub-navigation-container').find('.option:eq('+(indexWidget+i)+')').fadeOut(500);	
			}
		}
	});
	
	//breadcrumbs
	var _default_breadcrumbs = jQuery('#laszlo_breadcrumbs').val();
	if (_default_breadcrumbs === "on"){
		jQuery('#laszlo_breadcrumbs').closest('.option').nextAll().fadeIn(500);
	} else {
		jQuery('#laszlo_breadcrumbs').closest('.option').nextAll().fadeOut(500);
	}
	jQuery('#laszlo_breadcrumbs').change(function(e){
		if (_default_breadcrumbs === "on"){
			jQuery('#laszlo_breadcrumbs').closest('.option').nextAll().fadeIn(500);
		} else {
			jQuery('#laszlo_breadcrumbs').closest('.option').nextAll().fadeOut(500);
		}
	});
	
	//pagetitle
	var _default_hide_pagetitle = jQuery('#laszlo_hide_pagetitle').val();
	if (_default_hide_pagetitle === "on"){
		jQuery('#laszlo_hide_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
	} else {
		jQuery('#laszlo_hide_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
	}
	jQuery('#laszlo_hide_pagetitle').change(function(e){
		if (_default_hide_pagetitle === "on"){
			jQuery('#laszlo_hide_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
		} else {
			jQuery('#laszlo_hide_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
		}		
	});
	
	//secondary title 
	var _default_hide_sec_pagetitle = jQuery('#laszlo_hide_sec_pagetitle').val();
	if (_default_hide_sec_pagetitle === "on"){
		jQuery('#laszlo_hide_sec_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
	} else {
		jQuery('#laszlo_hide_sec_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
	}
	jQuery('#laszlo_hide_sec_pagetitle').change(function(e){
		if (_default_hide_sec_pagetitle === "on"){
			jQuery('#laszlo_hide_sec_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
		} else {
			jQuery('#laszlo_hide_sec_pagetitle').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
		}		
	});
	
	
	//breadcrumbs
	var _default_breadcrumbs_single_post = jQuery('#laszlo_breadcrumbs_single_post').val();
	if (_default_breadcrumbs_single_post === "on"){
		jQuery('#laszlo_breadcrumbs_single_post').closest('.option').nextAll().fadeIn(500);
	} else {
		jQuery('#laszlo_breadcrumbs_single_post').closest('.option').nextAll().fadeOut(500);
	}
	jQuery('#laszlo_breadcrumbs_single_post').change(function(e){
		if (_default_breadcrumbs_single_post === "on"){
			jQuery('#laszlo_breadcrumbs_single_post').closest('.option').nextAll().fadeIn(500);
		} else {
			jQuery('#laszlo_breadcrumbs_single_post').closest('.option').nextAll().fadeOut(500);
		}
	});
	
	//pagetitle
	var _default_hide_pagetitle_single_post = jQuery('#laszlo_hide_pagetitle_single_post').val();
	if (_default_hide_pagetitle_single_post === "on"){
		jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
	} else {
		jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
	}
	jQuery('#laszlo_hide_pagetitle_single_post').change(function(e){
		if (_default_hide_pagetitle_single_post === "on"){
			jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
		} else {
			jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
		}		
	});
	
	//secondary title 
	var _default_hide_sec_pagetitle_single_post = jQuery('#laszlo_hide_sec_pagetitle_single_post').val();
	if (_default_hide_sec_pagetitle_single_post === "on"){
		jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
	} else {
		jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
	}
	jQuery('#laszlo_hide_sec_pagetitle_single_post').change(function(e){
		if (_default_hide_sec_pagetitle_single_post === "on"){
			jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
		} else {
			jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_single_post').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
		}		
	});
	
	
	//breadcrumbs
	var _default_breadcrumbs_shop = jQuery('#laszlo_breadcrumbs_shop').val();
	if (_default_breadcrumbs_shop === "on"){
		jQuery('#laszlo_breadcrumbs_shop').closest('.option').nextAll().fadeIn(500);
	} else {
		jQuery('#laszlo_breadcrumbs_shop').closest('.option').nextAll().fadeOut(500);
	}
	jQuery('#laszlo_breadcrumbs_shop').change(function(e){
		if (_default_breadcrumbs_shop === "on"){
			jQuery('#laszlo_breadcrumbs_shop').closest('.option').nextAll().fadeIn(500);
		} else {
			jQuery('#laszlo_breadcrumbs_shop').closest('.option').nextAll().fadeOut(500);
		}
	});
	
	//pagetitle
	var _default_hide_pagetitle_shop = jQuery('#laszlo_hide_pagetitle_shop').val();
	if (_default_hide_pagetitle_shop === "on"){
		jQuery('#laszlo_hide_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
	} else {
		jQuery('#laszlo_hide_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
	}
	jQuery('#laszlo_hide_pagetitle_shop').change(function(e){
		if (_default_hide_pagetitle_shop === "on"){
			jQuery('#laszlo_hide_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
		} else {
			jQuery('#laszlo_hide_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
		}		
	});
	
	//secondary title 
	var _default_hide_sec_pagetitle_shop = jQuery('#laszlo_hide_sec_pagetitle_shop').val();
	if (_default_hide_sec_pagetitle_shop === "on"){
		jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
	} else {
		jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
	}
	jQuery('#laszlo_hide_sec_pagetitle_shop').change(function(e){
		if (_default_hide_sec_pagetitle_shop === "on"){
			jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeIn(500);
		} else {
			jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').nextUntil(jQuery('#laszlo_hide_sec_pagetitle_shop').closest('.option').next().next().next().next().next().next().next().next()).fadeOut(500);
		}		
	});
	
	
	
	//pagetitle shadow
	var _default_page_title_shadow = jQuery('#laszlo_page_title_shadow').val();
	if (_default_page_title_shadow === "on"){
		jQuery('#laszlo_page_title_shadow').closest('.option').next().fadeIn(500);
	} else {
		jQuery('#laszlo_page_title_shadow').closest('.option').next().fadeOut(500);
	}
	jQuery('#laszlo_page_title_shadow').change(function(e){
		if (_default_page_title_shadow === "on"){
			jQuery('#laszlo_page_title_shadow').closest('.option').next().fadeIn(500);
		} else {
			jQuery('#laszlo_page_title_shadow').closest('.option').next().fadeOut(500);
		}
	});
	
  	//SOCIAL ICONS 
  	var _default_enable_socials = jQuery('#laszlo_enable_socials').val();
  	if (_default_enable_socials === "on"){
		jQuery('#laszlo_enable_socials').parents('.option').find('~ .option').each(function(){
			jQuery(this).fadeIn(500);
		});
  	} else {
	  	jQuery('#laszlo_enable_socials').parents('.option').find('~ .option').each(function(){
			jQuery(this).fadeOut(500);
		});
  	}
	jQuery('#laszlo_enable_socials').change(function(e){
		var _default_enable_socials = jQuery('#laszlo_enable_socials').val();
	  	if (_default_enable_socials === "on"){
			jQuery('#laszlo_enable_socials').parents('.option').find('~ .option').each(function(){
				jQuery(this).fadeIn(500);
			});
	  	} else {
		  	jQuery('#laszlo_enable_socials').parents('.option').find('~ .option').each(function(){
				jQuery(this).fadeOut(500);
			});
	  	}
	});

	// TOP PANEL & SOCIAL BAR MAMBO JAMBO
	var _default_top_panel = jQuery('#laszlo_enable_top_panel').val();
	if (_default_top_panel === "on"){
		for (var i=jQuery('#laszlo_enable_top_panel').closest('.option').index()+1; i< jQuery('#laszlo_toppanel_headingscolor').closest('.option').index()+1; i++){
			if (!jQuery('#tab_navigation-1-header').children().eq(i).hasClass('optoff')) jQuery('#tab_navigation-2-header').children().eq(i).fadeIn(500);
		}
	} else {
		for (var i=jQuery('#laszlo_enable_top_panel').closest('.option').index()+1; i< jQuery('#laszlo_toppanel_headingscolor').closest('.option').index()+1; i++){
			jQuery('#tab_navigation-1-header').children().eq(i).fadeOut(500);
		}
  	}
	jQuery('#laszlo_enable_top_panel').change(function(e){
	  	if (_default_top_panel === "on"){
			for (var i=jQuery('#laszlo_enable_top_panel').closest('.option').index()+1; i< jQuery('#laszlo_toppanel_headingscolor').closest('.option').index()+1; i++){
				if (!jQuery('#tab_navigation-1-header').children().eq(i).hasClass('optoff')) jQuery('#tab_navigation-1-header').children().eq(i).fadeIn(500);
			}
		} else {
			for (var i=jQuery('#laszlo_enable_top_panel').closest('.option').index()+1; i< jQuery('#laszlo_toppanel_headingscolor').closest('.option').index()+1; i++){
				jQuery('#tab_navigation-1-header').children().eq(i).fadeOut(500);
			}
	  	}
	});
	
	
	//suggested colors
	jQuery('#tab_navigation-1-general #laszlo_style_defcolor').siblings('ul').find('a.style-box').each(function(){
		jQuery(this).on('click', function(){
			jQuery('#laszlo_style_color')
				.attr('value',jQuery(this).attr('title'))
				.siblings('.color-preview').css('background-color', '#'+jQuery(this).attr('title'));
		});
	});
	
	jQuery('#tab_navigation-1-general #laszlo_style_defcolor').siblings('ul').find('a.style-box[title='+jQuery('#laszlo_style_color').val()+']').closest('.option').addClass('selected-style');
	
  	// 404
	var def_notfound = jQuery('#laszlo_404_error_image').val();
	if (def_notfound == "off")	
		jQuery('#laszlo_404_error_image_url').closest('.option').fadeOut(500);
	else
		jQuery('#laszlo_404_error_image_url').closest('.option').fadeIn(500);

	jQuery('#laszlo_404_error_image').change(function(e){
		if (def_notfound == "off")	
			jQuery('#laszlo_404_error_image_url').closest('.option').fadeOut(500);
		else
			jQuery('#laszlo_404_error_image_url').closest('.option').fadeIn(500);
 	});
 	
 	//HOMEPAGE LAYOUT
 	jQuery("#laszlo_homepage_static_image_url").closest('.option').fadeOut(500);
 	
 	jQuery('#laszlo_homepage_slider').change(function(e){
 		if(jQuery(this).val() == 'static')
 			jQuery("#laszlo_homepage_static_image_url").closest('.option').fadeIn(500);
 		else
 			jQuery("#laszlo_homepage_static_image_url").closest('.option').fadeOut(500);
 			
 	});
 	 	
 	//CONTACT FORM TEXTAREA
 	jQuery("textarea[name=walker_contacts_email_default_content]").css("width", "440px").css("height", "270px");
 	
 	
 	//FOOTER
 	var cols_default  = jQuery('#laszlo_footer_number_cols').val();
	switch(cols_default){
		case "one": case "two":
	 		jQuery("#laszlo_footer_columns_order").closest('.option').fadeOut(500);
	 		jQuery("#laszlo_footer_columns_order_four").closest('.option').fadeOut(500);				
		break;
		case "three":
			jQuery("#laszlo_footer_columns_order").closest('.option').fadeIn(500);
			jQuery("#laszlo_footer_columns_order_four").closest('.option').fadeOut(500);
		break;
		case "four":
			jQuery("#laszlo_footer_columns_order_four").closest('.option').fadeIn(500);
			jQuery("#laszlo_footer_columns_order").closest('.option').fadeOut(500);	
		break;
	}
	 	
	jQuery('#laszlo_footer_number_cols').change(function(e){
		switch(cols_default){
			case "one": case "two":
		 		jQuery("#laszlo_footer_columns_order").closest('.option').fadeOut(500);
		 		jQuery("#laszlo_footer_columns_order_four").closest('.option').fadeOut(500);				
			break;
			case "three":
				jQuery("#laszlo_footer_columns_order").closest('.option').fadeIn(500);
				jQuery("#laszlo_footer_columns_order_four").closest('.option').fadeOut(500);
			break;
			case "four":
				jQuery("#laszlo_footer_columns_order_four").closest('.option').fadeIn(500);
				jQuery("#laszlo_footer_columns_order").closest('.option').fadeOut(500);	
			break;
		}
 	});
  

	//show twitter newsletter footer options
	var _default_show_twitter_newsletter_footer = jQuery('#laszlo_show_twitter_newsletter_footer').val();
	if (_default_show_twitter_newsletter_footer === "on"){
		for (var i= jQuery('#laszlo_show_twitter_newsletter_footer').closest('.option').index(); i<jQuery('#laszlo_twitter_newsletter_borderscolor').closest('.option').index(); i++){
			if (!jQuery('#laszlo_show_twitter_newsletter_footer').closest('.sub-navigation-container').find('.option').eq(i).hasClass('optoff')) jQuery('#laszlo_show_twitter_newsletter_footer').closest('.sub-navigation-container').find('.option').eq(i).fadeIn(500);
		}
	} else {
		for (var i= jQuery('#laszlo_show_twitter_newsletter_footer').closest('.option').index(); i<jQuery('#laszlo_twitter_newsletter_borderscolor').closest('.option').index(); i++){
			jQuery('#laszlo_show_twitter_newsletter_footer').closest('.sub-navigation-container').find('.option').eq(i).fadeOut(500);
		}
	}
	jQuery('#laszlo_show_twitter_newsletter_footer').change(function(){
		if (_default_show_twitter_newsletter_footer === "on"){
			for (var i= jQuery('#laszlo_show_twitter_newsletter_footer').closest('.option').index(); i<jQuery('#laszlo_twitter_newsletter_borderscolor').closest('.option').index(); i++){
				if (!jQuery('#laszlo_show_twitter_newsletter_footer').closest('.sub-navigation-container').find('.option').eq(i).hasClass('optoff')) jQuery('#laszlo_show_twitter_newsletter_footer').closest('.sub-navigation-container').find('.option').eq(i).fadeIn(500);
			}
		} else {
			for (var i= jQuery('#laszlo_show_twitter_newsletter_footer').closest('.option').index(); i<jQuery('#laszlo_twitter_newsletter_borderscolor').closest('.option').index(); i++){
				jQuery('#laszlo_show_twitter_newsletter_footer').closest('.sub-navigation-container').find('.option').eq(i).fadeOut(500);
			}
		}
	});

	
  var _default_after_scroll_header = jQuery('#laszlo_header_after_scroll').val();
  if (_default_after_scroll_header == 'on'){
	  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
	  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
	  	.add(jQuery('#laszlo_header_after_scroll_type2').closest('.option'))
	  .fadeIn(500);
  } else {
	  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
	  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
	  	.add(jQuery('#laszlo_header_after_scroll_type2').closest('.option'))
	  .fadeOut(500);
  }
  jQuery('#laszlo_header_after_scroll').change(function(){
	  if (_default_after_scroll_header == 'on'){
		  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
		  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
		  	.add(jQuery('#laszlo_header_after_scroll_type2').closest('.option'))
		  .fadeIn(500);
	  } else {
		  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
		  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
		  	.add(jQuery('#laszlo_header_after_scroll_type2').closest('.option'))
		  .fadeOut(500);
	  }
  });
  
  var _default_fixed_menu = jQuery('#laszlo_fixed_menu').val();
  if (_default_fixed_menu == 'on'){
	  jQuery('#laszlo_header_after_scroll').trigger('change').closest('.option').prev().addBack()
  	  	.add(jQuery('#laszlo_header_hide_on_start').closest('.option'))
	  	.add(jQuery('#laszlo_content_to_the_top').closest('.option'))
	  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
	  .fadeIn(500);
  } else {
	  jQuery('#laszlo_header_after_scroll').closest('.option').prev().addBack()
	  	.add(jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack())
	  	.add(jQuery('#laszlo_header_hide_on_start').closest('.option'))
	  	.add(jQuery('#laszlo_content_to_the_top').closest('.option'))
	  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
	  .fadeOut(500);  
  }
  jQuery('#laszlo_fixed_menu').change(function(){
	  if (_default_fixed_menu == 'on'){
		  jQuery('#laszlo_header_after_scroll').trigger('change').closest('.option').prev().addBack()
		  	.add(jQuery('#laszlo_header_hide_on_start').closest('.option'))
		  	.add(jQuery('#laszlo_content_to_the_top').closest('.option'))
		  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
		  .fadeIn(500);
	  } else {
		  jQuery('#laszlo_header_after_scroll').closest('.option').prev().addBack()
		  	.add(jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack())
		  	.add(jQuery('#laszlo_header_hide_on_start').closest('.option'))
		  	.add(jQuery('#laszlo_content_to_the_top').closest('.option'))
		  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
		  .fadeOut(500);  
	  }	  
  });
  
  
  var _default_after_scroll_header_type2 = jQuery('#laszlo_header_after_scroll_type2').val();
  if (_default_after_scroll_header_type2 == 'off'){
	  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
	  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
	  .fadeIn(500);
  } else {
	  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
	  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
	  .fadeOut(500);
  }
  jQuery('#laszlo_header_after_scroll_type2').change(function(){
	  if (_default_after_scroll_header_type2 == 'off'){
		  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
		  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
		  .fadeIn(500);
	  } else {
		  jQuery('#laszlo_header_shrink_effect').closest('.option').prev().addBack()
		  	.add(jQuery('#laszlo_header_after_scroll_style_light_dark').closest('.option'))
		  .fadeOut(500);
	  }
  });
  
  //show primary footer options
	var _default_show_primary_footer = jQuery('#laszlo_show_primary_footer').val();
	jQuery('#laszlo_show_primary_footer').change(function(){
		if (_default_show_primary_footer === "on"){
			jQuery('#laszlo_show_primary_footer').closest('.option').nextUntil(jQuery('#laszlo_footerbg_headingscolor').closest('.option').next()).fadeIn(500);
			jQuery('#laszlo_footerbg_type').trigger('change');
		} else {
			jQuery('#laszlo_show_primary_footer').closest('.option').nextUntil(jQuery('#laszlo_footerbg_headingscolor').closest('.option').next()).fadeOut(500);
		}
	}).trigger('change');
	
	//show secondary footer options
	var _default_show_secondary_footer = jQuery('#laszlo_show_sec_footer').val();
	jQuery('#laszlo_show_sec_footer').change(function(){
		if (_default_show_secondary_footer === "on"){
			jQuery('#laszlo_show_sec_footer').closest('.option').nextAll().fadeIn(500);
			jQuery('#laszlo_sec_footerbg_type').trigger('change');
		} else {
			jQuery('#laszlo_show_sec_footer').closest('.option').nextAll().fadeOut(500);
		}
	}).trigger('change');
	
	/* display metas */
	var _default_display_metas = jQuery('#laszlo_display_metas').val();
	jQuery('#laszlo_display_metas').change(function(){
		if (_default_display_metas === "on"){
			jQuery('#laszlo_metas_to_display').parent().fadeIn(500);
		} else {
			jQuery('#laszlo_metas_to_display').parent().fadeOut(500);			
		}
	}).trigger('change');
	
	
	var _default_header_button = jQuery('#laszlo_header_button').val();
	if (_default_header_button == 'on'){
	  jQuery('#laszlo_header_button').closest('.option').next()
	  	.add(jQuery('#laszlo_header_button').closest('.option').next().next())
	  .fadeIn(500);
	} else {
	  jQuery('#laszlo_header_button').closest('.option').next()
	  	.add(jQuery('#laszlo_header_button').closest('.option').next().next())
	  .fadeOut(500);
	}
	jQuery('#laszlo_header_button').change(function(){
	  if (_default_header_button == 'on'){
		  jQuery('#laszlo_header_button').closest('.option').next()
		  	.add(jQuery('#laszlo_header_button').closest('.option').next().next())
		  .fadeIn(500);
	  } else {
		  jQuery('#laszlo_header_button').closest('.option').next()
		  	.add(jQuery('#laszlo_header_button').closest('.option').next().next())
		  .fadeOut(500);
	  }
	});
	
	//underline no search input
	var _default_search_input_enable_underline = jQuery('#laszlo_search_input_enable_underline').val();
	if (_default_search_input_enable_underline == 'on'){
		jQuery('#laszlo_search_input_underline_color').closest('.option').fadeIn(500);
	} else {
		jQuery('#laszlo_search_input_underline_color').closest('.option').fadeOut(500);
	}
	jQuery('#laszlo_search_input_enable_underline').change(function(){
		if (_default_search_input_enable_underline == 'on'){
			jQuery('#laszlo_search_input_underline_color').closest('.option').fadeIn(500);
		} else {
			jQuery('#laszlo_search_input_underline_color').closest('.option').fadeOut(500);
		}
	});	
  
  // continuous check for changed value
  setInterval(function () {
	  
	  // 2020 layout grid lines
	  if (jQuery('#laszlo_layout_grid_lines_enable').val() != _default_layout_grid_lines_enable){
	  	  _default_layout_grid_lines_enable = jQuery('#laszlo_layout_grid_lines_enable').val();
		  jQuery('#laszlo_layout_grid_lines_enable').trigger('change');
	  }
	  
	  // 2024 Gradient button
	  if (jQuery('#laszlo_gradient_button_enable').val() != _default_laszlo_gradient_button_enable){
			  _default_laszlo_gradient_button_enable = jQuery('#laszlo_gradient_button_enable').val();
			jQuery('#laszlo_gradient_button_enable').trigger('change');
		}
	  
	  
	  // related posts
	  if (jQuery('#laszlo_related_posts_slider').val() != _default_related_posts_slider){
		  _default_related_posts_slider = jQuery('#laszlo_related_posts_slider').val();
		  jQuery('#laszlo_related_posts_slider').change();
	  }
	  
	  if (jQuery('#laszlo_show_related_posts').val() != _default_show_related_posts){
		  _default_show_related_posts = jQuery('#laszlo_show_related_posts').val();
		  jQuery('#laszlo_show_related_posts').change();
	  }
	  
	  //custom css
	  if (jQuery('#enable_custom_css').val() != _default_custom_css){
		  _default_custom_css = jQuery('#enable_custom_css').val();
		  jQuery('#enable_custom_css').change();
	  }
	  
	if (jQuery('#laszlo_menu_add_border').val() != _default_menu_add_border){
		_default_menu_add_border = jQuery('#laszlo_menu_add_border').val();
		jQuery('#laszlo_menu_add_border').change();
	}

  	if (jQuery('#laszlo_footer_display_logo').val() != _default_footer_display_logo){
		_default_footer_display_logo = jQuery('#laszlo_footer_display_logo').val();
		jQuery('#laszlo_footer_display_logo').change();
	}
	
	if (jQuery('#laszlo_footer_display_social_icons').val() != _default_footer_display_social_icons){
		_default_footer_display_social_icons = jQuery('#laszlo_footer_display_social_icons').val();
		jQuery('#laszlo_footer_display_social_icons').change();
	}
	if (jQuery('#laszlo_footer_display_custom_text').val() != _default_footer_display_custom_text){
		_default_footer_display_custom_text = jQuery('#laszlo_footer_display_custom_text').val();
		jQuery('#laszlo_footer_display_custom_text').change();
	}
	  
	if (jQuery('#laszlo_enable_theme_seo').val() != _default_seo_options){
		_default_seo_options = jQuery('#laszlo_enable_theme_seo').val();
		jQuery('#laszlo_enable_theme_seo').change();
	}
  
	// under construction
	if (jQuery('#laszlo_enable_under_construction').val() != _default_under_construction){
		_default_under_construction = jQuery('#laszlo_enable_under_construction').val();
		jQuery('#laszlo_enable_under_construction').change();
	}
	
	
	//after scroll menu type2 - NEW
  	if (jQuery('#laszlo_header_after_scroll_type2').val() != _default_after_scroll_header_type2){
	  	_default_after_scroll_header_type2 = jQuery('#laszlo_header_after_scroll_type2').val();
	  	jQuery('#laszlo_header_after_scroll_type2').trigger('change');
  	}
	
	//fixed menu
	if (jQuery('#laszlo_fixed_menu').val() != _default_fixed_menu){
	  	_default_fixed_menu = jQuery('#laszlo_fixed_menu').val();
	  	jQuery('#laszlo_fixed_menu').change();
  	}
  	
  	//after scroll menu
  	if (jQuery('#laszlo_header_after_scroll').val() != _default_after_scroll_header){
	  	_default_after_scroll_header = jQuery('#laszlo_header_after_scroll').val();
	  	jQuery('#laszlo_header_after_scroll').trigger('change');
  	}

	//breadcrumbs
	if (jQuery('#laszlo_breadcrumbs').val() != _default_breadcrumbs){
		_default_breadcrumbs = jQuery('#laszlo_breadcrumbs').val();
		jQuery('#laszlo_breadcrumbs').change();
	}

	//display secondary page title
	if (jQuery('#laszlo_hide_sec_pagetitle').val() != _default_hide_sec_pagetitle){
		_default_hide_sec_pagetitle = jQuery('#laszlo_hide_sec_pagetitle').val();
		jQuery('#laszlo_hide_sec_pagetitle').change();
	}

	//display page title
	if (jQuery('#laszlo_hide_pagetitle').val() != _default_hide_pagetitle){
		_default_hide_pagetitle = jQuery('#laszlo_hide_pagetitle').val();
		jQuery('#laszlo_hide_pagetitle').change();
	}
	
	
	//breadcrumbs_shop
	if (jQuery('#laszlo_breadcrumbs_single_post').val() != _default_breadcrumbs_single_post){
		_default_breadcrumbs_single_post = jQuery('#laszlo_breadcrumbs_single_post').val();
		jQuery('#laszlo_breadcrumbs_single_post').change();
	}

	//display secondary page title
	if (jQuery('#laszlo_hide_sec_pagetitle_single_post').val() != _default_hide_sec_pagetitle_single_post){
		_default_hide_sec_pagetitle_single_post = jQuery('#laszlo_hide_sec_pagetitle_single_post').val();
		jQuery('#laszlo_hide_sec_pagetitle_single_post').change();
	}
	
	
	
	//display page title
	if (jQuery('#laszlo_hide_pagetitle_single_post').val() != _default_hide_pagetitle_single_post){
		_default_hide_pagetitle_single_post = jQuery('#laszlo_hide_pagetitle_single_post').val();
		jQuery('#laszlo_hide_pagetitle_single_post').change();
	}
	
	
	//breadcrumbs_shop
	if (jQuery('#laszlo_breadcrumbs_shop').val() != _default_breadcrumbs_shop){
		_default_breadcrumbs_shop = jQuery('#laszlo_breadcrumbs_shop').val();
		jQuery('#laszlo_breadcrumbs_shop').change();
	}

	//display secondary page title
	if (jQuery('#laszlo_hide_sec_pagetitle_shop').val() != _default_hide_sec_pagetitle_shop){
		_default_hide_sec_pagetitle_shop = jQuery('#laszlo_hide_sec_pagetitle_shop').val();
		jQuery('#laszlo_hide_sec_pagetitle_shop').change();
	}
	
	//display page title
	if (jQuery('#laszlo_hide_pagetitle_shop').val() != _default_hide_pagetitle_shop){
		_default_hide_pagetitle_shop = jQuery('#laszlo_hide_pagetitle_shop').val();
		jQuery('#laszlo_hide_pagetitle_shop').change();
	}

	//pagetitle shadow
	if (jQuery('#laszlo_page_title_shadow').val() != _default_page_title_shadow){
		_default_page_title_shadow = jQuery('#laszlo_page_title_shadow').val();
		jQuery('#laszlo_page_title_shadow').change();
	}

	//show secondary footer options
  	if (jQuery('#laszlo_show_sec_footer').val() != _default_show_secondary_footer){
	  	_default_show_secondary_footer = jQuery('#laszlo_show_sec_footer').val();
	  	jQuery('#laszlo_show_sec_footer').change();
  	}
	
	//show primary footer options
  	if (jQuery('#laszlo_show_primary_footer').val() != _default_show_primary_footer){
	  	_default_show_primary_footer = jQuery('#laszlo_show_primary_footer').val();
	  	jQuery('#laszlo_show_primary_footer').change();
  	}
  
  	//show twitter newsletter footer options
  	if (jQuery('#laszlo_show_twitter_newsletter_footer').val() != _default_show_twitter_newsletter_footer){
	  	_default_show_twitter_newsletter_footer = jQuery('#laszlo_show_twitter_newsletter_footer').val();
	  	jQuery('#laszlo_show_twitter_newsletter_footer').change();
  	}
  	
  	// header type light
  	if (jQuery('#laszlo_headerbg_type_light').val() != _default_headerbg_type_light){
	  	_default_headerbg_type_light = jQuery('#laszlo_headerbg_type_light').val();
	  	jQuery('#laszlo_headerbg_type_light').change();
  	}
  	
  	// header type dark
  	if (jQuery('#laszlo_headerbg_type_dark').val() != _default_headerbg_type_dark){
	  	_default_headerbg_type_dark = jQuery('#laszlo_headerbg_type_dark').val();
	  	jQuery('#laszlo_headerbg_type_dark').change();
  	}
  	
  	// header after scroll type light
  	if (jQuery('#laszlo_headerbg_after_scroll_type_light').val() != _default_headerbg_after_scroll_type_light){
	  	_default_headerbg_after_scroll_type_light = jQuery('#laszlo_headerbg_after_scroll_type_light').val();
	  	jQuery('#laszlo_headerbg_after_scroll_type_light').change();
  	}
  	
  	// header after scroll type dark
  	if (jQuery('#laszlo_headerbg_after_scroll_type_dark').val() != _default_headerbg_after_scroll_type_dark){
	  	_default_headerbg_after_scroll_type_dark = jQuery('#laszlo_headerbg_after_scroll_type_dark').val();
	  	jQuery('#laszlo_headerbg_after_scroll_type_dark').change();
  	}

  	// show header & top contents type
  	if (jQuery('#laszlo_toppanelbg_type').val() != _default_toppanelbg_type){
	  	_default_toppanelbg_type = jQuery('#laszlo_toppanelbg_type').val();
	  	jQuery('#laszlo_toppanelbg_type').change();
  	}
  	
  	// secondary footer type opts
  	if (jQuery('#laszlo_sec_footerbg_type').val() != _default_sec_footerbg_type){
	  	_default_sec_footerbg_type = jQuery('#laszlo_sec_footerbg_type').val();
	  	jQuery('#laszlo_sec_footerbg_type').change();
  	}
  	
  	// primary footer type opts
  	if (jQuery('#laszlo_footerbg_type').val() != _default_footerbg_type){
	  	_default_footerbg_type = jQuery('#laszlo_footerbg_type').val();
	  	jQuery('#laszlo_footerbg_type').change();
  	}
  	
  	// twitter newsletter type opts 
  	if (jQuery('#laszlo_twitter_newsletter_type').val() != _default_twitter_newsletter_type){
	  	_default_twitter_newsletter_type = jQuery('#laszlo_twitter_newsletter_type').val();
	  	jQuery('#laszlo_twitter_newsletter_type').change();
  	}
  	
  	// thumbails animate
  	if (jQuery('#laszlo_animate_thumbnails').val() != _default_animate_thumbnails){
	  	_default_animate_thumbnails = jQuery('#laszlo_animate_thumbnails').val();
	  	jQuery('#laszlo_animate_thumbnails').change();
  	}
  	
  	//body shadow
  	if (jQuery('#laszlo_body_shadow').val() != _default_body_shadow){
	  	_default_body_shadow = jQuery('#laszlo_body_shadow').val();
	  	jQuery('#laszlo_body_shadow').change();
  	}
  
  	//body layout page
  	if (jQuery('#laszlo_body_layout_type').val() != _default_body_layout_type){
	  	_default_body_layout_type = jQuery('#laszlo_body_layout_type').val();
	  	jQuery('#laszlo_body_layout_type').change();
  	}
  
  	//header background type
  	if (jQuery('#laszlo_header_type').val() != _default_header_bkg){
	  	_default_header_bkg = jQuery('#laszlo_header_type').val();
	  	jQuery('#laszlo_header_type').change();
  	}
  	
  	//header background type _single_post
  	if (jQuery('#laszlo_header_type_single_post').val() != _default_header_bkg_single_post){
	  	_default_header_bkg_single_post = jQuery('#laszlo_header_type_single_post').val();
	  	jQuery('#laszlo_header_type_single_post').change();
  	}
  	
  	//header background type _shop
  	if (jQuery('#laszlo_header_type_shop').val() != _default_header_bkg_shop){
	  	_default_header_bkg_shop = jQuery('#laszlo_header_type_shop').val();
	  	jQuery('#laszlo_header_type_shop').change();
  	}
  
  	//google fonts
  	if (jQuery('#laszlo_enable_google_fonts').val() != _default_google_fonts){
	  	_default_google_fonts = jQuery('#laszlo_enable_google_fonts').val();
	  	jQuery('#laszlo_enable_google_fonts').change();
  	}
  
  	//projects enlarge pics
  	if (jQuery('#laszlo_single_layout').val() != _default_proj_layout){
	 	_default_proj_layout = jQuery('#laszlo_single_layout').val();
	 	jQuery('#laszlo_single_layout').change();
  	}
  	
  	//projects open|close
  	if (jQuery('#laszlo_enable_open_close_categories').val() != _default_enable_open_close_categories){
	 	_default_enable_open_close_categories = jQuery('#laszlo_enable_open_close_categories').val();
	 	jQuery('#laszlo_enable_open_close_categories').change();
  	}
  
  	//FOOTER RIGHT CONTENT
    if (jQuery('#laszlo_footer_right_content').val() != _default_footer_right){
	    _default_footer_right = jQuery('#laszlo_footer_right_content').val();
	    jQuery('#laszlo_footer_right_content').change();
    }
    
    //TOPPANEL
    if ( jQuery('#laszlo_enable_top_panel').val() != _default_top_panel ) {
    	_default_top_panel = jQuery('#laszlo_enable_top_panel').val();
		jQuery('#laszlo_enable_top_panel').change();    
    }
    
    //WIDGETS AREA
    if (jQuery('#laszlo_enable_widgets_area').val() != _default_widgets_area){
	    _default_widgets_area = jQuery('#laszlo_enable_widgets_area').val();
	    jQuery('#laszlo_enable_widgets_area').change();
    }
    
    //SOCIAL ICONS
    if (jQuery('#laszlo_enable_socials').val() != _default_enable_socials){
	    _default_enable_socials = jQuery('#laszlo_enable_socials').val();
	    jQuery('#laszlo_enable_socials').change();
    }
    
    //404
    if (jQuery('#laszlo_404_error_image').val() != def_notfound){
		def_notfound = jQuery('#laszlo_404_error_image').val();
		jQuery('#laszlo_404_error_image').change();
    }
    
    //SIDEBAR
    if (jQuery('#sidebar_name_list').html() != def_sidebars){
	    var sidebars = "";
	    jQuery('#sidebar_name_list li').each(function(){
		    sidebars += jQuery(this).children('span').html()+"|*|";
	    });
	    jQuery('input#laszlo_sidebar_name_names').val(sidebars);
	    def_sidebars = jQuery('#sidebar_name_list').html();
    }
    
    //FOOTER
    if ( jQuery('#laszlo_footer_number_cols').val() != cols_default ) {
    	cols_default  = jQuery('#laszlo_footer_number_cols').val();
		jQuery('#laszlo_footer_number_cols').change();    
    }
    
    //TOP PANEL
    if ( jQuery('#laszlo_toppanel_number_cols').val() != tp_cols_default ) {
    	tp_cols_default  = jQuery('#laszlo_toppanel_number_cols').val();
		jQuery('#laszlo_toppanel_number_cols').change();  
    }
    
    if (jQuery('#laszlo_enable_ajax_search').val() != _default_ajax_search){
	    _default_ajax_search = jQuery('#laszlo_enable_ajax_search').val();
	    jQuery('#laszlo_enable_ajax_search').change();
    }
    
    if (jQuery('#laszlo_enable_search').val() != _default_search){
	 	_default_search = jQuery('#laszlo_enable_search').val();
	 	jQuery('#laszlo_enable_search').change();
    }
    
    if (jQuery('#laszlo_enable_website_loader').val() != _default_website_loader){
	    _default_website_loader = jQuery('#laszlo_enable_website_loader').val();
	    jQuery('#laszlo_enable_website_loader').change();
    }
    
    if (jQuery('#laszlo_pagetitle_image_overlay').val() != _default_overlay_enable){
	    _default_overlay_enable = jQuery('#laszlo_pagetitle_image_overlay').val();
	    jQuery('#laszlo_pagetitle_image_overlay').change();
    }
    
    if (jQuery('#laszlo_pagetitle_image_overlay_shop').val() != _default_overlay_enable_shop){
	    _default_overlay_enable_shop = jQuery('#laszlo_pagetitle_image_overlay_shop').val();
	    jQuery('#laszlo_pagetitle_image_overlay_shop').change();
    }
    
    if (jQuery('#laszlo_pagetitle_image_overlay_single_post').val() != _default_overlay_enable_single_post){
	    _default_overlay_enable_single_post = jQuery('#laszlo_pagetitle_image_overlay_single_post').val();
	    jQuery('#laszlo_pagetitle_image_overlay_single_post').change();
    }
        
    if (jQuery('#laszlo_pagetitle_overlay_type').val() != _default_overlay_type){
	    _default_overlay_type = jQuery('#laszlo_pagetitle_overlay_type').val();
	    jQuery('#laszlo_pagetitle_overlay_type').change();
    }
    
    if (jQuery('#laszlo_pagetitle_overlay_type_shop').val() != _default_overlay_type_shop){
	    _default_overlay_type_shop = jQuery('#laszlo_pagetitle_overlay_type_shop').val();
	    jQuery('#laszlo_pagetitle_overlay_type_shop').change();
    }
    
    
     if (jQuery('#laszlo_pagetitle_image_overlay_single_post').val() != _default_overlay_enable_single_post){
	    _default_overlay_enable_single_post = jQuery('#laszlo_pagetitle_image_overlay_single_post').val();
	    jQuery('#laszlo_pagetitle_image_overlay_single_post').change();
    }
        
    if (jQuery('#laszlo_pagetitle_overlay_type').val() != _default_overlay_type){
	    _default_overlay_type = jQuery('#laszlo_pagetitle_overlay_type').val();
	    jQuery('#laszlo_pagetitle_overlay_type').change();
    }
    
    if (jQuery('#laszlo_pagetitle_overlay_type_single_post').val() != _default_overlay_type_single_post){
	    _default_overlay_type_single_post = jQuery('#laszlo_pagetitle_overlay_type_single_post').val();
	    jQuery('#laszlo_pagetitle_overlay_type_single_post').change();
    }
    
    //project single socials
	if (jQuery('#laszlo_project_single_social_shares').val() != _default_project_single_social){
		_default_project_single_social = jQuery('#laszlo_project_single_social_shares').val();
		jQuery('#laszlo_project_single_social_shares').change();
	}
	
	//post single socials
	if (jQuery('#laszlo_post_single_social_shares').val() != _default_post_single_social){
		_default_post_single_social = jQuery('#laszlo_post_single_social_shares').val();
		jQuery('#laszlo_post_single_social_shares').change();
	}
	
	//metas
	if (jQuery('#laszlo_display_metas').val() != _default_display_metas){
		_default_display_metas = jQuery('#laszlo_display_metas').val();
		jQuery('#laszlo_display_metas').change();
	}
	
	//header button
	if (jQuery('#laszlo_header_button').val() != _default_header_button){
		_default_header_button = jQuery('#laszlo_header_button').val();
		jQuery('#laszlo_header_button').change();
	}
	
	//underline no search input
	if (jQuery('#laszlo_search_input_enable_underline').val() != _default_search_input_enable_underline){
		_default_search_input_enable_underline = jQuery('#laszlo_search_input_enable_underline').val();
		jQuery('#laszlo_search_input_enable_underline').change();
	}
    
  }, 1000);

});
