"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("../transport");
exports.getForexWebsocket = (apiKey) => transport_1.getWsClient("wss://socket.polygon.io/forex", apiKey);
