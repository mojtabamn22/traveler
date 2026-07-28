/**
 * Jalali & Gregorian DateRangePicker (Full Replica of bootstrap-daterangepicker)
 * Support for WordPress & Standard jQuery Environments
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'moment'], function ($, moment) {
            return (root.DateRangePicker = factory($, moment));
        });
    } else if (typeof module === 'object' && module.exports) {
        var jQuery = (typeof window !== 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window !== 'undefined' && typeof window.moment !== 'undefined') ? window.moment : require('moment');
        module.exports = factory(jQuery, moment);
    } else {
        root.DateRangePicker = factory(root.jQuery, root.moment);
    }
}(typeof window !== 'undefined' ? window : this, function ($, moment) {

    var DateRangePicker = function (element, options, cb) {
        this.element = $(element);
        this.cb = cb || function () {};

        // Default Locale
        this.locale = {
            direction: 'rtl',
            format: 'jYYYY/jMM/jDD',
            separator: ' - ',
            applyLabel: 'اعمال',
            cancelLabel: 'انصراف',
            customRangeLabel: 'بازه دلخواه',
            daysOfWeek: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
            monthNames: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
            firstDay: 0
        };

        // Options Initialization
        this.calendarType = 'solar'; // 'solar' or 'gregorian'
        this.singleDatePicker = false;
        this.showDropdowns = true;
        this.minYear = 1300;
        this.maxYear = 1450;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.timePicker = false;
        this.timePickerIncrement = 1;
        this.timePicker24Hour = true;
        this.timePickerSeconds = false;
        this.autoApply = true;
        this.autoUpdateInput = true;
        this.linkedCalendars = true;
        this.alwaysShowCalendars = false;
        this.showCustomRangeLabel = true;
        this.opens = 'right';
        this.drops = 'down';
        this.buttonClasses = 'btn btn-sm';
        this.applyButtonClasses = 'btn-primary';
        this.cancelButtonClasses = 'btn-light';
        this.parentEl = 'body';

        this.startDate = moment();
        this.endDate = moment();
        this.minDate = false;
        this.maxDate = false;
        this.maxSpan = false;

        this.isInvalidDate = function () { return false; };
        this.isCustomDate = function () { return []; };

        // Process Options
        if (typeof options === 'object' && options !== null) {
            options = $.extend(true, {}, options);

            if (typeof options.locale === 'object') {
                this.locale = $.extend(true, {}, this.locale, options.locale);
            }
            if (typeof options.calendarType === 'string') this.calendarType = options.calendarType;
            if (typeof options.singleDatePicker === 'boolean') {
                this.singleDatePicker = options.singleDatePicker;
                if (this.singleDatePicker) this.endDate = this.startDate.clone();
            }
            if (typeof options.showDropdowns === 'boolean') this.showDropdowns = options.showDropdowns;
            if (typeof options.minYear === 'number') this.minYear = options.minYear;
            if (typeof options.maxYear === 'number') this.maxYear = options.maxYear;
            if (typeof options.showWeekNumbers === 'boolean') this.showWeekNumbers = options.showWeekNumbers;
            if (typeof options.showISOWeekNumbers === 'boolean') this.showISOWeekNumbers = options.showISOWeekNumbers;
            if (typeof options.timePicker === 'boolean') this.timePicker = options.timePicker;
            if (typeof options.timePickerIncrement === 'number') this.timePickerIncrement = options.timePickerIncrement;
            if (typeof options.timePicker24Hour === 'boolean') this.timePicker24Hour = options.timePicker24Hour;
            if (typeof options.timePickerSeconds === 'boolean') this.timePickerSeconds = options.timePickerSeconds;
            if (typeof options.autoApply === 'boolean') this.autoApply = options.autoApply;
            if (typeof options.autoUpdateInput === 'boolean') this.autoUpdateInput = options.autoUpdateInput;
            if (typeof options.linkedCalendars === 'boolean') this.linkedCalendars = options.linkedCalendars;
            if (typeof options.alwaysShowCalendars === 'boolean') this.alwaysShowCalendars = options.alwaysShowCalendars;
            if (typeof options.showCustomRangeLabel === 'boolean') this.showCustomRangeLabel = options.showCustomRangeLabel;
            if (typeof options.opens === 'string') this.opens = options.opens;
            if (typeof options.drops === 'string') this.drops = options.drops;
            if (typeof options.buttonClasses === 'string') this.buttonClasses = options.buttonClasses;
            if (typeof options.applyButtonClasses === 'string') this.applyButtonClasses = options.applyButtonClasses;
            if (typeof options.cancelButtonClasses === 'string') this.cancelButtonClasses = options.cancelButtonClasses;
            if (typeof options.parentEl === 'string') this.parentEl = options.parentEl;

            if (options.startDate) this.startDate = this.parseDate(options.startDate);
            if (options.endDate) this.endDate = this.parseDate(options.endDate);
            if (options.minDate) this.minDate = this.parseDate(options.minDate);
            if (options.maxDate) this.maxDate = this.parseDate(options.maxDate);
            if (options.maxSpan) this.maxSpan = options.maxSpan;

            if (typeof options.isInvalidDate === 'function') this.isInvalidDate = options.isInvalidDate;
            if (typeof options.isCustomDate === 'function') this.isCustomDate = options.isCustomDate;

            if (typeof options.ranges === 'object') {
                this.ranges = options.ranges;
            } else if (options.ranges === true) {
                this.setStandardRanges();
            } else {
                this.ranges = false;
            }
        }

        this.leftCalendar = { month: this.startDate.clone() };
        var unit = this.calendarType === 'solar' ? 'jMonth' : 'month';
        this.rightCalendar = { month: this.startDate.clone().add(1, unit) };

        this.container = null;
        this.isShowing = false;

        this.init();
    };

    DateRangePicker.prototype = {
        constructor: DateRangePicker,

        parseDate: function (val) {
            if (moment.isMoment(val)) return val.clone();
            if (val instanceof Date) return moment(val);
            if (typeof val === 'string') {
                var fmt = this.locale.format || (this.calendarType === 'solar' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD');
                return moment(val, fmt);
            }
            return moment(val);
        },

        setStandardRanges: function () {
            var isSolar = this.calendarType === 'solar';
            var today = moment().startOf('day');

            var lastMonth = isSolar ? today.clone().subtract(1, 'jMonth') : today.clone().subtract(1, 'month');

            this.ranges = {};
        },

        init: function () {
            this.buildContainer();
            this.updateView();
            this.bindEvents();
            if (this.autoUpdateInput) {
                this.setValue();
            }
        },

        buildContainer: function () {
            var pickerId = 'drp-' + Math.random().toString(36).substr(2, 9);
            var html = `<div class="daterangepicker-dual opens${this.opens} drops${this.drops}" id="${pickerId}">
                <div class="switcher-bar">
                    <button type="button" class="btn-switch btn-solar ${this.calendarType === 'solar' ? 'active' : ''}" data-type="solar">شمسی</button>
                    <button type="button" class="btn-switch btn-gregorian ${this.calendarType === 'gregorian' ? 'active' : ''}" data-type="gregorian">Gregorian</button>
                </div>
                <div class="drp-body">
                    <div class="drp-ranges" style="display:none;"></div>
                    <div class="drp-calendars">
                        <div class="drp-calendar left"></div>
                        <div class="drp-calendar right" style="${this.singleDatePicker ? 'display:none;' : ''}"></div>
                    </div>
                </div>
                <div class="drp-buttons">
                    <span class="drp-selected"></span>
                    <div>
                        <button type="button" class="${this.buttonClasses} ${this.cancelButtonClasses} btn-cancel">${this.locale.cancelLabel}</button>
                        <button type="button" class="${this.buttonClasses} ${this.applyButtonClasses} btn-apply" ${this.autoApply ? 'style="display:none;"' : ''}>${this.locale.applyLabel}</button>
                    </div>
                </div>
            </div>`;

            this.container = $(html).appendTo(this.parentEl);
            this.renderRanges();
        },

        renderRanges: function () {
            var $ranges = this.container.find('.drp-ranges');
            $ranges.empty();

            if (!this.ranges || $.isEmptyObject(this.ranges)) {
                $ranges.hide().css({ width: '0', padding: '0', border: 'none', margin: '0' });
                return;
            }

            $ranges.show();
            for (var rangeName in this.ranges) {
                $ranges.append(`<button type="button" data-range="${rangeName}">${rangeName}</button>`);
            }
            if (this.showCustomRangeLabel) {
                $ranges.append(`<button type="button" data-range="custom" class="active">${this.locale.customRangeLabel}</button>`);
            }
        },

        bindEvents: function () {
            var self = this;

            var eventNamespace = '.drp-' + this.container.attr('id');

            $(document).off('click' + eventNamespace + ' focusin' + eventNamespace).on('click' + eventNamespace + ' focusin' + eventNamespace, function (e) {
                if (!self.isShowing) return;
                var $target = $(e.target);
                if ($target.closest('#' + self.container.attr('id')).length) return;
                if ($target.is(self.element) || $target.closest(self.element).length) return;
                self.hide();
            });

            this.element.on('click.daterangepicker', function (e) {
                e.stopPropagation();
                self.toggle();
            });

            this.container.on('click', function (e) {
                e.stopPropagation();
            });

            $(document).on('click.drp-' + self.container.attr('id'), function (e) {
                if (self.isShowing && !self.container.is(e.target) && self.container.has(e.target).length === 0 && !self.element.is(e.target)) {
                    self.hide();
                }
            });

            // Switcher
            this.container.find('.btn-switch').on('click', function () {
                self.calendarType = $(this).data('type');
                self.container.find('.btn-switch').removeClass('active');
                $(this).addClass('active');

                var unit = self.calendarType === 'solar' ? 'jMonth' : 'month';
                self.leftCalendar.month = self.startDate.clone();
                self.rightCalendar.month = self.startDate.clone().add(1, unit);

                if (self.ranges) {
                    self.setStandardRanges();
                }
                self.renderRanges();
                self.updateView();
            });

            // Range click
            this.container.on('click', '.drp-ranges button', function () {
                var name = $(this).data('range');
                self.container.find('.drp-ranges button').removeClass('active');
                $(this).addClass('active');

                if (name === 'custom') {
                    return;
                }

                var bounds = self.ranges[name];
                if (bounds) {
                    self.startDate = bounds[0].clone();
                    self.endDate = bounds[1].clone();

                    var unit = self.calendarType === 'solar' ? 'jMonth' : 'month';
                    self.leftCalendar.month = self.startDate.clone();
                    self.rightCalendar.month = self.startDate.clone().add(1, unit);

                    self.updateView();
                    self.clickApply();
                }
            });

            // Nav Month
            this.container.on('click', '.nav-btn', function () {
                var dir = parseInt($(this).data('dir'), 10);
                var isLeft = $(this).closest('.drp-calendar').hasClass('left');
                var unit = self.calendarType === 'solar' ? 'jMonth' : 'month';

                if (self.linkedCalendars) {
                    self.leftCalendar.month.add(dir, unit);
                    self.rightCalendar.month.add(dir, unit);
                } else {
                    if (isLeft) self.leftCalendar.month.add(dir, unit);
                    else self.rightCalendar.month.add(dir, unit);
                }
                self.updateView();
            });

            // Month/Year Select Dropdowns
            this.container.on('change', '.select-month, .select-year', function () {
                var $cal = $(this).closest('.drp-calendar');
                var isLeft = $cal.hasClass('left');
                var target = isLeft ? self.leftCalendar : self.rightCalendar;

                var m = parseInt($cal.find('.select-month').val(), 10);
                var y = parseInt($cal.find('.select-year').val(), 10);

                if (self.calendarType === 'solar') {
                    target.month.jYear(y).jMonth(m);
                } else {
                    target.month.year(y).month(m);
                }

                if (self.linkedCalendars && isLeft) {
                    self.rightCalendar.month = self.leftCalendar.month.clone().add(1, self.calendarType === 'solar' ? 'jMonth' : 'month');
                }
                self.updateView();
            });

            // Hover Preview
            this.container.on('mouseenter', '.day:not(.off)', function () {
                if (self.startDate && !self.endDate) {
                    var dateStr = $(this).data('date');
                    self.hoverDate = moment(dateStr, 'YYYY-MM-DD');
                    self.renderHighlight();
                }
            });

            // Day Click Selection Logic
            this.container.on('click', '.day:not(.off)', function (e) {
                e.stopPropagation();
                var dateStr = $(this).data('date');
                var clickedDate = moment(dateStr, 'YYYY-MM-DD');

                if (self.singleDatePicker) {
                    self.startDate = clickedDate.clone();
                    self.endDate = clickedDate.clone();
                    self.clickApply();
                    return;
                }

                if (!self.startDate || (self.startDate && self.endDate)) {
                    self.startDate = clickedDate.clone();
                    self.endDate = null;
                    self.hoverDate = null;
                    self.updateView();
                    return;
                }

                if (self.startDate && !self.endDate) {
                    if (clickedDate.isBefore(self.startDate, 'day')) {
                        self.startDate = clickedDate.clone();
                        self.updateView();
                        return;
                    }

                    // MaxSpan Validation
                    if (self.maxSpan) {
                        var maxLimit = self.startDate.clone().add(self.maxSpan);
                        if (clickedDate.isAfter(maxLimit)) {
                            clickedDate = maxLimit;
                        }
                    }

                    self.endDate = clickedDate.clone();
                    self.updateView();

                    if (self.autoApply) {
                        self.clickApply();
                    }
                }
            });

            $(document).off('.daterangepicker');
            $(document).on('mousedown.daterangepicker touchend.daterangepicker', function (e) {
                var $target = $(e.target);
                $('.daterangepicker-dual').each(function () {
                    var $container = $(this);
                    var pickerData = $container.data('daterangepicker');
                    if (!pickerData || !pickerData.isShowing) return;
                    var clickedInsideContainer = $target.closest($container).length > 0;
                    var clickedOnElement = pickerData.element && ($target.is(pickerData.element) || $target.closest(pickerData.element).length > 0);
                    if (!clickedInsideContainer && !clickedOnElement) {
                        pickerData.hide();
                    }
                });
            });

            this.container.on('click mousedown mouseup touchend', function (e) {
                e.stopPropagation();
            });


            // Apply & Cancel Actions
            this.container.find('.btn-apply').on('click', function () { self.clickApply(); });
            this.container.find('.btn-cancel').on('click', function () { self.clickCancel(); });
        },

        updateView: function () {
            this.renderCalendar('left', this.leftCalendar.month);
            if (!this.singleDatePicker) {
                this.renderCalendar('right', this.rightCalendar.month);
            }
            this.renderHighlight();
        },

        renderCalendar: function (side, monthObj) {
            var isSolar = this.calendarType === 'solar';
            
            var month = isSolar ? monthObj.jMonth() : monthObj.month();
            var year = isSolar ? monthObj.jYear() : monthObj.year();

            var monthNames;
            if (isSolar) {
                monthNames = (this.locale && this.locale.monthNames && this.locale.monthNames.length === 12) 
                    ? this.locale.monthNames 
                    : ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
            } else {
                monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            }

            var weekDays = isSolar ? this.locale.daysOfWeek : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

            var minY = isSolar ? this.minYear : 1900;
            var maxY = isSolar ? this.maxYear : 2100;

            var html = `<div class="calendar-header">
                <span class="nav-btn" data-dir="-1"><i class="fas fa-chevron-right"></i></span>
                <div>`;

            if (this.showDropdowns) {
                html += `<select class="select-month">
                    ${monthNames.map((m, i) => `<option value="${i}" ${i === month ? 'selected' : ''}>${m}</option>`).join('')}
                </select>
                <select class="select-year">
                    ${Array.from({length: (maxY - minY + 1)}, (_, i) => minY + i).map(y => `<option value="${y}" ${y === year ? 'selected' : ''}>${y}</option>`).join('')}
                </select>`;
            } else {
                html += `<span class="month-label">${monthNames[month]} ${year}</span>`;
            }

            html += `</div>
                <span class="nav-btn" data-dir="1"><i class="fas fa-chevron-left"></i></span>
            </div>`;

            html += `<div class="table-sub-header">${weekDays.map(d => `<div>${d}</div>`).join('')}</div>`;
            html += `<div class="table-days">`;

            var startOfMonth = isSolar ? monthObj.clone().startOf('jMonth') : monthObj.clone().startOf('month');
            var dayIndex = startOfMonth.day();
            var offset = isSolar ? (dayIndex === 6 ? 0 : dayIndex + 1) : dayIndex;

            var curDate = startOfMonth.clone().subtract(offset, 'days');

            for (var i = 0; i < 42; i++) {
                var isCurrentMonth = isSolar ? curDate.jMonth() === month : curDate.month() === month;
                var classes = ['day'];

                if (!isCurrentMonth) classes.push('off');
                if (curDate.isSame(moment(), 'day')) classes.push('today');

                if (this.minDate && curDate.isBefore(this.minDate, 'day')) classes.push('off disabled');
                if (this.maxDate && curDate.isAfter(this.maxDate, 'day')) classes.push('off disabled');
                if (this.isInvalidDate(curDate)) classes.push('off disabled');

                var customClasses = this.isCustomDate(curDate);
                if (Array.isArray(customClasses)) classes = classes.concat(customClasses);
                else if (typeof customClasses === 'string') classes.push(customClasses);

                var dayNum = isSolar ? curDate.jDate() : curDate.date();
                html += `<div class="${classes.join(' ')}" data-date="${curDate.format('YYYY-MM-DD')}">${dayNum}</div>`;
                curDate.add(1, 'day');
            }
            html += `</div>`;

            this.container.find('.drp-calendar.' + side).html(html);
        },

        renderHighlight: function () {
            var self = this;
            var endTarget = this.endDate || this.hoverDate;

            this.container.find('.day:not(.off)').each(function () {
                var dateStr = $(this).data('date');
                var cur = moment(dateStr, 'YYYY-MM-DD');

                $(this).removeClass('active in-range');

                if (self.startDate && cur.isSame(self.startDate, 'day')) $(this).addClass('active');
                if (endTarget && cur.isSame(endTarget, 'day')) $(this).addClass('active');
                if (self.startDate && endTarget && cur.isAfter(self.startDate, 'day') && cur.isBefore(endTarget, 'day')) {
                    $(this).addClass('in-range');
                }
            });

            this.updatePreviewText();
        },

        updatePreviewText: function () {
            if (!this.startDate) return;
            var fmt = this.locale.format || (this.calendarType === 'solar' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD');
            var str = this.startDate.format(fmt);

            var endTarget = this.endDate || this.hoverDate;
            if (endTarget && !this.singleDatePicker) {
                str += this.locale.separator + endTarget.format(fmt);
            }
            this.container.find('.drp-selected').text(str);
        },

        setValue: function () {
            if (!this.startDate || (!this.endDate && !this.singleDatePicker)) return;
            var fmt = this.locale.format || (this.calendarType === 'solar' ? 'jYYYY/jMM/jDD' : 'YYYY/MM/DD');
            var str = this.startDate.format(fmt);
            if (!this.singleDatePicker && this.endDate) {
                str += this.locale.separator + this.endDate.format(fmt);
            }
            this.element.val(str).trigger('change');
        },

        clickApply: function () {
            this.setValue();
            this.element.trigger('apply.daterangepicker', this);
            if (typeof this.cb === 'function') {
                this.cb(this.startDate.clone(), this.endDate ? this.endDate.clone() : this.startDate.clone(), this.calendarType);
            }
            this.hide();
        },

        clickCancel: function () {
            this.element.trigger('cancel.daterangepicker', this);
            this.hide();
        },

        // API Methods
        setStartDate: function (startDate) {
            this.startDate = this.parseDate(startDate);
            this.leftCalendar.month = this.startDate.clone();
            this.updateView();
            if (this.autoUpdateInput) this.setValue();
        },

        setEndDate: function (endDate) {
            this.endDate = this.parseDate(endDate);
            this.updateView();
            if (this.autoUpdateInput) this.setValue();
        },

        show: function () {
            if (this.isShowing) return;

            this.updateView();

            this.element.trigger('show.daterangepicker', this);
            this.element.trigger('showCalendar.daterangepicker', this);

            var offset = this.element.offset();
            var top = offset.top + this.element.outerHeight() + 4;
            var left = offset.left;

            if (this.opens === 'left') {
                left = offset.left + this.element.outerWidth() - this.container.outerWidth();
            } else if (this.opens === 'center') {
                left = offset.left + (this.element.outerWidth() - this.container.outerWidth()) / 2;
            }

            if (this.drops === 'up') {
                top = offset.top - this.container.outerHeight() - 4;
            }

            this.container.css({ top: top, left: left }).show();
            this.isShowing = true;
        },

        hide: function (e) {
            if (!this.isShowing) return;

            if (e && e.target) {
                var $target = $(e.target);
                if ($target.is(this.element) || $target.closest(this.element).length) {
                    return;
                }
            }

            this.container.hide();
            this.isShowing = false;
            this.element.trigger('hide.daterangepicker', this);
        },

        toggle: function () {
            if (this.isShowing) this.hide();
            else this.show();
        }
    };

    // jQuery Plugin Binding
    $.fn.daterangepicker = function (options, cb) {
        this.each(function () {
            var el = $(this);
            if (el.data('daterangepicker')) el.data('daterangepicker').container.remove();
            el.data('daterangepicker', new DateRangePicker(el, options, cb));
        });
        return this;
    };

    return DateRangePicker;
}));