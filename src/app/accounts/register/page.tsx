"use client";

import TopGenreWrapper from "@/components/common/TopGenreWrapper";
import {GENRE} from "@/constants/topList";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {FormEvent, useState} from "react";
import styled from "styled-components";
import {FirebaseError} from "firebase/app";
import {useRouter} from "next/navigation";
import {auth, db} from "@/firebase/client";

export default function Register() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        nickname,
        createdAt: new Date(),
      });

      alert("회원가입 완료!");
      router.push("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        alert(error.message);
        console.error("Firebase error code:", error.code);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <section>
      <TopGenreWrapper list={GENRE} />
      <RegisterContainer>
        <LoginForm onSubmit={handleRegister}>
          <LoginHeader>회원가입</LoginHeader>
          <hr style={{border: "none", borderTop: "1px solid #e9e7e7"}} />
          <LoginMain>
            <InputWrapper>
              <InputLabel>이메일 주소 *</InputLabel>
              <LoginInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                required
              />
            </InputWrapper>

            <InputWrapper>
              <InputLabel>닉네임 *</InputLabel>
              <LoginInput
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임"
                required
              />
            </InputWrapper>

            <InputWrapper>
              <InputLabel>비밀번호 *</InputLabel>
              <LoginInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                required
              />
            </InputWrapper>

            <LoginButton type="submit">회원가입</LoginButton>
          </LoginMain>
        </LoginForm>
      </RegisterContainer>
    </section>
  );
}

const RegisterContainer = styled.div`
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
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  background-color: #23d2e2;
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  color: #ffffff;
`;
