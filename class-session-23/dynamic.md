# Dynamic Components
whose location isn't defined at buildtime but are loaded programmatically through code


making a Dynamic alert component
alert component.ts
    @Input() alertMsg: string;
    @Output() closeModal = new EventEmitter<void>();

    onCloseModal(){
      this.closeModal.emit();
    }
    
    <div type="button" (click)="onCloseModal()">
css backdrop and alert-box
  z-index
  background opacity

library-page.ts
    private selectedBookSub: Subscription;  
    alert: string;

    constructor(private libaryService: libraryService, )

    ngOnIt(): void {
      this.selectedBookSub = this.libraryService.addBookNotification().subscribe((book: Book)=> {
        this.alert =`Successfully added book: ${book.title} by ${book.author} to personal bookshelf!`;
      }
      setTimeout(() => this.handleCloseModal(), 4000)
      );
    }

    handleCloseModal(){
      this.alert = null;
    }

    ngOnDestroy(): void {
      this.selectedBookSub.unsubscribe();
    }

    in library-page html
      <app-alert [alertMsg]="alert" *ngIf="alert" (closeModal)="handleCloseModal()"></app-alert>