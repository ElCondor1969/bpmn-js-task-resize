# bpmn-js-task-resize
BPMN-JS plugin to allow task resizing in diagrams.

## Usage

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';

import resizeTask from 'bpmn-js-task-resize/lib';

var bpmnJS = new BpmnModeler({
  additionalModules: [
    resizeTask
  ],
  taskResizingEnabled: true,
});
```

In order to allow resize events to, set the `eventResizingEnabled` config:

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';

import resizeTask from 'bpmn-js-task-resize/lib';

var bpmnJS = new BpmnModeler({
  additionalModules: [
    resizeTask
  ],
  taskResizingEnabled: true,
  eventResizingEnabled: true
});
```

## Building

To build, run:

```
npm install
npm run bundle
```
