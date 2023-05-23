import React, { ReactNode } from 'react'

import { Row, Col } from '@/components/Grid/Index'
import replacer from '../Contacts/replacer'
import { ContentData } from './types'

import styles from './index.module.scss'

const Content: React.FC<ContentData> = ({ itemData }) => (
  <div className={styles['Content']}>
    {Object.keys(itemData).map((innerIndex, index) => {
      const {label, title, content} = itemData[innerIndex]
      console.log(label, title, content)

      return (
      <div className={styles['Content__item']} key={index}>
        <Row>
          {label && (
            <Col span={2}>
              <div className={styles['Content__item__label']}>
                {label}
              </div>
            </Col>
          )}
          <Col span={label ? 10 : 12}>
            <div className={styles['Content__item__content']}>
              {title && (
                <div className={styles['Content__item__title']}>
                  {title}
                </div>
              )}
              {content.map((string, index) => (
                <>
                  {string && (
                    <p key={index} className={styles['Content__item__content__string']}>
                      {replacer(string)}
                    </p>
                  )}
                </>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    )})}
  </div>
)

export default Content