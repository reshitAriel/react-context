
export const validateHebrew = (str) => {
    return (/^[\u0590-\u05fe]+$/i).test(str);
}