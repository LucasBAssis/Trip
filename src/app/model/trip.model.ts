export interface ITrip {
    trem?: string;
    local?: string;
    tripAtivo?: string;
    falha?: string;
}

export class Trip {
    constructor(
        public trem?: string,
        public loca?: string, 
        public tripAtivo?: string,
        public falha?: string
    ) {}
}