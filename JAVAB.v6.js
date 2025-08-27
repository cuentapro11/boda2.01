// v6 bootstrapper to ensure fresh JS load
(function(){
  var ts = Date.now();
  var s = document.createElement('script');
  s.src = 'JAVAB.v4.js?t=' + ts;
  s.defer = true;
  document.head.appendChild(s);
  console.log('V6 loader injected v4 with ts', ts);
})();
