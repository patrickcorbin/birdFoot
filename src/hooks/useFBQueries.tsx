import { useQuery, useQueryClient } from 'react-query';
import API from '../firebase-service';

// Performance queries

export const usePerformance = (perfId: string) => {
    return useQuery(["performances", perfId], async () => {
        console.log("in query", perfId)
        return await API.loadPerf(perfId)
    })
}

export const usePerformances = () => {
    const client = useQueryClient()
    return useQuery(
        "performances",
        async () => {
            console.log('in query')
            let performances = await API.loadPerfData()

            // pre load cache
            performances.forEach((p: any) => {
                client.setQueryData(["performances", p.id], p)
            })

            return performances
        }
    )
}

// Artist queries

export const useArtist = (artistId: string) => {
    return useQuery(["artists", artistId], async () => {
        console.log("in query", artistId)
        return await API.loadArtist(artistId)
    })
}

export const useArtists = () => {
    const client = useQueryClient()
    return useQuery(
        "artists",
        async () => {
            console.log('in query')
            let artists = await API.loadArtistData()

            // pre load cache
            artists.forEach((p: any) => {
                client.setQueryData(["artists", p.id], p)
            })

            return artists
        }
    )
}

// Location queries

export const useLocation = (locationId: string) => {
    return useQuery(["locations", locationId], async () => {
        console.log("in query", locationId)
        return await API.loadLocation(locationId)
    })
}

export const useLocations = () => {
    const client = useQueryClient()
    return useQuery(
        "locations",
        async () => {
            console.log('in query')
            let locations = await API.loadLocationData()

            // pre load cache
            locations.forEach((p: any) => {
                client.setQueryData(["locations", p.id], p)
            })

            return locations
        }
    )
}