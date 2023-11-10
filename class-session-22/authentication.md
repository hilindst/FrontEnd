# Authentication

RESTful API representational State Transfer Architectural Apoplication Programming Interface is an architectural style and set of rules for working with an API in a specific way

JSON Web Token -JWT
 compact encrypted way for securely transmitting information

 
 auth component 

 auth service

 1) Login/Sign up Boolean button
 2) setting up auth path
 3) auth service injectable using firebase
   a) signup(email: string, password: string){
        return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
          email,
          password,
          returnSecureToken: true
        })
    }

    b) export interface AuthResponseData {
      whatever api returns
    }

    c) signIn
          return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
                email,
                password,
                returnSecureToken: true
              })

    d) handleAuth with expiresIn 
    e) signOut()

1) Auth ts 
   1) onAuthFormSubmit()
      1) const {email, password} = formObj.value;
      2) use authservice.signin. subscribe
      3) or authservice.signup. subscribe
   2) onSwitchAuthMode()
   

2) setup firebase email/password authentication
3) set up error messages always return to null
4) Create authObserv: Observable<AuthResponseData>; and replace into signup and sign in
   1) this.authObserv.subscribe()

5) create user.model.ts export
   1) constructor
   2) public get token(){
   
       }
6) Nav compoenet isAuthenticated taking currentUser from authservice
   1) *ngIf="isAuthenticated" on all elements that you shouldnt be accessible if not logged in
7) auth.guard.ts
   1) injectable
   2) implements CanActivate