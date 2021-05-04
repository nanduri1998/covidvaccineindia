export class FindByPIN {
    sessions: Session[];
}

export class Session {
    // tslint:disable-next-line: variable-name
    center_id: number;
    name: string;
    address: string;
    // tslint:disable-next-line: variable-name
    state_name: string;
    // tslint:disable-next-line: variable-name
    district_name: string;
    pincode: number;
    // tslint:disable-next-line: variable-name
    fee_type: string;
    // tslint:disable-next-line: variable-name
    available_capacity: number;
    fee: number;
    // tslint:disable-next-line: variable-name
    min_age_limit: number;
    vaccine: string;
    slots: string[];
}
