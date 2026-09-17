'use client';

import Lottie from 'lottie-react';
import rocketAnimation from '@/lib/lottie/rocket.json';
import styles from './HeroRocketLottie.module.css';

export default function HeroRocketLottie() {
  return (
    <span className={styles.rocketWrap} aria-hidden="true">
      <Lottie
        animationData={rocketAnimation}
        loop
        className={styles.rocket}
        style={{
          display: 'inline-block',
          width: '1.35em',
          height: '1.35em',
          verticalAlign: '-0.18em',
        }}
      />
    </span>
  );
}
