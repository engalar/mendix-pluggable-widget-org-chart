/**
 * This file was generated from OrgChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type NodeDataSourceEnum = "xpath" | "microflow" | "nanoflow";

export type NodeLoadScenarioEnum = "all" | "top";

export type ChildScenarioEnum = "reference" | "action";

export type ChildActionMethodEnum = "microflow" | "nanoflow";

export type RelationTypeEnum = "nodeParent" | "nodeChildren";

export type EventNodeOnClickActionEnum = "nothing" | "microflow" | "nanoflow" | "open";

export type EventNodeClickFormatEnum = "single" | "double";

export type EventNodeOnClickOpenPageAsEnum = "content" | "popup" | "modal";

export interface OrgChartContainerProps extends CommonProps {
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
    styleObject: CSSProperties;
    nodeEntity: any;
    nodeDataSource: NodeDataSourceEnum;
    nodeConstraint?: any;
    nodeGetDataMicroflow?: any;
    nodeGetDataNanoflow?: any;
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

export interface VisibilityMap {
    nodeEntity: boolean;
    nodeDataSource: boolean;
    nodeConstraint: boolean;
    nodeGetDataMicroflow: boolean;
    nodeGetDataNanoflow: boolean;
    nodeLoadScenario: boolean;
    nodeIsRootAttr: boolean;
    childScenario: boolean;
    childActionMethod: boolean;
    childActionMicroflow: boolean;
    childActionNanoflow: boolean;
    relationType: boolean;
    relationNodeParent: boolean;
    relationNodeParentHasChildAttr: boolean;
    relationChildReference: boolean;
    eventNodeOnClickAction: boolean;
    eventNodeClickFormat: boolean;
    eventNodeOnClickMicroflow: boolean;
    eventNodeOnClickNanoflow: boolean;
    eventNodeOnClickForm: boolean;
    eventNodeOnClickOpenPageAs: boolean;
}
