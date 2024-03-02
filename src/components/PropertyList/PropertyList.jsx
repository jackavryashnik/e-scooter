import css from './PropertyList.module.css';
import PropertyItem from '../../components/PropertyItem/PropertyItem';

export default function PropertyList() {
  return (
    <ul className={css.list}>
      <PropertyItem description="105" span=" lbs" property="Net Weight" />
      <PropertyItem description="26" span=" mph" property="Top Speed" />
      <PropertyItem description="38" span=" miles" property="Max Range" />
      <PropertyItem description="89" span=" nm" property="Max Torques" />
      <PropertyItem description="22%" span=" slope" property="Hill Climbing" />
      <PropertyItem description="2x" property="Hydralic Disc Brakes" />
    </ul>
  );
}
