// let selectedText = window.getSelection().toString().trim();
if (window.getSelection().toString().trim()) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(window.getSelection().toString().trim())}`;
  window.open(searchUrl, '_blank');
} else {
  alert("No text selected!");
}
