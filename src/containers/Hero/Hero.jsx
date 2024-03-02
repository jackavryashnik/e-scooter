import css from './Hero.module.css';

import BuyNow from '../../components/BuyNow/BuyNow';
import HeroTitle from '../../components/HeroTitle/HeroTitle';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import PropertyList from '../../components/PropertyList/PropertyList';
import Slider from '../../components/Slider/Slider';

export default function Hero() {
  return (
    <div className={css.heroContainer}>
      <div className={css.container}>
        <div>
          <HeroTitle />
          <div className={css.buttonsContainer}>
            <BuyNow />
            <HowItWorks />
          </div>
        </div>
        <Slider />
      </div>
      <PropertyList />
    </div>
  );
}
