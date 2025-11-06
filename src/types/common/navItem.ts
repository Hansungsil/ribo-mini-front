export interface NavItem {
    type?: string;
    key: string;
    value: string;
    children?: NavItem[];
}