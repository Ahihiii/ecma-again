// eslint-disable-next-line import/prefer-default-export
export const $ = (element) => {
    const selectors = document.querySelectorAll(element);
    console.log(selectors);
    return selectors.length === 1 ? selectors[0] : selectors;
};