import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';
import { is } from 'bpmn-js/lib/util/ModelUtil';
import inherits from 'inherits';


export default function ResizeTask(eventBus, taskResizingEnabled) {
  RuleProvider.call(this, eventBus);
  this.taskResizingEnabled=taskResizingEnabled || false;
}

inherits(ResizeTask, RuleProvider);

ResizeTask.$inject = [ 'eventBus', 'config.taskResizingEnabled' ];

ResizeTask.prototype.init = function() {
  var me=this;

  me.addRule('shape.resize', 1500, function(shape, newBounds) {
    if (me.taskResizingEnabled && is(shape, 'bpmn:Task')) {
      if (newBounds) {
        newBounds.width=Math.max(100,newBounds.width);
        newBounds.height=Math.max(80,newBounds.height);
      }
      return true;
    }
    return false;
  });
};
