/**
 * This file was generated from OrgChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type NodeDataSourceEnum = "xpath" | "microflow" | "nanoflow";

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
    style?: CSSProperties;
    tabIndex: number;
    nodeEntity: any;
    nodeDataSource: NodeDataSourceEnum;
    nodeConstraint?: any;
    nodeGetDataMicroflow?: any;
    nodeGetDataNanoflow?: any;
    nodeLoadScenario: NodeLoadScenarioEnum;
    nodeIsRootAttr?: EditableValue<boolean>;
    childScenario: ChildScenarioEnum;
    childActionMethod: ChildActionMethodEnum;
    childActionMicroflow?: any;
    childActionNanoflow?: any;
    relationType: RelationTypeEnum;
    relationNodeParent?: any;
    relationNodeParentHasChildAttr?: EditableValue<boolean>;
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
