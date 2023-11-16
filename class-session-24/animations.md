# Animations

Import BrowserAnimationModule

@component
    animations: [
      trigger(
        'swoopin',
        [
          state(
            'in'
            style({
              transform: 'scale(1)',
              opacity: 1,
            })
          ),
          transition(':enter', [
            animate(
              '1s',
              keyfames([
                style({
                  transform: 'scale(0)',
                  opacity: 0,
                  offset: 0, 
                }),
                style({
                  transform: 'scale(0.3)',
                  opacity: 0.3,
                  offset: 0.2, 
                }),
                style({
                  transform: 'scale(0.6)',
                  opacity: 0.6,
                  offset: 0.4, 
                }),
                style({
                  transform: 'scale(0.9)',
                  opacity: 0.9,
                  offset: 0.8, 
                }),
                style({
                  transform: 'scale(1)',
                  opacity: 1,
                  offset: 1, 
                }),
              ])
            )
          ])
        ]
      )
    ]


in html   attach to element [@swoopIn]


Or import angular materials! weeee
