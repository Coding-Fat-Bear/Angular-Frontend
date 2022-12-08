

export class Clock { 
    private helper : Date  ;
    public constructor(private _hour: string , private _min: string ) {
        
    }
    // private _hour: string;
    public get hour(): string {

        return this._hour;
    }
    public set hour(value: string) {
        if(parseInt(value,10)<10)value='0'+value;
        this._hour = value;
    }
    // private _min: string;
    public get min(): string {
        return this._min;
    }
    public set min(value: string) {
        this._min = value;
    }
    
    public dateParse  (hour:string,min:string) {
        const selected  = new Date(0,0,0,Number(hour),Number(min),0);
        return selected;
    }
} 