export interface Post {
    _id: string;
    title: string;
    author: {
        name: string;
        image: string;
    },
    description: string;
    mainImage: string;
    slug: {
        current: string;
        _type: string;
    };
    body: [object];
    _createdAt: string;
}