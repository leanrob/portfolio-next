import React from 'react'

import {
    LAFContainer,
    LAFScrollContainer,
    LogosRow,
    LogoSet,
    Logo,
    LogosContent,
    Header,
    Subheader,
    ColorsToggle,
} from './HomeStyles'
import Toggle from '@components/common/Toggle'

type FrameworksProps = {
    data: {
        header: string
        subheader: string
        spinnerContent: {
            backend: Array<{ image: string }>
            frontend: Array<{ image: string }>
            devops: Array<{ image: string }>
        }
    }
}

const LanguagesAndFrameworks = ({ data }: FrameworksProps) => {
    const [isGreyscale, setColorToggle] = React.useState(true)
    const { header, subheader, spinnerContent } = data

    return (
        <LAFContainer>
            <Header>{header}</Header>
            <Subheader>{subheader}</Subheader>
            <LAFScrollContainer>
                <LogosRow>
                    <LogosContent speed={0}>
                        <LogoSet>
                            {[
                                ...spinnerContent?.frontend,
                                ...spinnerContent?.frontend,
                                ...spinnerContent?.frontend,
                            ].map((item, index) => (
                                <Logo
                                    isGreyscale={isGreyscale}
                                    key={index}
                                    img={`./images/frameworks/${item.image}-logo.svg`}
                                />
                            ))}
                        </LogoSet>
                    </LogosContent>
                </LogosRow>
                <LogosRow>
                    <LogosContent speed={2}>
                        <LogoSet>
                            {[
                                ...spinnerContent?.backend,
                                ...spinnerContent?.backend,
                                ...spinnerContent?.backend,
                            ].map((item, index) => (
                                <Logo
                                    isGreyscale={isGreyscale}
                                    key={index}
                                    img={`./images/frameworks/${item.image}-logo.svg`}
                                />
                            ))}
                        </LogoSet>
                    </LogosContent>
                </LogosRow>
                <LogosRow>
                    <LogosContent speed={1}>
                        <LogoSet>
                            {[
                                ...spinnerContent?.devops,
                                ...spinnerContent?.devops,
                                ...spinnerContent?.devops,
                            ].map((item, index) => (
                                <Logo
                                    isGreyscale={isGreyscale}
                                    key={index}
                                    img={`./images/frameworks/${item.image}-logo.svg`}
                                />
                            ))}
                        </LogoSet>
                    </LogosContent>
                </LogosRow>
            </LAFScrollContainer>
            <ColorsToggle isGreyscale={isGreyscale}>
                <h3>Toggle Colors</h3>
                <Toggle value={isGreyscale} onChange={setColorToggle} />
            </ColorsToggle>
        </LAFContainer>
    )
}

export default LanguagesAndFrameworks
