var san = require('san');

var Inner = san.defineComponent({
    template: '<span title="nothing" data-other="inner"><slot/></span>'
});

var MyComponent = san.defineComponent({
    template: '<div><ui-inner attr-title="{{text}}" attr-data-t="state:{{text}}">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    }
});

exports = module.exports = MyComponent;