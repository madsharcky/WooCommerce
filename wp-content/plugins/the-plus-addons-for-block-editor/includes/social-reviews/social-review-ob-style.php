<?php 
	 $Description_HTML='';
    ob_start();
        echo '<div class="tpgb-sr-content">';
            include TPGB_INCLUDES_URL. "social-reviews/social-review-showmore.php";
        echo '</div>';
    $Description_HTML .= ob_get_clean();

    // Start Icon
        $Star_HTML='';
        $Star_HTML .= '<div class="tpgb-sr-star">';
            for ($i=0; $i<$rating; $i++) {
                $Star_HTML .= '<i star-rating="'.esc_attr($i).'" class="'.esc_attr($Icon).' sr-star"></i>';
            }
        $Star_HTML .= '</div>';

    // Username
        $UserName_HTML='';
        $UserName_HTML .= '<div class="tpgb-sr-username">';
            $UserName_HTML .= '<a href="'.esc_url($ULink).'" target="_blank">'.esc_html($UName).'</a>';
        $UserName_HTML .= '</div>';

    // logo Image
        $Logo_HTML = '<a href="'.esc_url($PageLink).'" target="_blank"><img class="tpgb-sr-logo" src="'.esc_url($Logo).'"  alt="'.esc_html__( 'tpgb_sepIcon', 'tpgb' ).'" /></a>';

    // Time
        $Time_HTML = '<div class="tpgb-sr-time">'.esc_html($Time).'</div>';
    
    // Profile
        $Profile_HTML = '<img class="tpgb-sr-profile" src="'.esc_url($UImage).'" />';