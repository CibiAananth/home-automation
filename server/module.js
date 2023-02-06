const mqtt = require("mqtt");
const client = mqtt.connect("");

client.on("connect", () => {
  client.subscribe("test:connection", (err) => {
    if (!err) {
      client.on("message", function (topic, payload) {
        console.log(topic, payload.toString());
      });
    }
  });
});
