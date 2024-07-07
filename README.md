### 🐽 간략 소개
```
기존의 황금 밸런스 프로젝트를 Next.js로 마이그레이션 하였습니다.
사용자가 직접 밸런스 게임을 생성할 수 있으며, 다른 사용자가 만든 밸런스 게임을 플레이할 수 있습니다.
좋아요 기능과 댓글 기능을 통하여 다른 사람들과 소통할 수 있습니다.
```

<br/>

### 🐽 개발 기간 및 인원
```
개발 기간 : 2024/06/26 ~ 2024/07/02
개발 인원 : 1인 개발
```

<br/>

### 🐽 참여한 부분
```
전체적인 개발 담당
```

<br/>

### 🐽 기술 스택
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

<br/>

### 🐽 회고
**1. 쿼리 스트링의 사용**

* 문제점
```
기존에 밸런스 게임에서 사용자의 선택에 따라 댓글의 말풍선 위치를 결정했습니다. 
이로 인해 게임 페이지의 내용이 점점 커지는 문제가 발생했습니다.
```

* 해결 방법
```
게임 페이지와 댓글 페이지를 분리하고, 쿼리 스트링 방식을 사용하여 데이터를 전달하여 문제를 해결했습니다.
```

* 개선 사항
```
페이지 분리: 게임과 댓글 페이지를 분리함으로써 각 페이지의 크기와 복잡성을 줄일 수 있습니다.
가독성 향상: 페이지가 간결해지면서 코드의 가독성이 향상되고 유지 보수가 쉬워집니다.
데이터 전송 간편화: 쿼리 스트링을 통해 필요한 데이터만을 전송할 수 있어 효율적입니다.
```

<br />

**2. 테일윈드의 사용**

* 기존의 인식
```
이전까지는 테일윈드 CSS(Tailwind CSS)의 사용에 대해 방어적인 입장을 가지고 있었습니다.
테일윈드를 사용하면 빠른 개발이 가능하지만, 테일윈드 클래스가 많아지면 코드가 길어지는 단점이 있습니다.
이 때문에 다른 개발자의 코드를 파악하는 데 어려움이 생길 수 있다고 생각했습니다.
```

* 사용 후 인식 개선
```
스타일 순서를 정하고 체계적으로 관리한다면 테일윈드는 충분히 효율적이라는 결론에 도달했습니다.
컴포넌트나 클래스 네이밍 설정 없이도 빠르게 스타일링이 가능하다는 것이 가장 크게 다가왔습니다.
필요에 따라 커스터마이징이 용이하여, 자주 사용되는 스타일인 경우 간략하게 줄일 수 있었습니다.
```

<br />

**3. 폴더 구조 기반의 라우팅**

* 문제점
```
Next.js를 활용하면서 폴더 구조 기반의 라우팅이 확실히 좋다는 점을 느꼈습니다.
자동으로 라우트를 생성하는 방식은 직관적이어서 생산성을 높이는 데 큰 도움이 되었습니다.

하지만, 아직까지 Next.js의 폴더 구조를 작성하는 방식이 미흡하다고 느꼈습니다.
라우팅을 담당하는 app 폴더 내에서 hooks나 개별 컴포넌트 폴더들의 생성 위치가 고민이 되었습니다.
```

* 시도한 방법
```
src 폴더에 feature 폴더를 생성하여 라우팅을 제외한 파일들을 보관해 보았으나, 폴더가 많아져서 관리가 어려웠습니다.
다른 방법으로는, app 폴더 내부에 component, hooks 등의 폴더를 생성해보았으나 이 방법도 폴더 구조가 복잡해진다고 느꼈습니다.

위 두 방식 중에 한가지를 선택해야 할 것입니다.
조금 더 효율적이고 복잡하지 않은 폴더구조를 생성하기 위해 조금 더 생각해볼 것 입니다.
```

* 결론
```
Next.js를 다시 사용해본 결과, 폴더 구조 기반의 라우팅이 매우 유용하다는 것을 재확인했습니다.
하지만, 효율적이고 일관된 폴더 구조를 유지하는 것이 중요하다는 점을 깨달았습니다.

프로젝트의 규모가 커질수록 폴더 구조가 명확하지 않으면 복잡해질 수 있기 때문에, 이에 대한 고민과 개선이 필요하다고 생각합니다.
```

<br />

**4. 리액트 쿼리의 사용**

* fetch 기능의 도입
```
리액트 쿼리(React Query)를 사용한 이후, 해당 기술의 편리함 덕분에 기본적인 fetch 기능을 자주 사용하지 않았습니다.
이번에는 작은 프로젝트이면서 Next.js를 사용하는 만큼, fetch 기능을 활용해보았습니다.
```

* fetch 기능을 사용한 후기
```
데이터 요청 자체는 크게 불편하거나 어려운 점이 없었습니다.
서버 컴포넌트에서는 로딩과 에러 처리를 위해 loading.tsx, error.tsx를 활용할 수 있습니다.

하지만 클라이언트 컴포넌트에서는 이를 직접 처리를 해야했습니다.
이러한 점에서 코드가 길어지고 복잡하게 느껴졌습니다.
```

* 결론
```
라이브러리에 의존하는 것이 항상 좋다고는 할 수 없으나, 리액트 쿼리를 잘 활용할 수 있다면 충분히 좋은 선택이라고 생각합니다.
로딩 및 에러 처리의 간편함과 코드의 유지보수성을 고려했을 때, 리액트 쿼리는 여전히 매력적인 도구라고 생각합니다.
프로젝트의 규모가 커진다면 이러한 점들에서 리액트 쿼리의 도입을 생각해볼 것 같습니다.
```
