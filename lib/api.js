export const fetcher =async (url,option)=>{
let res = ''
    if (!option) {
        res = await fetch(url)
    }else{
        res = await fetch(url,option)
    }
    return await res.json()
}