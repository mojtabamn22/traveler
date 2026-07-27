<?php
$meta_value = get_post_meta($post_id, 'properties_near_by', true);
$places = !empty($meta_value) ? maybe_unserialize($meta_value) : [];
?>
<div class="st-hr"></div>
<div class="st-section-single" id="near-place">
    <h2 class="st-title-section">مکان‌های مهم اطراف هتل</h2>
    <?php foreach ($places as $place): ?>
    <div class="st-hr"></div>
    <div class="row">
        <h5><?php echo esc_html($place['title']); ?> </h5>
    </div>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <div class="item d-flex align-items-center has-matchHeight" style="height: 46px;">
            <i class="la-2x las la-car"></i><?php echo esc_html($place['car_time']); ?> دقیقه
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="item d-flex align-items-center has-matchHeight" style="height: 46px;">
            <i class="la-2x las la-walking"></i><?php echo esc_html($place['walking_distance']); ?> دقیقه
            </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <div class="item d-flex align-items-center has-matchHeight" style="height: 46px;">
            <i class="la-2x las la-ruler"></i><?php echo esc_html($place['distance']); ?> متر
            </div>
        </div>
    </div>
<?php endforeach; ?>
</div>