import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '../styles';
const { colors, fontSizes, fonts } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  
  text-align: center;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
/*const Hi = styled.h1`
  color: ${colors.dark};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;*/
const Name = styled.h2`
  font-size: 70px;
  line-height: 1.1;
  margin: 0;

  color: ${colors.red}; 
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 40px;
  line-height: 1.1;
  color: ${colors.offWhite};
  
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
/*const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  font-family: ${fonts.SFMono};
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  font-size: ${fontSizes.small};
  margin-top: 50px;
`;*/

class Hero extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    isMounted: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 1000);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    const { data } = this.props;
    const { isMounted } = this.state;
    const { frontmatter, html } = data[0].node;

    {/*const one = () => <Hi style={{ transitionDelay: '100ms' }}>{frontmatter.title}</Hi>;*/}
    const one = () => <Name style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</Name>;
    const two = () => (
      <Subtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</Subtitle>
    );
    {/*const four = () => (
      <Blurb style={{ transitionDelay: '400ms' }} dangerouslySetInnerHTML={{ __html: html }} />
    );*/}
    {/*const five = () => (
      <div style={{ transitionDelay: '500ms' }}>
        <EmailLink href={`mailto:${email}`}>Say Hello!</EmailLink>
      </div>
    );*/}

    const items = [one, two];

    return (
      <HeroContainer>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HeroContainer>
    );
  }
}

export default Hero;
