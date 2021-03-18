it("given raw 'self' components config, use itself", function (done) {
    // [inject] init

    var span = wrap.getElementsByTagName('span')[0];
    expect(span.title).toBe('errorrik');
    expect(span.innerHTML.indexOf('airike')).toBe(0);

    myComponent.dispose();
    document.body.removeChild(wrap);
    done();
});
