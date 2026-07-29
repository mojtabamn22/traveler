(function ($) {
    if (!$.fn || !$.fn.daterangepicker) return;
    var origDaterangepicker = $.fn.daterangepicker;

    function getURLParameter(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) return null;
        return decodeURIComponent(results[1]) || null;
    }

    function syncCarHiddenInputs(picker, $input) {
        if (!picker) return;
        var $form = $input.closest('form');
        if (!$form.length) $form = $('form.has-match-height, form.form-booking-car, .st-single-plugin form');

        if (picker.startDate && picker.endDate) {
            var startGregorian = picker.startDate.clone().locale('en').format('YYYY/MM/DD');
            var endGregorian = picker.endDate.clone().locale('en').format('YYYY/MM/DD');

            var startTime = picker.startDate.format('hh:mm A');
            var endTime = picker.endDate.format('hh:mm A');

            $form.find('input[name="pick-up-date"]').val(startGregorian);
            $form.find('input[name="drop-off-date"]').val(endGregorian);
            $form.find('input[name="pick-up-time"]').val(startTime);
            $form.find('input[name="drop-off-time"]').val(endTime);

            $form.find('input[name="check_in"], input[name="start"]').val(startGregorian);
            $form.find('input[name="check_out"], input[name="end"]').val(endGregorian);
            $form.find('input[name="check_in_time"]').val(startTime);
            $form.find('input[name="check_out_time"]').val(endTime);
        }
    }

    $.fn.daterangepicker = function (options, cb) {
        options = options || {};

        this.each(function () {
            var $input = $(this);
            var oldPicker = $input.data('daterangepicker');
            if (oldPicker && oldPicker.container) {
                oldPicker.container.remove();
                $input.removeData('daterangepicker');
            }
            // پاکسازی ایزوله فقط روی تقویم‌های Inline واقعی
            var $inlineParent = $input.closest('.rate-calendar-style-1, .rate-calendar, .st-availability-calendar-wrapper');
            if ($inlineParent.length) {
                $inlineParent.find('.daterangepicker-dual, .daterangepicker').remove();
            }
        });

        var today = (typeof moment === 'function') ? moment().startOf('day') : false;

        var defaultLocale = {
            format: 'jYYYY/jMM/jDD',
            applyLabel: 'اعمال',
            cancelLabel: 'انصراف',
            fromLabel: 'از',
            toLabel: 'تا',
            customRangeLabel: 'سفارشی',
            weekLabel: 'ام',
            daysOfWeek: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
            monthNames: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
            firstDay: 6
        };

        var mergedOptions = $.extend(true, {}, options);
        mergedOptions.calendarType = 'solar';
        if (!mergedOptions.minDate) {
            mergedOptions.minDate = today;
        }
        mergedOptions.locale = $.extend({}, defaultLocale, options.locale || {});
        mergedOptions.locale.monthNames = defaultLocale.monthNames;
        mergedOptions.locale.daysOfWeek = defaultLocale.daysOfWeek;
        mergedOptions.showDropdowns = false;

        // فقط کانتینرهای تقویم صریح (مانند تقویم دسترسی) به عنوان Inline ست شوند
        var $inlineContainer = this.closest('.rate-calendar-style-1, .rate-calendar, .st-availability-calendar-wrapper');
        if ($inlineContainer.length) {
            mergedOptions.parentEl = $inlineContainer;
            mergedOptions.inline = true;
        }

        this.each(function () {
            var $input = $(this);

            var startVal = getURLParameter('pick-up-date') || getURLParameter('check_in') || getURLParameter('start');
            var endVal = getURLParameter('drop-off-date') || getURLParameter('check_out') || getURLParameter('end');
            var startTimeVal = getURLParameter('pick-up-time') || getURLParameter('check_in_time') || '';
            var endTimeVal = getURLParameter('drop-off-time') || getURLParameter('check_out_time') || '';

            function parseAnyDate(str, timeStr) {
                if (!str || typeof str !== 'string' || $.trim(str) === '') return null;
                var fullStr = timeStr ? (str.trim() + ' ' + timeStr.trim()) : str.trim();

                var formats = [
                    'YYYY/MM/DD hh:mm A', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD',
                    'YYYY-MM-DD hh:mm A', 'YYYY-MM-DD HH:mm', 'YYYY-MM-DD',
                    'DD/MM/YYYY hh:mm A', 'DD/MM/YYYY HH:mm', 'DD/MM/YYYY',
                    'jYYYY/jMM/jDD hh:mm A', 'jYYYY/jMM/jDD'
                ];

                var m = moment(fullStr, formats, true);
                if (!m.isValid()) {
                    m = moment(str.trim(), ['YYYY/MM/DD', 'YYYY-MM-DD', 'DD/MM/YYYY', 'jYYYY/jMM/jDD']);
                }

                if (m.isValid() && m.year() >= 2020 && m.year() <= 2040) {
                    return m;
                }
                return null;
            }

            var parsedStart = parseAnyDate(startVal, startTimeVal);
            var parsedEnd = parseAnyDate(endVal, endTimeVal);

            if (parsedStart && parsedEnd) {
                mergedOptions.startDate = parsedStart;
                mergedOptions.endDate = parsedEnd;
            } else if (today) {
                mergedOptions.startDate = today.clone();
                mergedOptions.endDate = today.clone().add(1, 'day');
            }
        });

        var res = origDaterangepicker.call(this, mergedOptions, cb);

        this.each(function () {
            var $input = $(this);
            var picker = $input.data('daterangepicker');
            if (!picker) return;

            syncCarHiddenInputs(picker, $input);

            $input.on('apply.daterangepicker change', function () {
                syncCarHiddenInputs(picker, $input);
            });

            if (picker.container) {
                picker.container.on('click', '.day', function () {
                    setTimeout(function () {
                        syncCarHiddenInputs(picker, $input);
                    }, 10);
                });
            }

            var $rateContainer = $input.closest('.rate-calendar-style-1, .rate-calendar, .st-availability-calendar-wrapper');
            if ($rateContainer.length > 0 && picker.container) {
                $rateContainer.find('.daterangepicker-dual, .daterangepicker').not(picker.container).remove();
                picker.container.addClass('inline-calendar dp-inline');
                picker.container.show();
            }

            var origHide = picker.hide;
            picker.hide = function (e) {
                if (this.inline || (this.container && (this.container.hasClass('inline-calendar') || this.container.hasClass('dp-inline')))) {
                    return;
                }
                return origHide.apply(this, arguments);
            };
        });

        return res;
    };

})(jQuery);

jQuery(document).ready(function ($) {

    $(document).on('apply.daterangepicker', 'input.check-in-out, input[name="date"]', function (ev, picker) {
        if (picker && picker.container && !picker.inline) {
            picker.container.hide();
        }
    });

    var dateBoxSelector = '.check-in-wrapper, .render-check-in-render, .render-check-out-render, .st-item-date, .st_grid_date, .form-date-field, .form-date-search';

    $(document).on('click', dateBoxSelector, function (e) {
        var $target = $(this);
        var $formGroup = $target.closest('.form-date-field, .form-date-search, .form-group');
        if (!$formGroup.length) $formGroup = $target;

        var $input = $formGroup.find('input.check-in-out, input[name="date"], input.calendar_input').first();

        if ($input.length) {
            var picker = $input.data('daterangepicker');
            if (picker && picker.container) {

                if (!$.contains($formGroup[0], picker.container[0])) {
                    $formGroup.css('position', 'relative');
                    picker.container.appendTo($formGroup);
                }

                picker.container.css({
                    'top': '100%',
                    'left': '0',
                    'right': 'auto',
                    'position': 'absolute',
                    'z-index': '999999',
                    'margin-top': '8px',
                    'display': 'block'
                }).show();

                e.stopPropagation();
            }
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.daterangepicker-dual, ' + dateBoxSelector).length) {
            $('.daterangepicker-dual:not(.inline-calendar):not(.dp-inline)').hide();
        }
    });

});
