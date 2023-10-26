# Angular Forms


## Template driven


dont forget #!!!
    <input
      type="text"
      id="title"
      name="title"
      class="form-control"
      #titleRef="ngModel"
      ngModel
      required>


      css
      form .ng-invalid.ng-touched {
        border: 1px solid red;
      }

can add default value
  <input...
    ngModel="default"
    >

  <div class="row">
    <h3>{{bookDetails.title}}</h3>
    <p>{{bookDetails.author}}</p>
    <p>{{bookDetails.genre}}</p>



    formSubmitted= false
    bookDetails={
      title:'',
      author:'',
      genre: '',
    }

    formSubmit(form: NgForm){
      this.formSubmitted = true;

      this.bookDetails.title = form.value.title;
      this.bookDetails.author = form.value.author;
      this.bookDetails.genre = form.value.genre;
      form.reset();
    }


## Reactive Forms

    reactiveForm = FromGroup

    ngOnInit {
      this.reactiveFrom = new FormGroup({
        title: new FormControl(null),
        author: new FormControl(null),
        genre: new FormControl('mystery'
        ),
      });
    }


    in html 
    <form (ngSubmit)>
        <input
          formControlName="genre">


  back in ts
      formSubmit(){
        console.log('Submitted!!, this.reactiveForm);
        this.formSubmitted= true;
      }
