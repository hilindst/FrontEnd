## Directives
  how we give instructions to the DOM to control certain elements in Angular

### create your own directives!
  dropdown.directive.ts
    import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from "@angular/core";
    @Directive({
      selector: '[appDropdown]
    })
    export class DropdownDirective {
      constructor(private elementRef: ElementRef, private rederer: Renderer2){}

      @HostBinding('class.show') isOpen = false

      @HostListener('click') toggleOpen() {
        this.isOpen =!this.isOpen

        //Element to add class
        let dropdownList = this.elementRef.nativeElement.querySelector('.dropdown-menu');

        if(this.isOpen){
          this.renderer.addClass(dropdownList, 'show')
        } else {
          this.renderer.removeClass(dropdownList, 'show')
        }
      }
    }

need to be added to declarations in app.module

### Attribute Directives
  used to change the behavior or appearance of elements (ngClass, ngStyle, ngModel)

### Structural Directives
  change the DOM layout by adding, removing or altering elements (ngIf, ngFor, ngSwitch)


## Services
  centralized store where you can place code so multiple other components can use it

    import {Injectable} from @angular/core
    import {Book} from book.model.ts
    @Injectable({
      providedIn: 'root'
    })

    export class BookshelfService {
      bookListChanged = new EventEmitter<Book[]>();
      bookSelected = new EventEmitter<Book>();

      private myBooks: Book[] =[
        array examples
      ]
      constructor(){
      
      }    

      getBooks(){
        return this.myBooks.slice() //returns the list of array
      }

      saveBook(book: Book){
        this.myBooks.push(book);
        this.bookListChanged.emit(this.myBooks.slice());
      }

      removeBook(idx:number){
        if (idx !== -1){
          this.myBooks.splice(idx, 1);  //deletes specific book from array
          this.bookListChanged.emit(this.myBooks.slice());
        }
      }
    }

"*ngFor="let book of myBooks; let i = index"  creates that index when an item is added


ts that EMITs event --> ts that LISTEN/subscribe to event

    //sets initial value
    this.myBooks = this.bookshelfService.getBooks();

    //Keep up with the changes made
    this.bookshelfService.bookListChanged.subscribe((books)=>{
      this.myBooks = books;
    })


using a Service
  import {BookshelfService} from "./"
  constructor(private bookshelfService: BookshelfService){}

  ngOnInit(): void {
    this.bookshelfService.bookSelected.subscribe((book)=>{
      this.selectedBook = book;
    })
  }



## Dependency Injection
class uses code uses code from another class or service. "inject" the code from one part of your app into another

## D.R.Y. Code
  Don't Repeat Yourself- abstract away any logic you use in multiple components to a shared place

  DAMP-don't repeat yourself unless necessary


  ### side notes

  "mb-3" equals "margin bottom: 3"