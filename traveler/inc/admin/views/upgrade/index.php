<?php 

/**

*@since 1.3.0

**/

wp_enqueue_style( 'admin-location-nested' );

wp_enqueue_script('admin-location-nested.js' );

?>

<div class="notice notice-warning" style="padding-bottom: 10px">

	<p>به‌روزرسانی داده‌های جدید، مانند ساختار مکان... لطفاً قبل از اجرای آن، همه خدمات (هتل، خودرو، اجاره، تور، فعالیت) را در گزینه‌های تم > گزینه‌های عمومی فعال کنید</p>

	<?php if( $upgraded ): ?>

		<p><em>(شما این کار را یک بار انجام داده‌اید. اگر می‌خواهید دوباره انجام دهید، روی دکمه "به‌روزرسانی اکنون" کلیک کنید.)</em></p>

	<?php endif; ?>

	<button id="st-update-glocation" class="button button-primary button-large" type="submit">به‌روزرسانی داده‌ها</button>

</div>

<div class="update-glocation-wrapper">

	<div class="update-glocation-content">

		<div class="update-glocation-title clear">

			<h3 class="title">

				<img src="<?php echo get_template_directory_uri(); ?>/img/logo-mini.png" alt="<?php echo TravelHelper::get_alt_image(); ?>" class="img-responsive"><?php echo __('Traveler Upgrade Data', 'traveler'); ?>

			</h3>

			<a href="#" class="update-glocation-close"></a>

		</div>

		<div class="update-glocation-description">

			به‌روزرسانی داده‌های جدید، مانند ساختار مکان... لطفاً قبل از اجرای آن، همه خدمات (هتل، خودرو، اجاره، تور، فعالیت) را در گزینه‌های تم > گزینه‌های عمومی فعال کنید

			<br/>

			<h2>شما این گزینه‌ها را در زیر به‌روزرسانی خواهید کرد:</h2>

		</div>

		<form action="#" class="update-item-form">

			<div class="item step-1">

				<div class="info">

					<input checked id="update_table_post_type" type="checkbox" name="update_table_post_type" value="update_table_post_type" style="display: none">

					<p>به‌روزرسانی <strong>خدمات</strong>.</p>

					<p class="status"></p>

				</div>

			</div>

			<div class="item step-2">

				<div class="info">

					<input checked id="update_location_nested" type="checkbox" name="update_location_nested" value="update_location_nested" style="display: none">

					<p>به‌روزرسانی <strong>مکان</strong>.</p>

					<p class="status"></p>

				</div>

			</div>

			<div class="item step-3">

				<div class="info">

					<input checked id="update_location_relationships" type="checkbox" name="update_location_relationships" value="update_location_relationships" style="display: none">

					<p>به‌روزرسانی <strong>روابط مکان</strong>.</p>

					<p class="status"></p>

				</div>

			</div>

			<div class="update-glocation-progress">

				<div class="progress-bar"><span style="width: 0%"></span></div>

			</div>

		</form>

		<div class="update-glocation-note">

			(*) توجه: "داده‌های به‌روزرسانی شده ممکن است خطاهایی ایجاد کنند که منجر به فساد محتوا یا اطلاعات نادرست شوند. ما توصیه می‌کنیم که مشتریان قبل از انجام این کار، از داده‌های خود پشتیبان تهیه کنند."

		</div>

		<div class="update-glocation-message"></div>

		<div class="update-glocation-button"><?php echo __('Run', 'traveler'); ?></div>

		

		<input checked id="reset_table" type="checkbox" name="reset_table" value="reset" style="display: none">

		

	</div>

</div>