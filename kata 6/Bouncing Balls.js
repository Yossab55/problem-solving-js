function bouncingBall(hight, bounce, window) {
  if (hight <= 0 || bounce >= 1 || bounce <= 0 || window >= hight) return -1;
  let everyBounce = bounce * hight;
  if (everyBounce < window) return 0;
  let result = 1;
  while (everyBounce > window) {
    result += 2;
    everyBounce = everyBounce * bounce;
  }
  return result;
}

console.log(bouncingBall(30.0, 0.66, 1.5));
