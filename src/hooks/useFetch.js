import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const localCache = {}

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
         hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();

    },[url]);
    const setInLoading = () => {
        setState({
            data:null,
            loading:true,
            hasError:false,
            error:null
        });
    }
    const getFetch = async() => {
        setInLoading();
        if(localCache[url]){
            setState({
                data:localCache[url],
                loading:false,
                hasError:false,
                error:null
            });
            return;
        }
        const resp = await fetch(url)
        if(!resp.ok){
            setState({
                data:null,
                loading:false,
                hasError:true,
                error:resp.statusText
            });
            return;
        }
        const data = await resp.json();
        localCache[url] = data;
        setState({
            data,
            loading:false,
            hasError:false,
            error:null
        });
    }
    return {
        data:state.data,
        loading:state.loading,
        hasError:state.hasError,
    }
}

export {useFetch}
useFetch.prototype = {
    url:PropTypes.string.isRequired
}