export class PageMenu {
    Title: string;
    Component: any;
    IconName: string;

    constructor(title: string, component: any, iconName: string) {
        this.Title = title;
        this.Component = component;
        this.IconName = iconName;
    }
}