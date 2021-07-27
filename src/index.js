import skills from "./modules/skills";
import time from "./modules/time";

document.addEventListener("DOMContentLoaded", () => {
    console.info('[DOM] DOMContentLoaded');

    time.init();
    skills.init();
});
