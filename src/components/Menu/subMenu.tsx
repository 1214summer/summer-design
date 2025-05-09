import React, {Children, CSSProperties, FC, MouseEventHandler, ReactNode, use, useState} from "react";
import {MenuContext} from "./menu.tsx";
import Icon from "../Icon";
import classNames from "classnames";
import {MenuItemProps} from "./menuItem.tsx";
import Transition from "../Transition";

export interface SubMenuProps {
    index?: string;
    title?: string;
    className?: CSSProperties;
    style?: CSSProperties;
    children?: ReactNode;
}

const SubMenu: FC<SubMenuProps> = ({
    index,
    title,
    className,
    style,
    children
}) => {
    const context = use(MenuContext);
    const openSubMenus = context.defaultOpenSubMenus as Array<string>;
    const isOpened = index && context.mode ===
        'vertical' ? openSubMenus.includes(index) : false;
    const [menuOpen, setOpen] = useState(isOpened);
    const cls = classNames('menu-item submenu-item',className,{
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        setOpen(!menuOpen);
    };

    let timer: any;
    const handleMouse = (e: MouseEvent, toggle: boolean)=>{
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(()=>{
            setOpen(toggle);
        },300);
    };
    const clickEvents =
        context.mode === 'vertical'?{onClick: handleClick} : {};

    const hoverEvents = context.mode === 'horizontal'
        ? {
            onmouseenter:(e:MouseEvent) => {
                handleMouse(e,true);
            },
            onmouseleave:(e:MouseEvent) => {
                handleMouse(e,false)
            }
        }
        : {};

    const renderChildren = () =>{
        const subMenuCls = classNames('submenu',{
            'menu-opened': menuOpen
        });

        const childrenComponent = Children.map(children,(child,i)=>{
            const childElement = child as React.ReactElement<MenuItemProps, React.FunctionComponent<MenuItemProps>>;
            const {displayName} = childElement.type;
            if(displayName === 'MenuItem' || displayName === 'SubMenu'){
                return React.cloneElement(childElement,{
                    index: `${index}-${i}`  //父-子
                })
            } else {
                console.error(
                    'Warning: SubMenu has a child which is not a MenuItem component'
                );
            }
        });
        return (
            <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
                <ul className={subMenuCls}>{childrenComponent}</ul>
            </Transition>
        );
    };

    return (
        <li key={index} className={cls} style={style} {...hoverEvents}>
            <div className={cls} style={style} {...clickEvents}>
                {title}
                <Icon icon={"angle-down"} className="arrow-icon" />
            </div>
            {renderChildren()}
        </li>
    )
}
SubMenu.displayName = 'SubMenu';
export default  SubMenu;
