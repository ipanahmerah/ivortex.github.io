/* =======================
   Histats
======================= */
(function () {
  var img = document.createElement('img');
  img.alt = 'stats';
  img.src = '//sstatic1.histats.com/0.gif?4981581&101';
  img.style.display = 'none';
  document.head.appendChild(img);
})();

/* =======================
   StatCounter
======================= */
var sc_project = 13049188;
var sc_invisible = 1;
var sc_security = "28b53553";

(function () {
  var sc = document.createElement('script');
  sc.src = 'https://www.statcounter.com/counter/counter.js';
  sc.async = true;
  document.head.appendChild(sc);

  var noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <div class="statcounter">
      <a title="Web Analytics" href="https://statcounter.com/" target="_blank" rel="noopener">
        <img class="statcounter"
             src="https://c.statcounter.com/13049188/0/28b53553/1/"
             alt="Web Analytics"
             referrerpolicy="no-referrer-when-downgrade">
      </a>
    </div>
  `;
  document.body.appendChild(noscript);
})();

/* =======================
   Google Analytics (GA4)
======================= */
(function () {
  var ga = document.createElement('script');
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q75MKXBWL7';
  document.head.appendChild(ga);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-Q75MKXBWL7');
})();
