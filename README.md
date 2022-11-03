## 제작 목적

setState를 props로 내려주기 싫어서 만든 테스트 레포.
react context도 연습할 겸..
</br></br>

## 결과

context는 drilling 때문에 사용한다고 생각했는데
그 외에도 코드 가독성이나 효율성 측면에서 depth가 깊지 않아도 사용할 가치가 있다.
</br></br>

## 과정

- TabContainer : context를 사용하여 헤더와 하위 컴포넌트에 상태 전달
- TypeContainer : setState를 props로 전달해 상태 관리

이 두 개의 컴포넌트로 어떤 게 더 읽기 좋고 효율적인지 테스트함.
</br></br>

## 자세한 내용을 알고싶다면

[여기](https://hysoung.notion.site/context-drilling-a48ccedbc79146c8a28de1b97d12a7e1) 참고해주세요.

</br>

## ⚙️ Before Started

```
yarn install
```

실행 커맨드

```
yarn start
```
