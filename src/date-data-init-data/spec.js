it("date data with init data", function (done) {
    // [inject] init

    var bs = wrap.getElementsByTagName('b');
    expect(bs[0].title).toBe('1983');
    expect(bs[1].title).toBe('9');

    expect(myComponent.data.get('date').getFullYear()).toBe(1983);
    expect(myComponent.data.get('date').getMonth()).toBe(8);

    myComponent.data.set('date', new Date(1984, 10, 10));
    san.nextTick(function () {
        var bs = wrap.getElementsByTagName('b');
        expect(bs[0].title).toBe('1984');
        expect(bs[1].title).toBe('11');

        expect(myComponent.data.get('date').getFullYear()).toBe(1984);
        expect(myComponent.data.get('date').getMonth()).toBe(10);

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});

