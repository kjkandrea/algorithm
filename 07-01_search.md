# 탐색

## 레드-블랙 트리

1. 성질 1. 모든 노드는 검정이거나 빨강이다.
2. 성질 2. 루트 노드와 리프 노드는 검정이다. 리프 노드는 Null 노드. 
3. 성질 3. 빨강 노드의 부모 노드는 항상 검정이다. 
4. 성질 4. 임의의 노드로부터 리프 노드까지의 경로상에는 동일한 개수의 검정 노드가 존재한다.

* 탐색 : 이진 탐색 트리의 탐색 방법과 동일
* 삽입 : 탐색이 실패한 지점의 Null 노드에 삽입
  1. 탐색이 실패한 Null 노드에 빨간 노드를 추가
  2. 두 자식 노드를 Null 노드로 만듬
  3. 빨간 노드가 연달아 나타난다면 노드의 구조나 색깔을 조정해서 성질을 만족시켜야 함

빨간 노드가 연달아 나타나는 경우

1. 규칙 1. 부모 노드의 형제 노드가 빨강인 경우.
   * 부모 노드, 부모 노드의 형제 노드, 부모 노드의 부모 노드 색깔을 모두 변경
2. 규칙 2. 부모 노드의 형제 노드가 검정이고, 현재 노드의 키 값이 부모 노드와 부모 노드의 부모 노드의 키 값의 사이인 경우
   * 현재 노드와 부모 노드를 회전시킴
3. 규칙 3. 부모 노드의 형제 노드가 검정이고, 현재 노드의 키 값보다 부모 노드와 부모 노드의 부모 노드의 키 값이 큰/작은 경우
   * 부모 노드와 부모 노드의 부모 노드를 회전 시키고 색깔을 변경

* 탐색, 삽입, 삭제 : O(log n)

## B 트리

균형 탐색 트리

t : 최소 차수

1. 성질 1. 루트 노드는 1개 이상 2t개 미만의 오름차순으로 정렬된 키를 가짐
2. 성질 2. 루트 노드가 아닌 모든 노드는 t - 1 개 이상 2t 개 미만의 오름차순으로 정렬된 키를 가짐
3. 성질 3. 내부 노드는 자신이 가진 키의 개수보다 하나 더 많은 자식 노드를 지님
4. 성질 4. 각 노드의 한 키의 왼쪽 서브트리에 있는 모든 키 값은 그 키값보다 작음
5. 성질 5. 각 노드의 한 키의 오른쪽 서브트리에 있는 모든 키 값은 그 키값보다 큼
6. 성질 6. 모든 리프 노드의 레벨은 동일

* 탐색, 삽입, 삭제 : O(log n)

## 해시 테이블

해싱.

키 값을 기반으로 데이터의 저장 위치를 직접 계산함으로써 상수 시간 내에 데이터를 저장, 삭제, 탐색할 수 있는 방법

해시 테이블의 슬롯보다 키의 갯수가 많기 때문에 충돌(collision)이 발생함

바람직한 해시 함수
* 계산이 용이해야 함
* 적은 충돌 발생 -> 각 키를 테이블에 각 슬롯에 균등하게

### 제산 잔여법

`h(K) = 키 값 % 해시 테이블의 크기`

M = 2^r 이면 키 값의 하위 r비트의 값이 됨 => 부적합

M을 소수로 선택해야함

### 비닝

키 값의 범위를 단순하여 M 등분하여 각 등분을 각 슬롯으로 해시하는 방법

### 중간 제곱법

1. 주어진 키 값을 제곱한다.
2. 제곱한 결과에서 하위 m 만큼의 비트를 버리고, M에 해당하는 하위 r비트를 취한다.

### 충돌 해결 방법

* 개방 해싱 : 충돌된 데이터를 테이블 밖의 별도의 장소에 저장/관리. 연결 리스트
* 폐쇄 해싱 : 해시 테이블 내의 다른 슬롯에 충돌된 데이터를 저장/관리. 버킷 해싱






