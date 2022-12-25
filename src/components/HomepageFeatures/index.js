import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hardware',
    Svg: require('@site/static/img/electric-circuit.svg').default,
    description: (
      <>
        We produce innovative and user-oriented hardware products and create detailed documentation of these products.
      </>
    ),
  },
  {
    title: 'Software',
    Svg: require('@site/static/img/software.svg').default,
    description: (
      <>
        We share sample code and documentation for rapid prototyping for the products we produce.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open-source.svg').default,
    description: (
      <>
        We support open source code so that the products we produce reach more people. In addition, we use open source programs in the design process.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
