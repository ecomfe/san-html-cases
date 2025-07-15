// date data
var san = require('san');
var MyComponent = san.defineComponent({
    filters: {
        year: function (date) {
            return date.getFullYear()
        },

        month: function (date) {
            return date.getMonth() + 1
        }
    },
    template: '<div>'
        + '<b title="{{date|year}}">{{date|year}}</b>'
        + '<b title="{{date|month}}">{{date|month}}</b>'
        + '</div>'
});

exports = module.exports = MyComponent;
