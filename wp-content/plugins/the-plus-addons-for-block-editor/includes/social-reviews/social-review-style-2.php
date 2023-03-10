<div class="grid-item <?php echo esc_attr($desktop_class).esc_attr($tablet_class).esc_attr($mobile_class)." ".esc_attr($RKey)." ".esc_attr($ReviewClass); ?>">
    <?php include TPGB_INCLUDES_URL. "social-reviews/social-review-ob-style.php"; ?>

    <div class="tpgb-review <?php echo esc_attr($ErrClass); ?>" >
        <?php
            echo '<div class="tpgb-sr-header">';
                echo $Profile_HTML;
                    if($UserFooter == 'layout-1'){
                        echo $UserName_HTML;
                    } 
                echo $Star_HTML; 
            echo '</div>';
            echo $Description_HTML; 
        ?>

        <div class="tpgb-sr-header">
            <?php 
                if($UserFooter == 'layout-2'){ 
                    echo $UserName_HTML;
                    echo $Time_HTML;
                } 
            ?>
            <div class="tpgb-sr-bottom-logo" >
                <?php echo $Logo_HTML; ?>
                <div class="tpgb-sr-logotext" >
                    <span class="tpgb-newline" >
                        <?php echo esc_html__("Posted On ", "tpgb").esc_html($PlatformName); ?>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>