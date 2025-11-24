// update text
import san from 'san';

class MyComponent extends san.Component<any> {
    static template = '<div>{{count|formatCount}} list: <span s-for="name in list">{{name}}</span></div>';
    static computed = {
        newName(this: MyComponent) {
            return this.d.upName + ' - icon';
        },

        upName(this: MyComponent) {
            var name = this.d.name;
            return name.slice(0, 1).toUpperCase() + name.slice(1);
        }
    }

    static filters = {
        formatCount(this: MyComponent, count: string) {
            return this.d.newName + ': ' + count;
        }
    }

    inited () {
        this.d.count = 2;
        this['initList']();
    }

    initList() {
        this.d.list.push(this.d.newName);
    }
}

export default MyComponent;
