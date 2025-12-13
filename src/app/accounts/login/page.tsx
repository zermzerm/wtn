"use client";

import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import {GENRE} from "@/constants/topList";
import {signInWithEmailAndPassword} from "firebase/auth";
import Link from "next/link";
import {useState} from "react";
import styled from "styled-components";
import {FirebaseError} from "firebase/app";
import {useRouter} from "next/navigation";
import {auth} from "@/firebase/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("로그인 성공");
      router.push("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        alert(error.message);
        console.log("error.code:", error.code);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <section>
      <TopGenreWrapper list={GENRE} />
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <LoginHeader>로그인</LoginHeader>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e9e7e7",
            }}
          />
          <LoginMain>
            <InputWrapper>
              <InputLabel>이메일 주소 *</InputLabel>
              <LoginInput
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>비밀번호 *</InputLabel>
              <LoginInput
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
              />
            </InputWrapper>
            <LoginButton type="submit">로그인</LoginButton>
            <LoginFooter>
              <p>
                계정이 없으신가요? <RegisterLink href="/accounts/register">회원가입</RegisterLink>을
                해보세요.
              </p>
              <p>
                비밀번호를 잊었나요?
                <RegisterLink href="/accounts/password">비밀번호 찾기</RegisterLink>
              </p>
            </LoginFooter>
          </LoginMain>
        </LoginForm>
      </LoginContainer>
    </section>
  );
}

const LoginContainer = styled.section`
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
  align-items: center;
  color: #777777;
  font-size: 14px;
  padding-top: 10px;
`;

const RegisterLink = styled(Link)`
  color: #23d2e2;
  font-weight: 600;
`;
