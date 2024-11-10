const pxToRem = (px: number) => {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return `${px / rootFontSize}rem`;
};

export default pxToRem;
