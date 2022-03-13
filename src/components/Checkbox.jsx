const Checkbox = ({ changeAction, currentStatus }) => {
    return (
        <input checked={currentStatus} type="checkbox" onChange={changeAction} />
    )
}

export default Checkbox