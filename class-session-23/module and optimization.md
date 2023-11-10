# Modules and Optimization
Option to async load modules for optimization

so moving all shared componenets into shared.module.ts
    @NgModule({
      declarations: [
        AlertComponent,
        BookComponent,
        Notification,
      ],
      imports: [
        CommonModule
      ]
      exports: [
        AlertComponent,
        Notification,
        BookComponent
      ]
    })

and then this module can be imported into another
Don't list component in more than one module!----------------------