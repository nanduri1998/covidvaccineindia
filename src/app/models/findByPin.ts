export class FindByPIN {
    centers: Centers[];
}

export class Centers {
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
    fee: number;
    sessions: Sessions[];
}

export class Sessions{
    // tslint:disable-next-line: variable-name
    session_id: string;
    date: string;
    // tslint:disable-next-line: variable-name
    available_capacity: number;
    // tslint:disable-next-line: variable-name
    min_age_limit: number;
    vaccine: string;
    slots: string[];
}
