export class Comment{

    constructor(
       
        private _text: string
      ) {}
    
   
 

  public get text(): string {
    return this._text;
  }

  public set text(value: string) {
    this._text = value;
  }
    
      public tojson(): object {
        return {
          // id: this.id,
          text: this.text,
        };
      }

       // public get id(): number | null {
  //   return this._id;
  // }

  // public set id(id: number | null) {
  //   this._id = id;
  // }
    }