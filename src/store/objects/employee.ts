export interface EmployeeOption {
    nameAttribute: string;
}
export class Employee {
    public mxobj: mendix.lib.MxObject;
    constructor(public opt: EmployeeOption, mxobj: mendix.lib.MxObject) {
        this.mxobj = mxobj;
    }
}
