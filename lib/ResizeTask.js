import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';
import inherits from 'inherits';


export default function ResizeTask(eventBus, taskResizingEnabled) {
  RuleProvider.call(this, eventBus);
  this.taskResizingEnabled=taskResizingEnabled || false;
}

inherits(ResizeTask, RuleProvider);

ResizeTask.$inject = [ 'eventBus', 'config.taskResizingEnabled' ];

ResizeTask.prototype.init = function() {
  var me=this;

  me.addRule('shape.resize', 1500, function(data) {
    if (me.taskResizingEnabled && data.shape.businessObject &&
        (data.shape.businessObject.$instanceOf('bpmn:Task') ||
         data.shape.businessObject.$instanceOf('bpmn:CallActivity') ||
         data.shape.businessObject.$instanceOf('bpmn:SubProcess'))) {
      if (data.newBounds) {
        data.newBounds.width=Math.max(100,data.newBounds.width);
        data.newBounds.height=Math.max(80,data.newBounds.height);
      }
      return true;
    } else if (me.taskResizingEnabled && data.shape.businessObject &&
         data.shape.businessObject.$instanceOf('bpmn:Event')) {
      if (data.newBounds) {
        data.newBounds.width=Math.max(36,data.newBounds.width);
        data.newBounds.height=Math.max(36,data.newBounds.height);
      }
      return true;
    }
  });
};
