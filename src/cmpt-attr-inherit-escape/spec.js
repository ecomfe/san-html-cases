it("Component Attribute Inherit escape", function (done) {
    // [inject] init

    var span = wrap.getElementsByTagName('span')[0];
    expect(span.innerHTML).toContain('Hahaha');
    expect(span.getAttribute('data-json')).toBe('{"test":1}');
    expect(span.getAttribute('name')).toBe('Hahaha');
    expect(span.getAttribute('data-t')).toBe('state:Hahaha');

    myComponent.data.set('text', 'Wuwuwu');

    myComponent.nextTick(function () {
        expect(span.innerHTML).toContain('Wuwuwu');
        expect(span.getAttribute('name')).toBe('Wuwuwu');
        expect(span.getAttribute('data-t')).toBe('state:Wuwuwu');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});