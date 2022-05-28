import { Steps } from 'antd';
const { Step } = Steps;


function cal(gh){

    return(
<Steps current={gh.id}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    );
}
export default cal;