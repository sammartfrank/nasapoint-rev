import { httpGet } from './../utils/apiClient';

import { useQuery } from "@tanstack/react-query"


const fetchApod = async () => httpGet('/apod')

export const useApod = () => {
    const { data, isLoading, isError } = useQuery(['apod'], fetchApod)
    console.log('🚀 ~ data', data);
    return { data, isLoading, isError }
}
