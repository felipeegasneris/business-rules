export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  copyData?: (data: any) => void;
  isValidTitle?: (additionalValidator?: (value: string) => boolean) => boolean;
  isValidBody?: (additionalValidator?: (value: string) => boolean) => boolean;
  isValid?: () => boolean;
}

export class Post implements IPost {
  public userId: number = 0;
  public id: number = 0;
  public title: string = '';
  public body: string = '';
  private _validTitle: boolean | undefined;
  private _validBody: boolean | undefined;

  public isValidTitle(validator?: (value: string) => boolean): boolean {
    this._validTitle = this._validateTitle() && (!validator ? true : validator(this.title));
    return this._validTitle;
  }

  public isValidBody(validator?: (value: string) => boolean): boolean {
    this._validBody = this._validateBody() && (!validator ? true : validator(this.body));
    return this._validBody;
  }

  public isValid(): boolean {
    if (
      (
        this._validTitle &&
        this._validBody
      ) ||
      (
        this._validTitle &&
        this._validBody === undefined &&
        this._validateBody()
      ) ||
      (
        this._validTitle === undefined &&
        this._validateTitle() &&
        this._validBody
      ) ||
      (
        this._validTitle === undefined &&
        this._validBody === undefined &&
        this._validateTitle() &&
        this._validateBody()
      )
    ) {
      return true;
    }

    return false;
  }

  public copyData(data: any): void {
    const {
      id,
      userId,
      title,
      body,
    } = data;

    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }


  private _validateTitle(): boolean {
    return this.title.trim() !== '' && this.title.trim().length < 256;
  }

  private _validateBody(): boolean {
    return this.body.trim() !== '' && this.body.trim().length > 10;
  }
}
