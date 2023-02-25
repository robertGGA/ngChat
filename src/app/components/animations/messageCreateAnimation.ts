import {animate, state, style, transition, trigger} from "@angular/animations";

export const messageCreateAnimation = trigger('messageCreateAnimation', [
  state('void', style({})),
  transition('void => *', [
    style({opacity: 0}),
    animate('500ms', style({opacity: 1})),
  ]),
])


export const sideBarAnimation = trigger('slideInOut', [
  state('in', style({
    width: '80px',
  })),
  state('out', style({
    width: '260px',
  })),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out'))
]);

export const linkAnimations =  trigger(
  'inOutAnimation',
  [
    transition(
      ':enter',
      [
        style({opacity: 0 }),
        animate('1s ease-out',
          style({opacity: 1 }))
      ]
    ),
    transition(
      ':leave',
      [
        style({opacity: 1 }),
        animate('1s ease-in',
          style({opacity: 0 }))
      ]
    )
  ]
)

