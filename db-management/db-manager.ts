import { CustomerSchema } from "../db-schemas";
import { Mongoose } from "./connection-manager";
import { CustomerDocument } from "./customer-document";

const CustomersContext = Mongoose.model<CustomerDocument>("customers",
    new Mongoose.Schema(CustomerSchema));

export {
    // Mongoose, //removing as we are exposing via connection-manager.ts
    CustomersContext
};
