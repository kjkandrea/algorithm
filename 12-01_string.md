# 스트링 알고리즘

스트링 : 문자가 연속적으로 나열된 문자열

## 스트링 매칭

텍스트에서 패턴이 나타나는 위치를 찾는 것

* 텍스트. T => 긴 스트링, 길이 n
* 패턴. P => 짦은 스트링, 길이 m

브루트포스 스트링 매칭 방식 사용하면 O(nm). 더 효율적인 방법은 없을까? => 전처리

## 라빈-카프 알고리즘

패턴의 해시값으로 매치의 후보를 찾고, 후보에 대해서만 문자별로 비교해서 매치를 찾는 방법

* 위치 0 의 해시 값을 계산한 뒤, 직전 해시값을 활용하여 다음 위치부터는 상수시간으로 계산 가능
* 최선의 경우 O(n)
  * 전처리 O(m)
  * 텍스트에서 해시값 계산 O(n)
  * 후보 위치는 문자 직접 비교. 매치 개수 k => O(km)
  * 만일 모든 위치에서 매칭하여 k 가 많을 경우. 최악의 경우 O(nm)

## KMP 알고리즘

패턴 내에 문자들의 관계를 이용하여 매칭 시 중복된 비교를 줄임

1. 일치한 서브스트링에 대한 접두부와 접미부의 최대 일치 정보 확인
2. 접두부와 접미부의 일치가 있을 경우 일치가 있는 해당 블럭으로 이동
3. 접두부와 접미부의 일치가 없을 경우 그 다음 블럭으로 이동

* 전처리 => O(m)
* 매칭 => O(n)
* 전체 성능 O(n)


