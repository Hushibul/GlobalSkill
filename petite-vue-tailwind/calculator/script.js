let calculator = {
  num1: 0,
  num2: 0,
  result: 0,

  addition() {
    this.result = this.num1 + this.num2;
    return this.result;
  },
  subtraction() {
    this.result = this.num1 - this.num2;
    return this.result;
  },
  multiplication() {
    this.result = this.num1 * this.num2;
    return this.result;
  },
  division() {
    this.result = this.num1 / this.num2;
    return this.result;
  },
};

PetiteVue.createApp(calculator).mount();
