import React from 'react'
import sector from './sector.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const Natural_resource = () => {
    return (
        <div className = "container">
            <div className ="header-view">
                <h1>Natural resource and Food Security</h1>
            </div>
            <div className="row">
                <div className ="col-3">
                    <h3>Our natural resource</h3>
                    <ul>
                        <li>Biotic</li>
                        <li>Abiotic</li>
                        <li>Potential resources</li>
                        <li>Actual resources</li>
                    </ul>
                </div>

                <div className="col-9">
                    <h1>Biotic</h1>
                    <p>Abiotic factors refer to non-living physical and chemical elements in the ecosystem.
                    Abiotic resources are usually obtained from the lithosphere, atmosphere, and hydrosphere
                    </p>
                    <p>Examples of abiotic factors are water, air, soil, sunlight, and minerals. Biotic factors are
                    living or once-living organisms in the ecosystem.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Natural_resource
