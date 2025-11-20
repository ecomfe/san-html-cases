it("computed data", function (done) {
    // [inject] init

    var b = wrap.getElementsByTagName('b')[0];

    expect(b.title).toBe('real2');
    expect(myComponent.d.realTitle).toBe('real2');

    myComponent.data.set('title', '3');

    san.nextTick(function () {
        expect(b.title).toBe('real3');
        expect(myComponent.d.realTitle).toBe('real3');
        myComponent.dispose();
        document.body.removeChild(wrap);

        done();
    })
});

