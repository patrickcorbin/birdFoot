import { useEffect, useState } from "react";
import { Storage } from '@ionic/storage';

// const MYFAV_KEY = 'my-favs'

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

            const storedFavorites = await store.get('my-favs') || [];
            setFavs(storedFavorites);
        }
        initStorage();
    }, []);

    const addFav = async (id: FavoriteItem) => {
        setFavs(prevFavs => [...prevFavs, id]);
        store!.set('my-favs', favs);
    }

    return {
        favs,
        addFav
    }
}