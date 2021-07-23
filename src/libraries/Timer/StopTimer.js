// eslint-disable-next-line no-unused-vars
class StopTimer {
    constructor(ms_duration) {
        this.duration = ms_duration;
        this.ms_left = ms_duration;
        this.start_time = null;
        this.timer = null;

        this.running = false
    }
    start () {
        if (this.running) return this.#calc_ms_left();
        if (this.ms_left <= 0 ) return 0;

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
        if (!this.running) return ;
        if (!this.start_time) return this.ms_left;

        clearTimeout(this.timer)

        this.ms_left = this.#calc_ms_left();
        this.running = false;
    }
    getTimeLeft () {
        if (this.running) return this.#calc_ms_left()
        return this.ms_left;
    }
    #calc_ms_left() {
        let calculated = this.ms_left + this.start_time - Date.now();
        return calculated > 0 ?  calculated : 0 ;
    }
}