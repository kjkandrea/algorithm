export default class UnionFind {
  parent = []
  rank = [] // 트리의 높이를 추적

  constructor(size) {
    // 각 원소는 자기 자신을 부모로 가짐
    this.parent = Array.from({ length: size }, (_, index) => index)
    this.rank = Array(size).fill(0)
  }

  union(x, y) {
    // 두 원소의 루트 노드
    const rootX = this.find(x)
    const rootY = this.find(y)

    // 두 노드의 부모가 같다면 이미 유니온임
    if (rootX === rootY) return;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX
    } else if (this.rank[rootY] > this.rank[rootX]) {
      this.parent[rootX] = rootY
    } else {
      this.parent[rootY] = rootX
      this.rank[rootX] += 1
    }
  }

  find(x) {
    // 만일 자기 자신이 부모가 아니라면 부모를 재귀적으로 찾음
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }
}
