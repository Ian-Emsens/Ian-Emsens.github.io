console.info('[Elements] Init');

// A central collection of the elements I want adjusted on the page.

export const elements = {
    age: document.getElementById('age'),
    year: document.getElementById('year'),
    skills: document.getElementById('skills'),
};

// Prevents warning in webpack
export default elements;