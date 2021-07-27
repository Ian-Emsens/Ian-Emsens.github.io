console.info('[Elements] Init');

// A central collection of the elements I want adjusted on the page.

export const elements = {
    age: document.getElementById('age'),
    currentYear: document.getElementById('currenYear--experience'),
    skills: document.getElementById('skills__list'),
    experience: {
        button: document.getElementById('experience__order'),
        list: document.getElementById('experience__list')
    }
};

// Prevents warning in webpack
export default elements;