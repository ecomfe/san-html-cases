it("no trim whitespace, blank text node should not be removed", function () {
    var tester = /<a>Foo<\/a>\s+<span>bar<\/span>/i;
    expect(tester.test(document.getElementById('trim-whitespaces-default').innerHTML)).toBeTruthy();

    // [inject] init

    expect(tester.test(myComponent.el.innerHTML)).toBeTruthy();

    myComponent.dispose();
    document.body.removeChild(wrap);
});

