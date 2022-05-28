import React from 'react';
import 'antd/dist/antd.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Select, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const { TextArea } = Input;

 
export default function Demo() {
    return(
       
        <div className='event'>
            <header className='app'>
            <Form>
                <Form.Item label='EVENT NAME     ' name='event name'>
                <input placeholder='event'></input></Form.Item>
                
                <Form.Item label='Location' name='Location'>
                    <Select placeholder='SELECT LOCATION'>
                        <Select.Option VALUE='IN-PERSON'>IN-PERSON</Select.Option>
                        <Select.Option VALUE='PHONECALL'>PHONECALL</Select.Option>
                        <Select.Option VALUE='GOOGLE MEET'>GOOGLE MEET</Select.Option>
                    </Select>
                </Form.Item>
                
                    <br />
                         <br />
                         <FormItem label='DESCRIPTION' name='DESCRIPTION'>
                     <TextArea  rows={4} placeholder="maxLength is 6" maxLength={6} />
                            </FormItem>
                            <Form.Item label='EVENT link * ' name='event link'>
                <input type='email' placeholder='Event link'></input></Form.Item>
                <br></br>
                <FormItem>
                <Button type='primary'

                   htmlType='submit'>next</Button>
                </FormItem>
            </Form>
            </header>
        </div>
    );
}
