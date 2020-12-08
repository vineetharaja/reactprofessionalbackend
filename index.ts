//import { Configuration } from "./config";
import { LogManager } from "./common";
import { Customer } from "./models";
import { Configuration } from "./config";
import { CustomerService } from "./business/services";

class MainClass {
    static main(): void {
        // const customer = new Customer(1, "Northwind", "Bangalore",
        //     "info@northwind.com", "080-498349834", "SILVER",
        //     12000, true, "Simple Remarks");

        // LogManager.info(customer.toString());

        //const settings = Configuration.getConfiguration();

        //LogManager.info(settings.getConnectionString());

        try {
            const service = new CustomerService();
            const promise = service.searchCustomers("Mean");

            promise
                .then(records => {
                    if (records !== null) {
                        for (const record of records) {
                            LogManager.info(record.customerId + ", " +
                                record.customerName);
                        }
                    }
                })
                .finally(() => LogManager.info("Service Invokded Successfully!"));
        } catch (error) {
            LogManager.error(error);
        }
    }
}

MainClass.main();
