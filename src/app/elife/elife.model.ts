export class ELifeModel
{
    public order_id:number;
    public order_state:string;
    public order_desc;
    public order_count:number;
    constructor(order_id:number,order_state:string,order_desc:string, order_count:number)
    {
        this.order_id=order_id;
        this.order_state=order_state;
        this.order_desc = order_desc;
        this.order_count=order_count;
    }
}