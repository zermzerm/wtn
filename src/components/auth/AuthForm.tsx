"use client";

import {useForm} from "react-hook-form";
import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FirebaseError} from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {getFirebaseAuth, getFirebaseDB} from "@/firebase/client";
import {firebaseErrorMessage} from "@/constants/utils/firebaseErrorMessage";
import Spinner from "@/components/common/Spinner";

interface AuthFormValues {
  email: string;
  password: string;
  nickname?: string;
  passwordConfirm?: string;
}

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({type}: AuthFormProps) {
  const router = useRouter();
  const isRegister = type === "register";

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isValid, isSubmitting},
  } = useForm<AuthFormValues>({
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = async (data: AuthFormValues) => {
    try {
      const auth = getFirebaseAuth();

      if (isRegister) {
        const db = getFirebaseDB();

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        await setDoc(doc(db, "users", userCredential.user.uid), {
          email: data.email,
          nickname: data.nickname,
          createdAt: new Date(),
        });

        alert("회원가입 완료!");
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        alert("로그인 성공!");
      }

      router.push("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message =
          firebaseErrorMessage[error.code] ??
          "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

        alert(message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <LoginHeader>{isRegister ? "회원가입" : "로그인"}</LoginHeader>
      <hr style={{border: "none", borderTop: "1px solid #e9e7e7"}} />

      <LoginMain>
        {/* 이메일 */}
        <InputWrapper>
          <InputLabel>이메일 주소 *</InputLabel>
          <LoginInput
            type="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </InputWrapper>

        {isRegister && (
          <InputWrapper>
            <InputLabel>닉네임 *</InputLabel>
            <LoginInput
              placeholder="닉네임"
              {...register("nickname", {
                required: "닉네임을 입력해주세요.",
                minLength: {
                  value: 2,
                  message: "닉네임은 최소 2자 이상입니다.",
                },
              })}
            />
            {errors.nickname && <ErrorText>{errors.nickname.message}</ErrorText>}
          </InputWrapper>
        )}

        <InputWrapper>
          <InputLabel>비밀번호 *</InputLabel>
          <LoginInput
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 6,
                message: "비밀번호는 최소 6자 이상입니다.",
              },
            })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </InputWrapper>

        {isRegister && (
          <InputWrapper>
            <InputLabel>비밀번호 확인 *</InputLabel>
            <LoginInput
              type="password"
              placeholder="비밀번호 확인"
              {...register("passwordConfirm", {
                required: "비밀번호 확인을 입력해주세요.",
                validate: (value) => value === password || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.passwordConfirm && <ErrorText>{errors.passwordConfirm.message}</ErrorText>}
          </InputWrapper>
        )}

        <LoginButton disabled={!isValid || isSubmitting}>
          {isSubmitting ? <Spinner /> : isRegister ? "회원가입" : "로그인"}
        </LoginButton>

        <LoginFooter>
          {isRegister ? (
            <p>
              계정이 있으신가요? <RegisterLink href="/accounts/login">로그인</RegisterLink>
            </p>
          ) : (
            <p>
              계정이 없으신가요? <RegisterLink href="/accounts/register">회원가입</RegisterLink>
            </p>
          )}
        </LoginFooter>
      </LoginMain>
    </LoginForm>
  );
}

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
  width: 100%;
  background-color: #23d2e2;
  border-radius: 12px;
  padding: 12px 18px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: #b5e8ec;
    cursor: not-allowed;
  }
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

const ErrorText = styled.p`
  color: #e53935;
  font-size: 12px;
  margin-top: 2px;
`;
