import React, { ReactNode } from 'react'

import { Row, Col } from '@/components/Grid/Index'
import { JSONObject } from '@/types/types'
import replacer from '../Contacts/replacer'

import styles from './index.module.scss'

const Resume: React.FC<itemData> = ({ itemData }) => (
  <div className={styles['resume']}>
    {Object.entries(itemData).map(([name, content], index) => (
      <div className={styles['resume__item']} key={index}>
        <Row>
          <Col span={2}>
            <div className={styles['resume__item__name']}>
              {name}
            </div>
          </Col>
          <Col span={10}>
            <div className={styles['resume__item__content']}>
              {typeof content === 'string' && (
                <p className={styles['resume__item__content__string']}>{content}</p>
              )}
              {Array.isArray(content) && (
                <>
                  {content.map((string, index) => (
                    <>
                      {string && (
                        <p key={index} className={styles['resume__item__content__string']}>
                          {replacer(string)}
                        </p>
                      )}
                    </>
                  ))}
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    ))}
  </div>
)

export interface ResumeItemProps {
  name: string
  content: ReactNode
}

interface itemData {
  itemData: JSONObject
}

export default Resume