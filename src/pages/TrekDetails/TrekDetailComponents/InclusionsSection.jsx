import React from 'react';
import { inclusionExclusionData } from '../TrekDetails';
import './InclusionsSection.css'
const InclusionExclusionSection = () => {
    const { inclusions, exclusions } = inclusionExclusionData;

    return (
        <div className="section inclusion-exclusion-section" id="inclusions_exclusions">
            <div className="section-title">
                <div className="title h2">Inclusions & Exclusions</div>
            </div>

            <div className="inclusion-exclusion-content">
                <div className="inclusion-box box">
                    <h3 className="box-title">What is included in the tour</h3>
                    <ul className="box-list">
                        {inclusions.map((item, idx) => (
                            <li key={idx}>
                                <span className="checkmark">✔</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="exclusion-box box">
                    <h3 className="box-title">What is NOT included in the tour</h3>
                    <ul className="box-list">
                        {exclusions.map((item, idx) => (
                            <li key={idx}>
                                <span className="crossmark">✘</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InclusionExclusionSection;
