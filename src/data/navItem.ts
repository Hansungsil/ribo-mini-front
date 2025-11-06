import { NavItem } from "@/types/common/navItem";

const postsNavItems: NavItem[] = [
    {
        type: 'posts',
        key: 'Posts1',
        value: 'posts1',
        children: [
            { key: 'Default', value: 'default' },
        ],
    },
    {
        type: 'posts',
        key: 'Posts2',
        value: 'posts2',
        children: []
    }
]


const layoutsNavItems: NavItem[] = [
    {
        type: 'layouts',
        key: 'Layouts1',
        value: 'layouts1',
        children: [
            { key: 'Default', value: 'default' },
        ],
    },
    {
        type: 'layouts',
        key: 'Layouts2',
        value: 'layout2',
        children: []
    }
]


const composNavItems: NavItem[] = [
    {
        type: 'compos',
        key: 'Checkbox',
        value: 'checkbox',
        children: [
            { key: 'Default', value: 'default' },
        ],
    },
    {
        type: 'compos',
        key: 'Slider',
        value: 'slider',
        children: [
            { key: 'Center', value: 'center' },
            { key: 'Left', value: 'left' },
            { key: 'Right', value: 'right' },
        ]
    }
]

export { postsNavItems, layoutsNavItems, composNavItems };