<div class="grid-item <?php echo esc_attr($desktop_class).esc_attr($tablet_class).esc_attr($mobile_class)." ".esc_attr($RKey)." ".esc_attr($ReviewClass); ?>">
    <?php include TPGB_INCLUDES_URL. "social-reviews/social-review-ob-style.php"; ?>

    <div class="tpgb-review <?php echo esc_attr($ErrClass); ?>">
        <?php 
            echo '<div class="tpgb-sr-header">';
                echo $Profile_HTML;
				echo '<div class="header-inner-content">';
					echo $UserName_HTML;
					echo $Star_HTML;
				echo '</div>';
            echo '</div>';
            echo $Description_HTML; 
        ?>

        <div class="tpgb-sr-bottom">
			<div class="bottom-left-content">
				<?php echo $Logo_HTML; ?>
				<div class="tpgb-sr-logotext" >
					<span class="tpgb-newline" ><?php echo esc_html__("Posted On ","tpgb"); ?></span>
					<span class="tpgb-newline"><?php echo esc_html($PlatformName); ?></span>
				</div>
			</div>
            <?php echo $Time_HTML; ?>
        </div>
    </div>
</div>