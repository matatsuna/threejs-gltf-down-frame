import fs from "fs";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
// globalThis.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// globalThis.atob = require("atob");
console.log("hogehuga");
let gltfLoader = new GLTFLoader();
gltfLoader.setCrossOrigin('anonymous');
gltfLoader.setDRACOLoader(new DRACOLoader());
// gltfLoader.setDRACOLoader(new DRACOLoader().setPath('../draco/'));
const GLTFURL = "box.glb";

let buf = fs.readFileSync(GLTFURL);
let gltf = toArrayBuffer(buf);

gltfLoader.parse(gltf, "", ((data) => {
    console.log(data.animations);
    console.log(data);
}));
let gltfExporter = new GLTFExporter();


// https://qiita.com/PyYoshi@github/items/899e2ce3ec636869196c
function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}