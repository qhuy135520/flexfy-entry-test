import React from 'react'
import './home-advertising.css'
import { Col, Row } from 'reactstrap'

const HomeAdvertising = () => {
    return (
        <Row className="home-advertising">
            <Col md='6' style={{ padding: '0' }} className="home-advertising-image home-advertising-image-0">
                <img height={'700px'} src="https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/4/19/photo1681895989289-1681895989452367335397.png" style={{ objectFit: 'cover' }} />
                <button className="advertising-button-0">
                    <a href="#">
                        New arrival
                    </a>
                </button>
            </Col>
            <Col md='6' style={{ padding: '0' }} className="home-advertising-image home-advertising-image-1">
                <img height={'700px'} src="https://thanhnien.mediacdn.vn/Uploaded/tuyenth/2022_02_21/jb1-2584.jpeg" style={{ objectFit: 'cover' }} />
                <button className="advertising-button-1">
                    <a href="#">
                        Beanie
                    </a>
                </button>
            </Col>
        </Row>
    )
}

export default HomeAdvertising
