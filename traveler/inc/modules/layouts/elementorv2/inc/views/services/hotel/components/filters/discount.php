<li class="filter-discount">
    <div class="form-extra-field">
        <button class="btn btn-link dropdown dropdown-toggle" type="button" id="dropdownMenuDiscount" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
            <?php echo esc_html($title); ?> <span class="count"></span> <span class="stt-icon stt-icon-arrow-down"></span>
        </button>
        <div class="dropdown-menu st-icheck" aria-labelledby="dropdownMenuDiscount">
            <div class="dropdown-title"><?php echo esc_html__('Discount', 'traveler'); ?></div>
            <ul>
                <li class="st-icheck-item">
                    <label>
                        <?php echo __('Discount', 'traveler'); ?>
                        <input type="checkbox" name="discount_only" data-type="discount" value="1" class="filter-item"/>
                        <span class="checkmark fcheckbox"></span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</li>