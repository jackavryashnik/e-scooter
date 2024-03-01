import scooterImage from '../../img/footerImage.png';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.footerContent}>
          <img
            className={css.scooter}
            src={scooterImage}
            alt="scooter"
            width={608}
          />
          <div className={css.footerNav}>
            <div className={css.listWrapper}>
              <h2 className={css.listTitle}>About</h2>
              <ul className={css.list}>
                <li>Company</li>
                <li>Trams</li>
                <li>Profile</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className={css.listWrapper}>
              <h2 className={css.listTitle}>Resources</h2>
              <ul className={css.list}>
                <li>Contacts</li>
                <li>Application</li>
                <li>FQA Features</li>
              </ul>
            </div>
            <div className={css.listWrapper}>
              <h2 className={css.listTitle}>Legals</h2>
              <ul className={css.list}>
                <li>Copyright Privacy</li>
                <li>Policy Disclaimer</li>
                <li>Terms</li>
              </ul>
              <div className={css.socialLinks}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16.0002" r="16" />
                    <path d="M19.3808 12.0668C19.4632 12.0668 19.5291 12.0998 19.5786 12.1657C19.6445 12.2152 19.6775 12.2811 19.6775 12.3635V14.317C19.6775 14.3994 19.6445 14.4736 19.5786 14.5395C19.5291 14.589 19.4632 14.6137 19.3808 14.6137H16.9328C16.8503 14.6137 16.8091 14.6549 16.8091 14.7374V24.4305C16.8091 24.5129 16.7762 24.5871 16.7102 24.653C16.6608 24.7025 16.5948 24.7272 16.5124 24.7272H14.2375C14.1551 24.7272 14.0809 24.7025 14.0149 24.653C13.9655 24.5871 13.9408 24.5129 13.9408 24.4305V14.7374C13.9408 14.6549 13.8995 14.6137 13.8171 14.6137H12.284C12.2016 14.6137 12.1274 14.589 12.0615 14.5395C12.012 14.4736 11.9873 14.3994 11.9873 14.317V12.3635C11.9873 12.2811 12.012 12.2152 12.0615 12.1657C12.1274 12.0998 12.2016 12.0668 12.284 12.0668H13.8171C13.8995 12.0668 13.9408 12.0256 13.9408 11.9432V11.4981C13.9408 10.4265 14.0809 9.6023 14.3611 9.02533C14.6414 8.43187 15.1029 8.01151 15.7459 7.76423C16.3888 7.51696 17.2954 7.40156 18.4659 7.41805H19.3313C19.4137 7.41805 19.4797 7.45102 19.5291 7.51696C19.5951 7.56641 19.628 7.63235 19.628 7.71478V9.44569C19.628 9.52812 19.5951 9.6023 19.5291 9.66824C19.4797 9.7177 19.4137 9.74242 19.3313 9.74242H18.6884C17.9795 9.74242 17.485 9.88254 17.2048 10.1628C16.941 10.443 16.8091 10.9541 16.8091 11.6959V11.9432C16.8091 12.0256 16.8503 12.0668 16.9328 12.0668H19.3808Z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" />
                    <path d="M24.2693 11.158C23.6876 11.4001 23.0227 11.5614 22.3579 11.6421C23.0227 11.2387 23.6045 10.5932 23.8538 9.86706C23.1889 10.2705 22.5241 10.5125 21.693 10.6739C21.1113 10.0284 20.1971 9.625 19.2829 9.625C17.4546 9.625 15.9587 11.0773 15.9587 12.8524C15.9587 13.0944 15.9587 13.3365 16.0418 13.5785C13.2993 13.4172 10.8061 12.1262 9.14395 10.1898C8.89463 10.6739 8.72842 11.2387 8.72842 11.8035C8.72842 12.9331 9.31017 13.9013 10.2243 14.4661C9.64259 14.4661 9.14395 14.3047 8.72842 14.0627C8.72842 15.5957 9.89191 16.9673 11.3878 17.2094C11.1385 17.29 10.8061 17.2901 10.4737 17.2901C10.2243 17.2901 10.0581 17.29 9.80881 17.2094C10.2243 18.5003 11.4709 19.4685 12.9668 19.4685C11.8034 20.3561 10.3906 20.8402 8.81153 20.8402C8.56221 20.8402 8.31289 20.8402 7.98047 20.7595C9.47638 21.647 11.2216 22.2118 13.1331 22.2118C19.2829 22.2118 22.6072 17.2901 22.6072 13.0138V12.6103C23.272 12.3683 23.8538 11.8035 24.2693 11.158Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" />
                    <path d="M21.7882 8.14478H10.1354C8.81977 8.14478 7.81738 9.14717 7.81738 10.4628V22.1156C7.81738 23.4312 8.81977 24.4336 10.1354 24.4336H21.7882C23.1038 24.4336 24.1062 23.4312 24.1062 22.1156V10.4628C24.1062 9.14717 23.1038 8.14478 21.7882 8.14478ZM15.9618 21.1758C18.6557 21.1758 20.8485 19.0458 20.8485 16.4771C20.8485 16.3056 20.8389 16.1245 20.8197 15.945C20.7778 15.5532 21.0674 15.1615 21.4615 15.1615C21.7803 15.1615 22.0388 15.42 22.0388 15.7388V21.8023C22.0388 22.1156 21.7882 22.4288 21.4123 22.4288H10.5113C10.1981 22.4288 9.88481 22.1782 9.88481 21.8023V15.7184C9.88481 15.3762 10.1622 15.0989 10.5044 15.0989C10.916 15.0989 11.2115 15.4945 11.1661 15.9036C11.1472 16.0739 11.1378 16.2442 11.1378 16.4145C11.0752 19.0458 13.2679 21.1758 15.9618 21.1758ZM15.9618 19.2964C14.2076 19.2964 12.8293 17.9181 12.8293 16.2265C12.8293 14.535 14.2076 13.1567 15.9618 13.1567C17.716 13.1567 19.0943 14.535 19.0943 16.2265C19.0943 17.9807 17.716 19.2964 15.9618 19.2964ZM21.9761 12.5929C21.9761 12.9688 21.6629 13.282 21.287 13.282H19.5328C19.1569 13.282 18.8437 12.9688 18.8437 12.5929V10.9013C18.8437 10.5255 19.1569 10.2122 19.5328 10.2122H21.287C21.6629 10.2122 21.9761 10.5255 21.9761 10.9013V12.5929Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className={css.copyright}>© Copyright 2021. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
