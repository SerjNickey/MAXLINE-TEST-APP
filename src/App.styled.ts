import styled, { keyframes } from "styled-components";
import castle from "@/assets/castle.png";
import aura from "@/assets/aura.png";
import auraMini from "@/assets/aura_mini.png";
import freespinMini from "@/assets/freespin_mini.png";
import zeus from "@/assets/zeus.png";
import zeusMini from "@/assets/zeus_mini.png";
import ellipse525 from "@/assets/ellipse_525.png";
import gold1 from "@/assets/gold_1.png";
import gold2 from "@/assets/gold_2.png";
import gold2mini from "@/assets/gold_2_mini.png";
import ellipse526 from "@/assets/ellipse_526.png";
import flame from "@/assets/flame.gif";
import rectangle from "@/assets/rectangle.png";
import freespins from "@/assets/freespins.png";
import registration from "@/assets/registration.png";
import twoHun from "@/assets/200.png";
import { media } from "./styles/breakpoints";

export const MainContainer = styled.div`
  background-color: #52098b;
  background-image: url(${castle});
  max-width: 1920px;
  width: 100%;
  height: 1080px;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  position: relative;
  margin: 0 auto;

  ${media.xxl} {
    overflow: hidden;
  }

  ${media.xl} {
    overflow: auto;
  }
`;

export const InnerMain = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  position: relative;

  ${media.xxl} {
    flex-direction: row;
    justify-content: flex-end;

    background-image: url(${aura}), url(${zeus}), url(${ellipse525}),
      url(${gold1}), url(${gold2}), url(${ellipse526});

    background-position: 0px 320px, 50px 5px, 0 328px, 907px 818px, 1132px 22px,
      944px 0;

    background-size: auto, auto, auto, auto, auto, auto;
  }

  ${media.xl} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 485px;

    background-image: url(${freespinMini}), url(${zeusMini}), url(${auraMini});
    background-position: center 103px, center 275px, 0 330px;

    &:after {
      width: 126px;
      height: 235px;
      position: absolute;
      top: 455px;
      right: 0;
      content: "";
      background-image: url(${gold2mini});
    }
  }
  ${media.lg} {
    gap: 485px;
  }
`;

export const LogoContainer = styled.div`
  display: inline-block;
  flex-direction: row;
  justify-content: center;
`;

export const LogoImage = styled.img`
  max-width: 332px;
  height: auto;
  margin-top: 80px;

  ${media.xl} {
    max-width: 172px;
    margin-top: 60px;
  }
`;

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  ${media.xxl} {
    width: 580px;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 360px;
  }

  ${media.xl} {
    width: 100%;
    border-radius: 24px 24px 0 0;
    background-color: #0f0219;
    padding-left: 0;
    padding-top: 40px;
    padding-bottom: 80px;
  }
`;

export const RegTitle = styled.div`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  color: #fff;

  ${media.xxl} {
    max-width: 380px;
  }

  ${media.xl} {
    max-width: 280px;
  }
`;

export const TermsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;

  ${media.xxl} {
    max-width: 380px;
  }

  ${media.xl} {
    max-width: 280px;
  }
`;

export const TermsBlock = styled.div`
  max-width: 302px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 400;
  color: #bbc6f2;

  a {
    color: #bbc6f2;
    text-decoration: underline;
  }
`;

export const ResponseErrorBlock = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #f91717;
  ${media.xxl} {
    max-width: 380px;
  }

  ${media.xl} {
    max-width: 280px;
  }
`;

export const BigBannerWrapper = styled.div`
  width: 820px;
  height: 500px;
  position: relative;
  float: right;
  margin-top: 270px;
  margin-right: -370px;

  ${media.xl} {
    display: none;
  }
`;

export const BigBannerFirstPart = styled.div`
  width: 820px;
  height: 500px;
  background-image: url(${freespins}), url(${flame}), url(${rectangle}),
    url(${registration});
  background-size: 528px 56px, 814px 456px, 660px, 466px;
  background-position: center 332px, center, center 100px, center 420px;
  background-repeat: no-repeat;
  position: absolute;
`;
export const BigBannerSecondPart = styled.div`
  width: 820px;
  height: 500px;
  background-image: url(${flame});
  background-size: 814px 456px;
  background-position: center;
  position: absolute;
  transform: scaleX(-1);
`;

const thoHunScale = keyframes`
  0%   { background-size: auto 235px; }
  50%  { background-size: auto 220px; }
  100% { background-size: auto 235px; }
`;

export const BigBannerThirdPart = styled.div`
  width: 600px;
  height: 258px;
  background-image: url(${twoHun});
  background-size: auto 235px;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 110px;
  top: 50px;
  animation: ${thoHunScale} 1.2s infinite ease-in-out;
`;
