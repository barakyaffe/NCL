/**
 * Created by baraky on 1/25/2018.
 */

import {Transfrom} from 'ngx-carousel/src/ngx-carousel/ngx-carousel.interface';

export class NgxCarouselStore {
  type: string;
  deviceType: DeviceType;
  classText: string;
  items: number;
  load: number;
  deviceWidth: number;
  carouselWidth: number;
  itemWidth: number;
  visibleItems: ItemsControl;
  slideItems: number;
  itemWidthPer: number;
  itemLength: number;
  currentSlide: number;
  easing: string;
  speed: number;
  transform: Transfrom;
  loop: boolean;
  dexVal: number;
  touchTransform: number;
  touch: Touch;
  isEnd: boolean;
  isFirst: boolean;
  isLast: boolean;
}
export type DeviceType = 'xs' | 'sm' | 'md' | 'lg' | 'all';

export class ItemsControl {
  start: number;
  end: number;
}

export class Touch {
  active?: boolean;
  swipe: string;
  velocity: number;
}

export class NgxCarousel {
  grid: Transfrom;
  slide?: number;
  speed?: number;
  interval?: number;
  animation?: Animate;
  point?: Point;
  type?: string;
  load?: number;
  custom?: Custom;
  loop?: boolean;
  touch?: boolean;
  easing?: string;
}

export class Grid {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  all: number;
}

export interface Point {
  visible: boolean;
  pointStyles?: string;
}

export type Custom = 'banner';
export type Animate = 'lazy';
