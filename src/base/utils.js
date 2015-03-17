define(['d3', 'lodash', 'stacktrace'], function(d3, _, stacktrace) {

    var utils = {

        /**
         * Counts number of decimals in a number
         * @example Example usage of countDecimals:
         * // returns 2
         * countDecimals(5.23);
         * @param {Number} Number to be checked
         * @returns {Number} Number of decimals.
         */
        countDecimals: function(number) {
            if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
            return number.toString().split(".")[1].length || 0;
        },

        /**
         * Checks if an object is a Vizabi model
         * @param {Object} model object to be checked
         * @returns {Boolean}
         */
        isModel: function(obj) {
            return (obj._id && obj._id.indexOf("m") !== -1);
        },

        /**
         * Finds an intermediate value between two numbers
         * @example Example usage of interpolate:
         * // returns 120
         * interpolate(100, 200, 0.20);
         * @param {Number} value1 first number
         * @param {Number} value2 second number
         * @param {Number} fraction fraction to interpolate (0 <= fraction <= 1);
         * @returns {Number}
         */
        interpolate: function(value1, value2, fraction) {
            return value1 + ((value2 - value1) * fraction);
        },

        /**
         * Interpolates all values within a range. Same as d3.range
         * @param {Number} val1 first number
         * @param {Number} val2 second number
         * @param {Number} step
         * @returns {Array}
         */
        interpolateRange: function(val1, val2, step) {
            return d3.range(val1, val2, step);
        },

        /**
         * Returns the stack trace for the call
         */
        stacktrace: stacktrace,

        formatStacktrace: function(stack) {
            return stack.join('\n\n');
        }
    }


    return utils;


});
