/**
 * This file was generated from TreeView.xml
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

export type UiNodeTitleTypeEnum = "attribute" | "nanoflow";

export type EventNodeOnClickActionEnum = "nothing" | "microflow" | "nanoflow" | "open";

export type EventNodeClickFormatEnum = "single" | "double";

export type EventNodeOnClickOpenPageAsEnum = "content" | "popup" | "modal";

export type StateManagementTypeEnum = "disabled" | "localStorage";

export type StateLocalStorageTypeEnum = "session" | "local";

export interface TreeViewContainerProps extends CommonProps {
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
    uiNodeTitleType: UiNodeTitleTypeEnum;
    uiNodeTitleAttr?: EditableValue<string>;
    uiNodeTitleNanoflow?: any;
    uiNodeRenderAsHTML: boolean;
    uiNodeIconAttr?: EditableValue<string>;
    uiNodeIconIsGlyphicon: boolean;
    uiNodeClassName?: EditableValue<string>;
    uiTableShowLines: boolean;
    uiSwitcherBg?: string;
    dragIsDraggable: boolean;
    searchEnabled: boolean;
    searchHelperEntity?: any;
    searchStringAttribute?: EditableValue<string>;
    searchNodeReference?: any;
    searchNanoflow?: any;
    eventNodeOnClickAction: EventNodeOnClickActionEnum;
    eventNodeClickFormat: EventNodeClickFormatEnum;
    eventNodeOnClickMicroflow?: any;
    eventNodeOnClickNanoflow?: any;
    eventNodeOnClickForm?: any;
    eventNodeOnClickOpenPageAs: EventNodeOnClickOpenPageAsEnum;
    selectionSelectOnClick: boolean;
    stateManagementType: StateManagementTypeEnum;
    stateLocalStorageType: StateLocalStorageTypeEnum;
    stateLocalStorageTime: number;
    stateLocalStorageKey?: string;
    stateLocalStorageKeyIncludeGUID: boolean;
    stateExecuteSelectActionOnRestore: boolean;
    experimentalExposeSetSelected: boolean;
}

export interface TreeViewPreviewProps {
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
    uiNodeTitleType: UiNodeTitleTypeEnum;
    uiNodeTitleAttr?: string;
    uiNodeTitleNanoflow?: any;
    uiNodeRenderAsHTML: boolean;
    uiNodeIconAttr?: string;
    uiNodeIconIsGlyphicon: boolean;
    uiNodeClassName?: string;
    uiTableShowLines: boolean;
    uiSwitcherBg?: string;
    dragIsDraggable: boolean;
    searchEnabled: boolean;
    searchHelperEntity?: any;
    searchStringAttribute?: string;
    searchNodeReference?: any;
    searchNanoflow?: any;
    eventNodeOnClickAction: EventNodeOnClickActionEnum;
    eventNodeClickFormat: EventNodeClickFormatEnum;
    eventNodeOnClickMicroflow?: any;
    eventNodeOnClickNanoflow?: any;
    eventNodeOnClickForm?: any;
    eventNodeOnClickOpenPageAs: EventNodeOnClickOpenPageAsEnum;
    selectionSelectOnClick: boolean;
    stateManagementType: StateManagementTypeEnum;
    stateLocalStorageType: StateLocalStorageTypeEnum;
    stateLocalStorageTime: number;
    stateLocalStorageKey?: string;
    stateLocalStorageKeyIncludeGUID: boolean;
    stateExecuteSelectActionOnRestore: boolean;
    experimentalExposeSetSelected: boolean;
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
    uiNodeTitleType: boolean;
    uiNodeTitleAttr: boolean;
    uiNodeTitleNanoflow: boolean;
    uiNodeRenderAsHTML: boolean;
    uiNodeIconAttr: boolean;
    uiNodeIconIsGlyphicon: boolean;
    uiNodeClassName: boolean;
    uiTableShowLines: boolean;
    uiSwitcherBg: boolean;
    dragIsDraggable: boolean;
    searchEnabled: boolean;
    searchHelperEntity: boolean;
    searchStringAttribute: boolean;
    searchNodeReference: boolean;
    searchNanoflow: boolean;
    eventNodeOnClickAction: boolean;
    eventNodeClickFormat: boolean;
    eventNodeOnClickMicroflow: boolean;
    eventNodeOnClickNanoflow: boolean;
    eventNodeOnClickForm: boolean;
    eventNodeOnClickOpenPageAs: boolean;
    selectionSelectOnClick: boolean;
    stateManagementType: boolean;
    stateLocalStorageType: boolean;
    stateLocalStorageTime: boolean;
    stateLocalStorageKey: boolean;
    stateLocalStorageKeyIncludeGUID: boolean;
    stateExecuteSelectActionOnRestore: boolean;
    experimentalExposeSetSelected: boolean;
}
