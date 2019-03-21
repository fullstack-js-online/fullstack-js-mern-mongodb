import Fs from 'fs'
import Path from 'path'
import Mailer from 'nodemailer'
import config from '@config/mail'
import HandleBars from 'handlebars'

class Mail {
  /**
   * Initialize The mail
   *
   * @return {null}
   */
  constructor() {
    this.transport = Mailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.password
      }
    })

    this.from = config.defaults.from
  }

  /**
   * Set the template to use for this email
   *
   * @param {string} template name of template for email
   *
   * @return {Mail}
   */
  template(template) {
    this.template = template

    return this
  }

  /**
   * Set the recipient of this email
   *
   * @param {string} email
   * @return {Mail}
   */
  to(email) {
    this.to = email

    return this
  }

  /**
   * Set the data for the handlebars template
   *
   * @param {Object} data
   * @return {Mail}
   */
  data(data) {
    this.data = data

    return this
  }

  /**
   * Set the sender of the email
   *
   * @param {string} email
   * @return {Mail}
   */
  from(email) {
    this.from = email

    return this
  }

  /**
   * Set the subject for this mail
   *
   * @param {string} subject
   * @return {Mail}
   */
  subject(subject) {
    this.subject = subject

    return this
  }

  /**
   * Send the email
   *
   * @return
   */
  async send() {
    const htmlTemplate = Fs.readFileSync(
      Path.resolve(
        __dirname,
        'templates',
        this.template,
        `${this.template}.html.hbs`
      ),
      'utf8'
    )

    const textTemplate = Fs.readFileSync(
      Path.resolve(
        __dirname,
        'templates',
        this.template,
        `${this.template}.text.hbs`
      ),
      'utf8'
    )

    const text = HandleBars.compile(textTemplate)(this.data)
    const html = HandleBars.compile(htmlTemplate)(this.data)

    return this.transport.sendMail({
      html,
      text,
      to: this.to,
      from: this.from,
      subject: this.subject
    })
  }
}

export default Mail
