import nodemailer from 'nodemailer'
import { getMentorAppointmentTemplate, getResetTemplate, getSignupTemplate, userRegistrationEmail } from './mailTemplate'

const SMTP_HOST = process.env.SMTP_HOST ?? ''
const SMTP_USER = process.env.SMTP_USER ?? ''
const SMTP_PASSWORD = process.env.SMTP_PASSWORD ?? ''

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 587,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD
  }
})

export const sendSignupEmail = (email: string, token: string) =>
  transporter.sendMail({
    from: '<hello@pathacks.com>',
    to: email,
    subject: 'Welcome to pathacks.com',
    html: getSignupTemplate(token)
  })

export const sendResetEmail = (email: string, token: string) =>
  transporter.sendMail({
    from: `<admin@pathacks.com>`,
    to: email,
    subject: 'Forgot Password',
    html: getResetTemplate(token)
  })

  export const mentorEmail = (email: string) =>
    transporter.sendMail({
      from: `<admin@pathacks.com>`,
      to: email,
      subject: 'Congratulations, you have been appointed as a mentor!',
      html: getMentorAppointmentTemplate()
    })
  
  export const newUserAlertEmail = (firstName: string, lastName: string, email: string, username: string) => 
    transporter.sendMail({
    from: '<hello@pathacks.com>',
    to: process.env.ADMIN_EMAIL,
    subject: 'Alert! A new user has registered to pathacks',
    html: userRegistrationEmail(firstName, lastName, email, username)
  })