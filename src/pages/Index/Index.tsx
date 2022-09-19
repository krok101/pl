import { Button } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'

const Index = () => {
  const navigate = useNavigate();
  return (
    <Content className={style.container}>
      <Button type='primary' onClick={() => navigate('/player')}>go to player</Button>
    </Content>
  )
}

export default Index
