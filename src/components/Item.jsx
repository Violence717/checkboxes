import { useState } from 'react'

import List from './List'
import Button from './Button'
import Checkbox from './Checkbox'

import styles from '../styles/Item.module.css'

const Item = ({ object, currentStatus }) => {

    const [visibility, setVisibility] = useState(false)
    const [label, setLabel] = useState('Показать')
    const [status, setStatus] = useState(currentStatus)

    const changeALabel = (event) => {
        if (visibility) {
            setVisibility(false)
            setLabel('Показать') 
        } else {
            setVisibility(true)
            setLabel('Скрыть') 
        }
    
    }

    const arrays = [], objects = [], items = []

    Object.entries(object).map(([key, value]) => {
        if (Array.isArray(value)) {
            arrays.push(value)
        } else if (typeof value === 'object' && !(Array.isArray(value)) && value !== null) {
            objects.push(value)
        } else {
            items.push(value)
        }
    })

    return (
        <li className={styles.item}>
            <div className={styles.section}>
                <div className={styles.row}>
                    {items.map((item, index) => <p key={index} className={styles.label}>{item}</p>)}
                </div>
                <div className={styles.interface}>
                    {arrays.length > 0 ? <Button clickAction={changeALabel} label={label} /> : false}
                    <Checkbox currentStatus={status} changeAction={(event) => setStatus(event.target.checked)} />
                </div>
            </div>
            {objects.map((object, index) => <Item key={index} object={object} currentStatus={status} />)}
            {arrays.map((array, index) => visibility ? <List key={index} array={array} currentStatus={status} /> : false)}
        </li>
    )

}

export default Item