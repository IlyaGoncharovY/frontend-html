import classnames from "classnames";

export const generateContainerClassnames = (styleName, changeableProperty) => {
    return classnames(styleName, { opened: changeableProperty });
};
