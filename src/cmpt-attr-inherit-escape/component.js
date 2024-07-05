var san = require('san');

var Inner = san.defineComponent({
    template: '<span><slot/></span>'
});

var MyComponent = san.defineComponent({

    template: '<div><ui-inner attr-data-json="{{data | stringify}}" attr-name="{{text}}" attr-data-t="state:{{text}}">{{text}}</ui-inner><ui-inner attr-name="{{text}}" attr-data-t="state:{{text}}">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    },

    filters: {
        stringify(data) {
            return JSON.stringify(data);
        }
    },
});

exports = module.exports = MyComponent;