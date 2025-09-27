import * as z from 'zod';

export const accountSchema = z.object({
    customerId:z.string(),
    interestRate:z.string(),
    type:z.string(),
    balance:z.string(),
    currency:z.string(),
    status:z.string(),
})