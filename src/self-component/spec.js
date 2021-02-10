it("given raw 'self' components config, use itself", function (done) {
    // [inject] init

    var us = wrap.querySelectorAll('div');
    expect(us.length).toBe(5);

    myComponent.dispose();
    document.body.removeChild(wrap);
    done();
});
