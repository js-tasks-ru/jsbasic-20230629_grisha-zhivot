function factorial(n) {
    let factorial = 1;
    while(n) {
      factorial *= n--;
    }
    return factorial
}
