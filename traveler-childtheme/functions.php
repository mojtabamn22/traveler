<?php
/**
 * Created by PhpStorm.
 * User: MSI
 * Date: 21/08/2015
 * Time: 9:45 SA
 */
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles', 20 );

function enqueue_parent_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_uri() );
}

function remove_admin_bar() {
// if (!current_user_can('administrator') && !is_admin()) {
  show_admin_bar(false);
// }
}
add_action('after_setup_theme', 'remove_admin_bar');


/**
 * Fix Enqueue Dependencies & Replace DateRangePicker with Jalali Version
 */
function my_child_override_and_enqueue_picker() {
    $child_uri = get_stylesheet_directory_uri();
    $version   = '1.0.0';

    // 1. Dequeue و Deregister اسکریپت‌های قدیمی تم والد
// حذف استایل (CSS) دیت‌رنج‌پیکر تم اصلی
    wp_dequeue_style('daterangepicker');
    wp_deregister_style('daterangepicker');

    wp_dequeue_script('moment');
    wp_deregister_script('moment');

    wp_dequeue_script('daterangepicker-js');
    wp_deregister_script('daterangepicker-js');

    // 2. بارگذاری فایل CSS لوکال
    wp_enqueue_style(
        'jalali-daterangepicker-css',
        $child_uri . '/css/jalali-daterangepicker.css',
        array(),
        $version
    );

    // 3. ثبت و انکیوی نسخه جدید moment لوکال
    wp_enqueue_script(
        'moment',
        $child_uri . '/js/moment.min.js',
        array('jquery'),
        '2.29.4',
        true
    );

    // 4. ثبت و انکیوی jalali-moment لوکال
    wp_enqueue_script(
        'jalali-moment',
        $child_uri . '/js/jalali-moment.js',
        array('moment'),
        '0.9.2',
        true
    );

    // 5. ثبت و انکیوی تقویم شمسی شما روی Handle اصلی daterangepicker-js
    wp_enqueue_script(
        'daterangepicker-js',
        $child_uri . '/js/jalali-daterangepicker.js',
        array('jquery', 'moment', 'jalali-moment'),
        $version,
        true
    );

    // ------------------------------------------------------------------
    // 6. حل مشکل اصلی: اصلاح وابستگی اسکریپت‌های form-search و main
    // ------------------------------------------------------------------
    // اگر این اسکریپت‌ها قبلاً صف‌بندی شده‌اند، وابستگی daterangepicker-js را به آن‌ها اضافه می‌کنیم
    

    wp_enqueue_script(
        'my-child-custom-js',
        $child_uri . '/js/custom.js',
        array('jquery', 'daterangepicker-js'),
        $version,
        true
    );

    $scripts_to_fix = array('form-search', 'main', 'single-hotel-detail');
    foreach ($scripts_to_fix as $handle) {
        if (wp_script_is($handle, 'registered') || wp_script_is($handle, 'enqueued')) {
            $script = wp_scripts()->query($handle);
            if ($script && !in_array('my-child-custom-js', $script->deps)) {
                $script->deps[] = 'my-child-custom-js';
            }
            if ($script && !in_array('daterangepicker-js', $script->deps)) {
                $script->deps[] = 'daterangepicker-js';
            }
        }
    }

    // $scripts_to_fix = array('form-search', 'main');
    // foreach ($scripts_to_fix as $handle) {
    //     if (wp_script_is($handle, 'registered') || wp_script_is($handle, 'enqueued')) {
    //         // دریافت اسکریپت ثبت‌شده
    //         $script = wp_scripts()->query($handle);
    //         if ($script && !in_array('daterangepicker-js', $script->deps)) {
    //             // اضافه کردن daterangepicker-js به وابستگی‌های اسکریپت جهت رعایت ترتیب لود
    //             $script->deps[] = 'daterangepicker-js';
    //         }
    //     }
    // }
}

// اجرای تابع با priority 9999 پس از ثبت تمام اسکریپت‌های تم والد
add_action('wp_enqueue_scripts', 'my_child_override_and_enqueue_picker', 9999);