console.info('[Baffle] Init');

import baffle from '../../node_modules/baffle';
import elements from './elements';

// All code related to web elements I want baffle'd
export const b = baffle(elements.baffle(), {
    speed: 75,
    characters: '01',
});

export function init() {
    b.start().reveal(1000, 2000);
}

// Prevents warning in webpack
export default {
    b: b,
    init: init,
};