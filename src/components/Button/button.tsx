import classNames from 'classnames'
export type ButtonSize = 'lg' | 'sm';
import React, {FC} from 'react'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
    //className
    className?: string;
    //子元素
    children?: React.ReactNode;
    //设置Button的禁用
    disabled?: boolean;
    //设置button的size
    size?: ButtonSize;
    //设置Button的类型
    btnType?: ButtonType;
    //button的链接
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial< NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = ({
    className,
    disabled = false,
    size,
    btnType = 'default',
    children,
    href,
    ...restProps
}) => {

    const classes = classNames('btn',className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled':(btnType === 'link') && disabled,
    })

    if(btnType === 'link' && href){
        return(
            <a
            {...restProps}
            className={classes}
            href={href}>
            {children}
            </a>
        )
    }else{
        return(
            // eslint-disable-next-line react-dom/no-missing-button-type
            <button
                className={classes}
                disabled = {disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}

export default Button;
