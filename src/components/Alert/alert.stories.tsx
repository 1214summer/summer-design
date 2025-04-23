import {Meta, StoryObj} from '@storybook/react'
import Alert from './alert'
import "./styles/_style.scss"


const AlertMeta: Meta<typeof Alert> = {
    tags: ['autodocs'],
    component: Alert
}

export default AlertMeta;
type Story = StoryObj<typeof AlertMeta>

//模版函数
const Template:Story = {
    render:(args)=><Alert {...args} />
}

export const Default:Story = {
    ...Template,
    args:{
        title: 'this is alert!',
        type: 'default'
    }
}

export const Description:Story = {
    ...Template,
    args: {
        title: '提示',
        description: 'this is a lon description'
    }
}

export const Success:Story = {
    ...Template,
    args: {
        title: 'this is success',
        type: 'success'
    }
}
export const Danger:Story = {
    ...Template,
    args: {
        title: 'this is danger',
        type: 'danger'
    }
}
export const Warning:Story = {
    ...Template,
    args: {
        title: 'this is warning',
        type: 'warning'
    }
}




