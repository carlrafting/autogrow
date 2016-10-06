describe("autogrow", function () {
  var a, textareas, mirrors;

  beforeEach(function () {
    a = autogrow;
    a.init();
    textareas = document.querySelectorAll('textarea');
    mirrors = document.querySelectorAll('pre');
  });

  afterEach(function (){
    textareas = null, mirrors = null;
  });

  describe("init", function () {
    it("should set options if given", function () {
      var opts = {
        activeClass: 'fooBar'
      };
      a.init(opts);
      var expected = a.options
      expect(expected).toEqual(opts);
    });
    it("should use defaults if no options are given", function () {
      var DEFAULTS = {
        activeClass: 'autogrow-active',
        areaClass: 'autogrow',
        containerClass: 'autogrow-container',
        mirrorClass: 'autogrow-mirror',
        spanClass: 'autogrow-mirror-span'
      };
      a.init();

      var container = document.querySelector('.'+DEFAULTS.containerClass);
      var span = document.querySelector('.'+DEFAULTS.spanClass);

      expect(textareas[0].classList.contains(DEFAULTS.areaClass)).toBe(true);
      expect(container.classList.contains(DEFAULTS.containerClass)).toBe(true);
      expect(container.classList.contains(DEFAULTS.activeClass)).toBe(true);
      expect(mirrors[0].classList.contains(DEFAULTS.mirrorClass)).toBe(true);
      expect(span.classList.contains(DEFAULTS.spanClass)).toBe(true);
    });
  });
});
