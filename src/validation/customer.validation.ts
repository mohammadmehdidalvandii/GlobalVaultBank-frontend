import * as z from 'zod';

export const customerSchema = z.object({
firstName:z.string().min(1,'First name is required'),
lastName:z.string().min(1,'Last name is required'),
email:z.string().email('Invalid email address'),
phone:z.string(),
nationalID:z.string().length(10,'National ID must be exactly 10 character'),
dateOfBirth:z.date(),
street:z.string(),
city:z.string(),
postalCode:z.string().min(1,'Postal code is required'),
country:z.string(),
})