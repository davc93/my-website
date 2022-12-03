

class Database {
  constructor() {}

  async getAll(collection:string) {

  }
  async getById(collection:string, id: string | number) {

  }

  randomDelay() {
    new Promise((resolve) => {
      const max = 350;
      const min = 100;
      const delay = Math.floor(Math.random() * (max - min + 1)) + min;

      setTimeout(resolve, delay);
    });
  }
}

export { Database };
