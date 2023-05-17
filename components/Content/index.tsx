import React, { ReactNode } from 'react'

import { Row, Col } from '@/components/Grid/Index'
import { JSONObject } from '@/types/types'
import replacer from '../Contacts/replacer'

import styles from './index.module.scss'

const Content: React.FC<itemData> = ({ itemData }) => (
  <div className={styles['Content']}>
    {Object.entries(itemData).map(([name, content], index) => (
      <div className={styles['Content__item']} key={index}>
        <Row>
          <Col span={2}>
            <div className={styles['Content__item__name']}>
              {name}
            </div>
          </Col>
          <Col span={10}>
            <div className={styles['Content__item__content']}>
              {typeof content === 'string' && (
                <p className={styles['Content__item__content__string']}>{content}</p>
              )}
              {Array.isArray(content) && (
                <>
                  {content.map((string, index) => (
                    <>
                      {string && (
                        <p key={index} className={styles['Content__item__content__string']}>
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

export interface ContentItemProps {
  name: string
  content: ReactNode
}

interface itemData {
  itemData: JSONObject
}

export default Content