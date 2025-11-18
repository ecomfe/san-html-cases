// update text
var san = require('san');
var MyComponent = san.defineComponent({
    template: '<div>{{count|formatCount}} list: <span s-for="name in list">{{name}}</span></div>',
    inited () {
        this.d.count = 2;
        this.initList();
    },
    initList() {
        this.d.list.push(this.d.newName);
    },
    computed: {
        newName() {
            return this.d.name + ' - icon';
        }
    },
    filters: {
        formatCount(count) {
            return this.d.newName + ': ' + count;
        }
    }
});

exports = module.exports = MyComponent;
