const { randomIntFromInterval, sleep } = require("../../src/helpers");
const signalStrength = ["Bad", "Ok", "Good"];

function deviceInfo(deviceId) {
    const now = new Date();
    return {
        connected: !!randomIntFromInterval(0, 1),
        device: deviceId,
        last_measurement: {
            meter_id: "Reported Meter ID as source of measurement",
            timestamp: now.toISOString(),
            value: randomIntFromInterval(1000, 100000),
            value_type: "What kind of value is it, Daily tariff, energy, etc",
        },
        signal_strength: signalStrength[0], //signalStrength[randomIntFromInterval(0, 2)],
    };
}

exports.handler = async function (event) {
    const eid =
        event.path
            .replace("/.netlify/functions/device/", "")
            .replace("/connection", "") ?? "unknown";
    console.log(`EID: ${eid}`);
    await sleep(4000);
    return {
        statusCode: 200,
        body: JSON.stringify(deviceInfo(eid)),
    };
};
