it("component render-only-nesting", function (done) {
    var wrap = document.getElementById('cmpt-ssr-render-only-nesting');
    var hydrateResult = san.hydrateComponent(
        MyComponent,
        {el: wrap.firstChild}
    );
    expect(hydrateResult.renderOnly).toBeTruthy();
    var myComponents = hydrateResult.components;

    expect(myComponents['ui-u'].length).toBe(1);
    expect(myComponents['ui-c/ui-sub'].length).toBe(1);
    var iCmpt = myComponents['ui-c/ui-sub'][0];
    var uCmpt = myComponents['ui-u'][0];

    expect(iCmpt.el.tagName).toBe('I');
    expect(uCmpt.el.tagName).toBe('DIV');
    expect(iCmpt.data.get('text')).toBe('erik');
    expect(uCmpt.data.get('text')).toBe('errorrik@gmail.com');

    expect(iCmpt.el.innerHTML).toContain('erik');
    expect(uCmpt.el.innerHTML).toContain('errorrik@gmail.com');


    iCmpt.data.set('text', 'errorrik');
    iCmpt.nextTick(function () {
        expect(iCmpt.el.innerHTML).toContain('errorrik');

        iCmpt.dispose();
        uCmpt.dispose();
        document.body.removeChild(wrap);
        done();
    });
});