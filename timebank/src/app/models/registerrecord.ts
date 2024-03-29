export class RegisterRecord {
    constructor(
        public service_id: any,
        public consumer_id: any,
        public service_status: string,
        public id?: number,
        public hours?: number,
        public end_time?: Date,
        public end_rating?:number,
        public rating?:number,
    ) {}
}

export class GetRegisterRecord {
    constructor(
        public title: string,
        public service_id: number,
        public consumer_id: number,
        public service_status: string,
        public phone: string,
        public user_name: string,
        public id?: number,
        public hours?: number,
        public end_time?: Date,
        public end_rating?:any,
        public rating?:number,
    ) {}
}

export class ProvRegisterRecord {
    constructor(
        public end_time: Date,
        public hours: number,
        public rating:number,
        public title: string,
        public consumer_id: number,   
    ) {}
}

export class EndRegisterRecord {
    constructor(
        public id: number,
        public hours: number,
        public rating?:number,
    ) {}
}