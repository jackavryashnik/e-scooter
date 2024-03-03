import css from './Hero.module.css';

import BuyNow from '../../components/BuyNow/BuyNow';
import HeroTitle from '../../components/HeroTitle/HeroTitle';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import PropertyList from '../../components/PropertyList/PropertyList';
import Slider from '../../components/Slider/Slider';
import PageContainer from '../../components/PageContainer/PageContainer';

export default function Hero() {
  return (
    <section>
      <PageContainer>
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
      </PageContainer>
    </section>
  );
}
