# bpmn-js-task-resize
BPMN-JS plugin to allow task resizing in diagrams.

## Usage

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';

import resizeTask from 'bpmn-js-task-resize/lib';

var bpmnJS = new BpmnModeler({
  additionalModules: [
    resizeTask
  ]
});
```

## Building

To build, run

```
npm install
npm run bundle
```
