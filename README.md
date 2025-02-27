# 사용법

## 프로젝트 세팅 및 실행

먼저 프로젝트를 복사해줍니다.

```bash
git clone https://github.com/Eugeeun/VirtualDOMvsDOM.git
```

### 리액트

리액트 앱으로 이동해 의존성 패키지를 설치해준 뒤 빌드하고 실행해줍니다.

```bash
cd react-app
npm i
npm run build
npm run preview
```

### 바닐라

루트로 돌아와 바닐라 앱으로 이동해 마찬가지로 의존성 패키지를 설치한 뒤 빌드하고 실행해줍니다.

```bash
cd vanilla-app
npm i
npm run build
npm run preview
```

**위와 같이 진행하면 `localhost:4173-4`로 접속할 수 있습니다.**

## 테스트

### CPU 및 메모리

```
작업 관리자 > 프로세스 > 앱
```

### FCP, LCP 등의 성능 지표

```
F12 > Lighthouse > Lighthouse 보고서 생성
```

---

**기타 테스트는 자유롭게 하셔도 됩니다!**
