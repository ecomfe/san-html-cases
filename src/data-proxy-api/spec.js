it("data proxy api", function (done) {
    // [inject] init

    var b = wrap.getElementsByTagName('b')[0];

    expect(b.innerHTML).toContain('Button - icon');
    expect(myComponent.d.count).toBe(2);
    expect(myComponent.d.list.length).toBe(2);
    expect(myComponent.d.newName).toBe('Button - icon');
    expect(myComponent.d.upName).toBe('Button');


    san.nextTick(function () {
        myComponent.dispose();
        document.body.removeChild(wrap);

        done();
    })
});

