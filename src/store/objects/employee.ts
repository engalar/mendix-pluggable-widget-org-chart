import { getReferencePart } from "@jeltemx/mendix-react-widget-utils";
import { computed, observable } from "mobx";
import { OrgEdge } from "./OrgEdge";

export class EmployeeOption {
    @observable public nameAttribute: string;
    @observable public parentAttribute: string;

    constructor(nameAttribute: string, nodeParentPath: string) {
        this.nameAttribute = nameAttribute;
        this.parentAttribute = getReferencePart(nodeParentPath, "referenceAttr");
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
    @computed public get parentEdge(): OrgEdge | undefined {
        const toGuid = this.mxobj.get(this.opt.parentAttribute) as string;
        return toGuid
            ? {
                  to: this.mxobj.getGuid(),
                  from: toGuid
              }
            : undefined;
    }
}
