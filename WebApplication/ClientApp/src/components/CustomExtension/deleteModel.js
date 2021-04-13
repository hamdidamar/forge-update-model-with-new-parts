import './deleteModel.css'

import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default function RegisterDeleteModelTool() {


    var Autodesk = window.Autodesk;
    var AutodeskNamespace = window.AutodeskNamespace;
    var THREE = window.THREE;
    AutodeskNamespace("Autodesk.ADN.Viewing.Extension");


    Autodesk.ADN.Viewing.Extension.DeleteModelExtensionTool = function (viewer) {

        var viewer = window.viewer;

        var _selectedModel = null;


        function DeleteModelExtensionTool() {


            //set selected model
            function setSelectedModel() {
                try {
                    _selectedModel = viewer.getAggregateSelection()[0].model;
                } catch (error) {
                    _selectedModel = viewer.model;
                }
            }


            this.activate = function () {

                viewer.addEventListener(
                    Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,
                    setSelectedModel);

                console.log("Delete Model Extension Activated")
                //alert("Delete model tool activated!");

                
                document.addEventListener('keydown',deleteEventListener,true);
                

                

                // set style
                var ex = document.getElementsByClassName("deleteModelExtensionIcon");
                ex[0].style.backgroundColor = "blue"

            }

            this.deactivate = function () {

                viewer.removeEventListener(
                    Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,
                    setSelectedModel);

                //set style
                var ex = document.getElementsByClassName("deleteModelExtensionIcon");
                ex[0].style.backgroundColor = ""


                console.log("Delete Model Extension deactivated")
                //alert("Delete model tool deactivated!");

                document.removeEventListener('keydown',deleteEventListener,true);

            }

            // for add and remove event
            function deleteEventListener(event){
                if (event.code === "Delete") {
                    setSelectedModel();
                    if (_selectedModel != viewer.model) {
                        viewer.impl.unloadModel(_selectedModel);
                        alertify.success("Selected model deleted!");
                    }
                    else if (_selectedModel === viewer.model) {
                        alertify.error("Main model cannot delete!");
                    }
                    else{
                        alertify.error("Delete extension is deactivate");
                    }

                }
            }


            this.getNames = function () {
                return ['deleteModelExtensionTool'];
            };
            this.getName = function () {

                return 'deleteModelExtensionTool';
            };
        }

        Autodesk.Viewing.Extension.call(this, viewer);
        var _self = this;

        _self.tool = null;

        _self.toolactivated = false;

        _self.onToolbarCreated = function () {
            // Create a new toolbar group if it doesn't exist
            this._group = this.viewer.toolbar.getControl('CustomExtensionsToolbar');
            if (!this._group) {
                this._group = new Autodesk.Viewing.UI.ControlGroup('CustomExtensionsToolbar');
                this.viewer.toolbar.addControl(this._group);
            }
            // Add a new button to the toolbar group
            this._button = new Autodesk.Viewing.UI.Button('DeleteModelExtensionToolButton');
            this._button.onClick = (ev) => {
                // Execute an action here
                if (!_self.toolactivated) {
                    _self.initialize();
                    _self.toolactivated = true;
                } else {

                    viewer.toolController.deactivateTool(_self.tool.getName());
                    _self.toolactivated = false;
                }
            };
            if (_self.toolactivated) {
                this._button.setToolTip('Terminate Delete Model Tool');
            }
            else {
                this._button.setToolTip('Delete Model Extension');
            }
            this._button.addClass('deleteModelExtensionIcon');
            this._group.addControl(this._button);
        };
        _self.initialize = function () {
            _self.tool = new DeleteModelExtensionTool();
            viewer.toolController.registerTool(_self.tool);

            //Set first model
            if (_selectedModel == null) {
                _selectedModel = this.viewer.model;
            }

            if (_selectedModel.getInstanceTree()) {
                _self.customize();
            } else {
                this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, _self.customize());
            }
        };
        _self.customize = function () {
            viewer.toolController.activateTool(_self.tool.getName());
        };
        _self.unload = function () {
            if (_self.tool) viewer.toolController.deactivateTool(_self.tool.getName());
            // Clean our UI elements if we added any
            if (this._group) {
                this._group.removeControl(this._button);
                if (this._group.getNumberOfControls() === 0) {
                    this.viewer.toolbar.removeControl(this._group);
                }
            }
            console.log('Autodesk.ADN.Viewing.Extension.DeleteModelTool unloaded');
            return true;
        };

    }


    Autodesk.ADN.Viewing.Extension.DeleteModelExtensionTool.prototype =
        Object.create(Autodesk.Viewing.Extension.prototype);

    Autodesk.ADN.Viewing.Extension.DeleteModelExtensionTool.prototype.constructor =
        Autodesk.ADN.Viewing.Extension.DeleteModelExtensionTool;

    Autodesk.Viewing.theExtensionManager.registerExtension(
        'DeleteModelExtension',
        Autodesk.ADN.Viewing.Extension.DeleteModelExtensionTool);

}