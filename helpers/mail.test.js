/**
 * @jest-environment node
 */

import { getResetTemplate, getSignupTemplate } from './mailTemplate'
import { sendResetEmail, sendSignupEmail } from './mail'
import nodemailer from 'nodemailer'

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockReturnValue((mailoptions, callback) => {})
  })
}))

describe('Mail templates', () => {
  const token = 'faketoken123'
  const matcher = new RegExp(`<a href=".+/confirm/${token}">`)

  test('Signup template contains link to set password', () => {
    const res = getSignupTemplate(token)
    expect(res.trim()).toMatch(matcher)
  })

  test('Reset template contains link to set password', () => {
    const res = getResetTemplate(token)
    expect(res.trim()).toMatch(matcher)
  })
})

describe('Mail works as expected', () => {
  const { sendMail: sendMailMock } = nodemailer.createTransport()

  test('It calls email client to send signup email', async () => {
    await sendSignupEmail('hello@pathacks.com', 'faketoken123')
    expect(sendMailMock).toBeCalledTimes(1)
    expect(sendMailMock).toBeCalledWith({
      from: '<hello@pathacks.com>',
      to: 'hello@pathacks.com',
      subject: 'Welcome to pathacks.com',
      html: getSignupTemplate('faketoken123')
    })
  })

  test('It calls email client to send reset password email', async () => {
    await sendResetEmail('hello@pathacks.com', 'faketoken123')
    expect(sendMailMock).toBeCalledTimes(1)
    expect(sendMailMock).toBeCalledWith({
      from: '<admin@pathacks.com>',
      to: 'hello@pathacks.com',
      subject: 'Forgot Password',
      html: getResetTemplate('faketoken123')
    })
  })
})
