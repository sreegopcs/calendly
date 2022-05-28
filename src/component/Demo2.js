import React from 'react'
import 'antd/dist/antd.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Select, Input, Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';


function Demo2() {
  return (
    <div>
        <br></br><br></br>
      <form> 
          
       <Form.Item label='DATE RANGE' name='DATE RANGE'>
                    <Select placeholder='SELECT DATE RANGE'>
                        <Select.Option VALUE='CALENDER DAYS'>CALENDER DAYS</Select.Option>
                        <Select.Option VALUE='BUISNESS DAYS'>BUISNESS DAYS</Select.Option>
                        <Select.Option VALUE='INDEFINITE'>INDEFINITE</Select.Option>
                    </Select>
                </Form.Item>
                <br></br><br></br>
                <Form.Item label='DURATION' name='DURATION'>
                    <Select placeholder='SELECT DURATION'>
                        <Select.Option VALUE='15'>15</Select.Option>
                        <Select.Option VALUE='30'>30</Select.Option>
                        <Select.Option VALUE='45'>45</Select.Option>
                        <Select.Option VALUE='60'>60</Select.Option>
                    </Select>
                </Form.Item>
                <FormItem>
               


                </FormItem>

                </form>
    </div>
  )
}

export default Demo2

