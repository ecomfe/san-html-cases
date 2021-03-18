import { Component } from 'san'

export default class MyComponent extends Component {
    static components = { 'ui-label': { template: '<a><span title="{{title}}">{{text}}</span></a>' } }
    static template = '<div><h5><ui-label title="{{name}}" text="{{jokeName}}"></ui-label></h5><p><a>{{school}}</a><u>{{company}}</u></p></div>'
}
