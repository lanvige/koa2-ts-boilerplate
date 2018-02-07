export class DataResult<T>{
  private data: T;
  private message: string;
  private status: number;
  private time: Date;

  public constructor(status: number, message: string, data: T) {
    this.data = data;
    this.status = status;
    this.message = message;
    this.time = new Date();
  }

  public static fail<T>(message: string = '') : DataResult<T> {
    return new DataResult(-1, message, null);
  }

  public static ok<T>(data: T) : any {
    return data;
  }
}
