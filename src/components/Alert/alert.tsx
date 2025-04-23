import classNames from "classnames";
import React,{ FC, useState } from "react";
import Transition from "../Transition/transition";
import Icon from '../Icon/icon'

export type AlertType = 'default' | 'success' | 'danger' | 'warning'

export interface AlertProps{
    //标题
    title?: string;
    //描述
    description?: string;
    //类型  针对四种不同的场景
    type?: AlertType;
    //关闭alert时触发的事件
    onClose?: () => void;
    //是否关闭图标
    closable?: boolean
}

export const Alert: FC<AlertProps> = (props) => {
    const [hide,setHide] = useState(false)
    const {
        title,
        description,
        type="default",
        onClose,
        closable = true
    } = props

    const classes = classNames('alert', {
        [`alert-${type}`]: type
    })

    const titleClass = classNames('alert-title', {
        'bold-title': description
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClose = (e:React.MouseEvent) => {
        if (onClose) {
            onClose();
        }
        setHide(true)
    }

    return(
        <Transition
            in={!hide}
            timeout={300}
            animation="zoom-in-top"
        >
            <div className={classes}>
                <span className={titleClass}>{title}</span>
                {description && <p className="alert-desc">{description}</p>}
                {closable && <span className="alert-close" onClick={handleClose}><Icon icon = "timer" /></span>}
            </div>
        </Transition>
    )
}

export default Alert;