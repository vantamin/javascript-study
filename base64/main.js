const base64 = ((window) => {
  'use strict';

  const encode = (str) => window.btoa(unescape(encodeURIComponent(str)));

  const decode = (str) => decodeURIComponent(escape(window.atob(str)));

  return { encode, decode };
})(window);
