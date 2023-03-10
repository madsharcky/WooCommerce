<div class="grid-item <?php echo esc_attr($desktop_class).esc_attr($tablet_class).esc_attr($mobile_class)." ".esc_attr($RKey)." ".esc_attr($ReviewClass); ?>">
    <?php 
        include TPGB_INCLUDES_URL. "social-reviews/social-review-ob-style.php";
		echo '<div class="review-s3-wrap">';
			echo '<div class="tpgb-review '.esc_attr($ErrClass).'">';
				echo '<div class="review-top-area">'; 
					echo $Star_HTML;
					echo $Logo_HTML;
				echo '</div>'; 
				echo $Description_HTML;
			echo '</div>'; 
			echo '<div class="tpgb-sr-header">';
				echo $Profile_HTML;
				echo '<div class="tpgb-sr-separator">';
					echo $UserName_HTML; 
					echo $Time_HTML;
				echo '</div>';
			echo '</div>';
		echo '</div>';
    ?>
</div>