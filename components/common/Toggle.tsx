import React from 'react'
import {
    ToggleContainer,
    ToggleCheckbox,
    ToggleInner,
    CheckboxOn,
    CheckboxOff,
} from './Toggle.styles'

const AboutThisSite = ({
    value,
    onChange,
}: {
    value: boolean
    onChange: (value: boolean) => void
}) => {
    return (
        <ToggleContainer>
            <ToggleCheckbox className="checkbox">
                <input
                    type="checkbox"
                    name="example"
                    id="example"
                    aria-label="toggle"
                    value={String(value)}
                    defaultChecked={value}
                    onClick={(e) => {
                        console.log(!value)
                        onChange(!value)
                    }}
                />
                <ToggleInner className="checkbox-inner">
                    <label htmlFor="example"></label>
                    <span></span>
                </ToggleInner>
                <CheckboxOn className="checkbox__on">COLORS</CheckboxOn>
                <CheckboxOff className="checkbox__off">GREY</CheckboxOff>
            </ToggleCheckbox>
        </ToggleContainer>
    )
}

export default AboutThisSite
