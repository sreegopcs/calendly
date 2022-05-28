import React from 'react';
import 'antd/dist/antd.css';

import { Checkbox } from 'antd';

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;
export default App;