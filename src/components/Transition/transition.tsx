//利用 css-transition实现自定义动画
import React,{ FC,ReactNode  } from 'react';
import {CSSTransition} from 'react-transition-group';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName,
    wrapper?: boolean; //避免多层动画冲突
    children?: ReactNode;
}

const Transition: FC<TransitionProps> = (props) => {
    const {
        children,
        classNames,
        animation,
        wrapper, //添加一个外包装避免覆盖动画
        ...restProps
    } = props

    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    )
}
export default Transition