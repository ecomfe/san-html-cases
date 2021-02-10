var san = require('san')

var MyComponent = san.defineComponent({
    template: '<div id="{{ root.name }}"><ui-node s-if="root.children" s-for="node in root.children" root="{{ node }}"/></div>',
    components: {
        'ui-node': 'self'
    }
});

exports = module.exports = MyComponent
