const copyButton = document.getElementById("btn-copy");
const textToCopy = document.getElementById("msg");

copyButton.addEventListener("click", function() {
  const range = document.createRange();
  range.selectNode(textToCopy);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();
});
