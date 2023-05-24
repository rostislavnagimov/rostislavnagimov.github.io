import React from 'react'

import { Row, Col } from '@/components/Grid/Index'
import replacer from '../Contacts/replacer'
import { ContentData } from './types'

import styles from './index.module.scss'

const Content: React.FC<ContentData> = ({ itemData }) => (
  <div className={styles['content']}>
    {Object.keys(itemData).map((innerIndex, index) => {
      const { label, title, content } = itemData[innerIndex]

      return (
        <div className={styles['content__item']} key={index}>
          <Row>
            {label && (
              <Col span={2}>
                <div className={styles['content__item__label']}>
                  {label}
                </div>
              </Col>
            )}
            <Col span={label ? 10 : 12}>
              <div className={styles['content__item__content']}>
                {title && (
                  <div className={styles['content__item__title']}>
                    {title}
                  </div>
                )}
                {content.map((string, index) => (
                  <>
                    {string && (
                      <p key={index} className={styles['content__item__content__string']}>
                        {replacer(string)}
                      </p>
                    )}
                  </>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      )
    })}
  </div>
)

export default Content