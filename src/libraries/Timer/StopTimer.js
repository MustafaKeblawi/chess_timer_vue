export class StopTimer {
    constructor(ms_duration = 3000) {
        this.ms_left = ms_duration;
        this.start_time = null;
        this.timer = null;

        this.running = false
    }
    start () {
        if (this.running) return this.#calc_ms_left();
        if (this.ms_left <= 0 ) return 0; // maybe no need

        this.timer = setTimeout(
            () => {
                this.ms_left = 0;
                this.running = false;
            },
            this.ms_left)
        this.start_time = Date.now()

        this.running = true;

        return this.ms_left;
    }
    stop () {
        if (!this.running) return this.ms_left;
        if (!this.start_time) return this.ms_left; // maybe no need

        clearTimeout(this.timer)

        this.ms_left = this.#calc_ms_left();
        this.running = false;
    }
    getTimeLeft () {
        if (this.running) return this.#calc_ms_left()
        return this.ms_left;
    }
    isRunning() {
        return this.running;
    }
    addTime(ms) {
        if (!this.running) {
            this.ms_left += ms;
            return;
        }
            this.stop();
            this.ms_left += ms;
            this.start();
    }
    #calc_ms_left() {
        let calculated = this.ms_left + this.start_time - Date.now();
        return calculated > 0 ?  calculated : 0 ;
    }
}