// update text
var san = require('san');
class MyComponent extends san.Component{
    static template = '<div>{{count|formatCount}} list: <span s-for="name in list">{{name}}</span></div>';
    static computed = {
        newName() {
            return this.d.upName + ' - icon';
        },

        upName() {
            var name = this.d.name;
            return name.slice(0, 1).toUpperCase() + name.slice(1);
        }
    }
    static filters = {
        formatCount(count) {
            return this.d.newName + ': ' + count;
        }
    }

    inited () {
        this.d.count = 2;
        this.initList();
    }

    initList() {
        this.d.list.push(this.d.newName);
    }
}

exports = module.exports = MyComponent;
