import { Component, ReactNode, createElement } from "react";
import { OrgChartPreviewProps } from "../typings/OrgChartProps";

declare function require(name: string): string;

export class preview extends Component<OrgChartPreviewProps> {
    render(): ReactNode {
        return <div>No preview available</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}