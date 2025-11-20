var san = require('san');

var MyComponent = san.defineComponent({
    template: '<div><b title="{{realTitle}}">{{realTitle}}</b></div>',
    computed: {
        realTitle: function () {
            return 'real1'
        },
        fakeTitle: function () {
            return this.data.get('_realTitle')
        }
    },
    initData () {
        return {
            t: 'title'
        }
    },
    inited () {
        const data = this.data
        const realTitle = 'real' + data.get('title')
        data.set('_realTitle', realTitle)
    }
})

module.exports = exports = MyComponent
