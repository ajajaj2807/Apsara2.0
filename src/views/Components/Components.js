import React, { useState, Fragment } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/OldFooter.js';
import MobileFooter from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
import SectionBasics from './Sections/SectionBasics.js';
import SectionNavbars from './Sections/SectionNavbars.js';
import SectionTabs from './Sections/SectionTabs.js';
import SectionPills from './Sections/SectionPills.js';
import SectionNotifications from './Sections/SectionNotifications.js';
import SectionTypography from './Sections/SectionTypography.js';
import SectionJavascript from './Sections/SectionJavascript.js';
import SectionCarousel from './Sections/SectionCarousel.js';
import SectionCompletedExamples from './Sections/SectionCompletedExamples.js';
import SectionLogin from './Sections/SectionLogin.js';
import SectionExamples from './Sections/SectionExamples.js';
import SectionDownload from './Sections/SectionDownload.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

// installed npm libraries
import validator from 'email-validator';
import { AnimateOnChange } from 'react-animation';

// import image
import DroneImg from 'assets/img/Drone.jpg';

import config from '../../config';
import integrate from '../../integrate';

import styles from 'assets/jss/material-kit-react/views/components.js';
import './Footer.scss';
import './Components.scss';
const useStyles = makeStyles(styles);

const subscribeEndpoint = config.endpoints.subscribe;

export default function Components(props) {
  const [isNotSub, setIsNotSub] = useState(true);
  const [showMailErr, setShowMailErr] = useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  const logo = (
    <img
      style={{ width: '80%' }}
      alt='IIT Tech Ambit Logo'
      src='https://cdn.iit-techambit.in/websiteAssets/logo.png'
      className='logo'
    />
  );

  const errMsg = <a style={{ color: 'red' }}>Please enter a valid email !</a>;
  const textInput = React.createRef();

  const handleSmash = () => {
    const inputMail = textInput.current.value;
    if (validator.validate(inputMail)) {
      setIsNotSub(false);
      integrate.postData(subscribeEndpoint, { email: inputMail });
    } else setShowMailErr(true);
  };

  return (
    <div className='landing-page'>
      {/* <Header
        rightLinks={<HeaderLinks />}
        fixed
        color='white'
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      /> */}
      {/*here in parallax a background image can be placed with image={require('assets/img/bg4.jpg')} */}
      <Fragment>
        <div className={`${classes.container} landing-cont-custom`}>
          <AnimateOnChange>
            {isNotSub ? (
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={`${classes.title} landing-logo`}>{logo}</h1>
                    <h3 className={`${classes.subContTitle} landing-subcontent`}>
                      Become tech savy in just 5 minutes
                    </h3>
                    <h3 className={`${classes.subtitle} landing-subtitle`}>
                      Get Updated with latest research and tech stories from the
                      PAN IIT Ecosystem, for free!
                    </h3>
                    <CustomInput
                      labelText='Your Mail'
                      id='float'
                      inputProps={{ inputRef: textInput }}
                      focussed
                    />
                  </div>
                  <Button
                  className="smash-btn"
                    type='button'
                    color='info'
                    round
                    onClick={handleSmash}
                  >
                    Smash
                  </Button>
                </GridItem>
                {showMailErr ? errMsg : ''}
              </GridContainer>
            ) : (
              <Fragment>
                <h1 className={`${classes.subTitle} landing-subtitle-after`}>Welcome to the tech world</h1>
                <br/>
                <h3 className={`${classes.subtitle} landing-subtitle2-after`}>
                  Watch out for weekly dose of the tech gospel every Sunday
                  morning!
                </h3>
                <br />
                <h3 className={`${classes.subtitle} landing-subtitle2-after`}>
                  Can't Wait ?{' '}
                  <a href='/stories'>Check out our latest stories here!</a>
                </h3>
              </Fragment>
            )}
          </AnimateOnChange>
          <img
            className='drone'
            style={{
              width: '40%',
              position: 'absolute',
              right: '0'
            }}
            src={DroneImg}
            alt='Drone carrying a mobile'
          />
        </div>
      </Fragment>
      <br />
      <h2
        className='carousel-title'
        style={{
          fontWeight: '400',
          letterSpacing: '1px'
        }}
      >
        Our Readers Speak...
      </h2>
      <SectionCarousel />
      {/* <div className='mobile-footer'>
        <MobileFooter />
      </div> */}

      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={'/login-page'} className={classes.link}>
            <Button color='primary' size='lg' simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>*/}
      {/* */}
    </div>
  );
}
