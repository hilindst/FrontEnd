# Template Form

route params help you set up edit mode vs new book

!! is a bang bang operator turns variable into boolean

  image referring to previous input for name="coverImagePath"

    [src]="bookFormref.value['coverImagePath']"



    onResetForm(){
      this.router.navigate(['../'], {relativeTo: this.route});
    }


in html to push data

    [ngModel]="bookDetails.author"


    onSubmit(form: NgForm){
      const { title, author, genre, coverImagePath } = form.value;
    }

# Pipe

sorting pipe example


    transform(array: Book[], field: string): number | Book[]{
      array.sort((a: Book, b: Book) => {
        if (a[field] < b[field]) {
          return -1
        } else if (a[field] > b[field]){
          return 1
        } else {
          return 0; 
        }
      });
      return array;
    }

   
    <*ngFor="let book of mySavedBooks | sortBooks : sortField">

    sortField= 'author';
    sortSwitcher = false;

     onSort(){
      <!-- shorthand version this.sortField = this.sortField === 'author' ? 'title' : 'author'  -->

      this.sortSwitcher = !this.sortSwitcher
      if(this.sortSwitcher) {
        this.sortField = 'title'
      }else {
        this.sortField = 'author';
      }
     }

  <button (click)="onSort()"> Sort By {{ (this.sortField === "author"? "title" : "author") | titlecase }}</button>