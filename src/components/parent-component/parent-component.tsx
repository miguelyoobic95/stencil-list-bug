import { Component, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'parent-component',
  styleUrl: 'parent-component.css',
  shadow: true
})
export class ParentComponent {

  @Prop() first: string;
  @Prop() last: string;

  @Event() selected: EventEmitter;
  
  @Listen('selected')
  handleSelected(event: CustomEvent) {
        this.selected.emit(event.detail);
  }

  render() {
    return (
      <div class="container">
          <child-component first={this.first}></child-component>
      </div>
    );
  }
}
