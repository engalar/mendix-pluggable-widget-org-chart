import { computed, observable } from "mobx";

export class EmployeeOption {
    @observable public nameAttribute: string;

    constructor(nameAttribute: string) {
        this.nameAttribute = nameAttribute;
    }
}
export class OrgEmployee {
    @observable public mxobj: mendix.lib.MxObject;
    @computed public get name(): string {
        return this.mxobj.get(this.opt.nameAttribute) as string;
    }

    constructor(public opt: EmployeeOption, mxobj: mendix.lib.MxObject) {
        this.mxobj = mxobj;
    }
}
