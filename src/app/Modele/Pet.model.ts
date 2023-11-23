

export class Pet{



    constructor(

        private _id:number|null,
        private _name:string,
        private  _petType:string,
        private _fact:string,
        private _img_url:string,
       
       
    ){}
    

  public get id(): number | null {
        return this._id;
    }

   public get name(): string {
        return this._name;
    }

    public get petType(): string {
        return this._petType;
    }

    public get fact(): string {
        return this._fact;
    }

    public get img_url(): string {
        return this._img_url;
    }

    // Setter methods
    public set id(id: number | null) {
        this._id = id;
    }

     public set name(value: string) {
        this._name = value;
    }

    public set petType(value: string) {
        this._petType = value;
    }

    public set fact(value: string) {
        this._fact = value;
    }

    public set img_url(value: string) {
        this._img_url = value;
    }

    

    public tojson():object{
        return{

            id:this.id,
            name:this.name,
            petType:this.petType,
            fact:this.fact,
            img_url:this.img_url,

        };
    }


    //  getComments(): Comment[] {
    //     return this._comments;
    //   }
    
    //   public set comments(value: Comment[]) {
    //     this._comments = value;
    //   }
}