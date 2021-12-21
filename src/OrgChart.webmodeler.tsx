import { Component, ReactNode, createElement } from "react";
import { OrgChartContainerProps, OrgChartPreviewProps } from "../typings/OrgChartProps";

declare function require(name: string): string;
type VisibilityMap = {
    [P in keyof OrgChartContainerProps]: boolean;
};
export class preview extends Component<OrgChartPreviewProps> {
    render(): ReactNode {
        return <div>No preview available</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}

export function getVisibleProperties(props: OrgChartContainerProps, visibilityMap: VisibilityMap): VisibilityMap {
    visibilityMap.nodeConstraint = props.nodeDataSource === "xpath";
    visibilityMap.nodeGetDataMicroflow = props.nodeDataSource === "microflow";
    visibilityMap.nodeGetDataNanoflow = props.nodeDataSource === "nanoflow";

    return visibilityMap;
}

