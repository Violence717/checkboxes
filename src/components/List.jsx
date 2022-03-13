import { useState, useEffect } from 'react'

import Item from './Item'

import styles from '../styles/List.module.css'

const List = ({ array, currentStatus }) => {
    return (
        <ul className={styles.list}>
            {
                array.map((object, index) => {
                    return <Item key={index} object={object} currentStatus={currentStatus} />
                })
            }
        </ul>
    )
}

export default List

