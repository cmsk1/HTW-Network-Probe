export class SideMenuEntry {
  name: string | undefined;
  icon: string | undefined;
  routerLink?: string;
  href?: string;
  func?: () => void;
}
