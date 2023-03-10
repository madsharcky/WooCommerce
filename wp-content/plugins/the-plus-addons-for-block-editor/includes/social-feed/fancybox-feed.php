<?php
if($FancyStyle == 'style-1'){
	include TPGB_INCLUDES_URL."social-feed/fancybox-feed-style-1.php";
}else if($FancyStyle == 'style-2'){
	include TPGB_INCLUDES_URL."social-feed/fancybox-feed-style-2.php";
}else{
	if(empty($FbAlbum)){
		$PopupTarget=$PopupLink='';
		if( $PopupOption == "Donothing" ){
			$videoURL = '';
		}else if( $PopupOption == "GoWebsite" ){
			$PopupTarget = 'target=_blank rel="noopener noreferrer"';
			$PopupLink = 'href="'.esc_url($videoURL).'"';
		}else if( $PopupOption == "OnFancyBox" ){
			$PopupLink = 'href="'.esc_url($videoURL).'"';
		}
	}

	if( $selectFeed == 'Facebook' && !empty($FbAlbum) ){
		$ij=0;            
		
		if(!empty($videoURL)){
			foreach ($videoURL as $fdata){              
				$AImg = ( !empty($fdata['images']) && !empty($fdata['images'][0]['source']) ) ? $fdata['images'][0]['source'] : ''; 

				if($ij == 0){ ?>
					<a href="<?php echo esc_url($AImg); ?>" <?php echo $FancyBoxJS; ?> >
						<img class="reference-thumb tpgb-post-thumb" src="<?php echo esc_url($ImageURL); ?>" />
					</a>
				<?php }else{ ?>
					<a href="<?php echo esc_url($AImg); ?>" <?php echo $FancyBoxJS; ?> >
						<img class="hidden-image" src="<?php echo esc_url($AImg); ?>" />
					</a>
				<?php  }
				$ij++;
			}
		}
	}else{
		if( ($Type == 'video' || $Type == 'photo') && (!empty($ImageURL)) ){
			if($style == "style-1" || $style == "style-2"){ ?> 
				<a <?php echo $PopupLink . $PopupTarget . $FancyBoxJS; ?> class="tpgb-soc-img-cls" >
					<img class="tpgb-post-thumb" src="<?php echo esc_url($ImageURL); ?>" />
				</a>
			<?php }else if($style == "style-3" || $style == "style-4"){
				echo '<a '.$PopupLink . $PopupTarget . $FancyBoxJS.' class="tpgb-image-link"></a>';
			}
		} 
	}

}
?>