import styled from 'styled-components'

const ToggleContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 42px;

    .checkbox input:checked + .checkbox-inner {
        -webkit-transform: rotate(12deg);
        -ms-transform: rotate(12deg);
        transform: rotate(12deg);
    }

    .checkbox input:checked + .checkbox-inner label {
        left: calc(100% - 32px);
    }

    .checkbox input:checked + .checkbox-inner span {
        -webkit-transform: scaleX(0);
        -ms-transform: scaleX(0);
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
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    transform: rotate(-12deg);
    -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
    -webkit-transition-duration: 0.32s;
    -o-transition-duration: 0.32s;
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
        -webkit-box-shadow: inset 0 10px 16px 0 rgba(0, 0, 0, 0.28);
        box-shadow: inset 0 10px 16px 0 rgba(0, 0, 0, 0.28);
    }

    span {
        z-index: 1;
        width: 100%;
        height: 100%;
        background: -o-repeating-linear-gradient(
            45deg,
            #408696,
            #408696 10px,
            #54d5f5 10px,
            #54d5f5 20px
        );
        background: repeating-linear-gradient(
            45deg,
            #408696,
            #408696 10px,
            #54d5f5 10px,
            #54d5f5 20px
        );
        -webkit-transform-origin: right;
        -ms-transform-origin: right;
        transform-origin: right;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        -o-transition-property: transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        -webkit-transition-timing-function: cubic-bezier(0.2, 0.585, 2, 0.875);
        -o-transition-timing-function: cubic-bezier(0.2, 0.585, 2, 0.875);
        transition-timing-function: cubic-bezier(0.2, 0.585, 2, 0.875);
        -webkit-transition-delay: 0.32s;
        -o-transition-delay: 0.32s;
        transition-delay: 0.32s;
        -webkit-transition-duration: 1.5s;
        -o-transition-duration: 1.5s;
        transition-duration: 1.5s;
    }

    label {
        position: absolute;
        z-index: 2;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-image: -o-radial-gradient(50% 88%, #ffffff 3%, #f5f5f5 97%);
        background-image: radial-gradient(50% 88%, #ffffff 3%, #f5f5f5 97%);
        -webkit-transition-property: left;
        -o-transition-property: left;
        transition-property: left;
        -webkit-transition-timing-function: cubic-bezier(1, 0.885, 2, 0.875);
        -o-transition-timing-function: cubic-bezier(1, 0.885, 2, 0.875);
        transition-timing-function: cubic-bezier(1, 0.885, 2, 0.875);
        -webkit-transition-delay: 0.32s;
        -o-transition-delay: 0.32s;
        transition-delay: 0.32s;
        -webkit-transition-duration: 1.32s;
        -o-transition-duration: 1.32s;
        transition-duration: 1.32s;
    }
`

const CheckboxOn = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    -webkit-transition: opacity 0.32s linear 0s;
    -o-transition: opacity 0.32s linear 0s;
    transition: opacity 0.32s linear 0s;
    right: 100%;
    margin-right: 16px;
    opacity: 1;
`

const CheckboxOff = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    -webkit-transition: opacity 0.32s linear 0s;
    -o-transition: opacity 0.32s linear 0s;
    transition: opacity 0.32s linear 0s;
    left: 100%;
    margin-left: 16px;
    opacity: 0.24;
`

export { ToggleContainer, ToggleCheckbox, ToggleInner, CheckboxOn, CheckboxOff }
