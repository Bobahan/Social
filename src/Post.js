export default class Post {
  constructor(title, img) {
    this.title = title;
    this.img = img;
    this.date = new Date();
  }

  toString() {
    JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
    });
  }
}
