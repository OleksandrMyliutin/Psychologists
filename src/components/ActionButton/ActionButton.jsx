import clsx from 'clsx';
import s from './ActionButton.module.css'
const ActionButton = ({
    size = 'md',
    variant = 'fill',
    color = 'blue',
    onClick,
    style,
    children,
}) => {
    return (
        <>
            <button style={style} className={clsx(s.button, s[size], s[variant], s[color])} onClick={onClick}>{children}</button>
        </>
    )
}

export default ActionButton
