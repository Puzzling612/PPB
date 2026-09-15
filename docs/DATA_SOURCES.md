# 데이터 스냅샷 · 2026-09-15

## 범위

- `lib/roster.json`: Pokémon Zone 시즌 6 / M-C 싱글 티어 페이지에서 확인한 기본·리전·성별 등 262개 행. 순위 기준일 2026-09-14.
- `lib/megas.json`: Pokémon Zone 메가폼 페이지에서 관측한 75개 폼과 별도 확인한 메가드닐레이브 1개. 해당 페이지의 더블 사용률은 싱글 평가에 사용하지 않음.
- 합계 338개 행. OP.GG 도감의 352개 전체와 대조 완료한 로스터가 아님. 등재됐다는 사실만으로 현재 규정의 공식 출전 합법성을 보증하지 않음.
- 날개치는머리, 무쇠무인 미포함. 요청한 맘모꾸리, 메가팬텀, 리자몽 X/Y, 라이츄 X/Y, 루카리오 Z, 한카리아스 Z 포함.
- 통계 기본값: 보만다·갑주무사·맘모꾸리·누리레느·아머까오·팬텀·한카리아스 7종만 확인. 나머지는 빈 배치와 자료 없음 경고.
- 메가폼 기본 샘플은 종별 집계에서 가져온 것. 폼별 최다 완성 조합으로 주장하지 않음.
- 개별 상위 4기술은 동시 채용률 자료가 아님. 얼음기 중복 등은 경고와 사용자 수정 대상으로 남김.

## 출처

| 출처 | 사용 범위 |
|---|---|
| https://champions.pokemon.com/ | 공식 게임 정보. 규정 전문 대조 미완료 |
| https://www.pokemon-zone.com/champions/ranked-seasons/singles/tier-list/ | M-C 시즌 6 종별 순위·타입 |
| https://www.pokemon-zone.com/champions/tier-list-mega/?include_drops=1&sort=popular | 메가폼 관측·타입. 더블 통계는 평가에서 제외 |
| https://op.gg/ko/pokemon-champions/pokedex | 전체 도감 개수 비교 |
| https://op.gg/ko/pokemon-champions/pokedex/salamence | 종별 싱글 샘플 |
| https://op.gg/ko/pokemon-champions/pokedex/mega-salamence | 진화 후 특성·타입 |
| https://op.gg/ko/pokemon-champions/pokedex/golisopod | 종별 싱글 샘플 |
| https://op.gg/ko/pokemon-champions/pokedex/mega-golisopod | 진화 후 특성·타입 |
| https://op.gg/ko/pokemon-champions/pokedex/mamoswine | 종별 싱글 샘플 |
| https://op.gg/ko/pokemon-champions/pokedex/primarina | 종별 싱글 샘플 |
| https://op.gg/ko/pokemon-champions/pokedex/corviknight | 종별 싱글 샘플 |
| https://op.gg/ko/pokemon-champions/pokedex/gengar | 종별 싱글 샘플 |
| https://op.gg/ko/pokemon-champions/pokedex/garchomp | 종별 싱글 샘플 |

## 모델과 한계

타입 상성은 일반 배틀 타입표를 사용한다. 부유·두꺼운지방 등 명시적으로 구현한 특성만 보정한다. 스카이스킨의 공격 타입 변환은 적용하되 정밀 대미지 보정은 계산하지 않는다. 날씨, 필드, 상태이상, 교체 순서, 메가진화 타이밍, 상대 배치 미반영.

점수: 공격 범위 25%, 방어 교체 타입 25%, 공격 성향 15%, 유틸리티 15%, 상위 13종 기본 타입 타격 15%, 배치 일관성 5%. 사용률 0%. 검증된 승률 모델이 아닌 설명 가능한 휴리스틱. 폼별 사용률·공개 파티 유사도·완벽한 카운터 판정 없음.

챔피언스 32/66 배분과 기존 252/510 EV를 별도 모드로 제공한다. 기존 EV는 비교 입력이며 게임 실수치 변환이 아니다. 상세 스피드·내구·돌파력은 검증하지 않는다.

## 데이터 갱신 절차

1. 공식 시즌과 출전 목록을 확인하고 기준일·규정 기록.
2. 원출처의 종별/폼별, 싱글/더블, 사용률/승률을 구분해 JSON과 `lib/data.ts` 갱신.
3. 새로운 기술은 메타데이터와 종별 습득 근거를 함께 추가. 모르는 값은 빈 값 유지.
4. 전체 도감 대조, 종 중복 키, 한글명, 메가스톤·특성 일관성 검증.
5. `node scripts/test.mjs`, `pnpm exec tsc --noEmit`, `pnpm build` 실행 후 검토된 스냅샷 배포.

현재 자동 크롤러나 주기 갱신은 없다. 검색 서버의 접근 거부를 우회하지 않는다.
