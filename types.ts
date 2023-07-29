export interface Billboard {
    id: string;
    label: string;
    imageUrl: string
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    isFeatured: boolean;
    size: Size;
    fragrance: Fragrance;
    images: Image[]
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}


export interface Fragrance {
    id: string;
    name: string;
    value: string;
}