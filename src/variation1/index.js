var basicStructure = {
  init: function () {
    this.mainCss();
    this.mainJS();
    this.goals();
  },
  mainCss: function () {
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    document.head.appendChild(s).textContent =
      '' + 'body {\n' + '    border: 20px solid #000;\n' + '}';
  },
  mainJS: function () {
    //For JS
    console.log('kgfgvhlvhlygyggg ao[fapoufhaduuohfuoadhf aouahfdhfoygg oiy');
    var abc = document.querySelector('.banner__tagline');

    //document.querySelector('.header').classList.add('hidden');
    console.log('🚀 ~ file: index.js ~ line 25 ~ abc', abc);
    var div = document.createElement('div');
    div.append('test');
    abc.append(div);
  },
  goals: function () {
    // For Goal/Metric JS
  },
};

(function pollForLoadVariation() {
  if (document.readyState === 'complete') {
    basicStructure.init();
    console.log('Variation- A: 01');
  } else {
    setTimeout(pollForLoadVariation, 25);
  }
})();

/***********************donot copy to after this line******************************/

export default basicStructure;
