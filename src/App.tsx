import { Button, Flex } from 'antd'

const App = () => {
  return (
    <Flex gap='small' wrap>
      <Button type='primary' className='text-3xl'>Primary Button</Button>
      <Button>Default Button</Button>
      <Button type='dashed'>Dashed Button</Button>
      <Button type='text'>Text Button</Button>
      <Button type='link'>Link Button</Button>
    </Flex>
  )
}
export default App
