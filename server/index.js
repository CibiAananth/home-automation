const mqtt = require("mqtt");
const client = mqtt.connect("");

client.on("connect", () => {
  console.log("connected");
  client.publish("test:connection", "payload:2");
});
