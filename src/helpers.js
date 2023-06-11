function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomIntFromInterval(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
    sleep,
    randomIntFromInterval,
};
