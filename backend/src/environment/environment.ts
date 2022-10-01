import * as dotenv from 'dotenv';
dotenv.config({debug:true,path:"/app/src/environment/.env"})
export const environment = {
    secretToken: process.env.SECRET_TOKEN ?? "unknown",
    database: {
        hostname: process.env.HOSTNAME ?? "unknown"
    },
    test:process.env
}