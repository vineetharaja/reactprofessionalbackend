"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Configuration } from "./config";
const common_1 = require("./common");
const models_1 = require("./models");
class MainClass {
    static main() {
        const customer = new models_1.Customer(1, "Northwind", "Bangalore", "info@northwind.com", "080-498349834", "SILVER", 12000, true, "Simple Remarks");
        common_1.LogManager.info(customer.toString());
        //const settings = Configuration.getConfiguration();
        //LogManager.info(settings.getConnectionString());
    }
}
MainClass.main();
//# sourceMappingURL=index.js.map