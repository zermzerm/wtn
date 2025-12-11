"use client";

import TopGenre from "@/components/common/TopGenre";
import {GENRE} from "@/constants/topList";
import {Suspense} from "react";
import styled from "styled-components";

export default function Password() {
  return (
    <section>
      <Suspense fallback={null}>
        <TopGenre list={GENRE} />
      </Suspense>
      <PasswordContainer>
        <LoginForm>
          <LoginHeader>비밀번호 재설정</LoginHeader>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e9e7e7",
            }}
          />
          <LoginMain>
            <InputWrapper>
              <InputLabel>이메일 주소 *</InputLabel>
              <LoginInput />
            </InputWrapper>
            <LoginButton>비밀번호 재설정</LoginButton>
          </LoginMain>
          <LoginFooter>
            <p>가입할 때 사용하셨던 이메일을 입력해주세요.</p>
            <p>비밀번호를 재성정할 수 있는 링크를 보내드립니다.</p>
            <p>소셜 계정으로 가입하셨을 때는 해당 SNS의 이메일을 입력해주세요.</p>
          </LoginFooter>
        </LoginForm>
      </PasswordContainer>
    </section>
  );
}

const PasswordContainer = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 443px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #c2c2c2;
`;

const LoginHeader = styled.h1`
  font-size: 19px;
  color: #1f1f1f;
  padding: 25px 28px;
`;

const LoginMain = styled.div`
  padding: 25px 28px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputLabel = styled.label`
  color: #777777;
  font-size: 14px;
  font-weight: 400;
`;

const LoginInput = styled.input`
  box-sizing: border-box;
  color: #495057;
  width: 100%;
  height: 40px;
  border: 1px solid rgb(230, 232, 235);
  border-radius: 12px;
  padding: 10px 16px;
  &:focus {
    outline: 2px solid #23d2e2;
  }
`;

const LoginButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  background-color: #23d2e2;
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  color: #ffffff;
`;

const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #777777;
  font-size: 14px;
  padding: 0 28px 25px 28px;
`;
