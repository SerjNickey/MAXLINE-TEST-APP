import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  setPassword,
  setPhoneNum,
  setFirstChecked,
  setSecondChecked,
} from "@/store/registrationSlice";
import { useRegisterMutation } from "@/store/registrationApi";
import {
  BigBannerWrapper,
  BigBannerFirstPart,
  BigBannerSecondPart,
  BigBannerThirdPart,
  MainContainer,
  InnerMain,
  LogoContainer,
  LogoImage,
  RegisterContainer,
  RegTitle,
  TermsWrapper,
  TermsBlock,
  ResponseErrorBlock,
  Loader,
} from "./App.styled";
import Input from "@/components/CustomInput/CustomInput";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import CustomButton from "@/components/CustomButton/CustomButton";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Logo from "@/assets/logo.png";
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

const bgImages = [
  Logo,
  castle,
  aura,
  auraMini,
  freespinMini,
  zeus,
  zeusMini,
  ellipse525,
  gold1,
  gold2,
  gold2mini,
  ellipse526,
  flame,
  rectangle,
  freespins,
  registration,
  twoHun,
];

// Regex for Belarusian phone number: +375 25/29/33 and 7 digits
const phoneRegex = /^\+375(25|29|33|44)\d{7}$/;

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error !== null && "status" in error;
}

function App() {
  const dispatch = useDispatch();
  const { password, phoneNum, firstChecked, secondChecked } = useSelector(
    (state: RootState) => state.registration
  );

  const isPhoneValid = phoneRegex.test(phoneNum);
  const isPasswordValid = password.length >= 6;
  const isFormValid =
    isPhoneValid && isPasswordValid && firstChecked && secondChecked;

  const [register, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const promises = bgImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            console.log(`Изображение загружено: ${src}`);
            resolve(null);
          };
          img.onerror = () => {
            console.error(`Ошибка загрузки: ${src}`);
            resolve(null);
          };
        });
      });

      await Promise.all(promises);
      setLoadedCount(bgImages.length);
    };

    loadImages();
  }, []);

  if (loadedCount < bgImages.length) {
    return <Loader>Загрузка...</Loader>;
  }

  const handleRegister = async () => {
    try {
      await register({
        phoneNum,
        password,
        firstChecked,
        secondChecked,
      }).unwrap();
      alert("Registration successful!");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <MainContainer>
      <InnerMain>
        <BigBannerWrapper>
          <BigBannerFirstPart />
          <BigBannerSecondPart />
          <BigBannerThirdPart />
        </BigBannerWrapper>

        <LogoContainer>
          <LogoImage src={Logo} alt="Logo" />
        </LogoContainer>
        <RegisterContainer>
          <RegTitle>Регистрация</RegTitle>
          <div>
            <Input
              type="tel"
              showToggle={true}
              label="Номер телефона"
              value={phoneNum}
              onChange={(val) => dispatch(setPhoneNum(val))}
              error="Введите корректный номер телефона"
            />
            <Input
              type="password"
              showToggle={true}
              label="Пароль"
              value={password}
              onChange={(val) => dispatch(setPassword(val))}
              error="Пароль должен содержать минимум 6 символов"
              placeholder="Придумайте пароль"
            />
          </div>

          <TermsWrapper>
            <TermsBlock>
              <div>
                <CustomCheckbox
                  checked={firstChecked}
                  onChange={(val) => dispatch(setFirstChecked(val))}
                />
              </div>
              <div>
                Мне больше 21 года. Я согласен и принимаю{" "}
                <a href="https://www.onliner.by/" target="_blank">
                  «Правила приема ставок»
                </a>{" "}
                и{" "}
                <a href="https://www.onliner.by/" target="_blank">
                  «Политику конциденциальности»
                </a>
              </div>
            </TermsBlock>
            <TermsBlock>
              <div>
                <CustomCheckbox
                  checked={secondChecked}
                  onChange={(val) => dispatch(setSecondChecked(val))}
                />
              </div>
              <div>
                Я принимаю участие и согласен с{" "}
                <a href="https://www.onliner.by/" target="_blank">
                  условиями бонуса
                </a>
              </div>
            </TermsBlock>
          </TermsWrapper>

          <CustomButton
            disabled={!isFormValid || isLoading}
            onClick={handleRegister}
          >
            {isLoading ? "Загрузка..." : "РЕГИСТРАЦИЯ"}
          </CustomButton>
          {isError && (
            <ResponseErrorBlock>
              {typeof error === "string"
                ? error
                : isFetchBaseQueryError(error) &&
                  error.data &&
                  typeof error.data === "object" &&
                  "message" in error.data
                ? (error.data as any).message
                : (error as any)?.error ||
                  "Registration error. Please try again."}
            </ResponseErrorBlock>
          )}
          {isSuccess && (
            <div style={{ color: "green", marginTop: 10 }}>
              Регистрация успешна!
            </div>
          )}
        </RegisterContainer>
      </InnerMain>
    </MainContainer>
  );
}

export default App;
