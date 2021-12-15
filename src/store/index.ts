import { action, computed, configure, observable, set } from "mobx";
import { OrgEmployee, EmployeeOption } from "./objects/employee";
import { OrgEdge } from "./objects/OrgEdge";

configure({ enforceActions: "observed", isolateGlobalState: true });

export class Store {
    employees = observable.map();
    @computed
    public get edges(): OrgEdge[] {
        const edges: OrgEdge[] = [];
        this.employees.forEach(employee => {
            console.log(employee.name);
            edges.push({ from: employee.name, to: employee.name });
        });
        return edges;
    }

    employeeOption: EmployeeOption;

    @action
    load(objs: mendix.lib.MxObject[] | null) {
        objs?.forEach(obj => {
            set(this.employees, obj.getGuid(), new OrgEmployee(this.employeeOption, obj));
        });
    }
    constructor(public nameAttribute: string) {
        this.employeeOption = {
            nameAttribute
        };
    }
}
