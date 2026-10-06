// Fix SDK loading cho Safari iOS
(function(){
  if(document.querySelector('script[src*="supabase-js"]')) return;
  const s1 = document.createElement('script');
  s1.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  s1.async = true;
  document.head.appendChild(s1);
  const s2 = document.createElement('script');
  s2.src = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
  s2.async = true;
  document.head.appendChild(s2);
  setTimeout(function(){
    if(window.__initApp && !window.__sb){ window.__initApp(); }
  }, 800);
})();
