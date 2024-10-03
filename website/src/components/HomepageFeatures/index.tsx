import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        ColorHacks provides a simple and intuitive API for color manipulation
        and conversion. With ColorHacks, you can easily transform colors between
        different formats, adjust brightness and saturation, and create
        harmonious color schemes for your projects.
      </>
    ),
  },
  {
    title: 'Fastest in its class',
    description: (
      <>
        ColorHacks is designed to be the fastest library for color manipulation
        and conversion. It uses a combination of efficient algorithms and
        optimized data structures to ensure that your color operations are
        performed quickly and efficiently.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
