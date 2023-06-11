const { sleep } = require("../../src/helpers");

exports.handler = async function (event) {
    await sleep(3000);
    console.log(event.body);
    const { facility_id } = JSON.parse(event.body);
    const ok = !!(facility_id && facility_id !== "");
    console.log({ facility_id, ok });
    return {
        statusCode: ok ? 200 : 400,
        body: JSON.stringify({ status: ok }),
    };
};
