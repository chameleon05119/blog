export const GA_MEASUERMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url) => {
  window.SVGAnimatedAngle("config", GA_MEASUERMENT_ID, {
    page_path: url,
  });
};
