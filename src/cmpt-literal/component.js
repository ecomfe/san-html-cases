var san = require('san')

var MyComponent = san.defineComponent({
    components: {
        'ui-label': {
            template: '<a><span title="{{title}}">{{text}}</span></a>'
        }
    },
    template: '<div><h5><ui-label title="{{name}}" text="{{jokeName}}"></ui-label></h5>'
        + '<p><a>{{school}}</a><u>{{company}}</u></p></div>',
});

exports = module.exports = MyComponent
