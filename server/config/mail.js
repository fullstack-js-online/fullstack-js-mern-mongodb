import dotenv from 'dotenv'

dotenv.config()

export default {
  defaults: {
    from: process.env.MAIL_FROM || 'Fullstackjs <admin@fullstackjs.online>'
  },
  port: process.env.MAIL_PORT,
  host: process.env.MAIL_HOST,
  user: process.env.MAIL_USERNAME,
  password: process.env.MAIL_PASSWORD,
  secure: process.env.MAIL_SECURE || false
}
