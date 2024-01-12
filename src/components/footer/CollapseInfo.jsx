import React from 'react'
import './collapse-info.css'

const CollapseInfo = ({ collapseToggle, items }) => {
    return (
        <div className="list-info">
            <div className="list-footerinto">
                <section>
                    <div className="list-info-container">
                        <div style={{ pointerEvents: 'auto' }} >
                            <span>{collapseToggle}</span>
                        </div>
                        <div className='list-info-item' style={{ width: '100%', visibility: 'visible', animationDuration: '0.5s' }}>
                            {
                                items.map((item, index) =>
                                (
                                    <li key={index}>
                                        <a aria-label={item} href="#" className="list-item">{item}</a>
                                    </li>
                                )
                                )

                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CollapseInfo
