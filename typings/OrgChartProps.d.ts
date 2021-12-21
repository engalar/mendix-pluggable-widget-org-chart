/**
 * This file was generated from OrgChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */

export type NodeDataSourceEnum = "xpath" | "microflow" | "nanoflow" | "nodeAssociation";

export type NodeLoadScenarioEnum = "all" | "top";

export type ChildScenarioEnum = "reference" | "action";

export type ChildActionMethodEnum = "microflow" | "nanoflow";

export type RelationTypeEnum = "nodeParent" | "nodeChildren";

export type EventNodeOnClickActionEnum = "nothing" | "microflow" | "nanoflow" | "open";

export type EventNodeClickFormatEnum = "single" | "double";

export type EventNodeOnClickOpenPageAsEnum = "content" | "popup" | "modal";

export interface OrgChartContainerProps {
    name: string;
    class: string;
    style: string;
    tabIndex: number;
    nodeEntity: any;
    nameAttribute: string;
    nodeDataSource: NodeDataSourceEnum;
    nodeConstraint?: any;
    nodeGetDataMicroflow?: any;
    nodeGetDataNanoflow?: any;
    nodeAssociation?: string;
    selectedAssociation: string;
    nodeLoadScenario: NodeLoadScenarioEnum;
    nodeIsRootAttr?: string;
    childScenario: ChildScenarioEnum;
    childActionMethod: ChildActionMethodEnum;
    childActionMicroflow?: any;
    childActionNanoflow?: any;
    relationType: RelationTypeEnum;
    relationNodeParent?: any;
    relationNodeParentHasChildAttr?: string;
    relationChildReference?: any;
    eventNodeOnClickAction: EventNodeOnClickActionEnum;
    eventNodeClickFormat: EventNodeClickFormatEnum;
    eventNodeOnClickMicroflow?: any;
    eventNodeOnClickNanoflow?: any;
    eventNodeOnClickForm?: any;
    eventNodeOnClickOpenPageAs: EventNodeOnClickOpenPageAsEnum;
}

export interface OrgChartPreviewProps {
    class: string;
    style: string;
    nodeEntity: any;
    nameAttribute: string;
    nodeDataSource: NodeDataSourceEnum;
    nodeConstraint: any;
    nodeGetDataMicroflow: any;
    nodeGetDataNanoflow: any;
    nodeLoadScenario: NodeLoadScenarioEnum;
    nodeIsRootAttr: string;
    childScenario: ChildScenarioEnum;
    childActionMethod: ChildActionMethodEnum;
    childActionMicroflow: any;
    childActionNanoflow: any;
    relationType: RelationTypeEnum;
    relationNodeParent: any;
    relationNodeParentHasChildAttr: string;
    relationChildReference: any;
    eventNodeOnClickAction: EventNodeOnClickActionEnum;
    eventNodeClickFormat: EventNodeClickFormatEnum;
    eventNodeOnClickMicroflow: any;
    eventNodeOnClickNanoflow: any;
    eventNodeOnClickForm: any;
    eventNodeOnClickOpenPageAs: EventNodeOnClickOpenPageAsEnum;
}
