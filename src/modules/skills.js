import elements from "./elements";

export function init() {
    randomiseChildren(elements.skills);
}

export function randomiseChildren(list) {
    for (var i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[Math.random() * i | 0]);
    }
}

export default {
    init
}