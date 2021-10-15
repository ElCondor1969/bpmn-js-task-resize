import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';
import inherits from 'inherits';


export default function ResizeEvent(eventBus, eventResizingEnabled) {
  RuleProvider.call(this, eventBus);
  this.eventResizingEnabled = eventResizingEnabled || false;
}

inherits(ResizeEvent, RuleProvider);

ResizeEvent.$inject = ['eventBus', 'config.eventResizingEnabled'];

ResizeEvent.prototype.init = function () {
  var me = this;

  me.addRule('shape.resize', 1500, function (data) {
    if (me.eventResizingEnabled && data.shape.businessObject &&
      data.shape.businessObject.$instanceOf('bpmn:Event')) {
      if (data.newBounds) {
        data.newBounds.width = Math.max(36, data.newBounds.width);
        data.newBounds.height = Math.max(36, data.newBounds.height);
      } return true;
    }
  });
};