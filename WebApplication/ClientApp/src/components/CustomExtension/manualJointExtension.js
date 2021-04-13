
import './manualJointExtension.css'

import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default function RegisterManualJointTool() {

    var Autodesk = window.Autodesk;
    var AutodeskNamespace = window.AutodeskNamespace;
    var THREE = window.THREE;


    AutodeskNamespace("Autodesk.ADN.Viewing.Extension");

    Autodesk.ADN.Viewing.Extension.ManualJointTool = function (viewer) {

        var viewer = window.viewer;

        function ManualJointTool() {



            ///////////////////////////////////////////////////////////////////////////
            // activates tool
            ///////////////////////////////////////////////////////////////////////////
            this.activate = function () {

                console.log("Manual joint activated")

                var manualJoint = document.getElementById("manualJoint");
                manualJoint.style.display = "inline";
                manualJoint.style.overflow = "auto";
                manualJoint.style.padding = "16px";
                manualJoint.style.flex = "auto";


                var parameters = document.getElementsByClassName("css-ikmqyx");
                for (let i = 0; i < parameters.length; i++) {
                    parameters[i].disabled = true;
                    
                }

                //set visible  buttuons
                var updateButton = document.getElementById("updateButton");
                var manualJointUpdateButton = document.getElementById("manualJointUpdateButton");
                var resetButton = document.getElementById("resetButton");
                updateButton.style.display ="none";
                resetButton.style.display ="none"
                manualJointUpdateButton.style.display ="flex"

                alertify.set('notifier','delay', 3);
                alertify.set('notifier','position', 'bottom-right');
                alertify.warning("Enter the panel widths in mm, separated by commas.Each number entered will correspond to a panel. For example; 2300,2700,4000 The values will create 3 separate panels with the entered values.")
            }


            ///////////////////////////////////////////////////////////////////////////
            // deactivates tool
            ///////////////////////////////////////////////////////////////////////////
            this.deactivate = function () {

                console.log("Manual joint deactivated")

                var manualJoint = document.getElementById("manualJoint");
                manualJoint.style.display = "none";

                var parameters = document.getElementsByClassName("css-ikmqyx");
                for (let i = 0; i < parameters.length; i++) {
                    parameters[i].disabled = false;
                    
                }

                 //set visible  buttuons
                 var updateButton = document.getElementById("updateButton");
                 var manualJointUpdateButton = document.getElementById("manualJointUpdateButton");
                 var resetButton = document.getElementById("resetButton");
                 updateButton.style.display ="flex";
                 updateButton.style.textAlign ="center"
                 resetButton.style.display ="flex"
                 manualJointUpdateButton.style.display ="none"

            }


            this.getNames = function () {

                return ['manualJointTool'];
            };

            this.getName = function () {

                return 'manualJointTool';
            };




        }







        Autodesk.Viewing.Extension.call(this, viewer);

        var _self = this;

        _self.tool = null;

        _self.toolactivated = false;

        ///////////////////////////////////////////////////////
        // extension load callback
        //
        ///////////////////////////////////////////////////////
        _self.load = function () {

            console.log('Autodesk.ADN.Viewing.Extension.EditModelTool loaded');

            return true;
        };

        _self.onToolbarCreated = function () {
            // Create a new toolbar group if it doesn't exist
            this._group = this.viewer.toolbar.getControl('CustomExtensionsToolbar');
            if (!this._group) {
                this._group = new Autodesk.Viewing.UI.ControlGroup('CustomExtensionsToolbar');
                this.viewer.toolbar.addControl(this._group);
            }

            // Add a new button to the toolbar group
            this._button = new Autodesk.Viewing.UI.Button('ManualJointToolButton');
            this._button.onClick = (ev) => {
                // Execute an action here
                if (!_self.toolactivated) {
                    _self.initialize();
                    _self.toolactivated = true;
                } else {
                    viewer.toolController.deactivateTool(_self.tool.getName());
                    _self.toolactivated = false;
                    // document.getElementById("modelEditSave").removeEventListener("click", function () {
                    //     console.log("Edit Model Extension Deactivate");
                    // })
                }
            };
            this._button.setToolTip('Manual Joint Extension');
            this._button.addClass('ManualJointToolIcon');
            this._group.addControl(this._button);
        };

        _self.initialize = function () {
            _self.tool = new ManualJointTool();

            viewer.toolController.registerTool(_self.tool);

            if (viewer.model.getInstanceTree()) {
                _self.customize();
            } else {
                this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, _self.customize());
            }
        };

        _self.customize = function () {
            viewer.toolController.activateTool(_self.tool.getName());
        };

        ///////////////////////////////////////////////////////
        // extension unload callback
        //
        ///////////////////////////////////////////////////////
        _self.unload = function () {

            if (_self.tool) viewer.toolController.deactivateTool(_self.tool.getName());
            // document.getElementById("modelEditSave").removeEventListener("click", function () {
            //     console.log("Edit Model Extension Deactivate");
            // })
            // Clean our UI elements if we added any
            if (this._group) {
                this._group.removeControl(this._button);
                if (this._group.getNumberOfControls() === 0) {
                    this.viewer.toolbar.removeControl(this._group);
                }
            }
            console.log('Manual Joint unloaded');

            return true;
        };

        ///////////////////////////////////////////////////////
        // new random guid
        //
        ///////////////////////////////////////////////////////
        function guid() {

            var d = new Date().getTime();

            var guid = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(
                /[xy]/g,
                function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
                });

            return guid;
        };

    };

    Autodesk.ADN.Viewing.Extension.ManualJointTool.prototype =
        Object.create(Autodesk.Viewing.Extension.prototype);

    Autodesk.ADN.Viewing.Extension.ManualJointTool.prototype.constructor =
        Autodesk.ADN.Viewing.Extension.ManualJointTool;

    Autodesk.Viewing.theExtensionManager.registerExtension(
        'ManualJointExtension',
        Autodesk.ADN.Viewing.Extension.ManualJointTool);
}
