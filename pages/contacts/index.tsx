import React from 'react'
import { Row, Col } from '@/components/Grid/Index'
import email from '@/components/Contacts/email'
import telegram from '@/components/Contacts/telegram'

const Contacts = () => (
  <>
    <Row>
      <Col>
        {email({
          address: 'rostislav.nagimov@gmail.com',
          template: {
            subject: 'Тема письма',
            body: 'Тело письма',
            cc: 'rostislav.nagimov@ya.ru',
            bcc: 'rostislav.nagimov@yahoo.com'
          },
          alias: 'Напиши мне!'
        })}
      </Col>
      <Col>
      {telegram({
          name: 'rostislavnagimov',
          alias: 'Напиши в телегу'
        })}
      </Col>
    </Row>
    <Row>
      <Col>
        ЛинкедИн
      </Col>
      <Col>
        Фейсбук
      </Col>
    </Row>
  </>
)

export default Contacts