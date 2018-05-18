// here are some shitty tests
describe("autogrow", function () {
  it("provides a shortcut method", function () {
    expect(window.a).toBeDefined();
  });

  it("returns undefined if no element was found", function () {
    var dontExist = a('foo');
    expect(dontExist).toBeUndefined();
  });

  it("should return undefined if no element is given", function () {
    expect(a(null)).toBeUndefined();
    expect(a('')).toBeUndefined();
    expect(a()).toBeUndefined();
  });

  it("returns the target element if it was found", function () {
    expect(a("textarea-one").element).toBeDefined();
  });

  it("returns the container, if element was found", function () {
    expect(a("textarea-four").container).toBeDefined();
  });

  it("works if class selector is given", function () {
    var selector = '.hello';
    var element = document.querySelector(selector);
    expect(a(selector).element.className).toEqual(element.className);
  });

  it("works if id selector is given", function () {
    var selector = '#textarea-two';
    var element = document.querySelector(selector);
    expect(a(selector).element.id).toEqual(element.id);
  });

  it("works if options are given", function () {
    var selector = '#textarea-three';
    var element = document.querySelector(selector);
    var className = 'customAreaClass';
    expect(a(selector, {
      areaClass: className
    }).element.className).toEqual(className)
  });

  it("should accept HTMLTextAreaElement as target argument", function () {
    var textarea = document.createElement('textarea');
    textarea.id = "foobar";
    var expected = a(textarea).element.id;
    expect(expected).toBe("foobar");
  });
});
