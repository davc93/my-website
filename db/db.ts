import dummy from './data'

class Database {
  constructor() {}

  async getAll(collection:string) {
    const col = Object.keys(dummy).find((key)=>key==collection) as string
    const data = dummy as any
    return data[col]
    

  }
  async getById(collection:string, id: string ) {
    const col = Object.keys(dummy).find((key)=>key==collection) as string
    const data = dummy as any
  
    return data[col][id]

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
