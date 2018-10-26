console.info('[Elements] Init');

// A central collection of the elements I want adjusted on the page.

export const elements = {
    baffle: () => { return document.querySelectorAll('.baffle'); },
}

// Prevents warning in webpack
export default elements;