import { StaticImageData } from "next/image";

export interface MainItem {
  readonly to?: string;
  readonly href?: string;
  readonly title: string;
  readonly image: StaticImageData;
  readonly target?: string;
  readonly tooltip: string;
}
