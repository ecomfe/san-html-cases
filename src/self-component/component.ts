import { Component } from 'san'

export default class Node extends Component {
    root: object
    static components = { 'ui-node': 'self' }
    static template = '<div id="{{ root.name }}"><ui-node s-if="root.children" s-for="node in root.children" root="{{ node }}"/></div>'
}
