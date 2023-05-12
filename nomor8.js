function kelipatanEduwork(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("EduWork");
    } else if (i % 3 === 0) {
      console.log("Edu");
    } else if (i % 5 === 0) {
      console.log("Work");
    } else {
      console.log(i);
    }
  }
}

kelipatanEduwork(15);
