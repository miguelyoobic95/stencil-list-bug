import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'child-component',
  styleUrl: 'child-component.css',
  shadow: true
})
export class ChildComponent {

  @Prop() first: string;
  @Prop() last: string;

  @Event() selected: EventEmitter;

  toggleFilterGroup(first: string) {
      this.selected.emit(first);
  }

  render() {
    return (
      <div onClick={this.toggleFilterGroup.bind(this, this.first)}>
        {this.first}
      </div>
    );
  }
}
