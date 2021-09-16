import React from 'react';
import Fade from 'react-reveal/Fade';

import Header from '../components/layouts/Header'
import Clients from '../components/layouts/Clients';
import Feature from '../components/layouts/Feature';
import Footer from '../components/layouts/Footer';

import Section from '../components/widgets/Section'
import Cards from '../components/widgets/Cards'
import Lists from '../components/widgets/Lists'
import Button from '../components/widgets/Button'

import HeroImage from '../assets/images/hero-image.png'
import FeatureTile01 from '../assets/images/feature-tile-icon-01.svg'
import FeatureTile02 from '../assets/images/feature-tile-icon-02.svg'
import FeatureTile03 from '../assets/images/feature-tile-icon-03.svg'

export default function Homepage() {
    const feature = [
        {
            imgSrc: FeatureTile01,
            imgAlt: 'Feature tile icon 01',
            title: 'Join the system',
            description: 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.'
        },
        {
            imgSrc: FeatureTile02,
            imgAlt: 'Feature tile icon 02',
            title: 'Join the system',
            description: 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.'
        },
        {
            imgSrc: FeatureTile03,
            imgAlt: 'Feature tile icon 03',
            title: 'Join the system',
            description: 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.'
        },
    ];

    const listPricing = [
        {
            price: 27,
            currencySymbol: '$',
            description: 'Lorem ipsum dolor sit amet',
            features: [
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: false, content: 'Excepteur sint occaecat velit' },
                { isChecked: false, content: 'Excepteur sint occaecat velit' },
            ],
        },
        {
            price: 47,
            currencySymbol: '$',
            description: 'Lorem ipsum dolor sit amet',
            features: [
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: false, content: 'Excepteur sint occaecat velit' },
            ],
        },
        {
            price: 67,
            currencySymbol: '$',
            description: 'Lorem ipsum dolor sit amet',
            features: [
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
                { isChecked: true, content: 'Excepteur sint occaecat velit' },
            ],
        },
    ]

    return (
        <div className='body-wrap'>
            <Header></Header>
            <main className='site-content'>
                <Section className='hero illustration-section-01' isCenteredContent>
                    <div className="container-sm">
                        <div className="hero-inner section-inner">
                            <div className="hero-content">
                                <Fade bottom delay={500}>
                                    <h1 className="mt-0 mb-16">Landing template for startups</h1>
                                </Fade>
                                <div className="container-xs">
                                    <Fade bottom delay={800}>
                                        <p className="mt-0 mb-32">
                                            Our landing page template works on all
                                            devices, so you only have to set it up
                                            once, and get beautiful results forever.
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                            <div
                                className="hero-figure illustration-element-01">
                                <Fade bottom delay={750}>
                                    <img
                                        className="has-shadow"
                                        src={HeroImage}
                                        alt="Hero"
                                        width="896"
                                        height="504"
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Section>
                <Clients />
                <Section className='features-tiles'>
                    <div className="container">
                        <div className="features-tiles-inner section-inner">
                            <div className="tiles-wrap">
                                {feature.map((feature, index) =>
                                    <Feature key={index} delayInMS={index * 500} data={feature} />
                                )}
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className='pricing'>
                    <div className="container">
                        <div className="pricing-inner section-inner has-top-divider">
                            <div className="section-header center-content">
                                <div className="container-xs">
                                    <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                                    <p className="m-0">
                                        Lorem ipsum is common placeholder text
                                        used to demonstrate the graphic elements
                                        of a document or visual presentation.
                                    </p>
                                </div>
                            </div>
                            <div className="tiles-wrap">
                                {listPricing.map((list, index) => {
                                    return (
                                        <Cards key={index} hasShadow>
                                            <div className="pricing-item-content">
                                                <div className="pricing-item-header pb-24 mb-24">
                                                    <div className="pricing-item-price mb-4">
                                                        <span className="pricing-item-price-currency h2">{list.currencySymbol}</span>
                                                        <span className="pricing-item-price-amount h1 pricing-switchable"
                                                            data-pricing-monthly="34"
                                                            data-pricing-yearly="27">
                                                            {list.price}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-color-low">
                                                        {list.description}
                                                    </div>
                                                </div>
                                                <div className="pricing-item-features mb-40">
                                                    <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                                                        What’s included
                                                    </div>
                                                    <Lists data={list.features} isSmall className='pricing-item-features-list mb-32' />
                                                </div>
                                            </div>
                                            <div className="pricing-item-cta mb-8">
                                                <Button isPrimary isBlock>Start free trial</Button>
                                            </div>
                                        </Cards>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer/>
        </div>
    );
}
