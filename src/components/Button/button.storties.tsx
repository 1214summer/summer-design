import React from 'react'
import {Meta, StoryObj} from '@storybook/react'
import Button from './index'
import './styles/_style.sass';

const meta: Meta<typeof Button>={
    tags:['autodocs'],
    component: Button
}

export default meta;
type Story = StoryObj<typeof meta>;

//模板函数
const Template:Story = {
    render:(args)=><Button {...args} />
}

export const Default:Story = {
    ...Template,
    args: {
        btnType: 'default',
        children: 'Button'
    }
}
// export const Primary: Story = {
// 	...Template,
// 	args: {
// 		btnType: 'primary',
// 		children: 'Primary Button'
// 	}
// };
// export const Danger: Story = {
// 	...Template,
// 	args: {
// 		btnType: 'danger',
// 		children: 'Danger Button'
// 	}
// };
// export const Link: Story = {
// 	...Template,
// 	args: {
// 		btnType: 'link',
// 		children: 'Link Button',
//         href: 'https://google.com'
// 	}
// };
// export const Large: Story = {
// 	...Template,
// 	args: {
// 		size: 'lg',
// 		children: 'Large Button'
// 	}
// };
// export const Small: Story = {
// 	...Template,
// 	args: {
// 		size: 'sm',
// 		children: 'Small Button'
// 	}
// };

export const ADefault: Story = {
  ...Template,
  args: {
    children: 'Default'
  },
  name: 'Default'
}

export const BButtonWithSize = () => (
    <>
      <Button size="lg">large button</Button>
      <Button size="sm">small button</Button>
    </>
  )
  BButtonWithSize.name = 'Size'
  
  export const CButtonWithSize = () => (
    <>
      <Button btnType="primary">primary button</Button>
      <Button btnType="danger">danger button</Button>
      <Button btnType="link" href="http://google.com">link button</Button>
    </>
  )
  CButtonWithSize.name = 'Type'

