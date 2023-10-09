# Angular

## Component

## Data-Binding

## View Encapsulation
Built in Angular feature where a component's CSS is locally scoped. Changing the paragraph styles inside a child component will not affect any sibling or parent components.

## Component Lifecycle
Lifecycle Hooks to run logic at specific points along the component lifecycle. Every component once instantiated, will run through a few phases; this is the "lifecycle" of the component.

### can only listen for eventemitters on selector where it's located so in this case attached to app-navigation

    @Output() currentPage = new EventEmitter<string>();
    collapsed = true;
    show = false

    onSelectPage(page: string){
      this.currentPage.emit(page);
    }


on app.component 
    pageDisplayed = 'bookshelf';
    onNavigatePage(page: string) {
      this.pageDisplayed = page;
     }

  html/
    <app-bookshelf *ngIf="pageDisplayed === 'bookshelf'"></app-bookshelf>
    <app-library *ngIf="pageDisplayed === 'library'"></app-library>


    ## Debugger
    can place instead of console.log will take you to place in code!