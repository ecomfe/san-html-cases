import { Component } from 'san'

// date init data
export default class MyComponent extends Component {
    public static filters = {
        year: function (date: Date) {
            return date.getFullYear()
        },

        month: function (date: Date) {
            return date.getMonth() + 1
        }
    }
    public static template = '<div><b title="{{date|year}}">{{date|year}}</b><b title="{{date|month}}">{{date|month}}</b></div>'

    initData () {
        return {
            date: new Date(431366400000)
        }
    }
}
