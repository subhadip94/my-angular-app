import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
value: any = '';
name: string | null = '';
show: boolean = false;
error: boolean = false;

onEnter(value: string) {
  this.value = value;
  if (this.value.length > 3) {
    this.show = true;
    this.error = false;
  } else {
    this.show = false;
    this.error = true;
  }
}
onChange(e: Event) {
  this.name = (<HTMLInputElement>e.target).value;
  console.log((<HTMLInputElement>e.target).value)
}
}
