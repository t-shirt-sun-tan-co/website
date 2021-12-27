import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components';

const Navigation = () => (
    <Container>
        <Logo>
            <FontAwesomeIcon icon={faCalendar} />カレンダー
        </Logo>

        <PageControl>
            <FontAwesomeIcon icon={faAngleLeft} />
            <FontAwesomeIcon icon={faAngleRight} />
        </PageControl>
    </Container>
)

const Container = styled.div`
    display: flex;
`

const Logo = styled.div``

const PageControl = styled.div``

export default Navigation