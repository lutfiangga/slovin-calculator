function slovin(N, e) {
  e = e / 100;
  return N / (1 + N * e ** 2);
}

console.log(slovin(162, 10));
