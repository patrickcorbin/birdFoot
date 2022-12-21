import { useEffect, useState } from "react";
import { Storage } from '@ionic/storage';

const MYFAV_KEY = 'my-favs'

export interface FavoriteItem {
    id: string;
}

export function useStorage() {
    const [store, setStore] = useState<Storage>();
    const [favs, setFavs] = useState<FavoriteItem[]>([]);

    useEffect(() => {
        const initStorage = async () => {
            const newStore = new Storage({
                name: 'bfDB'
            });
            const store = await newStore.create();
            setStore(store);

            const storedFavorites = await store.get(MYFAV_KEY) || [];
            setFavs(storedFavorites);
        }
        initStorage();
    }, []);

    const addFav = async (id: FavoriteItem) => {
        const newFavs = [...favs, id]
        setFavs(prevFavs => [...prevFavs, id]);
        store!.set(MYFAV_KEY, newFavs);
        console.log(favs)
    }

    return {
        favs,
        addFav
    }
}