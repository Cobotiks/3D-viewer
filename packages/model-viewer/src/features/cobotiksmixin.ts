
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



import ModelViewerElementBase, {$needsRender, $scene, $tick, toVector2D, toVector3D, Vector2D, Vector3D} from '../model-viewer-base.js';

import {Constructor} from '../utilities.js';



export declare type HotspotData = {
  position: Vector3D,
  normal: Vector3D,
  canvasPosition: Vector3D,
  facingCamera: boolean,
}

export declare interface CobotiksInterface {

  queryUserData():any;

}

/**
 * AnnotationMixin implements a declarative API to add hotspots and annotations.
 * Child elements of the <model-viewer> element that have a slot name that
 * begins with "hotspot" and data-position and data-normal attributes in
 * the format of the camera-target attribute will be added to the scene and
 * track the specified model coordinates.
 */
export const CobotiksMixin = <T extends Constructor<ModelViewerElementBase>>(
    ModelViewerElement: T): Constructor<CobotiksInterface>&T => {
  class CobotiksModelViewerElement extends ModelViewerElement {
    


    connectedCallback() {
      super.connectedCallback();

 
    }

    disconnectedCallback() {
      super.disconnectedCallback();


    }

    [$tick](time: number, delta: number) {
      super[$tick](time, delta);
      const scene = this[$scene];


      
    }

    /**
     * Since the data-position and data-normal attributes are not observed, use
     * this method to move a hotspot. Keep in mind that all hotspots with the
     * same slot name use a single location and the first definition takes
     * precedence, until updated with this method.
     */


    /**
     * This method returns in-scene data about a requested hotspot including
     * its position in screen (canvas) space and its current visibility.
     */



    queryUserData(): any {

        const scene = this[$scene];
        return scene.children[0];
      }

    /**
     * This method returns the model position, normal and texture coordinate
     * of the point on the mesh corresponding to the input pixel coordinates
     * given relative to the model-viewer element. The position and normal
     * are returned as strings in the format suitable for putting in a
     * hotspot's data-position and data-normal attributes. If the mesh is
     * not hit, the result is null.
     */


    /**
     * This method returns a dynamic hotspot ID string of the point on the mesh
     * corresponding to the input pixel coordinates given relative to the
     * model-viewer element. The ID string can be used in the data-surface
     * attribute of the hotspot to make it follow this point on the surface even
     * as the model animates. If the mesh is not hit, the result is null.
     */





  }

  return CobotiksModelViewerElement;
};
