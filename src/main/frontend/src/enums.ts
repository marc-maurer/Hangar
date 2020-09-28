export class Category {
    id: string;
    name: string;
    icon: string;

    constructor(id: string, name: string, icon: string) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    static get values(): Array<Category> {
        return [
            new Category('admin_tools', 'Admin Tools', 'server'),
            new Category('chat', 'Chat', 'comment'),
            new Category('dev_tools', 'Developer Tools', 'wrench'),
            new Category('economy', 'Economy', 'money-bill-alt'),
            new Category('gameplay', 'Gameplay', 'puzzle-piece'),
            new Category('games', 'Games', 'gamepad'),
            new Category('protection', 'Protection', 'lock'),
            new Category('role_playing', 'Role Playing', 'magic'),
            new Category('world_management', 'World Management', 'globe'),
            new Category('misc', 'Miscellaneous', 'asterisk')
        ];
    }

    static fromId(id: string): Category {
        return this.values.filter(category => category.id === id)[0];
    }
}

export class Platform {
    static get values() {
        return [
            {
                id: 'Paper',
                name: 'Paper Plugins',
                parent: true,
                color: { background: '#F7Cf0D', foreground: '#333333' }
            },
            {
                id: 'Waterfall',
                name: 'Waterfall Plugins',
                parent: true,
                color: { background: '#F7Cf0D', foreground: '#333333' }
            },
            {
                id: 'Velocity',
                name: 'Velocity Plugins',
                parent: true,
                color: { background: '#039be5', foreground: '#333333' }
            }
        ];
    }

    static get keys() {
        return this.values.map(platform => platform.id);
    }

    static isPlatformTag(tag: any) {
        return this.keys.includes(tag.name);
    }
}

export const SortOptions = [
    { id: 'stars', name: 'Most Stars' },
    { id: 'downloads', name: 'Most Downloads' },
    { id: 'views', name: 'Most Views' },
    { id: 'newest', name: 'Newest' },
    { id: 'updated', name: 'Recently updated' },
    { id: 'only_relevance', name: 'Only relevance' },
    { id: 'recent_views', name: 'Recent Views' },
    { id: 'recent_downloads', name: 'Recent Downloads' }
];

export class Visibility {
    name: string;
    class: string;

    constructor(name: string, clazz: string) {
        this.name = name;
        this.class = clazz;
    }

    static get values(): Array<Visibility> {
        return [
            new Visibility('public', ''),
            new Visibility('new', 'project-new'),
            new Visibility('needsChanges', 'striped project-needsChanges'),
            new Visibility('needsApproval', 'striped project-needsChanges'),
            new Visibility('softDelete', 'striped project-hidden')
        ];
    }

    static fromName(name: string): Visibility {
        return this.values.filter(visibility => visibility.name === name)[0];
    }
}
