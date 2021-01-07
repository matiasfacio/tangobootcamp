import * as React from 'react';

export type dataUser = {
    id: number,
    name: string;
    lastname: string
}
 
const useFetch = (): [dataUser[] | undefined]  => {
    const [data, setData] = React.useState<dataUser[]>()

    React.useEffect(()=> {
        fetch('http://localhost:5000/users/')
        .then(response => response.json())
        .then(dataJson => setData(dataJson))
        .catch(err => console.log(err))
    }, [])

    return [data]
}
 
export default useFetch;