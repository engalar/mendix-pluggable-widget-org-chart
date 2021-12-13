import { createElement, useEffect } from "react";
import {
    fetchByXpath
} from "@jeltemx/mendix-react-widget-utils";

import { TreeViewContainerProps } from "../typings/TreeViewProps";


import "./ui/index.scss";


export default function TreeView(props: TreeViewContainerProps & {
    uniqueid: string;
    friendlyId?: string;
    mxform: mxui.lib.form._FormBase;
    mxObject?: mendix.lib.MxObject;
}) {
    console.log(props);

    useEffect(() => {
        if (props.mxObject) {
            fetchByXpath(props.mxObject, props.nodeEntity, props.nodeConstraint).then(objs => {
                console.log(objs);
                debugger
            });
        }
    }, [props.mxObject, props.nodeEntity, props.nodeConstraint]);

    return (
        <div>
            b3
        </div>
    )
}

