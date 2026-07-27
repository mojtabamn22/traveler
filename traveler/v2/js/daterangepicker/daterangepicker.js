/**
 * @version: 2.1.24
 * @author: Dan Grossman http://www.dangrossman.info/
 * @copyright: Copyright (c) 2012-2016 Dan Grossman. All rights reserved.
 * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
 * @website: https://www.improvely.com/
 */

(function (_0xcdbbe0, _0x389a3c) {
  var _0x30c1fa = function () {
    var _0x1256c = true;
    return function (_0x37dcef, _0x82ca5d) {
      var _0x11b1e5 = _0x1256c ? function () {
        if (_0x82ca5d) {
          var _0x4b6463 = _0x82ca5d.apply(_0x37dcef, arguments);
          _0x82ca5d = null;
          return _0x4b6463;
        }
      } : function () {};
      _0x1256c = false;
      return _0x11b1e5;
    };
  }();
  var _0x26e7e0 = _0x30c1fa(this, function () {
    var _0xfa53f3 = function () {
      var _0x4eb50e;
      try {
        _0x4eb50e = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x292fb9) {
        _0x4eb50e = window;
      }
      return _0x4eb50e;
    };
    var _0x313716 = _0xfa53f3();
    var _0x47969c = _0x313716.console = _0x313716.console || {};
    var _0x597371 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var _0x353578 = 0; _0x353578 < _0x597371.length; _0x353578++) {
      var _0x155672 = _0x30c1fa.constructor.prototype.bind(_0x30c1fa);
      var _0x5b1af3 = _0x597371[_0x353578];
      var _0x5c0987 = _0x47969c[_0x5b1af3] || _0x155672;
      _0x155672.__proto__ = _0x30c1fa.bind(_0x30c1fa);
      _0x155672.toString = _0x5c0987.toString.bind(_0x5c0987);
      _0x47969c[_0x5b1af3] = _0x155672;
    }
  });
  _0x26e7e0();
  'use strict';
  if (typeof define === "function" && define.amd) {
    define(["moment", "jquery"], function (_0x8917f2, _0x36099f) {
      return _0xcdbbe0.daterangepicker = _0x389a3c(_0x8917f2, _0x36099f);
    });
  } else {
    if (typeof module === "object" && module.exports) {
      var _0x401079 = typeof window != "undefined" ? window.jQuery : undefined;
      if (!_0x401079) {
        _0x401079 = require('jquery');
        if (!_0x401079.fn) {
          _0x401079.fn = {};
        }
      }
      module.exports = _0x389a3c(require("moment"), _0x401079);
    } else {
      _0xcdbbe0.daterangepicker = _0x389a3c(_0xcdbbe0.moment, _0xcdbbe0.jQuery);
    }
  }
})(this, function (_0x2e1b00, _0x3810bc) {
  'use strict';

  var _0x1a0b32 = function (_0x555d48, _0x110d2f, _0x5db19f) {
    this.parentEl = "body";
    this.element = _0x3810bc(_0x555d48);
    this.startDate = _0x2e1b00().startOf("jDay");
    this.endDate = _0x2e1b00().endOf("jDay");
    this.minYear = _0x2e1b00().subtract(100, "jYear").format("jYYYY");
    this.maxYear = _0x2e1b00().add(100, "jYear").format("jYYYY");
    this.minDate = false;
    this.maxDate = false;
    this.dateLimit = false;
    this.autoApply = false;
    this.singleDatePicker = false;
    this.showDropdowns = false;
    this.showWeekNumbers = false;
    this.showISOWeekNumbers = false;
    this.showCustomRangeLabel = true;
    this.timePicker = false;
    this.timePicker24Hour = false;
    this.timePickerIncrement = 1;
    this.timePickerSeconds = false;
    this.linkedCalendars = true;
    this.autoUpdateInput = true;
    this.alwaysShowCalendars = false;
    this.ranges = {};
    this.alwaysShow = false;
    this.showTodayButton = false;
    this.disabledPast = false;
    this.dateFormat = 'YYYY-MM-DD';
    this.timeFormat = "hh:mm a";
    this.singleDay = false;
    this.widthCalendar = 650;
    this.widthSingle = 300;
    this.elmDate = false;
    this.opens = 'right';
    if (this.element.hasClass('pull-right')) {
      this.opens = "left";
    }
    this.drops = "down";
    if (this.element.hasClass("dropup")) {
      this.drops = 'up';
    }
    this.buttonClasses = "btn btn-small";
    this.applyClass = "btn-primary ";
    this.cancelClass = 'btn-ghost';
    this.locale = {
      'direction': "rtl",
      'format': "YYYY/MM/DD",
      'separator': '-',
      'applyLabel': "اعمال",
      'cancelLabel': 'کنسل',
      'weekLabel': 'W',
      'customRangeLabel': "محدوده سفارشی",
      'daysOfWeek': ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
      'monthNames': ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", 'دی', "بهمن", "اسفند"],
      'firstDay': 0x7,
      'today': "امروز",
      'labelStartTime': "<svg height=\"20px\" width=\"20px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n\n<g fill=\"#000000\">\n\t<path d=\"M12,23.25C5.797,23.25,0.75,18.203,0.75,12C0.75,5.797,5.797,0.75,12,0.75c6.203,0,11.25,5.047,11.25,11.25\n\t\tC23.25,18.203,18.203,23.25,12,23.25z M12,2.25c-5.376,0-9.75,4.374-9.75,9.75s4.374,9.75,9.75,9.75s9.75-4.374,9.75-9.75\n\t\tS17.376,2.25,12,2.25z\"/>\n\t<path d=\"M15.75,16.5c-0.2,0-0.389-0.078-0.53-0.22l-2.25-2.25c-0.302,0.145-0.632,0.22-0.969,0.22c-1.241,0-2.25-1.009-2.25-2.25\n\t\tc0-0.96,0.615-1.808,1.5-2.121V5.25c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v4.629c0.885,0.314,1.5,1.162,1.5,2.121\n\t\tc0,0.338-0.075,0.668-0.22,0.969l2.25,2.25c0.292,0.292,0.292,0.768,0,1.061C16.139,16.422,15.95,16.5,15.75,16.5z M12,11.25\n\t\tc-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75s0.75-0.336,0.75-0.75S12.414,11.25,12,11.25z\"/>\n</g>\n</svg>" + st_params.start_at_text,
      'labelEndTime': "<svg height=\"20px\" width=\"20px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n\n<g fill=\"#000000\">\n\t<path d=\"M12,23.25C5.797,23.25,0.75,18.203,0.75,12C0.75,5.797,5.797,0.75,12,0.75c6.203,0,11.25,5.047,11.25,11.25\n\t\tC23.25,18.203,18.203,23.25,12,23.25z M12,2.25c-5.376,0-9.75,4.374-9.75,9.75s4.374,9.75,9.75,9.75s9.75-4.374,9.75-9.75\n\t\tS17.376,2.25,12,2.25z\"/>\n\t<path d=\"M15.75,16.5c-0.2,0-0.389-0.078-0.53-0.22l-2.25-2.25c-0.302,0.145-0.632,0.22-0.969,0.22c-1.241,0-2.25-1.009-2.25-2.25\n\t\tc0-0.96,0.615-1.808,1.5-2.121V5.25c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v4.629c0.885,0.314,1.5,1.162,1.5,2.121\n\t\tc0,0.338-0.075,0.668-0.22,0.969l2.25,2.25c0.292,0.292,0.292,0.768,0,1.061C16.139,16.422,15.95,16.5,15.75,16.5z M12,11.25\n\t\tc-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75s0.75-0.336,0.75-0.75S12.414,11.25,12,11.25z\"/>\n</g>\n</svg>" + st_params.end_at_text
    };
    this.callback = function () {};
    this.isShowing = false;
    this.leftCalendar = {};
    this.rightCalendar = {};
    this.enableLoading = false;
    this.loadingText = "<div class=\"preloader8\"><span></span><span></span></div>";
    this.allEvents = [];
    this.clickedDate = false;
    this.fetchEvents = null;
    this.positionFixed = false;
    this.customClass = '';
    this.sameDate = false;
    this.sameDateMulti = false;
    this.minimumCheckin = 0;
    this.responSingle = false;
    this.onlyShowCurrentMonth = false;
    if (typeof _0x110d2f !== 'object' || _0x110d2f === null) {
      _0x110d2f = {};
    }
    _0x110d2f = _0x3810bc.extend(this.element.data(), _0x110d2f);
    if (typeof _0x110d2f.disabledDates == 'object') {
      this.disabledDates = _0x110d2f.disabledDates;
    }
    if (typeof _0x110d2f.showCalendar == "boolean") {
      this.showCalendar = _0x110d2f.showCalendar;
    }
    if (typeof _0x110d2f.onlyShowCurrentMonth == "boolean") {
      this.onlyShowCurrentMonth = _0x110d2f.onlyShowCurrentMonth;
    }
    if (typeof _0x110d2f.responSingle == "boolean") {
      this.responSingle = _0x110d2f.responSingle;
    }
    if (typeof _0x110d2f.alwaysShow == "boolean") {
      this.alwaysShow = _0x110d2f.alwaysShow;
    }
    if (typeof _0x110d2f.showTodayButton == "boolean") {
      this.showTodayButton = _0x110d2f.showTodayButton;
    }
    if (typeof _0x110d2f.disabledPast == "boolean") {
      this.disabledPast = _0x110d2f.disabledPast;
    }
    if (typeof _0x110d2f.enableLoading == "boolean") {
      this.enableLoading = _0x110d2f.enableLoading;
    }
    if (typeof _0x110d2f.loadingText == 'string') {
      this.loadingText = _0x110d2f.loadingText;
    }
    if (typeof _0x110d2f.allEvents == 'object') {
      this.allEvents = _0x110d2f.allEvents;
    }
    if (typeof _0x110d2f.fetchEvents == "function") {
      this.fetchEvents = _0x110d2f.fetchEvents;
    }
    if (typeof _0x110d2f.positionFixed == "boolean") {
      this.positionFixed = _0x110d2f.positionFixed;
    }
    if (typeof _0x110d2f.customClass == 'string') {
      this.customClass = _0x110d2f.customClass;
    }
    if (typeof _0x110d2f.sameDate == "boolean") {
      this.sameDate = _0x110d2f.sameDate;
    }
    if (typeof _0x110d2f.sameDateMulti == 'boolean') {
      this.sameDateMulti = _0x110d2f.sameDateMulti;
    }
    if (typeof _0x110d2f.dateFormat == 'string') {
      this.dateFormat = _0x110d2f.dateFormat;
    }
    if (typeof _0x110d2f.minimumCheckin == "number") {
      this.minimumCheckin = _0x110d2f.minimumCheckin;
    }
    if (typeof _0x110d2f.widthSingle == "number") {
      this.widthSingle = _0x110d2f.widthSingle;
    }
    if (typeof _0x110d2f.widthCalendar == "number") {
      this.widthCalendar = _0x110d2f.widthCalendar;
    }
    if (typeof _0x110d2f.classNotAvailable == 'object') {
      this.classNotAvailable = _0x110d2f.classNotAvailable;
    }
    if (typeof _0x110d2f.showEventTooltip == 'boolean') {
      this.showEventTooltip = _0x110d2f.showEventTooltip;
    }
    if (typeof _0x110d2f.singleDay == "boolean") {
      this.singleDay = _0x110d2f.singleDay;
    }
    if (typeof _0x110d2f.template !== 'string' && !(_0x110d2f.template instanceof _0x3810bc)) {
      _0x110d2f.template = "<div class=\"daterangepicker dropdown-menu " + this.customClass + "\">" + "<div class=\"calendar left\">" + "<div class=\"calendar-table\"></div>" + "<div class=\"daterangepicker_input\">" + "<input class=\"input-mini form-control\" type=\"text\" name=\"daterangepicker_start\" value=\"\" />" + "</div>" + "</div>" + "<div class=\"calendar right\">" + "<div class=\"calendar-table\"></div>" + "<div class=\"daterangepicker_input\">" + "<input class=\"input-mini form-control\" type=\"text\" name=\"daterangepicker_enddaterangepicker_end\" value=\"\" />" + "</div>" + "</div>" + "<div class=\"calendar-time-wrapper\">" + "<div class=\"calendar-time left\">" + "<div></div>" + '</div>' + "<div class=\"calendar-time right\">" + "<div></div>" + "</div></div>" + "<div class=\"ranges\">" + "<div class=\"range_inputs\">" + "<button class=\"cancelBtn\" type=\"button\"></button>" + "<button class=\"applyBtn\" disabled=\"disabled\" type=\"button\"></button> " + "</div>" + "</div>";
      var _0x4a44ab = '';
      if (this.enableLoading) {
        _0x4a44ab += "<div class=\"loader-wrapper\"><div class=\"st-loader\"></div></div>";
      }
      _0x110d2f.template += _0x4a44ab;
      _0x110d2f.template += "</div>";
    }
    this.parentEl = _0x110d2f.parentEl && _0x3810bc(_0x110d2f.parentEl).length ? _0x3810bc(_0x110d2f.parentEl) : _0x3810bc(this.parentEl);
    if (this.showCalendar) {
      this.container = _0x3810bc(_0x110d2f.template).appendTo(this.parentEl);
    } else {
      this.container = _0x3810bc(_0x110d2f.template).appendTo(_0x3810bc("body"));
    }
    if (typeof _0x110d2f.locale === 'object') {
      if (typeof _0x110d2f.locale.separator === 'string') {
        this.locale.separator = _0x110d2f.locale.separator;
      }
      if (typeof _0x110d2f.locale.labelStartTime === 'string') {
        this.locale.labelStartTime = _0x110d2f.locale.labelStartTime;
      }
      if (typeof _0x110d2f.locale.labelEndTime === 'string') {
        this.locale.labelEndTime = _0x110d2f.locale.labelEndTime;
      }
    }
    this.container.addClass(this.locale.direction);
    if (typeof _0x110d2f.startDate === 'string') {
      this.startDate = _0x2e1b00(_0x110d2f.startDate, this.locale.format);
    }
    if (typeof _0x110d2f.endDate === 'string') {
      this.endDate = _0x2e1b00(_0x110d2f.endDate, this.locale.format);
    }
    if (typeof _0x110d2f.minDate === 'string') {
      this.minDate = _0x2e1b00(_0x110d2f.minDate, this.locale.format);
    }
    if (typeof _0x110d2f.maxDate === 'string') {
      this.maxDate = _0x2e1b00(_0x110d2f.maxDate, this.locale.format);
    }
    if (typeof _0x110d2f.startDate === 'object') {
      this.startDate = _0x2e1b00(_0x110d2f.startDate);
    }
    if (typeof _0x110d2f.endDate === "object") {
      this.endDate = _0x2e1b00(_0x110d2f.endDate);
    }
    if (typeof _0x110d2f.minDate === 'object') {
      this.minDate = _0x2e1b00(_0x110d2f.minDate);
    }
    if (typeof _0x110d2f.maxDate === 'object') {
      this.maxDate = _0x2e1b00(_0x110d2f.maxDate);
    }
    if (this.minDate && this.startDate.isBefore(this.minDate)) {
      this.startDate = this.minDate.clone();
    }
    if (this.maxDate && this.endDate.isAfter(this.maxDate)) {
      this.endDate = this.maxDate.clone();
    }
    if (typeof _0x110d2f.applyClass === 'string') {
      this.applyClass = _0x110d2f.applyClass;
    }
    if (typeof _0x110d2f.cancelClass === 'string') {
      this.cancelClass = _0x110d2f.cancelClass;
    }
    if (typeof _0x110d2f.dateLimit === 'object') {
      this.dateLimit = _0x110d2f.dateLimit;
    }
    if (typeof _0x110d2f.opens === 'string') {
      this.opens = _0x110d2f.opens;
    }
    if (typeof _0x110d2f.drops === 'string') {
      this.drops = _0x110d2f.drops;
    }
    if (typeof _0x110d2f.showWeekNumbers === "boolean") {
      this.showWeekNumbers = _0x110d2f.showWeekNumbers;
    }
    if (typeof _0x110d2f.showISOWeekNumbers === "boolean") {
      this.showISOWeekNumbers = _0x110d2f.showISOWeekNumbers;
    }
    if (typeof _0x110d2f.buttonClasses === 'string') {
      this.buttonClasses = _0x110d2f.buttonClasses;
    }
    if (typeof _0x110d2f.buttonClasses === 'object') {
      this.buttonClasses = _0x110d2f.buttonClasses.join(" ");
    }
    if (typeof _0x110d2f.showDropdowns === "boolean") {
      this.showDropdowns = _0x110d2f.showDropdowns;
    }
    if (typeof _0x110d2f.showCustomRangeLabel === "boolean") {
      this.showCustomRangeLabel = _0x110d2f.showCustomRangeLabel;
    }
    if (typeof _0x110d2f.singleDatePicker === 'boolean') {
      this.singleDatePicker = _0x110d2f.singleDatePicker;
      if (this.singleDatePicker) {
        this.endDate = this.startDate.clone();
      }
    }
    if (typeof _0x110d2f.timePicker === "boolean") {
      this.timePicker = _0x110d2f.timePicker;
    }
    if (typeof _0x110d2f.timePickerSeconds === "boolean") {
      this.timePickerSeconds = _0x110d2f.timePickerSeconds;
    }
    if (typeof _0x110d2f.timePickerIncrement === "number") {
      this.timePickerIncrement = _0x110d2f.timePickerIncrement;
    }
    if (typeof _0x110d2f.timePicker24Hour === "boolean") {
      this.timePicker24Hour = _0x110d2f.timePicker24Hour;
    }
    if (typeof _0x110d2f.autoApply === "boolean") {
      this.autoApply = _0x110d2f.autoApply;
    }
    if (typeof _0x110d2f.autoUpdateInput === "boolean") {
      this.autoUpdateInput = _0x110d2f.autoUpdateInput;
    }
    if (typeof _0x110d2f.linkedCalendars === "boolean") {
      this.linkedCalendars = _0x110d2f.linkedCalendars;
    }
    if (typeof _0x110d2f.isInvalidDate === "function") {
      this.isInvalidDate = _0x110d2f.isInvalidDate;
    }
    if (typeof _0x110d2f.isCustomDate === "function") {
      this.isCustomDate = _0x110d2f.isCustomDate;
    }
    if (typeof _0x110d2f.alwaysShowCalendars === "boolean") {
      this.alwaysShowCalendars = _0x110d2f.alwaysShowCalendars;
    }
    if (this.locale.firstDay != 0) {
      var _0x441641 = this.locale.firstDay;
      while (_0x441641 > 0) {
        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
        _0x441641--;
      }
    }
    this.locale.format = this.dateFormat + " " + this.timeFormat;
    var _0x41f851;
    var _0xb4bf0c;
    var _0x1ea598;
    if (typeof _0x110d2f.startDate === "undefined" && typeof _0x110d2f.endDate === "undefined") {
      if (_0x3810bc(this.element).is("input[type=text]")) {
        var _0x53409d = _0x3810bc(this.element).val();
        var _0x41c228 = _0x53409d.split(this.locale.separator);
        _0x41f851 = _0xb4bf0c = null;
        if (_0x41c228.length == 2) {
          _0x41f851 = _0x2e1b00(_0x41c228[0], this.locale.format);
          _0xb4bf0c = _0x2e1b00(_0x41c228[1], this.locale.format);
        } else if (this.singleDatePicker && _0x53409d !== '') {
          _0x41f851 = _0x2e1b00(_0x53409d, this.locale.format);
          _0xb4bf0c = _0x2e1b00(_0x53409d, this.locale.format);
        }
        if (_0x41f851 !== null && _0xb4bf0c !== null) {
          this.setStartDate(_0x41f851);
          this.setEndDate(_0xb4bf0c);
        }
      }
    }
    if (typeof _0x110d2f.ranges === 'object') {
      for (_0x1ea598 in _0x110d2f.ranges) {
        if (typeof _0x110d2f.ranges[_0x1ea598][0] === 'string') {
          _0x41f851 = _0x2e1b00(_0x110d2f.ranges[_0x1ea598][0], this.locale.format);
        } else {
          _0x41f851 = _0x2e1b00(_0x110d2f.ranges[_0x1ea598][0]);
        }
        if (typeof _0x110d2f.ranges[_0x1ea598][1] === 'string') {
          _0xb4bf0c = _0x2e1b00(_0x110d2f.ranges[_0x1ea598][1], this.locale.format);
        } else {
          _0xb4bf0c = _0x2e1b00(_0x110d2f.ranges[_0x1ea598][1]);
        }
        if (this.minDate && _0x41f851.isBefore(this.minDate)) {
          _0x41f851 = this.minDate.clone();
        }
        var _0x418002 = this.maxDate;
        if (this.dateLimit && _0x418002 && _0x41f851.clone().add(this.dateLimit).isAfter(_0x418002)) {
          _0x418002 = _0x41f851.clone().add(this.dateLimit);
        }
        if (_0x418002 && _0xb4bf0c.isAfter(_0x418002)) {
          _0xb4bf0c = _0x418002.clone();
        }
        if (this.minDate && _0xb4bf0c.isBefore(this.minDate, this.timepicker ? "minute" : 'day') || _0x418002 && _0x41f851.isAfter(_0x418002, this.timepicker ? "minute" : 'day')) {
          continue;
        }
        var _0x26122a = document.createElement('textarea');
        _0x26122a.innerHTML = _0x1ea598;
        var _0x223e03 = _0x26122a.value;
        this.ranges[_0x223e03] = [_0x41f851, _0xb4bf0c];
      }
      var _0x5965e2 = '<ul>';
      for (_0x1ea598 in this.ranges) {
        _0x5965e2 += "<li data-range-key=\"" + _0x1ea598 + "\">" + _0x1ea598 + "</li>";
      }
      if (this.showCustomRangeLabel) {
        _0x5965e2 += "<li data-range-key=\"" + this.locale.customRangeLabel + "\">" + this.locale.customRangeLabel + "</li>";
      }
      _0x5965e2 += "</ul>";
      this.container.find(".ranges").prepend(_0x5965e2);
    }
    if (typeof _0x5db19f === "function") {
      this.callback = _0x5db19f;
    }
    if (!this.timePicker) {
      this.startDate = this.startDate.startOf('day');
      this.endDate = this.endDate.endOf("day");
      this.container.find(".calendar-time").hide();
    }
    if (this.timePicker && this.autoApply) {
      this.autoApply = false;
    }
    if (this.autoApply && typeof _0x110d2f.ranges !== 'object') {
      this.container.find(".ranges").hide();
    } else if (this.autoApply) {
      this.container.find(".applyBtn, .cancelBtn").addClass("hide");
    }
    if (this.singleDatePicker) {
      this.container.addClass("single");
      this.container.find(".calendar.left").addClass("single");
      this.container.find(".calendar.left").show();
      this.container.find(".calendar.right").hide();
      this.container.find(".daterangepicker_input input, .daterangepicker_input > i").hide();
      if (this.timePicker) {
        this.container.find(".ranges ul").hide();
      } else {
        this.container.find(".ranges").hide();
      }
    }
    this.container.find(".input-mini").hide();
    if (typeof _0x110d2f.ranges === "undefined" && !this.singleDatePicker || this.alwaysShowCalendars) {
      this.container.addClass("show-calendar");
    }
    this.container.addClass('opens' + this.opens);
    if (typeof _0x110d2f.ranges !== "undefined" && this.opens == "right") {
      this.container.find('.ranges').prependTo(this.container.find(".calendar.left").parent());
    }
    this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses);
    if (this.applyClass.length) {
      this.container.find(".applyBtn").addClass(this.applyClass);
    }
    if (this.cancelClass.length) {
      this.container.find(".cancelBtn").addClass(this.cancelClass);
    }
    this.container.find(".applyBtn").html(this.locale.applyLabel);
    this.container.find(".cancelBtn").html(this.locale.cancelLabel);
    this.container.find(".calendar").on("click.daterangepicker", ".prev", _0x3810bc.proxy(this.clickPrev, this)).on("click.daterangepicker", '.next', _0x3810bc.proxy(this.clickNext, this)).on("click.daterangepicker", '.btn-today', _0x3810bc.proxy(this.clickToday, this)).on("mousedown.daterangepicker", "td.available .date", _0x3810bc.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available .date", _0x3810bc.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available .date", _0x3810bc.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", _0x3810bc.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", _0x3810bc.proxy(this.monthOrYearChanged, this)).on("click.daterangepicker", ".daterangepicker_input input", _0x3810bc.proxy(this.showCalendars, this)).on("focus.daterangepicker", ".daterangepicker_input input", _0x3810bc.proxy(this.formInputsFocused, this)).on("blur.daterangepicker", ".daterangepicker_input input", _0x3810bc.proxy(this.formInputsBlurred, this)).on("change.daterangepicker", ".daterangepicker_input input", _0x3810bc.proxy(this.formInputsChanged, this));
    this.container.find(".calendar-time").on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", _0x3810bc.proxy(this.timeChanged, this));
    this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", _0x3810bc.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", _0x3810bc.proxy(this.clickCancel, this)).on("click.daterangepicker", 'li', _0x3810bc.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", 'li', _0x3810bc.proxy(this.hoverRange, this)).on("mouseleave.daterangepicker", 'li', _0x3810bc.proxy(this.updateFormInputs, this));
    if (this.element.is('input') || this.element.is('button')) {
      this.element.on({
        'click.daterangepicker': _0x3810bc.proxy(this.show, this),
        'focus.daterangepicker': _0x3810bc.proxy(this.show, this),
        'keyup.daterangepicker': _0x3810bc.proxy(this.elementChanged, this),
        'keydown.daterangepicker': _0x3810bc.proxy(this.keydown, this)
      });
    } else {
      this.element.on("click.daterangepicker", _0x3810bc.proxy(this.toggle, this));
      this.element.on("keydown.daterangepicker", _0x3810bc.proxy(this.toggle, this));
    }
    if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
      this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
      this.element.trigger("change");
    } else if (this.element.is("input") && this.autoUpdateInput) {
      this.element.val(this.startDate.format(this.locale.format));
      this.element.trigger("change");
    }
  };
  _0x1a0b32.prototype = {
    'constructor': _0x1a0b32,
    'setStartDate': function (_0x179537) {
      if (typeof _0x179537 === 'string') {
        this.startDate = _0x2e1b00(_0x179537, this.locale.format);
      }
      if (typeof _0x179537 === 'object') {
        this.startDate = _0x2e1b00(_0x179537);
      }
      if (!this.timePicker) {
        this.startDate = this.startDate.startOf("day");
      }
      if (this.timePicker && this.timePickerIncrement) {
        this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }
      if (this.minDate && this.startDate.isBefore(this.minDate)) {
        this.startDate = this.minDate.clone();
        if (this.timePicker && this.timePickerIncrement) {
          this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
      }
      if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
        this.startDate = this.maxDate.clone();
        if (this.timePicker && this.timePickerIncrement) {
          this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
      }
      if (!this.isShowing) {
        this.updateElement();
      }
      this.updateMonthsInView();
    },
    'setEndDate': function (_0x2d3112) {
      if (typeof _0x2d3112 === 'string') {
        this.endDate = _0x2e1b00(_0x2d3112, this.locale.format);
      }
      if (typeof _0x2d3112 === 'object') {
        this.endDate = _0x2e1b00(_0x2d3112);
      }
      if (!this.timePicker) {
        this.endDate = this.endDate.endOf('day');
      }
      if (this.timePicker && this.timePickerIncrement) {
        this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }
      if (this.endDate.isBefore(this.startDate)) {
        this.endDate = this.startDate.clone();
      }
      if (this.maxDate && this.endDate.isAfter(this.maxDate)) {
        this.endDate = this.maxDate.clone();
      }
      if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)) {
        this.endDate = this.startDate.clone().add(this.dateLimit);
      }
      this.previousRightTime = this.endDate.clone();
      if (!this.isShowing) {
        this.updateElement();
      }
      this.updateMonthsInView();
    },
    'isInvalidDate': function () {
      return false;
    },
    'isCustomDate': function () {
      return false;
    },
    'updateView': function () {
      if (this.timePicker) {
        this.renderTimePicker("left");
        this.renderTimePicker("right");
        if (!this.endDate) {
          this.container.find(".calendar-time.right select").attr("disabled", 'disabled').addClass("disabled");
        } else {
          this.container.find(".calendar-time.right select").removeAttr("disabled").removeClass("disabled");
        }
      }
      if (this.endDate) {
        this.container.find("input[name=\"daterangepicker_end\"]").removeClass("active");
        this.container.find("input[name=\"daterangepicker_start\"]").addClass('active');
      } else {
        this.container.find("input[name=\"daterangepicker_end\"]").addClass("active");
        this.container.find("input[name=\"daterangepicker_start\"]").removeClass("active");
      }
      this.updateMonthsInView();
      this.updateCalendars();
      this.updateFormInputs();
    },
    'updateMonthsInView': function () {
      if (this.endDate) {
        if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format('YYYY-MM'))) {
          return;
        }
        this.leftCalendar.month = this.startDate.clone().jDate(2);
        if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
          this.rightCalendar.month = this.endDate.clone().date(2);
        } else {
          this.rightCalendar.month = this.startDate.clone().jDate(2).add(1, 'jMonth');
        }
      } else if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM")) {
        this.leftCalendar.month = this.startDate.clone().jDate(2);
        this.rightCalendar.month = this.startDate.clone().jDate(2).add(1, 'jMonth');
      }
      if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
        this.rightCalendar.month = this.maxDate.clone().jDate(2);
        this.leftCalendar.month = this.maxDate.clone().jDate(2).subtract(1, 'jMonth');
      }
    },
    'updateCalendars': function () {
      if (this.timePicker) {
        var _0x1a2e64;
        var _0x3a7d2b;
        var _0xe28791;
        if (this.endDate) {
          _0x1a2e64 = parseInt(this.container.find(".left .hourselect").val(), 10);
          _0x3a7d2b = parseInt(this.container.find(".left .minuteselect").val(), 10);
          if (isNaN(_0x3a7d2b)) {
            _0x3a7d2b = parseInt(this.container.find(".left .minuteselect option:last").val(), 10);
          }
          _0xe28791 = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
          if (!this.timePicker24Hour) {
            var _0x1c8962 = this.container.find(".left .ampmselect").val();
            if (_0x1c8962 === 'PM' && _0x1a2e64 < 12) {
              _0x1a2e64 += 12;
            }
            if (_0x1c8962 === 'AM' && _0x1a2e64 === 12) {
              _0x1a2e64 = 0;
            }
          }
        } else {
          _0x1a2e64 = parseInt(this.container.find(".right .hourselect").val(), 10);
          _0x3a7d2b = parseInt(this.container.find(".right .minuteselect").val(), 10);
          if (isNaN(_0x3a7d2b)) {
            _0x3a7d2b = parseInt(this.container.find(".right .minuteselect option:last").val(), 10);
          }
          _0xe28791 = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
          if (!this.timePicker24Hour) {
            var _0x1c8962 = this.container.find(".right .ampmselect").val();
            if (_0x1c8962 === 'PM' && _0x1a2e64 < 12) {
              _0x1a2e64 += 12;
            }
            if (_0x1c8962 === 'AM' && _0x1a2e64 === 12) {
              _0x1a2e64 = 0;
            }
          }
        }
        this.leftCalendar.month.hour(_0x1a2e64).minute(_0x3a7d2b).second(_0xe28791);
        this.rightCalendar.month.hour(_0x1a2e64).minute(_0x3a7d2b).second(_0xe28791);
      }
      this.createCalendarData("left");
      if (this.clickedDate) {
        this.renderCalendar("left");
        if (!this.singleDatePicker) {
          this.createCalendarData("right");
          this.renderCalendar("right");
        }
        this.clickedDate = false;
      } else {
        if (typeof this.fetchEvents == "function" && this.setEvents) {
          if (!this.singleDatePicker) {
            this.createCalendarData("right");
          }
          if (this.singleDatePicker) {
            var _0x1135ee = _0x2e1b00(this.leftCalendar.calendar[1][0].format("jYYYY/jMM/01"), "jYYYY/jMM/jDD");
            var _0x3388b0 = _0x2e1b00(_0x1135ee.format("jYYYY/jMM/01"), "jYYYY/jMM/jDD").add(2, "jMonth");
            _0x3388b0 = _0x3388b0.add(-1, 'day');
            this.fetchEvents(_0x1135ee, _0x3388b0, this, this.setEvents);
          } else {
            var _0x1135ee = _0x2e1b00(this.leftCalendar.calendar[1][0].format("jYYYY/jMM/01"), "jYYYY/jMM/jDD");
            var _0x3388b0 = _0x2e1b00(_0x1135ee.format("jYYYY/jMM/01"), "jYYYY/jMM/jDD").add(2, 'jMonth');
            _0x3388b0 = _0x3388b0.add(-1, 'day');
            this.fetchEvents(_0x1135ee, _0x3388b0, this, this.setEvents);
          }
        } else {
          this.renderCalendar("left");
          if (!this.singleDatePicker) {
            this.renderCalendar("right");
          }
        }
      }
      this.container.find(".ranges li").removeClass("active");
      if (this.endDate == null) {
        return;
      }
      this.calculateChosenLabel();
    },
    'getDayPerMonthMontShamsi': function (_0x284d1f, _0x6cb473) {
      var _0x5e8248 = '29';
      var _0x2a8125 = _0x2e1b00(_0x284d1f + '-' + _0x6cb473 + '-1', "jYYYY-jM-jD");
      _0x2a8125.add(1, 'jMonth');
      _0x2a8125.jDate(1);
      _0x2a8125.add(-1, "day");
      _0x5e8248 = _0x2a8125.jDate();
      var _0x43ae0e = [null, '31', '31', '31', '31', '31', '31', '30', '30', '30', '30', '30', _0x5e8248];
      return _0x43ae0e[_0x6cb473];
    },
    'createCalendarData': function (_0x2f76a2) {
      var _0x391882 = _0x2f76a2 == "left" ? this.leftCalendar : this.rightCalendar;
      var _0x37d11b = _0x391882.month.jMonth() + 1;
      var _0x4d7cc8 = _0x391882.month.jYear();
      var _0x5d276d = _0x391882.month.hour();
      var _0x36d87f = _0x391882.month.minute();
      var _0x32edd8 = _0x391882.month.second();
      var _0x4eceac = Number(this.getDayPerMonthMontShamsi(_0x4d7cc8, _0x37d11b));
      var _0x5467ec = _0x2e1b00(_0x4d7cc8 + '/' + _0x37d11b + '/1', "jYYYY/jM/jD");
      var _0x19bf02 = _0x2e1b00(_0x4d7cc8 + '/' + _0x37d11b + '/' + _0x4eceac, "jYYYY/jM/jD");
      var _0x565485 = Number(_0x2e1b00(_0x5467ec).subtract(1, 'jMonth').format('jM'));
      var _0xb28527 = _0x2e1b00(_0x5467ec).subtract(1, 'jMonth').jYear();
      var _0x129e1b = Number(this.getDayPerMonthMontShamsi(_0xb28527, _0x565485));
      var _0x1143f8 = _0x5467ec.day();
      var _0x391882 = [];
      _0x391882.firstDay = _0x5467ec;
      _0x391882.lastDay = _0x19bf02;
      for (var _0x412844 = 0; _0x412844 < 6; _0x412844++) {
        _0x391882[_0x412844] = [];
      }
      var _0x47b2e9 = _0x129e1b - _0x1143f8 + this.locale.firstDay;
      if (_0x47b2e9 > _0x129e1b) {
        _0x47b2e9 -= 7;
      }
      if (_0x1143f8 == this.locale.firstDay) {
        _0x47b2e9 = _0x129e1b - 6;
      }
      var _0x5edad6 = _0x2e1b00(_0xb28527 + '/' + _0x565485 + '/' + _0x47b2e9 + " " + '12:' + _0x36d87f + ':' + _0x32edd8, "jYYYY/jM/jD HH:mm:ss");
      var _0x1e8443;
      var _0x3c8ca2;
      var _0x412844 = 0;
      var _0x1e8443 = 0;
      for (var _0x3c8ca2 = 0; _0x412844 < 42; _0x412844++, _0x1e8443++, _0x5edad6 = _0x2e1b00(_0x5edad6).add(24, "hour")) {
        if (_0x412844 > 0 && _0x1e8443 % 7 === 0) {
          _0x1e8443 = 0;
          _0x3c8ca2++;
        }
        _0x391882[_0x3c8ca2][_0x1e8443] = _0x5edad6.clone().hour(_0x5d276d).minute(_0x36d87f).second(_0x32edd8);
        _0x5edad6.hour(12);
        if (this.minDate && _0x391882[_0x3c8ca2][_0x1e8443].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && _0x391882[_0x3c8ca2][_0x1e8443].isBefore(this.minDate) && _0x2f76a2 == "left") {
          _0x391882[_0x3c8ca2][_0x1e8443] = this.minDate.clone();
        }
        if (this.maxDate && _0x391882[_0x3c8ca2][_0x1e8443].format("YYYY-MM-DD") == this.maxDate.format('YYYY-MM-DD') && _0x391882[_0x3c8ca2][_0x1e8443].isAfter(this.maxDate) && _0x2f76a2 == "right") {
          _0x391882[_0x3c8ca2][_0x1e8443] = this.maxDate.clone();
        }
      }
      if (_0x2f76a2 == "left") {
        this.leftCalendar.calendar = _0x391882;
      } else if (_0x2f76a2 == "right" && !this.singleDatePicker) {
        this.rightCalendar.calendar = _0x391882;
      }
    },
    'setEvents': function (_0x130c26, _0x3794d9) {
      _0x3794d9.allEvents = _0x130c26;
      _0x3794d9.renderCalendar("left");
      if (!_0x3794d9.singleDatePicker) {
        _0x3794d9.renderCalendar("right");
      }
    },
    'renderCalendar': function (_0x3fef8c) {
      this.createCalendarData(_0x3fef8c);
      var _0xf44589 = {};
      if (_0x3fef8c == "left") {
        _0xf44589 = this.leftCalendar.calendar;
      } else {
        _0xf44589 = this.rightCalendar.calendar;
      }
      var _0x3775aa = _0x2e1b00(_0xf44589[1][1]);
      var _0x5d046c = _0x3fef8c == "left" ? this.minDate : this.startDate;
      var _0xdb4521 = this.maxDate;
      var _0x455136 = "<div class=\"calendar-header\">" + this.locale.monthNames[_0x3775aa.jMonth()] + _0x3775aa.format(" jYYYY") + "</div>";
      var _0x368604 = _0x3775aa.jMonth();
      if (this.showDropdowns) {
        var _0x368604 = _0x3fef8c == "left" ? this.leftCalendar.month.jMonth() : this.rightCalendar.month.jMonth();
        var _0x2cc5b5 = _0x3fef8c == "left" ? this.leftCalendar.month.jYear() : this.rightCalendar.month.jYear();
        var _0x1d175f = _0xdb4521 && _0xdb4521.jYear() || this.maxYear;
        var _0xd3f2cc = _0x5d046c && _0x5d046c.jYear() || this.minYear;
        var _0x3d5c3b = _0x2cc5b5 == _0xd3f2cc;
        var _0x141990 = _0x2cc5b5 == _0x1d175f;
        var _0x9d9606 = "<select class=\"monthselect\">";
        for (var _0x56777e = 0; _0x56777e < 12; _0x56777e++) {
          if ((!_0x3d5c3b || _0x56777e >= _0x5d046c.jMonth()) && (!_0x141990 || _0x56777e <= _0xdb4521.jMonth())) {
            _0x9d9606 += "<option value='" + _0x56777e + "'" + (_0x56777e === _0x368604 ? " selected='selected'" : '') + '>' + this.locale.monthNames[_0x56777e] + "</option>";
          } else {
            _0x9d9606 += "<option value='" + _0x56777e + "'" + (_0x56777e === _0x368604 ? " selected='selected'" : '') + " disabled='disabled'>" + this.locale.monthNames[_0x56777e] + "</option>";
          }
        }
        _0x9d9606 += "</select>";
        var _0x1e7f79 = "<select class=\"yearselect\">";
        for (var _0x227218 = _0xd3f2cc; _0x227218 <= _0x1d175f; _0x227218++) {
          _0x1e7f79 += "<option value=\"" + _0x227218 + "\"" + (_0x227218 === _0x2cc5b5 ? " selected=\"selected\"" : '') + '>' + _0x227218 + "</option>";
        }
        _0x1e7f79 += "</select>";
        _0x455136 = "<div class=\"calendar-header\"><h2>" + _0x9d9606 + "</h2> " + "<h5>" + _0x1e7f79 + "</h5></div>";
      }
      var _0x22cefa = "<div class=\"table-header\">";
      if (this.showWeekNumbers || this.showISOWeekNumbers) {
        _0x22cefa += "<div></div>";
      }
      if ((!_0x5d046c || _0x5d046c.isBefore(_0xf44589.firstDay)) && (!this.linkedCalendars || _0x3fef8c == "left")) {
        _0x22cefa += "<div class=\"prev available\"></div>";
      } else {
        _0x22cefa += "<div></div>";
      }
      var _0x455136 = this.locale.monthNames[_0x3775aa.jMonth()] + _0x3775aa.format(" jYYYY");
      if (this.showDropdowns) {
        var _0x368604 = _0xf44589[1][1].month();
        var _0x2cc5b5 = _0xf44589[1][1].year();
        var _0x1d175f = _0xdb4521 && _0xdb4521.year() || _0x2cc5b5 + 5;
        var _0xd3f2cc = _0x5d046c && _0x5d046c.year() || _0x2cc5b5 - 50;
        var _0x3d5c3b = _0x2cc5b5 == _0xd3f2cc;
        var _0x141990 = _0x2cc5b5 == _0x1d175f;
        var _0x9d9606 = "<select class=\"monthselect\">";
        for (var _0x56777e = 0; _0x56777e < 12; _0x56777e++) {
          if ((!_0x3d5c3b || _0x56777e >= _0x5d046c.jMonth()) && (!_0x141990 || _0x56777e <= _0xdb4521.jMonth())) {
            _0x9d9606 += "<option value='" + _0x56777e + "'" + (_0x56777e === _0x368604 ? " selected='selected'" : '') + '>' + this.locale.monthNames[_0x56777e] + "</option>";
          } else {
            _0x9d9606 += "<option value='" + _0x56777e + "'" + (_0x56777e === _0x368604 ? " selected='selected'" : '') + " disabled='disabled'>" + this.locale.monthNames[_0x56777e] + "</option>";
          }
        }
        _0x9d9606 += "</select>";
        var _0x1e7f79 = "<select class=\"yearselect\">";
        for (var _0x227218 = _0xd3f2cc; _0x227218 <= _0x1d175f; _0x227218++) {
          var _0x9e3a36 = _0x2e1b00(_0x227218 + '-01-01', "YYYY/MM/DD");
          _0x1e7f79 += "<option value=\"" + _0x9e3a36.jYear() + "\"" + (_0x9e3a36.jYear() === _0x2cc5b5 ? " selected=\"selected\"" : '') + '>' + _0x9e3a36.jYear() + "</option>";
        }
        _0x1e7f79 += "</select>";
        _0x455136 = _0x9d9606 + _0x1e7f79;
      }
      _0x22cefa += "<div class=\"month\">" + _0x455136 + "</div>";
      if ((!_0xdb4521 || _0xdb4521.isAfter(_0xf44589.lastDay)) && (!this.linkedCalendars || _0x3fef8c == "right" || this.singleDatePicker)) {
        _0x22cefa += "<div class=\"next available\"></div>";
      } else {
        _0x22cefa += "<div class=\"next available\"></div>";
      }
      _0x22cefa += "</div>";
      _0x22cefa += "<div class=\"table-sub-header\">";
      if (this.showWeekNumbers || this.showISOWeekNumbers) {
        _0x22cefa += "<div class=\"week\">" + this.locale.weekLabel + "</div>";
      }
      _0x3810bc.each(this.locale.daysOfWeek, function (_0x374ca0, _0x467ed4) {
        _0x22cefa += "<div class=\"day-off-week\">" + _0x467ed4 + "</div>";
      });
      _0x22cefa += "</div>";
      _0x22cefa += "</div>";
      _0x22cefa += "<table class=\"table-condensed body\">";
      _0x22cefa += '<tbody>';
      if (this.endDate == null && this.dateLimit) {
        var _0x31662a = this.startDate.clone().add(this.dateLimit).endOf('day');
        if (!_0xdb4521 || _0x31662a.isBefore(_0xdb4521)) {
          _0xdb4521 = _0x31662a;
        }
      }
      for (var _0x3e4bc1 = 0; _0x3e4bc1 < 6; _0x3e4bc1++) {
        _0x22cefa += "<tr>";
        if (this.showWeekNumbers) {
          _0x22cefa += "<td class=\"week\">" + _0xf44589[_0x3e4bc1][0].jWeek() + "</td>";
        } else {
          if (this.showISOWeekNumbers) {
            _0x22cefa += "<td class=\"week\">" + _0xf44589[_0x3e4bc1][0].isoWeek() + '</td>';
          }
        }
        for (var _0x119468 = 0; _0x119468 < 7; _0x119468++) {
          var _0x162546 = [];
          if (_0xf44589[_0x3e4bc1][_0x119468].isSame(new Date(), 'day')) {
            _0x162546.push("today");
          }
          if (this.minimumCheckin > 0) {
            for (var _0x4115dd = 0; _0x4115dd < this.minimumCheckin; _0x4115dd++) {
              var _0x2b79f8 = new Date(new Date().getTime() + _0x4115dd * 24 * 60 * 60 * 1000);
              if (_0xf44589[_0x3e4bc1][_0x119468].isSame(_0x2b79f8, 'day')) {
                _0x162546.push("off", "disabled");
              }
            }
          }
          if (_0xf44589[_0x3e4bc1][_0x119468].isoWeekday() > 5) {
            _0x162546.push('weekend');
          }
          if (_0xf44589[_0x3e4bc1][_0x119468].jMonth() != _0xf44589[1][1].jMonth()) {
            _0x162546.push("off not-show");
          }
          if (this.minDate && _0xf44589[_0x3e4bc1][_0x119468].isBefore(this.minDate, 'day')) {
            _0x162546.push("off", "disabled in-past");
          }
          if (_0xf44589[_0x3e4bc1][_0x119468].jMonth() != _0xf44589[1][1].jMonth()) {
            _0x162546.push("off", "disabled");
          }
          if (this.isInvalidDate(_0xf44589[_0x3e4bc1][_0x119468])) {
            _0x162546.push("off", "disabled");
          }
          if (_0xf44589[_0x3e4bc1][_0x119468].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) {
            _0x162546.push('active', "start-date");
          }
          if (this.endDate != null && _0xf44589[_0x3e4bc1][_0x119468].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) {
            _0x162546.push("active", "end-date");
          }
          if (this.endDate != null && _0xf44589[_0x3e4bc1][_0x119468] > this.startDate && _0xf44589[_0x3e4bc1][_0x119468] < this.endDate) {
            _0x162546.push("in-range");
          }
          if (this.disabledDates != null) {
            var _0x133a17 = _0xf44589[_0x3e4bc1][_0x119468].format("YYYY-MM-DD");
            if (this.disabledDates.indexOf(_0x133a17) != -1) {
              _0x162546.push("off", 'disabled');
            }
          }
          var _0x2e95e3 = false;
          if (this.disabledPast) {
            var _0x133a17 = _0xf44589[_0x3e4bc1][_0x119468].format('YYYY-MM-DD');
            var _0x1b00a6 = _0x2e1b00().format('YYYY-MM-DD');
            if (_0x133a17 < _0x1b00a6) {
              _0x162546.push("off", "disabled");
              _0x2e95e3 = true;
            }
          }
          var _0x15cb62 = '';
          var _0x491d35 = '';
          var _0xcdf353 = '';
          var _0x56997a = '';
          for (_0x100dd8 = 0; _0x100dd8 < this.allEvents.length; _0x100dd8++) {
            var _0x4d8f66 = '';
            if (typeof this.allEvents[_0x100dd8] != "undefined") {
              _0x4d8f66 = this.allEvents[_0x100dd8].status + " ";
            }
            var _0x133a17 = _0xf44589[_0x3e4bc1][_0x119468];
            var _0x457813 = _0x2e1b00(this.allEvents[_0x100dd8].start, 'YYYY-MM-DD');
            var _0x176bc0 = _0x2e1b00(this.allEvents[_0x100dd8].end, 'YYYY-MM-DD');
            if (_0x457813.isSame(_0x133a17, 'day') || _0x176bc0.isSame(_0x133a17, 'day') || _0x133a17.isAfter(_0x457813) && _0x133a17.isBefore(_0x176bc0)) {
              if (_0x457813.isSame(_0x133a17, 'day') && this.allEvents[_0x100dd8].group) {
                _0xcdf353 += "start-group ";
              }
              if (_0x176bc0.isSame(_0x133a17, 'day') && this.allEvents[_0x100dd8].group) {
                _0xcdf353 += "end-group ";
                _0x162546.push("off", "disabled");
              }
              if (_0x133a17.isAfter(_0x457813) && _0x133a17.isBefore(_0x176bc0) && this.allEvents[_0x100dd8].group) {
                _0xcdf353 += "in-group ";
                _0x162546.push("off", "disabled");
              }
              if (this.showEventTooltip) {
                _0x491d35 += "event-tooltip";
                _0x15cb62 = "<div class=\"event-tooltip-wrap\"><div class=\"" + _0x491d35 + " event event-" + _0x3e4bc1 + '-' + _0x119468 + "\" data-date-group=\"" + this.allEvents[_0x100dd8].end + "\">" + this.allEvents[_0x100dd8].event + "</div>";
                if (typeof this.allEvents[_0x100dd8].has_starttime !== "undefined") {
                  if (this.allEvents[_0x100dd8].has_starttime) {
                    _0x56997a = " has_starttime ";
                  }
                }
              } else {
                _0x15cb62 = "<div class=\"event event-" + _0x3e4bc1 + '-' + _0x119468 + "\" data-date-group=\"" + this.allEvents[_0x100dd8].end + "\">" + this.allEvents[_0x100dd8].event + "</div>";
              }
              if (typeof this.allEvents[_0x100dd8].status == "string" && this.allEvents[_0x100dd8].status == "not_available") {
                if (typeof this.classNotAvailable == 'object') {
                  _0x3810bc.each(this.classNotAvailable, function (_0x29d678, _0x2e70b4) {
                    _0x162546.push(_0x2e70b4);
                  });
                } else {
                  _0x162546.push("not-available");
                }
              } else if (_0x2e95e3) {
                _0x162546.push("not-available");
              }
              break;
            }
          }
          var _0x10df41 = this.isCustomDate(_0xf44589[_0x3e4bc1][_0x119468]);
          if (_0x10df41 !== false) {
            if (typeof _0x10df41 === 'string') {
              _0x162546.push(_0x10df41);
            } else {
              Array.prototype.push.apply(_0x162546, _0x10df41);
            }
          }
          var _0x58d1ed = '';
          var _0x345aa7 = false;
          for (var _0x100dd8 = 0; _0x100dd8 < _0x162546.length; _0x100dd8++) {
            _0x58d1ed += _0x162546[_0x100dd8] + " ";
            if (_0x162546[_0x100dd8] == "disabled") {
              _0x345aa7 = true;
            }
          }
          if (!_0x345aa7) {
            _0x58d1ed += " available";
          }
          if (_0x15cb62) {
            _0x58d1ed += " has-event";
          }
          if (this.showEventTooltip) {
            _0x58d1ed += " has-tooltip";
          }
          var _0x2a5a87 = '';
          if (_0x56997a) {
            _0x2a5a87 = "has_starttime";
          }
          if (this.onlyShowCurrentMonth && _0xf44589[_0x3e4bc1][_0x119468].jMonth() != _0xf44589[1][1].jMonth()) {
            _0x22cefa += "<td class=\"td-date td-no-show " + _0x56997a + _0xcdf353 + _0x58d1ed.replace(/^\s+|\s+$/g, '') + "\"" + " data-title=\"" + 'r' + _0x3e4bc1 + 'c' + _0x119468 + "\">" + "<div class=\"date no-show\"></div>" + _0x15cb62 + '</td>';
          } else {
            _0x22cefa += "<td data-milady=\"" + _0xf44589[_0x3e4bc1][_0x119468].format("YYYY/M/D") + "\" data-shamsi=\"" + _0xf44589[_0x3e4bc1][_0x119468].format("jYYYY/jM/jD") + "\" class=\"td-date " + _0x56997a + _0xcdf353 + _0x58d1ed.replace(/^\s+|\s+$/g, '') + "\"" + " data-title=\"" + 'r' + _0x3e4bc1 + 'c' + _0x119468 + "\">" + "<div class=\"date " + _0x2a5a87 + "\">" + _0x2e1b00(_0xf44589[_0x3e4bc1][_0x119468]).jDate() + "</div>" + _0x15cb62 + '</td>';
          }
        }
        _0x22cefa += '</tr>';
      }
      _0x22cefa += "</tbody>";
      _0x22cefa += "</table>";
      if (this.showTodayButton && _0x3fef8c == "left") {
        _0x22cefa += "<a href=\"javascript: void(0);\" class=\"button button-default btn btn-success btn-small btn-today\">" + this.locale.today + "</a>";
      }
      if (_0x3fef8c == 'left') {
        this.container.find(".calendar.left .calendar-table").html(_0x22cefa);
      }
      if (!this.singleDatePicker && _0x3fef8c == "right") {
        this.container.find(".calendar.right .calendar-table").html(_0x22cefa);
      }
    },
    'renderTimePicker': function (_0x4e6173) {
      if (_0x4e6173 == "right" && !this.endDate) {
        return;
      }
      var _0x458c33;
      var _0x3b1e15;
      var _0x1108af;
      var _0xd8fd20 = this.maxDate;
      if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate))) {
        _0xd8fd20 = this.startDate.clone().add(this.dateLimit);
      }
      if (_0x4e6173 == "left") {
        _0x3b1e15 = this.startDate.clone();
        _0x1108af = this.minDate;
        var _0x209f6b = this.container.find(".calendar-time.left");
        if (_0x209f6b.html() != '') {
          _0x3b1e15.hour(!isNaN(_0x3b1e15.hour()) ? _0x3b1e15.hour() : _0x209f6b.find(".hourselect option:selected").val());
          _0x3b1e15.minute(!isNaN(_0x3b1e15.minute()) ? _0x3b1e15.minute() : _0x209f6b.find(".minuteselect option:selected").val());
          _0x3b1e15.second(!isNaN(_0x3b1e15.second()) ? _0x3b1e15.second() : _0x209f6b.find(".secondselect option:selected").val());
          if (!this.timePicker24Hour) {
            var _0x39e5d4 = _0x209f6b.find(".ampmselect option:selected").val();
            if (_0x39e5d4 === 'PM' && _0x3b1e15.hour() < 12) {
              _0x3b1e15.hour(_0x3b1e15.hour() + 12);
            }
            if (_0x39e5d4 === 'AM' && _0x3b1e15.hour() === 12) {
              _0x3b1e15.hour(0);
            }
          }
        }
      } else {
        if (_0x4e6173 == "right") {
          _0x3b1e15 = this.endDate.clone();
          _0x1108af = this.startDate;
          var _0x209f6b = this.container.find(".calendar-time.right div");
          if (!this.endDate && _0x209f6b.html() != '') {
            var _0x209f6b = this.container.find(".calendar.right .calendar-time");
            if (_0x209f6b.html() != '') {
              _0x3b1e15.hour(!isNaN(_0x3b1e15.hour()) ? _0x3b1e15.hour() : _0x209f6b.find(".hourselect option:selected").val());
              _0x3b1e15.minute(!isNaN(_0x3b1e15.minute()) ? _0x3b1e15.minute() : _0x209f6b.find(".minuteselect option:selected").val());
              _0x3b1e15.second(!isNaN(_0x3b1e15.second()) ? _0x3b1e15.second() : _0x209f6b.find(".secondselect option:selected").val());
              if (!this.timePicker24Hour) {
                var _0x39e5d4 = _0x209f6b.find(".ampmselect option:selected").val();
                if (_0x39e5d4 === 'PM' && _0x3b1e15.hour() < 12) {
                  _0x3b1e15.hour(_0x3b1e15.hour() + 12);
                }
                if (_0x39e5d4 === 'AM' && _0x3b1e15.hour() === 12) {
                  _0x3b1e15.hour(0);
                }
              }
            }
            if (_0x3b1e15.isBefore(this.startDate)) {
              _0x3b1e15 = this.startDate.clone();
            }
            if (_0xd8fd20 && _0x3b1e15.isAfter(_0xd8fd20)) {
              _0x3b1e15 = _0xd8fd20.clone();
            }
          }
        }
      }
      if (_0x4e6173 === "left") {
        _0x458c33 = "<label>" + this.locale.labelStartTime + "<select class=\"select-dropdown timepicker hourselect\">";
      } else {
        _0x458c33 = "<label>" + this.locale.labelEndTime + "<select class=\"select-dropdown timepicker hourselect\">";
      }
      var _0x35208d = this.timePicker24Hour ? 0 : 1;
      var _0x44eeb4 = this.timePicker24Hour ? 23 : 12;
      for (var _0x131a6f = _0x35208d; _0x131a6f <= _0x44eeb4; _0x131a6f++) {
        var _0xcf5efe = _0x131a6f;
        if (!this.timePicker24Hour) {
          _0xcf5efe = _0x3b1e15.hour() >= 12 ? _0x131a6f == 12 ? 12 : _0x131a6f + 12 : _0x131a6f == 12 ? 0 : _0x131a6f;
        }
        var _0x4a1c20 = _0x3b1e15.clone().hour(_0xcf5efe);
        var _0x5286c9 = false;
        if (_0x1108af && _0x4a1c20.hour(_0x131a6f).isBefore(_0x1108af)) {
          _0x5286c9 = true;
        }
        if (_0xd8fd20 && _0x4a1c20.hour(_0x131a6f).isAfter(_0xd8fd20)) {
          _0x5286c9 = true;
        }
        if (_0x1108af && _0x4a1c20.minute(59).isBefore(_0x1108af)) {
          _0x5286c9 = true;
        }
        if (_0xd8fd20 && _0x4a1c20.minute(0).isAfter(_0xd8fd20)) {
          _0x5286c9 = true;
        }
        if (_0xcf5efe == _0x3b1e15.hour() && !_0x5286c9) {
          _0x458c33 += "<option value=\"" + _0x131a6f + "\" selected=\"selected\">" + _0x131a6f + "</option>";
        } else if (_0x5286c9) {
          _0x458c33 += "<option value=\"" + _0x131a6f + "\" disabled=\"disabled\" class=\"disabled\">" + _0x131a6f + "</option>";
        } else {
          _0x458c33 += "<option value=\"" + _0x131a6f + "\">" + _0x131a6f + "</option>";
        }
      }
      _0x458c33 += "</select></label>";
      _0x458c33 += " <select class=\"minuteselect\">";
      for (var _0x131a6f = 0; _0x131a6f < 60; _0x131a6f += this.timePickerIncrement) {
        var _0x177070 = _0x131a6f < 10 ? '0' + _0x131a6f : _0x131a6f;
        var _0x4a1c20 = _0x3b1e15.clone().minute(_0x131a6f);
        var _0x3d5393 = _0x3b1e15.clone().hour();
        var _0x5286c9 = false;
        if (_0x1108af && _0x4a1c20.hour(_0x3d5393).minute(_0x131a6f).isBefore(_0x1108af)) {
          _0x5286c9 = true;
        }
        if (_0xd8fd20 && _0x4a1c20.hour(_0x3d5393).minute(_0x131a6f).isAfter(_0xd8fd20)) {
          _0x5286c9 = true;
        }
        if (_0x1108af && _0x4a1c20.second(59).isBefore(_0x1108af)) {
          _0x5286c9 = true;
        }
        if (_0xd8fd20 && _0x4a1c20.second(0).isAfter(_0xd8fd20)) {
          _0x5286c9 = true;
        }
        if (_0x3b1e15.minute() == _0x131a6f && !_0x5286c9) {
          _0x458c33 += "<option value=\"" + _0x131a6f + "\" selected=\"selected\">" + _0x177070 + "</option>";
        } else if (_0x5286c9) {
          _0x458c33 += "<option value=\"" + _0x131a6f + "\" disabled=\"disabled\" class=\"disabled\">" + _0x177070 + "</option>";
        } else {
          _0x458c33 += "<option value=\"" + _0x131a6f + "\">" + _0x177070 + "</option>";
        }
      }
      _0x458c33 += "</select> ";
      if (this.timePickerSeconds) {
        _0x458c33 += " <select class=\"secondselect\">";
        for (var _0x131a6f = 0; _0x131a6f < 60; _0x131a6f++) {
          var _0x177070 = _0x131a6f < 10 ? '0' + _0x131a6f : _0x131a6f;
          var _0x4a1c20 = _0x3b1e15.clone().second(_0x131a6f);
          var _0x5286c9 = false;
          if (_0x1108af && _0x4a1c20.isBefore(_0x1108af)) {
            _0x5286c9 = true;
          }
          if (_0xd8fd20 && _0x4a1c20.isAfter(_0xd8fd20)) {
            _0x5286c9 = true;
          }
          if (_0x3b1e15.second() == _0x131a6f && !_0x5286c9) {
            _0x458c33 += "<option value=\"" + _0x131a6f + "\" selected=\"selected\">" + _0x177070 + "</option>";
          } else if (_0x5286c9) {
            _0x458c33 += "<option value=\"" + _0x131a6f + "\" disabled=\"disabled\" class=\"disabled\">" + _0x177070 + "</option>";
          } else {
            _0x458c33 += "<option value=\"" + _0x131a6f + "\">" + _0x177070 + "</option>";
          }
        }
        _0x458c33 += "</select> ";
      }
      if (!this.timePicker24Hour) {
        _0x458c33 += "<select class=\"ampmselect\">";
        var _0x4fa742 = '';
        var _0xb15e39 = '';
        if (_0x1108af && _0x3b1e15.clone().hour(12).minute(0).second(0).isBefore(_0x1108af)) {
          _0x4fa742 = " disabled=\"disabled\" class=\"disabled\"";
        }
        if (_0xd8fd20 && _0x3b1e15.clone().hour(0).minute(0).second(0).isAfter(_0xd8fd20)) {
          _0xb15e39 = " disabled=\"disabled\" class=\"disabled\"";
        }
        if (_0x3b1e15.hour() >= 12) {
          _0x458c33 += "<option value=\"AM\"" + _0x4fa742 + ">AM</option><option value=\"PM\" selected=\"selected\"" + _0xb15e39 + ">PM</option>";
        } else {
          _0x458c33 += "<option value=\"AM\" selected=\"selected\"" + _0x4fa742 + ">AM</option><option value=\"PM\"" + _0xb15e39 + ">PM</option>";
        }
        _0x458c33 += "</select>";
      }
      this.container.find(".calendar-time." + _0x4e6173 + " div").html(_0x458c33);
    },
    'updateFormInputs': function () {
      if (this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus")) {
        return;
      }
      this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format));
      if (this.endDate) {
        this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format));
      }
      if (this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate))) {
        this.container.find("button.applyBtn").removeAttr("disabled");
      } else {
        this.container.find("button.applyBtn").attr("disabled", "disabled");
      }
    },
    'move': function () {
      var _0x53db72 = {
        top: 0x0
      };
      _0x53db72.left = 0x0;
      var _0x454f50 = _0x53db72;
      var _0x41721d;
      if (!this.parentEl.is('body')) {
        _0x454f50 = {
          'top': this.element.offset().top - this.parentEl.scrollTop(),
          'left': this.element.offset().left - this.parentEl.scrollLeft()
        };
      }
      if (this.drops == 'up') {
        _0x41721d = this.element.offset().top - this.container.outerHeight() - _0x454f50.top;
      } else {
        _0x41721d = this.element.offset().top + this.element.outerHeight() - _0x454f50.top;
        if (window.matchMedia("(min-width: 768px)").matches) {
          if (_0x3810bc("#wpadminbar")[0]) {
            _0x41721d -= _0x3810bc("#wpadminbar").height();
          }
        }
      }
      this.container[this.drops == 'up' ? "addClass" : "removeClass"]("dropup");
      if (this.positionFixed) {
        if (this.container.hasClass("moveleft")) {
          this.container.css({
            'top': this.element.offset().top + this.element.height(),
            'left': this.element.offset().left - this.element.outerWidth(true),
            'right': "auto"
          });
        } else {
          this.container.css({
            'top': this.element.offset().top + this.element.height(),
            'left': this.element.offset().left,
            'right': "auto"
          });
        }
      } else {
        if (this.opens == "left") {
          this.container.css({
            'top': _0x41721d,
            'right': _0x3810bc(window).width() - (this.element.offset().left + this.element.width()),
            'left': "auto"
          });
          if (this.container.offset().left < 0) {
            var _0x7d0baa = {
              right: "auto",
              left: 0x9
            };
            this.container.css(_0x7d0baa);
          }
        } else {
          if (this.opens == "center") {
            this.container.css({
              'top': _0x41721d,
              'left': this.element.offset().left - _0x454f50.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
              'right': 'auto'
            });
            if (this.container.offset().left < 0) {
              var _0xbdfcc9 = {
                right: "auto",
                left: 0x9
              };
              this.container.css(_0xbdfcc9);
            }
          } else {
            this.container.css({
              'top': _0x41721d,
              'left': this.element.offset().left,
              'right': "auto"
            });
            this.container.removeClass("but-move-left");
          }
        }
        if (this.element.hasClass('fixed')) {
          this.container.css({
            'top': this.element.offset().top + this.element.height() - _0x3810bc(window).scrollTop()
          });
        }
      }
    },
    'show': function (_0x2d2819) {
      if (this.isShowing) {
        return;
      }
      this._outsideClickProxy = _0x3810bc.proxy(function (_0x1b6469) {
        this.outsideClick(_0x1b6469);
      }, this);
      _0x3810bc(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy);
      this.respontosingle(_0x2d2819);
      _0x3810bc(window).on("resize.daterangepicker", _0x3810bc.proxy(function (_0x298b90) {
        if (window.matchMedia("(min-width: 768px)").matches) {
          this.move(_0x298b90);
          this.respontosingle(_0x298b90);
        }
      }, this));
      this.oldStartDate = this.startDate.clone();
      this.oldEndDate = this.endDate.clone();
      this.previousRightTime = this.endDate.clone();
      this.updateView();
      this.container.show();
      this.move();
      this.element.trigger("show.daterangepicker", this);
      this.isShowing = true;
    },
    'respontosingle': function (_0x3e2962) {
      if (this.showCalendar && !this.alwaysShow) {
        return;
      }
      var _0x453d76 = this.widthSingle;
      var _0x42c57c = this.parentEl;
      if (this.parentEl.is("body")) {
        _0x42c57c = this.element;
      }
      if (_0x3810bc(window).width() - _0x42c57c.offset().left < this.widthCalendar && _0x42c57c.offset().left < this.widthCalendar) {
        this.container.addClass("respon-single");
      } else {
        this.container.removeClass("respon-single");
      }
      if (!this.container.hasClass("respon-single")) {
        _0x453d76 = this.widthCalendar;
      }
      if (_0x3810bc(window).width() - _0x42c57c.offset().left < _0x453d76 && _0x42c57c.offset().left >= _0x453d76) {
        this.container.removeClass("opensleft opensright moveleft moveright openscenter").addClass("moveleft opensleft");
        this.opens = 'left';
      } else {
        this.opens = 'right';
        this.container.removeClass("moveleft opensleft opensright moveright openscenter").addClass("moveright opensright");
      }
      if (this.alwaysShow) {
        if (_0x42c57c.width() < this.widthCalendar) {
          this.container.addClass("respon-single");
        } else {
          this.container.removeClass("respon-single");
        }
      }
      this.move(_0x3e2962);
      this.updateView();
    },
    'hide': function (_0x55d0ae) {
      if (!this.isShowing) {
        return;
      }
      if (!this.endDate) {
        this.startDate = this.oldStartDate.clone();
        this.endDate = this.oldEndDate.clone();
        if (this.sameDate) {
          if (this.sameDateMulti) {
            var _0x52646a = _0x2e1b00(this.startDate.format("YYYY-MM-DD"));
            var _0x59352e = _0x2e1b00(this.endDate.format('YYYY-MM-DD'));
            this.endDate = _0x59352e;
          } else {
            this.endDate = this.startDate;
          }
        } else {
          var _0x52646a = _0x2e1b00(this.startDate.format("YYYY-MM-DD"));
          var _0x59352e = _0x2e1b00(this.endDate.format('YYYY-MM-DD'));
          if (_0x59352e.isSame(_0x52646a)) {
            this.endDate = this.endDate.add(1, "days");
          }
        }
      } else {
        var _0x52646a = _0x2e1b00(this.startDate.format('YYYY-MM-DD'));
        var _0x59352e = _0x2e1b00(this.endDate.format('YYYY-MM-DD'));
        if (_0x59352e.isSame(_0x52646a) && !this.sameDate && !this.showCalendar) {
          this.endDate = this.endDate.add(1, "days");
        }
      }
      this.callback(this.startDate, this.endDate, this.chosenLabel, this.elmDate);
      this.updateElement();
      if (this.alwaysShow) {
        return;
      }
      _0x3810bc(document).off(".daterangepicker");
      _0x3810bc(window).off(".daterangepicker");
      this.container.hide();
      this.element.trigger("hide.daterangepicker", this);
      this.isShowing = false;
    },
    'toggle': function (_0x2b79ec) {
      if (this.isShowing) {
        this.hide();
      } else {
        this.show();
      }
    },
    'outsideClick': function (_0x43e171) {
      var _0xa7eb3b = _0x3810bc(_0x43e171.target);
      if (_0x43e171.type == 'focusin' || _0xa7eb3b.closest(this.element).length || _0xa7eb3b.closest(this.container).length || _0xa7eb3b.closest(".calendar-table").length) {
        return;
      }
      this.hide();
      this.element.trigger("outsideClick.daterangepicker", this);
    },
    'showCalendars': function () {
      this.container.addClass("show-calendar");
      this.move();
      this.element.trigger("showCalendar.daterangepicker", this);
    },
    'hideCalendars': function () {
      this.container.removeClass("show-calendar");
      this.element.trigger("hideCalendar.daterangepicker", this);
    },
    'hoverRange': function (_0xfe10ad) {
      if (this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus")) {
        return;
      }
      var _0x45f1ae = _0xfe10ad.target.getAttribute("data-range-key");
      if (_0x45f1ae == this.locale.customRangeLabel) {
        this.updateView();
      } else {
        var _0x198852 = this.ranges[_0x45f1ae];
        this.container.find("input[name=daterangepicker_start]").val(_0x198852[0].format(this.locale.format));
        this.container.find("input[name=daterangepicker_end]").val(_0x198852[1].format(this.locale.format));
      }
    },
    'clickRange': function (_0x1cfd02) {
      var _0x53e052 = _0x1cfd02.target.getAttribute("data-range-key");
      this.chosenLabel = _0x53e052;
      if (_0x53e052 == this.locale.customRangeLabel) {
        this.showCalendars();
      } else {
        var _0x4ce32a = this.ranges[_0x53e052];
        this.startDate = _0x4ce32a[0];
        this.endDate = _0x4ce32a[1];
        if (!this.timePicker) {
          this.startDate.startOf("day");
          this.endDate.endOf('day');
        }
        if (!this.alwaysShowCalendars) {
          this.hideCalendars();
        }
        this.clickApply(_0x1cfd02);
      }
    },
    'clickPrev': function (_0x52f7c7) {
      var _0x256e58 = _0x3810bc(_0x52f7c7.target).parents(".calendar");
      if (_0x256e58.hasClass("left")) {
        this.leftCalendar.month.subtract(1, "month");
        if (this.linkedCalendars) {
          this.rightCalendar.month.subtract(1, "month");
        }
      } else {
        this.rightCalendar.month.subtract(1, "month");
      }
      this.updateCalendars();
    },
    'clickNext': function (_0x139bf1) {
      var _0x1acbfd = _0x3810bc(_0x139bf1.target).parents(".calendar");
      if (_0x1acbfd.hasClass("left")) {
        this.leftCalendar.month.add(1, "month");
        this.rightCalendar.month.add(1, "month");
      } else {
        this.rightCalendar.month.add(1, "month");
        if (this.linkedCalendars) {
          this.leftCalendar.month.add(1, "month");
        }
      }
      this.updateCalendars();
    },
    'clickToday': function (_0x1acd19) {
      this.leftCalendar.month = _0x2e1b00();
      if (!this.singleDatePicker) {
        this.rightCalendar.month = _0x2e1b00().add(1, "month");
      }
      this.updateCalendars();
    },
    'hoverDate': function (_0x3af111) {
      if (!_0x3810bc(_0x3af111.target).parent().hasClass("available")) {
        return;
      }
      var _0x4d5712 = _0x3810bc(_0x3af111.target).parent().attr("data-title");
      var _0x4b6887 = _0x4d5712.substr(1, 1);
      var _0x4247fb = _0x4d5712.substr(3, 1);
      var _0x27cedf = _0x3810bc(_0x3af111.target).parents(".calendar");
      var _0x1bfba8 = _0x27cedf.hasClass("left") ? this.leftCalendar.calendar[_0x4b6887][_0x4247fb] : this.rightCalendar.calendar[_0x4b6887][_0x4247fb];
      if (this.endDate && !this.container.find("input[name=daterangepicker_start]").is(":focus")) {
        this.container.find("input[name=daterangepicker_start]").val(_0x1bfba8.format(this.locale.format));
      } else if (!this.endDate && !this.container.find("input[name=daterangepicker_end]").is(":focus")) {
        this.container.find("input[name=daterangepicker_end]").val(_0x1bfba8.format(this.locale.format));
      }
      var _0x2085d1 = this.leftCalendar;
      var _0x34c101 = this.rightCalendar;
      var _0x284263 = this.startDate;
      if (!this.endDate) {
        this.container.find(".calendar td").each(function (_0x4c3dba, _0xec3574) {
          if (_0x3810bc(_0xec3574).hasClass("week")) {
            return;
          }
          var _0x2c383f = _0x3810bc(_0xec3574).attr("data-title");
          var _0x15e15b = _0x2c383f.substr(1, 1);
          var _0x204598 = _0x2c383f.substr(3, 1);
          var _0x981f26 = _0x3810bc(_0xec3574).parents(".calendar");
          var _0x5b7194 = _0x981f26.hasClass("left") ? _0x2085d1.calendar[_0x15e15b][_0x204598] : _0x34c101.calendar[_0x15e15b][_0x204598];
          if (_0x5b7194.isAfter(_0x284263) && _0x5b7194.isBefore(_0x1bfba8) || _0x5b7194.isSame(_0x1bfba8, 'day')) {
            _0x3810bc(_0xec3574).addClass('in-range');
          } else {
            _0x3810bc(_0xec3574).removeClass("in-range");
          }
        });
      }
    },
    'clickDate': function (_0x491d64) {
      this.elmDate = _0x491d64;
      if (!_0x3810bc(_0x491d64.target).parent().hasClass("available")) {
        return;
      }
      var _0x278ab9 = _0x3810bc(_0x491d64.target).parent().attr("data-title");
      var _0x4deb79 = _0x278ab9.substr(1, 1);
      var _0x4e795c = _0x278ab9.substr(3, 1);
      var _0x343e91 = _0x3810bc(_0x491d64.target).parents(".calendar");
      var _0x5b35cc = _0x343e91.hasClass("left") ? this.leftCalendar.calendar[_0x4deb79][_0x4e795c] : this.rightCalendar.calendar[_0x4deb79][_0x4e795c];
      if (this.endDate || _0x5b35cc.isBefore(this.startDate, 'day')) {
        if (this.timePicker) {
          var _0x3e4d78 = parseInt(this.container.find(".left .hourselect").val(), 10);
          if (!this.timePicker24Hour) {
            var _0x218b72 = this.container.find(".left .ampmselect").val();
            if (_0x218b72 === 'PM' && _0x3e4d78 < 12) {
              _0x3e4d78 += 12;
            }
            if (_0x218b72 === 'AM' && _0x3e4d78 === 12) {
              _0x3e4d78 = 0;
            }
          }
          var _0x19ab6a = parseInt(this.container.find(".left .minuteselect").val(), 10);
          if (isNaN(_0x19ab6a)) {
            _0x19ab6a = parseInt(this.container.find(".left .minuteselect option:last").val(), 10);
          }
          var _0x84794 = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
          _0x5b35cc = _0x5b35cc.clone().hour(_0x3e4d78).minute(_0x19ab6a).second(_0x84794);
        }
        this.endDate = null;
        this.element.trigger("click.start.daterangepicker");
        this.setStartDate(_0x5b35cc.clone());
      } else {
        if (!this.endDate && _0x5b35cc.isBefore(this.startDate)) {
          this.setEndDate(this.startDate.clone());
        } else {
          if (this.timePicker) {
            var _0x3e4d78 = parseInt(this.container.find(".right .hourselect").val(), 10);
            if (!this.timePicker24Hour) {
              var _0x218b72 = this.container.find(".right .ampmselect").val();
              if (_0x218b72 === 'PM' && _0x3e4d78 < 12) {
                _0x3e4d78 += 12;
              }
              if (_0x218b72 === 'AM' && _0x3e4d78 === 12) {
                _0x3e4d78 = 0;
              }
            }
            var _0x19ab6a = parseInt(this.container.find(".right .minuteselect").val(), 10);
            if (isNaN(_0x19ab6a)) {
              _0x19ab6a = parseInt(this.container.find(".right .minuteselect option:last").val(), 10);
            }
            var _0x84794 = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
            _0x5b35cc = _0x5b35cc.clone().hour(_0x3e4d78).minute(_0x19ab6a).second(_0x84794);
          }
          if (this.showCalendar) {
            if (this.sameDate && _0x5b35cc.isSame(this.startDate)) {
              return;
            }
          }
          this.setEndDate(_0x5b35cc.clone());
          if (this.disabledDates) {
            var _0x32625c = this.startDate;
            var _0x182dce = this.endDate;
            for (var _0x1b1fe2 = 0; _0x1b1fe2 < this.disabledDates.length; _0x1b1fe2++) {
              var _0x167a46 = _0x2e1b00(this.disabledDates[_0x1b1fe2], 'YYYY-MM-DD');
              if (_0x167a46.isSame(_0x32625c) || _0x167a46.isSame(_0x182dce) || _0x167a46.isAfter(_0x32625c) && _0x167a46.isBefore(_0x182dce)) {
                this.endDate = null;
                this.setEndDate(this.startDate.add(1, "days"));
              }
            }
          }
          if (this.autoApply) {
            this.calculateChosenLabel();
            this.clickApply(_0x491d64);
          }
        }
      }
      if (this.singleDatePicker) {
        if (!this.showCalendar) {
          if (this.sameDate) {
            if (_0x3810bc(_0x491d64.target).parent().hasClass("start-group")) {
              var _0x52f3b2 = _0x3810bc(_0x491d64.target).parent().find(".event").attr("data-date-group");
              _0x52f3b2 = _0x2e1b00(_0x52f3b2, "YYYY-MM-DD");
              this.setEndDate(_0x52f3b2.clone());
            } else {
              this.setEndDate(this.startDate);
            }
          } else {
            this.setEndDate(this.startDate.add(1, "days"));
          }
          if (!this.timePicker) {
            this.clickApply(_0x491d64);
          }
        }
      } else {
        if (this.sameDate) {
          if (this.sameDateMulti) {
            if (_0x3810bc(_0x491d64.target).parent().hasClass("start-group")) {
              var _0x52f3b2 = _0x3810bc(_0x491d64.target).parent().find(".event").attr("data-date-group");
              _0x52f3b2 = _0x2e1b00(_0x52f3b2, 'YYYY-MM-DD');
              this.setEndDate(_0x52f3b2.clone());
              this.clickApply(_0x491d64);
            }
          } else {
            this.setEndDate(this.startDate);
            if (!this.timePicker) {
              this.clickApply(_0x491d64);
            }
          }
        } else {
          if (_0x3810bc(_0x491d64.target).parent().hasClass("start-group")) {
            var _0x52f3b2 = _0x3810bc(_0x491d64.target).parent().find(".event").attr("data-date-group");
            _0x52f3b2 = _0x2e1b00(_0x52f3b2, 'YYYY-MM-DD');
            this.setEndDate(_0x52f3b2.clone());
            this.clickApply(_0x491d64);
          }
        }
      }
      this.clickedDate = true;
      this.updateView();
      _0x491d64.stopPropagation();
    },
    'calculateChosenLabel': function () {
      var _0x118774 = true;
      var _0x16c667 = 0;
      for (var _0xf41e34 in this.ranges) {
        if (this.timePicker) {
          var _0x326ab1 = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
          if (this.startDate.format(_0x326ab1) == this.ranges[_0xf41e34][0].format(_0x326ab1) && this.endDate.format(_0x326ab1) == this.ranges[_0xf41e34][1].format(_0x326ab1)) {
            _0x118774 = false;
            this.chosenLabel = this.container.find(".ranges li:eq(" + _0x16c667 + ')').addClass("active").html();
            break;
          }
        } else {
          if (this.startDate.format('YYYY-MM-DD') == this.ranges[_0xf41e34][0].format('YYYY-MM-DD') && this.endDate.format("YYYY-MM-DD") == this.ranges[_0xf41e34][1].format('YYYY-MM-DD')) {
            _0x118774 = false;
            this.chosenLabel = this.container.find(".ranges li:eq(" + _0x16c667 + ')').addClass("active").html();
            break;
          }
        }
        _0x16c667++;
      }
      if (_0x118774 && this.showCustomRangeLabel) {
        this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html();
        this.showCalendars();
      }
    },
    'clickApply': function (_0x2629c5) {
      this.hide();
      this.element.trigger("apply.daterangepicker", [this, _0x2629c5.target]);
    },
    'clickCancel': function (_0x2eb9e7) {
      this.startDate = this.oldStartDate;
      this.endDate = this.oldEndDate;
      this.hide();
      this.element.trigger("cancel.daterangepicker", this);
    },
    'monthOrYearChanged': function (_0x1f320a) {
      var _0x295120 = _0x3810bc(_0x1f320a.target).closest(".calendar").hasClass("left");
      var _0x2cb9b9 = _0x295120 ? "left" : "right";
      var _0x2b28a0 = this.container.find('.calendar.' + _0x2cb9b9);
      var _0x3e42bb = parseInt(_0x2b28a0.find(".monthselect").val(), 10);
      var _0xa3ca02 = _0x2b28a0.find(".yearselect").val();
      if (!_0x295120) {
        if (_0xa3ca02 < this.startDate.jYear() || _0xa3ca02 == this.startDate.jYear() && _0x3e42bb < this.startDate.jMonth()) {
          _0x3e42bb = this.startDate.jMonth();
          _0xa3ca02 = this.startDate.jYear();
        }
      }
      if (this.minDate) {
        if (_0xa3ca02 < this.minDate.jYear() || _0xa3ca02 == this.minDate.jYear() && _0x3e42bb < this.minDate.jMonth()) {
          _0x3e42bb = this.minDate.jMonth();
          _0xa3ca02 = this.minDate.jYear();
        }
      }
      if (this.maxDate) {
        if (_0xa3ca02 > this.maxDate.jYear() || _0xa3ca02 == this.maxDate.jYear() && _0x3e42bb > this.maxDate.jMonth()) {
          _0x3e42bb = this.maxDate.jMonth();
          _0xa3ca02 = this.maxDate.jYear();
        }
      }
      if (_0x295120) {
        this.leftCalendar.month.jMonth(_0x3e42bb);
        this.leftCalendar.month = _0x2e1b00(_0xa3ca02 + this.leftCalendar.month.format("/jMM/jDD"), "jYYYY/jM/jD");
        if (this.linkedCalendars) {
          this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month");
        }
      } else {
        this.rightCalendar.month.jMonth(_0x3e42bb);
        this.rightCalendar.month = _0x2e1b00(_0xa3ca02 + this.rightCalendar.month.format("/jMM/jDD"), "jYYYY/jM/jD");
        if (this.linkedCalendars) {
          this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month");
        }
      }
      this.updateCalendars();
    },
    'timeChanged': function (_0x2af258) {
      var _0x7932cc = _0x3810bc(_0x2af258.target).closest(".calendar-time");
      var _0x30305d = _0x7932cc.hasClass("left");
      var _0x1a2065 = _0x7932cc.find(".timepicker").val();
      _0x1a2065 = _0x2e1b00(_0x1a2065, "hh:mm a");
      var _0x3f0360 = parseInt(_0x7932cc.find(".hourselect").val(), 10);
      var _0x470079 = parseInt(_0x7932cc.find(".minuteselect").val(), 10);
      if (isNaN(_0x470079)) {
        _0x470079 = parseInt(_0x7932cc.find(".minuteselect option:last").val(), 10);
      }
      var _0x401cdc = this.timePickerSeconds ? parseInt(_0x7932cc.find(".secondselect").val(), 10) : 0;
      if (!this.timePicker24Hour) {
        var _0x3d2cdf = _0x7932cc.find(".ampmselect").val();
        if (_0x3d2cdf === 'PM' && _0x3f0360 < 12) {
          _0x3f0360 += 12;
        }
        if (_0x3d2cdf === 'AM' && _0x3f0360 === 12) {
          _0x3f0360 = 0;
        }
      }
      if (_0x30305d) {
        var _0x830a = this.startDate.clone();
        _0x830a.hour(_0x3f0360);
        _0x830a.minute(_0x470079);
        _0x830a.second(_0x401cdc);
        this.setStartDate(_0x830a);
        if (this.singleDatePicker) {
          this.endDate = this.startDate.clone();
        } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == _0x830a.format('YYYY-MM-DD') && this.endDate.isBefore(_0x830a)) {
          this.setEndDate(_0x830a.clone());
        }
      } else {
        if (this.endDate) {
          var _0x4c68b1 = this.endDate.clone();
          _0x4c68b1.hour(_0x3f0360);
          _0x4c68b1.minute(_0x470079);
          _0x4c68b1.second(_0x401cdc);
          this.setEndDate(_0x4c68b1);
        }
      }
      this.updateCalendars();
      this.updateFormInputs();
      this.renderTimePicker("left");
      this.renderTimePicker("right");
    },
    'formInputsChanged': function (_0x1e9c57) {
      var _0x1b9e2b = _0x3810bc(_0x1e9c57.target).closest(".calendar").hasClass("right");
      var _0x3d2610 = _0x2e1b00(this.container.find("input[name=\"daterangepicker_start\"]").val(), this.locale.format);
      var _0x2c683a = _0x2e1b00(this.container.find("input[name=\"daterangepicker_end\"]").val(), this.locale.format);
      if (_0x3d2610.isValid() && _0x2c683a.isValid()) {
        if (_0x1b9e2b && _0x2c683a.isBefore(_0x3d2610)) {
          _0x3d2610 = _0x2c683a.clone();
        }
        this.setStartDate(_0x3d2610);
        this.setEndDate(_0x2c683a);
        if (_0x1b9e2b) {
          this.container.find("input[name=\"daterangepicker_start\"]").val(this.startDate.format(this.locale.format));
        } else {
          this.container.find("input[name=\"daterangepicker_end\"]").val(this.endDate.format(this.locale.format));
        }
      }
      this.updateView();
    },
    'formInputsFocused': function (_0x1ca405) {
      this.container.find("input[name=\"daterangepicker_start\"], input[name=\"daterangepicker_end\"]").removeClass('active');
      _0x3810bc(_0x1ca405.target).addClass("active");
      var _0xa44c14 = _0x3810bc(_0x1ca405.target).closest(".calendar").hasClass("right");
      if (_0xa44c14) {
        this.endDate = null;
        this.setStartDate(this.startDate.clone());
        this.updateView();
      }
    },
    'formInputsBlurred': function (_0x24965a) {
      if (!this.endDate) {
        var _0x32f45e = this.container.find("input[name=\"daterangepicker_end\"]").val();
        var _0x4d1baf = _0x2e1b00(_0x32f45e, this.locale.format);
        if (_0x4d1baf.isValid()) {
          this.setEndDate(_0x4d1baf);
          this.updateView();
        }
      }
    },
    'elementChanged': function () {
      if (!this.element.is("input")) {
        return;
      }
      if (!this.element.val().length) {
        return;
      }
      if (this.element.val().length < this.locale.format.length) {
        return;
      }
      var _0x3bf423 = this.element.val().split(this.locale.separator);
      var _0x4cec06 = null;
      var _0x4d0549 = null;
      if (_0x3bf423.length === 2) {
        _0x4cec06 = _0x2e1b00(_0x3bf423[0], this.locale.format);
        _0x4d0549 = _0x2e1b00(_0x3bf423[1], this.locale.format);
      }
      if (this.singleDatePicker || _0x4cec06 === null || _0x4d0549 === null) {
        _0x4cec06 = _0x2e1b00(this.element.val(), this.locale.format);
        _0x4d0549 = _0x4cec06;
      }
      if (!_0x4cec06.isValid() || !_0x4d0549.isValid()) {
        return;
      }
      if (_0x2e1b00(_0x4d0549.format('YYYY-MM-DD')).isSame(_0x2e1b00(_0x4cec06.format('YYYY-MM-DD'))) && !this.singleDay && !this.sameDate) {
        _0x4d0549 = _0x4d0549.add(1, "days");
      }
      this.setStartDate(_0x4cec06);
      this.setEndDate(_0x4d0549);
      this.updateView();
    },
    'keydown': function (_0x5395ff) {
      if (_0x5395ff.keyCode === 9 || _0x5395ff.keyCode === 13) {
        this.hide();
      }
    },
    'updateElement': function () {
      if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
        this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
        this.element.trigger("change", this);
      } else {
        if (this.element.is('input') && this.autoUpdateInput) {
          if (this.showCalendar) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
          } else {
            this.element.val(this.startDate.format(this.locale.format));
          }
          this.element.trigger("change", this);
        }
      }
    },
    'remove': function () {
      this.container.remove();
      this.element.off(".daterangepicker");
      this.element.removeData();
    }
  };
  _0x3810bc.fn.daterangepicker = function (_0x4ff8ff, _0x52fa12) {
    this.each(function () {
      var _0x48c240 = _0x3810bc(this);
      if (_0x48c240.data("daterangepicker")) {
        _0x48c240.data("daterangepicker").remove();
      }
      _0x48c240.data("daterangepicker", new _0x1a0b32(_0x48c240, _0x4ff8ff, _0x52fa12));
    });
    return this;
  };
  return _0x1a0b32;
});