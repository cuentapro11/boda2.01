// v7 full copy: inline loader then force-load the latest v4 logic
(function(){
  var ts = Date.now();
  var s = document.createElement('script');
  s.src = 'JAVAB.v4.js?t=' + ts;
  s.defer = true;
  document.head.appendChild(s);
  console.log('V7 assets active, ts=', ts);
})();
