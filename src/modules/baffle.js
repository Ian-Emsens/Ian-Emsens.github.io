console.info('[Baffle] Init');

import baffle from '../../node_modules/baffle';
import elements from './elements';

// All code related to web elements I want baffle'd
const characters = '░▒▓';

export const baffleElements = baffle(elements.baffle(), {
    speed: 80,
    characters: characters,
});

export const burstElements = baffle(elements.baffle(), {
    speed: 25,
    characters: characters,
})

export function init() {
    const duration = 1000;
    const delay = 2 * 1000;
    baffleElements.start().reveal(duration, delay);
}

export function burst() {
    const duration = 350;
    const delay = 150;
    burstElements.start().reveal(duration, delay);
}

// Prevents warning in webpack
export default {
    baffleElements: baffleElements,
    burstElements: burstElements,
    init: init,
    burst: burst,
};