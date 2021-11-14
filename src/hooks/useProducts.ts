import useSWR from 'swr';
export function useProduct<Data = any>(url: string){
  const {data, error} = useSWR<Data>(url, async url=>{    
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    return data;
  });
  return {data, error};
}