import { Request, Response } from "express";
import { CustomerModel, getCustomers, GetCustomersInput } from ".";

export const getCustomersHandler = async (req: Request<GetCustomersInput["params"], {}, {}, GetCustomersInput["query"] & qs.ParsedQs>, res: Response) => {
    try {
        const customers = await getCustomers(
            {
                limit: Number(req.query.size),
                skip: Number(req.query.page),
            },
            req.params.select
        );
        return res.send(customers);
    } catch (e) {
        console.log(e);
        //error if page number is negative = -1 ..etc
        if (e && e.code && e.code === 51024) {
            return res.status(400).send("page number must be 0 or greater");
        }
        return res.status(400).send((e.message && e.message) || e.toString());
    }
}


export const customers_detail = async (_: Request, res: Response) => {
    try {
        const all = await CustomerModel.customersDetail();
        return res.send(all);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e.message || "Error occurred");
    }
}