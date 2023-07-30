import { Product } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products` ;

interface Query {
    categoryId?: string;
    fragranceId?: string;
    sizeId?: string;
    isFeatured?: boolean
}

const getProducts = async ( query: Query) : Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            fragranceId: query.fragranceId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })

    const res = await fetch(url);

    return res.json();
}

export default getProducts