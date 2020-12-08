"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { Configuration } from "./config";
const common_1 = require("./common");
const services_1 = require("./business/services");
class MainClass {
    static main() {
        // const customer = new Customer(1, "Northwind", "Bangalore",
        //     "info@northwind.com", "080-498349834", "SILVER",
        //     12000, true, "Simple Remarks");
        // LogManager.info(customer.toString());
        //const settings = Configuration.getConfiguration();
        //LogManager.info(settings.getConnectionString());
        try {
            const service = new services_1.CustomerService();
            const promise = service.searchCustomers("Mean");
            promise
                .then(records => {
                if (records !== null) {
                    for (const record of records) {
                        common_1.LogManager.info(record.customerId + ", " +
                            record.customerName);
                    }
                }
            })
                .finally(() => common_1.LogManager.info("Service Invokded Successfully!"));
        }
        catch (error) {
            common_1.LogManager.error(error);
        }
    }
}
MainClass.main();
//# sourceMappingURL=index.js.map