// here are some shitty tests
describe("autogrow", function () {
  it("provides a shortcut method", function () {
    expect(window.a).toBeDefined();
  });

  it("does nothing if no element was found", function () {
    var dontExist = a('foo');
    expect(dontExist).toBeUndefined();
  });

  it("returns the target element if it was found", function () {
    expect(a("textarea-one")).toBeDefined();
  });

  it("works if class selector is given", function () {
    var selector = '.hello';
    var element = document.querySelector(selector);
    expect(a(selector)).toBe(element);
  });

  it("works if id selector is given", function () {
    var selector = '#textarea-two';
    var element = document.querySelector(selector);
    expect(a(selector)).toBe(element);
  });

  it("should fail silently if no element is given", function () {
    expect(a(null)).toBeUndefined();
  });
});
