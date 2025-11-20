it("fake inited data", function (done) {
    // [inject] init

    var b = wrap.getElementsByTagName('b')[0];

    expect(b.title).toBe('real1');
    expect(myComponent.d.realTitle).toBe('real1');
    expect(myComponent.d._realTitle).toBe('real1');
    expect(myComponent.d.fakeTitle).toBe('real1');

    myComponent.data.set('title', '3');

    san.nextTick(function () {
        expect(b.title).toBe('real1');
        expect(myComponent.d.realTitle).toBe('real1');
        expect(myComponent.d._realTitle).toBe('real1');
        expect(myComponent.d.fakeTitle).toBe('real1');
        myComponent.dispose();
        document.body.removeChild(wrap);

        done();
    })
});

