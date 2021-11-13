import styled from 'styled-components'

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;

    .checkbox input:checked + .checkbox-inner {
        transform: rotate(12deg);
    }

    .checkbox input:checked + .checkbox-inner label {
        left: calc(100% - 32px);
    }

    .checkbox input:checked + .checkbox-inner span {
        transform: scaleX(0);
    }

    .checkbox input:checked ~ .checkbox__on {
        opacity: 0.24;
    }

    .checkbox input:checked ~ .checkbox__off {
        opacity: 1;
    }
`

const ToggleCheckbox = styled.div`
    position: relative;
    width: 80px;
    height: 36px;
    background-color: transparent;

    input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`

const ToggleInner = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border: 2px solid #ffffff;
    border-radius: 18px;
    overflow: hidden;
    transform: rotate(-12deg);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
    transition-property: transform;
    transition-timing-function: linear;
    transition-delay: 0s;
    transition-duration: 0.32s;

    &:before,
    span,
    label {
        position: absolute;
        top: 0;
        left: 0;
    }

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        z-index: 2;
        box-shadow: inset 0 10px 16px 0 rgba(0, 0, 0, 0.28);
    }

    span {
        z-index: 1;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            45deg,
            #408696,
            #408696 10px,
            #54d5f5 10px,
            #54d5f5 20px
        );
        transform-origin: right;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.2, 0.585, 2, 0.875);
        transition-delay: 0.32s;
        transition-duration: 1.5s;
    }

    label {
        position: absolute;
        z-index: 2;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-image: radial-gradient(50% 88%, #ffffff 3%, #f5f5f5 97%);
        transition-property: left;
        transition-timing-function: cubic-bezier(1, 0.885, 2, 0.875);
        transition-delay: 0.32s;
        transition-duration: 1.32s;
    }
`

const CheckboxOn = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: opacity 0.32s linear 0s;
    right: 100%;
    margin-right: 16px;
    opacity: 1;
`

const CheckboxOff = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: opacity 0.32s linear 0s;
    left: 100%;
    margin-left: 16px;
    opacity: 0.24;
`

export { ToggleContainer, ToggleCheckbox, ToggleInner, CheckboxOn, CheckboxOff }
