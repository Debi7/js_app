//1 - создали родительский Component

export class Component {
  constructor(id) {
      this.$el = document.getElementById(id)
      this.init() //вызов метода init
  }

  init() {} //метод init будет отрабатывать тогда когда сработает вызов элемента this.$el (здесь вызываем пустой метод, а прописываем/реализуем его в HeaderComponent)
}