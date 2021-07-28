import elements from "./elements";

export function init() {
    const now = new Date();

    elements.age.innerHTML = new Date(now - new Date('Dec 03 1995')).getFullYear() - 1970;
    elements.year.innerHTML = now.getFullYear();
}

export default {
    init
}