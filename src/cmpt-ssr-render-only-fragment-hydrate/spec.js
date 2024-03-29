it("component render-only, render-hydrate no effect when root element is fragment", function (done) {
    var wrap = document.getElementById('cmpt-ssr-render-only-fragment-hydrate');
    var hydrateResult = san.hydrateComponent(
        MyComponent,
        {el: wrap.firstChild}
    );
    expect(hydrateResult.renderOnly).toBeTruthy();
    var myComponents = hydrateResult.components;

    expect(myComponents['ui-u'].length).toBe(1);
    expect(myComponents['ui-c/ui-sub']).toBeUndefined();
    var uCmpt = myComponents['ui-u'][0];

    expect(uCmpt.el.tagName).toBe('U');
    expect(uCmpt.data.get('text')).toBe('errorrik@gmail.com');
    expect(uCmpt.el.innerHTML).toContain('errorrik@gmail.com');

    uCmpt.dispose();
    document.body.removeChild(wrap);
    done();
});