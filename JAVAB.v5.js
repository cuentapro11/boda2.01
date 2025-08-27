// v5 duplicate to bypass caches and verify deployment
document.addEventListener('DOMContentLoaded', function(){
  console.log('V5 assets loaded');
});
// include v4 logic
document.write('<script src="JAVAB.v4.js?v='+Date.now()+'" defer><\/script>');
