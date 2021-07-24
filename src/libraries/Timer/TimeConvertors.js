function centis_from_ms (ms){
    return Math.floor(ms/10) % 100;
}
function secs_from_ms (ms) {
    return Math.floor(ms / 1000) % 60;
}
function mins_from_ms (ms) {
    return Math.floor(ms / 60000) % 60;
}
function hours_from_ms (ms) {
    return Math.floor(ms / 3600000);
}


function padLeft (str, min_digits = 2, padding = '0') {
    let new_str = str.slice()
    while (new_str.length < min_digits) new_str = padding + new_str;
    return new_str;
}

export function msToString (ms = {type: Number} , spacer = ':') {
    return padLeft(hours_from_ms(ms).toString()) + spacer +
        padLeft(mins_from_ms(ms).toString()) + spacer +
        padLeft(secs_from_ms(ms).toString()) + spacer +
        padLeft(centis_from_ms(ms).toString());
}