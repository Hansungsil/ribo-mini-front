import { NavItem } from "@/types/common/navItem";

const postsNavItems: NavItem[] = [
    {
        key: 'Posts1',
        value: 'posts',
        children: [
            { key: 'Default', value: 'default' },
        ],
    },
    {
        key: 'Posts2',
        value: 'posts',
        children: []
    }
]


const layoutsNavItems: NavItem[] = [
    {
        key: 'Layouts1',
        value: 'layouts',
        children: [
            { key: 'Default', value: 'default' },
        ],
    },
    {
        key: 'Layouts2',
        value: 'layouts',
        children: []
    }
]


const composNavItems: NavItem[] = [
    {
        key: 'Checkbox',
        value: 'compos',
        children: [
            { key: 'Default', value: 'default' },
        ],
    },
    {
        key: 'Slider',
        value: 'compos',
        children: [
            { key: 'Center', value: 'center' },
            { key: 'Left', value: 'left' },
            { key: 'Right', value: 'right' },
        ]
    }
]

export { postsNavItems, layoutsNavItems, composNavItems };