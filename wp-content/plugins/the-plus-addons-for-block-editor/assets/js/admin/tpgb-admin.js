(function ($) {
	"use strict";
	// Clear purge cache files styles and scripts
		var performace_cont = $('#cmb2-metabox-tpgb_performance');
		if(performace_cont.length > 0){
			var ids="tpgb-remove-smart-cache";
			var ids_dynamic="tpgb-remove-dynamic-style";
			var smart_action = '';
			var dynamic_action ='';
			
			if(performace_cont.length > 0){
				var selected = false;
				if($("body").hasClass("perf-separate")){
					selected = true;
				}
				performace_cont.append('<div class="cmb-row tpgb-remove-plus-cache"><div class="cmb-th"><label for="plus_smart_performance">Cache Manager</label></div><div class="tpgb-select-caching-type"><select id="tpgb-cache-opt-performance"><option value="combine" '+(selected ? '' : 'selected="selected"')+'>Smart Optimized Mode</option><option value="separate" '+(selected ? 'selected="selected"' : '')+'>On Demand Assets</option></select><div class="tpgb-perf-save-msg"></div></div><div class="cmb-td performance-combine"><p class="cmb2-metabox-description">In this mode, we scan every individual page where our blocks has been used, then combine & minify them into 1 CSS & 1 JS file. This would lead to only 2 requests from our plugin. The optimized asset is stored at "/wp-content/uploads/theplus_gutenberg"</p><a href="#" id="'+ids+'" class="tpgb-smart-cache-btn">Purge All Cache</a><div class="smart-performace-desc-btn">* Use above button to delete all cache our plugin have generated. It will start creating cache once some one start visiting your website.</div></div><div class="cmb-td performance-separate"><p class="cmb2-metabox-description">In this mode, no optimization is performed from our end, and all the blocks CSS and JS are loaded individually for every page. This results to more no. of requests, therefore having an optimization plugin is important. We would only suggest you to use this method if you have complex cache mechanism and often face frontend and backend design issues on our smart optimized mode.</p></div></div>');

				performace_cont.append('<div class="cmb-row tpgb-default-block-page"><div class="cmb-th"><label>Gutenberg Default Blocks Manager</label></div><div class="cmb-td"><p class="cmb2-metabox-description">You can enable/disable Blocks of Default Gutenberg aka Block Editor. It also having scan feature to auto find used blocks on website and disable rest blocks.</p><a href="'+window.location.pathname+'?page=tpgb_default_load_blocks" class="tpgb-block-manager-btn">Visit Block Manager</a><div class="smart-performace-desc-btn">Note : This is a beta feature. You may enable/disable any blocks as well as scan blocks to auto disable all at once. But, Make sure to have complete backup of site before using this.</div></div></div>');

				smart_action = "tpgb_all_perf_clear_cache";
				
				performace_cont.append('<div class="cmb-row tpgb-remove-dynamic-style"><div class="cmb-th"><label for="plus_smart_performance">Regenerate Assets <span class="tpgb-tooltip-dynamic">!</span></label><p class="cmb2-metabox-description">Note : If you find any discrepancy in frontend and backend design, then we would suggest you to click on above button to regenerate the assets dynamically again based on design changes.</p></div><div class="cmb-td"><a href="#" id="'+ids_dynamic+'" class="tpgb-smart-cache-btn">REGENERATE ALL ASSETS</a></div></div>');
				
				dynamic_action = "tpgb_all_dynamic_clear_style";
				tpgb_perf_opt_change(false, $('#tpgb-cache-opt-performance').val());
				function tpgb_perf_opt_change(onajax=false, cacheVal){
					if(cacheVal=='combine'){
						$('.cmb-td.performance-combine').show(100);
						$('.cmb-td.performance-separate').hide(100);
					}else{
						$('.cmb-td.performance-combine').hide(100);
						$('.cmb-td.performance-separate').show(100);
					}
					var $this = $(".tpgb-perf-save-msg");
					if(onajax && cacheVal){
						$this.show(50);
						$.ajax({
							url: tpgb_admin.ajax_url,
							type: "post",
							data: {
								action: 'tpgb_performance_opt_cache',
								security: tpgb_admin.tpgb_nonce,
								perf_caching: cacheVal
							},
							beforeSend: function() {
								 $this.html(
									'<svg id="plus-spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="4" r="4" fill="#fff"/><circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/><circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/><circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/><circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/><circle cx="24" cy="44" r="2.5" fill="#feebbc"/><circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/><circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/><circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/><circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/></svg>'
								);
							},
							success: function(response) {
								if(response && response.success){
									$this.addClass('success')
									$this.html("Saved..");
									setTimeout(function() {
										$this.hide(100);
										$this.removeClass('success')
									}, 2000);
								}else{
									$this.addClass('error')
									$this.html("Server Error..");
									setTimeout(function() {
										$this.hide(100);
										$this.removeClass('error')
									}, 2000);
								}
							},
							error: function() {
							}
						});
					}
				}
    			$("#tpgb-cache-opt-performance").on('change',function(){
					tpgb_perf_opt_change(true,$(this).val());
				})
			}
			
			$("#"+ids).on("click", function(e) {
				e.preventDefault();
				if(performace_cont.length > 0){
					var confirmation = confirm("Are you sure want to remove all cache files? It will remove all cached JS and CSS files from your server. It will generate automatically on your next visit of page.?");
				}
				if (confirmation) {
					var $this = $(this);
					$.ajax({
						url: tpgb_admin.ajax_url,
						type: "post",
						data: {
							action: smart_action,
							security: tpgb_admin.tpgb_nonce
						},
						beforeSend: function() {
							$this.html(
								'<svg id="plus-spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="4" r="4" fill="#fff"/><circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/><circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/><circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/><circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/><circle cx="24" cy="44" r="2.5" fill="#feebbc"/><circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/><circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/><circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/><circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/></svg><span style="margin-left: 5px;">Removing Purge...</span>'
							);
						},
						success: function(response) {
							if(performace_cont.length > 0){
								setTimeout(function() {
									$this.html("Purge All Cache");
								}, 100);
							}
						},
						error: function() {
						}
					});
				}
			});
			
			$("#"+ids_dynamic).on("click", function(e) {
				e.preventDefault();
				if(performace_cont.length > 0){
					var confirmation = confirm("Are you sure want to remove all cache files? It will remove all cached JS and CSS files from your server. It will generate automatically on your next visit of page.?");
				}
				if (confirmation) {
					var $this = $(this);
					$.ajax({
						url: tpgb_admin.ajax_url,
						type: "post",
						data: {
							action: dynamic_action,
							security: tpgb_admin.tpgb_nonce
						},
						beforeSend: function() {
							$this.html(
								'<svg id="plus-spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="4" r="4" fill="#fff"/><circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/><circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/><circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/><circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/><circle cx="24" cy="44" r="2.5" fill="#feebbc"/><circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/><circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/><circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/><circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/></svg><span style="margin-left: 5px;">Removing Assets...</span>'
							);
						},
						success: function(response) {
							if(performace_cont.length > 0){
								setTimeout(function() {
									$this.html("REGENERATE ALL ASSETS");
								}, 100);
							}
						},
						error: function() {
						}
					});
				}
			});
		}
		
		/*Welcome page FAQ*/
		$('.tpgb-welcome-faq .tpgb-faq-section .faq-title').on('click',function() {
			var $parent = $(this).closest('.tpgb-faq-section');
			var $btn = $parent.find('.faq-icon-toggle')
			$parent.find('.faq-content').slideToggle();
			$parent.toggleClass('faq-active');
		});
		/*Welcome page FAQ*/
		/*Plus block Listing*/
		$('#block_check_all').on('click', function() {
				$('.plus-block-list input:checkbox:enabled').prop('checked', $(this).prop('checked'));
			if(this.checked){
				$(this).closest(".panel-block-check-all").addClass("active-all");
			}else{
				$(this).closest(".panel-block-check-all").removeClass("active-all");
			}
		});
		$( ".panel-block-filters .blocks-filter" ).on('change',function () {
			var selected = $( this ).val();
			var block_filter = $(".plus-block-list .tpgb-panel-col");
			if(selected!='all'){
				block_filter.removeClass('is-animated')
					.fadeOut(5).promise().done(function() {
					  block_filter.filter(".block-"+selected)
						.addClass('is-animated').fadeIn();
					});
			}else if(selected=='all'){
				block_filter.removeClass('is-animated')
					.fadeOut(5).promise().done(function() {
						block_filter.addClass('is-animated').fadeIn();
					});
			}
		});
		
		var timeoutID = null;
		
		function tpgb_block_filter(search) {
			$.ajax({
				url: tpgb_admin.ajax_url,
				type: "post",
				data: {
					action: 'tpgb_block_search',
					filter: search,
					security: tpgb_admin.tpgb_nonce
				},
				beforeSend: function() {
					
				},
				success: function(response) {
					if(response!=''){
						$(".plus-block-list").empty();
						$(".plus-block-list").append(response);
					}
					$( ".panel-block-filters .blocks-filter" ).change();
				}
			});
		}
		$( ".tpgb-block-filters-search .block-search" ).on('keyup',function( e ) {
			clearTimeout(timeoutID);
			timeoutID = setTimeout(tpgb_block_filter.bind(undefined, e.target.value), 350);
			//var search = $(this).val();
		});
		/*Plus block Listing*/
		/* Rollback */
		if($('.tpgb-rollback-inner').length){
			$('.tpgb-rollback-inner').each(function(){
				var $this = $(this),
				rb_btn = $this.find('.tpgb-rollback-button'),
				data_btn_text = rb_btn.data('rv-text'),
				data_btn_url = rb_btn.data('rv-url'),
				rb_select = $this.find('.tpgb-rollback-list').val();
				if(rb_select){
					rb_btn.html(data_btn_text.replace('{TPGB_VERSION}', rb_select));
					rb_btn.attr('href', data_btn_url.replace('TPGB_VERSION', rb_select));
				}
				$this.find('.tpgb-rollback-list').on("change",function(){
					rb_btn.html(data_btn_text.replace('{TPGB_VERSION}', $(this).val()));
					rb_btn.attr('href', data_btn_url.replace('TPGB_VERSION', $(this).val()));
				});
				rb_btn.on('click', function (e) {
					e.preventDefault();
					var $btn_this = $(this);
					if(confirm("Are you sure you want to reinstall previous version?")){
						location.href = $btn_this.attr('href');
					}
				});
			});
		}
		/* Rollback */
})(window.jQuery);