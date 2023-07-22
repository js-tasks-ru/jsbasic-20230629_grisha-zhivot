let calculator = {
  a : null,
  b : null,  
  read : function(num1, num2) {
    this.a = parseInt(num1);
    this.b = parseInt(num2);
  },
  sum : function() {
    return this.a + this.b;
  },

  mul : function() {
    return this.a * this.b;
  },
};
console

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
