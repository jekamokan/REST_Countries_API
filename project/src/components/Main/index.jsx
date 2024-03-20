import Container from '../Container'
import './style.css'

const Main = ({ children }) => {
    return (
        <main className='main'>
            <Container>
                {children}
            </Container>
        </main>
    )
}

export default Main