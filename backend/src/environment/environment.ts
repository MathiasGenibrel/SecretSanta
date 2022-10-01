import * as dotenv from 'dotenv';
dotenv.config({debug:true,path:"/app/src/environment/.env"})

// On récupere nos variable environnement contenu dans notre .env
export const environment = {
    secretToken: process.env.SECRET_TOKEN ?? "unknown",
    database: {
        hostname: process.env.HOSTNAME_DB ?? "172.18.0.1",
        database: process.env.DATABASE_DB ??"unknown",
        user: process.env.USER_DB ?? "",
        password: process.env.PASSWORD_DB ?? "",
        port: process.env.PORT_DB ?? "unknown"
    }
}