import Icon from './icon';
import Button from '../Button/index';
import React from 'react';
import {Meta} from '@storybook/react'

const iconMeta: Meta<typeof Icon> ={
    title: 'Icon',
	id: 'Icon',
	component: Icon
}

export default iconMeta;

export const DefaultIcons = ()=>{
    <>
        <Icon icon="check" size = "3x"/>
        <Icon icon="times" size = "3x"/>
        <Icon icon="anchor" size = "3x"/>
        <Icon icon="trash" size = "3x"/>
        <Button size='lg' btnType="primary">
            <Icon icon="check" />
            check
        </Button>
    </>
}
DefaultIcons.storyName = 'Default'

export const ThemeIcons = ()=>{
    <>
        <Icon icon="check" size = "3x" theme='success'/>
        <Icon icon="times" size = "3x" theme='danger'/>
        <Icon icon="anchor" size = "3x" theme='primary'/>
        <Icon icon="exclamation-circle" size = "3x" theme='warning'/>
    </>
}
ThemeIcons.storyName = 'Theme'

export const CustomIcons = () => (
    <>
      <Icon icon="spinner" size="3x" theme="primary" spin/>
      <Icon icon="spinner" size="3x" theme="success" pulse/>
    </>
  )
  CustomIcons.storyName = 'More'


