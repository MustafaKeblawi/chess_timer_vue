
function centis_from_ms (ms){
    return Math.floor(ms/10) % 100;
}
export function msToSeconds (ms) {
    return Math.floor(ms / 1000) % 60;
}
export function msToMinutes (ms) {
    return Math.floor(ms / 60000) % 60;
}
export function msToHours (ms) {
    return Math.floor(ms / 3600000);
}


function padLeft (str, min_digits = 2, padding = '0') {
    let new_str = str.slice()
    while (new_str.length < min_digits) new_str = padding + new_str;
    return new_str;
}

export function mod (number= {type: Number}, denominator={type: Number}) {
    return ((number % denominator) + denominator) % denominator;
}

export function msToString (ms = {type: Number} , spacer = ':') {
    return padLeft(msToHours(ms).toString()) + spacer +
        padLeft(msToMinutes(ms).toString()) + spacer +
        padLeft(msToSeconds(ms).toString()) + spacer +
        padLeft(centis_from_ms(ms).toString());
}
export function toMs (hours= {type: Number},
                      minutes= {type: Number}, seconds= {type: Number}) {
    return hours*3600000 + minutes*60000 + seconds*1000
}