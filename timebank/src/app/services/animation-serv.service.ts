import { Injectable } from '@angular/core';
import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';

/* @Injectable({
  providedIn: 'root'
})
 */
export const onSideNavChange = trigger('onSideNavChange', [
    state('close',
      style({
        'min-width': '50px'
      })
    ),
    state('open',
      style({
        'min-width': '200px'
      })
    ),
    transition('close => open', animate('250ms ease-in')),
    transition('open => close', animate('250ms ease-in')),
  ]);
  


  export const onMainContentChange = trigger('onMainContentChange', [
    state('close',
      style({
        'margin-left': '3rem'
      })
    ),
    state('open',
      style({
        'margin-left': '12.5rem'
      })
    ),
    transition('close => open', animate('250ms ease-in')),
    transition('open => close', animate('250ms ease-in')),
  ]);
  

  export const animateText = trigger('animateText', [
    state('hide',
      style({
        'display': 'none',
        opacity: 0,
      })
    ),
    state('show',
      style({
        'display': 'block',
        opacity: 1,
      })
    ),
    transition('close => open', animate('350ms ease-in')),
    transition('open => close', animate('200ms ease-out')),
  ]);



