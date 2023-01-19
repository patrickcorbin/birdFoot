import { useQuery, useQueryClient } from 'react-query';
import API from '../firebase-service';

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