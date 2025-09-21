import * as z from 'zod';

export const signinSchema = z.object({
    employeeCode:z.string().length(8 , 'EmployeeCode must be exactly 8 characters'),
    password:z.string().min(8,'Password must be 8 ')
})

export type SigninSchema  = z.infer<typeof signinSchema>;