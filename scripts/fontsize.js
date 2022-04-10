function resize (factor) {
  let sizeStr = document.body.style.fontSize;
  let size = Number(sizeStr.replace('em', '')) || 1.2;
  let bigger = (size * factor).toFixed(1) + 'em';
  document.body.style.fontSize = bigger;
}