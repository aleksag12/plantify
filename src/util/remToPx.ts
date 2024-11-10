const remToPx = (rem: string) => {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return Number(rem.split("rem")[0]) * rootFontSize;
};

export default remToPx;
