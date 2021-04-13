import React, { Component } from 'react'
import './modelLoadContainer.css';
//import * as dragDrop from './DragDropControls.js';


export default class ModelLoadContainer extends Component {

    onSelectPartChange() {
        var partName = document.getElementById("partSlct").value;
        var models = document.getElementsByClassName("model");
        //show select model
        models.forEach(model => {
            if (partName == model.id) {
                console.log(partName);
                model.style.display = "inline";
            }
        });
        //hide other models
        models.forEach(model => {
            if (partName == model.id) {
                model.style.display = "inline";
            }
            else {
                model.style.display = "none";
            }
        });

        //set model urn
        if (partName != "-") {
            var modelUrn = document.getElementById(partName).getAttribute("urn");
            document.getElementById("selectedModelUrn").innerHTML = modelUrn;
        }
        else{
            document.getElementById("selectedModelUrn").innerHTML = "-";
        }
        //console.log(partName + ":" + modelUrn)

    }


    setUrn(modelId) {
        var x = document.getElementById(modelId).getAttribute("urn");
        document.getElementById("selectedModelUrn").innerHTML = x;
        alert(modelId + "selected");
        var loadedModelNames = [];
        window.loadedModelNames = loadedModelNames;

    }

    render() {
        return (
            <div id="modelLoadContainer" className="modelLoadContainer">
                <h4 id="transformHeader">Edit/Load Model</h4>


                <label id="modelLoadSelection" className="boxes" >Select Model

                <select id="partSlct" onChange={this.onSelectPartChange}>
                        <option >-</option>
                        <option value="Single Door (Left) 800 2000">Single Door (Left) 800 2000</option>
                        <option value="Single Door (Left) 1000 2000">Single Door (Left) 1000 2000</option>
                        <option value="Single Door (Left) 1220 2150">Single Door (Left) 1220 2150</option>

                        <option value="Single Door (Right) 800 2000">Single Door (Right) 800 2000</option>
                        <option value="Single Door (Right) 1000 2000">Single Door (Right) 1000 2000</option>
                        <option value="Single Door (Right) 1220 2150">Single Door (Right) 1220 2150</option>

                        <option value="Double Door 800 2000">Double Door 800 2000</option>
                        <option value="Double Door 1000 2000">Double Door 1000 2000</option>
                        <option value="Double Door 1220 2150">Double Door 1220 2150</option>


                        <option value="Bi-Door 800 2000">Bi-Door 800 2000</option>
                        <option value="Bi-Door 1000 2000">Bi-Door 1000 2000</option>
                        <option value="Bi-Door 1220 2150">Bi-Door 1220 2150</option>


                        <option value="300 x 300 Aluminium Vent">300 x 300 Aluminium Vent</option>
                        <option value="410 x 500 Aluminium Vent">410 x 500 Aluminium Vent</option>
                        <option value="500 x 500 Galvanised Mild Steel Vent">500 x 500 Galvanised Mild Steel Vent</option>

                        <option value="300 x 300 Standart Cowl">300 x 300 Standart Cowl</option>
                        <option value="400 x 400 Standart Cowl">400 x 400 Standart Cowl</option>
                        <option value="410 x 500 Standart Cowl">410 x 500 Standart Cowl</option>
                        <option value="500 x 500 Standart Cowl">500 x 500 Standart Cowl</option>

                    </select>

                </label>


                <img id="Single Door (Left) 800 2000" onClick={() => this.setUrn('Single Door (Left) 800 2000')} class="model" src="/LoadModel/Single Door (Left) 800 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvU2luZ2xlJTIwRG9vciUyMChMZWZ0KSUyMDgwMCUyMDIwMDAuaWFtLnppcA" /> {/*onDragStart={dragDrop.onDragStart} */}
                <img id="Single Door (Left) 1000 2000" onClick={() => this.setUrn('Single Door (Left) 1000 2000')} class="model" src="/LoadModel/Single Door (Left) 1000 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvU2luZ2xlJTIwRG9vciUyMChMZWZ0KSUyMDEwMDAlMjAyMDAwLmlhbS56aXA" /> 
                <img id="Single Door (Left) 1220 2150" onClick={() => this.setUrn('Single Door (Left) 1220 2150')} class="model" src="/LoadModel/Single Door (Left) 1220 2150.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvU2luZ2xlJTIwRG9vciUyMChMZWZ0KSUyMDEyMjAlMjAyMTUwLmlhbS56aXA" />


                <img id="Single Door (Right) 800 2000" onClick={() => this.setUrn('Single Door (Right) 800 2000')} class="model" src="/LoadModel/Single Door (Right) 800 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvU2luZ2xlJTIwRG9vciUyMChSaWdodCklMjA4MDAlMjAyMDAwLmlhbS56aXA" /> {/*onDragStart={dragDrop.onDragStart} */}
                <img id="Single Door (Right) 1000 2000" onClick={() => this.setUrn('Single Door (Right) 1000 2000')} class="model" src="/LoadModel/Single Door (Right) 1000 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvU2luZ2xlJTIwRG9vciUyMChSaWdodCklMjAxMDAwJTIwMjAwMC5pYW0uemlw" /> 
                <img id="Single Door (Right) 1220 2150" onClick={() => this.setUrn('Single Door (Right) 1220 2150')} class="model" src="/LoadModel/Single Door (Right) 1220 2150.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvU2luZ2xlJTIwRG9vciUyMChSaWdodCklMjAxMjIwJTIwMjE1MC5pYW0uemlw" />


                <img id="Double Door 800 2000" onClick={() => this.setUrn('Double Door 800 2000')} class="model" src="/LoadModel/Double Door 800 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvRG91YmxlJTIwRG9vciUyMDgwMCUyMDIwMDAuaWFtLnppcA" /> 
                <img id="Double Door 1000 2000" onClick={() => this.setUrn('Double Door 1000 2000')} class="model" src="/LoadModel/Double Door 1000 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvRG91YmxlJTIwRG9vciUyMDEwMDAlMjAyMDAwLmlhbS56aXA" /> 
                <img id="Double Door 1220 2150" onClick={() => this.setUrn('Double Door 1220 2150')} class="model" src="/LoadModel/Double Door 1220 2150.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvRG91YmxlJTIwRG9vciUyMDEyMjAlMjAyMTUwLmlhbS56aXA" /> 
                
                <img id="Bi-Door 800 2000" onClick={() => this.setUrn('Bi-Door 800 2000')} class="model" src="/LoadModel/Bi-Door 800 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvQmktRG9vciUyMDgwMCUyMDIwMDAuaWFtLnppcA" /> 
                <img id="Bi-Door 1000 2000" onClick={() => this.setUrn('Bi-Door 1000 2000')} class="model" src="/LoadModel/Bi-Door 1000 2000.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvQmktRG9vciUyMDEwMDAlMjAyMDAwLmlhbS56aXA" /> 
                <img id="Bi-Door 1220 2150" onClick={() => this.setUrn('Bi-Door 1220 2150')} class="model" src="/LoadModel/Bi-Door 1220 2150.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvQmktRG9vciUyMDEyMjAlMjAyMTUwLmlhbS56aXA" /> 
                
                <img id="300 x 300 Aluminium Vent" onClick={() => this.setUrn('300 x 300 Aluminium Vent')} class="model" src="/LoadModel/300 x 300 Aluminium Vent.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvMzAwJTIweCUyMDMwMCUyMEFsdW1pbml1bSUyMFZlbnQuaXB0LnppcA" />
                <img id="410 x 500 Aluminium Vent" onClick={() => this.setUrn('410 x 500 Aluminium Vent')} class="model" src="/LoadModel/410 x 500 Aluminium Vent.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvNDEwJTIweCUyMDUwMCUyMEFsdW1pbml1bSUyMFZlbnQuaXB0LnppcA" />
                <img id="500 x 500 Galvanised Mild Steel Vent" onClick={() => this.setUrn('500 x 500 Galvanised Mild Steel Vent')} class="model" src="/LoadModel/500 x 500 Galvanised Mild Steel Vent.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvNTAwJTIweCUyMDUwMCUyMEdhbHZhbmlzZWQlMjBNaWxkJTIwU3RlZWwlMjBWZW50LmlwdC56aXA" />
                
                
                <img id="300 x 300 Standart Cowl" onClick={() => this.setUrn('300 x 300 Standart Cowl')} class="model" src="/LoadModel/300 x 300 Standart Cowl.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvMzAwJTIweCUyMDMwMCUyMFN0YW5kYXJ0JTIwQ293bC5pcHQuemlw" />
                <img id="400 x 400 Standart Cowl" onClick={() => this.setUrn('400 x 400 Standart Cowl')} class="model" src="/LoadModel/400 x 400 Standart Cowl.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvNDAwJTIweCUyMDQwMCUyMFN0YW5kYXJ0JTIwQ293bC5pcHQuemlw" />
                <img id="410 x 500 Standart Cowl" onClick={() => this.setUrn('410 x 500 Standart Cowl')} class="model" src="/LoadModel/410 x 500 Standart Cowl.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvNDEwJTIweCUyMDUwMCUyMFN0YW5kYXJ0JTIwQ293bC5pcHQuemlw" />
                <img id="500 x 500 Standart Cowl" onClick={() => this.setUrn('500 x 500 Standart Cowl')} class="model" src="/LoadModel/500 x 500 Standart Cowl.png" urn="urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXV0aGQtdmdvOXRudzI2a3dpaW5lZWVuc2t0YWUxZnVxejI3dnctNHY2LWM1NzE1NDQ2MWUxMDdjY2Q5OTcyZmM0ZWEwM2UzNTdjMzExOGQ1ZjUvNTAwJTIweCUyMDUwMCUyMFN0YW5kYXJ0JTIwQ293bC5pcHQuemlw" />


                <div class="transformInputs">
                    <label className="boxes">Top
                        <input id="TopRef" type="text" />
                    </label>

                    <label className="boxes" >Bottom <input id="BottomRef" type="text" /></label>

                    <label className="boxes" >Left <input id="LeftRef" type="text" /></label>

                    <label className="boxes"  >Right <input id="RightRef" type="text" /></label>

                </div>
                {/* 
                <button id="modelEditSave" className="css-ulcpt3">Save</button> */}
                <p id="selectedModelUrn">-</p>
            </div>

        )
    }
}
