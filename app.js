for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Sphinx Software");
  } else if (i % 3 == 0) {
    console.log("Sphinx");
  } else if (i % 5 == 0) {
    console.log("Software");
  } else {
    console.log(i);
  }
}
