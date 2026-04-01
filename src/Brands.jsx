import { Container, NavLink } from '@yosang/react-ui'
import arcteryx from '../public/brand-arcteryx.svg'
import osprey from '../public/brand-osprey.svg'
import mammut from '../public/mammut-brand.svg'
import rab from '../public/rab-brand-logo.svg'

export default function App() {
    const brands = [ arcteryx, osprey, mammut, rab ];

    return (
        <Container layout='grid'>
            {brands.map(b => (
                <img src={b} />
            ))}
        </Container>
    );
}