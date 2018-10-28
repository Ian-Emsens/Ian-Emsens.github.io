import baffle from './modules/baffle';

document.addEventListener("DOMContentLoaded", () => {
    console.info('[DOM] DOMContentLoaded');

    baffle.init();

    const burst = {
        repetition: 0,
        timer: undefined,
        init: () => {
            burst.timer = window.setInterval(() => {
                burst.increment();
                burst.clear();

                baffle.burst();
        
                if (burst.repetition > 10) {
                    burst.repetition = 0;
                }

                burst.init();
            }, (1 + (burst.repetition/100)) * 4000);
        },
        increment: () => {
            burst.repetition = burst.repetition + 1;
        },
        clear: () => {
            window.clearInterval(burst.timer);
        }
    }

    burst.init();
});
