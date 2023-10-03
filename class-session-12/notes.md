# Planning an App


## Feature-the big idea

## Component

## Model



export class NavigationComponent {
  collapsed = true;
}
html class
(click)="collapsed = !collapsed"

settings anchor tag
[attr.aria-expanded]='show'
(click)='show = !show'`
component.ts file
show = false;

add to class [class.show]="show"
ng new bookit --no-strict
no routing


ngFor allows you to loop through all items in an array dynamically
to show array in div
<div class="row mb-3" *ngFor = "let book of myBooks'>
<div class="col-12">
  <a href='#' class="list-group-item d-flex">
    <div class="d-flex flex-column">
    <h4 class="list-group-item-heading>{{book.title}}</h4>
    <p class="list-group-item-text mb-0">{{book.genry}}</p>

### Child component Creation
ng g c  parent/new component name --skip-tests(to skip that test file)


# Debugging

Project