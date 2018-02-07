export class Paging<TItem>{
    public data: TItem[];
    public totalCount: number;

    constructor(data: TItem[], totalCount: number){
        this.data = data;
        this.totalCount = totalCount;
    }
}