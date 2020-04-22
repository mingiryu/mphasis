// https://gist.github.com/mlocati/7210513
const percentToColor = (percent, maxHue = 120, minHue = 0) => {
    const hue = percent * (maxHue - minHue) + minHue;
    return `hsl(${hue}, 80%, 50%)`;
};

export const getShape = n => {
    if (n > 0.8) {
        return "double-circle";
    } else if (n > 0.6) {
        return "open double-circle";
    } else if (n > 0.4) {
        return "open circle";
    } else if (n > 0.2) {
        return "circle";
    } else {
        return "dot";
    }
};

export const getColor = n => {
    return percentToColor((n + 1.0) / 2.0, 240, 0);
};