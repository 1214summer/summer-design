import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import classNames from 'classnames';

export type ThemeProps = 
    | 'primary' 
    | 'secondary' 
    | 'success' 
    | 'info' 
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'

export interface IconProps extends FontAwesomeIconProps {
    //支持框架主题  根据主题显示不同颜色
    theme?: ThemeProps;
}

const Icon: FC<IconProps> = (props) => {
    const {className, theme, ...restProps} = props;
    const cls = classNames('icon',className, {
        [`icon-${theme}`]: theme
    });
    return <FontAwesomeIcon className={cls} {...restProps} />;
}

export default Icon;