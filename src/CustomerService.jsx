import { Button, Container, Input } from '@yosang/react-ui'

export default function App () {
    return (
    <Container style={{ width: "20%", margin: "auto"}} centered={true}>
      <p>Name</p>
      <Input type='text'></Input>
      
      <p>Email</p>
      <Input type='email'></Input>
      
      <p>Enquiry</p>
      <Input type='text'></Input>
      
      <Button>Send</Button>
      </Container>
    )
}